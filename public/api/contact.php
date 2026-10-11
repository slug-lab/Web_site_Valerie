<?php
/**
 * Maison Clovali — envoi du formulaire de contact.
 *
 * Exécuté par l'hébergement web OVH : le message part avec la fonction mail() de PHP,
 * sans service externe. Compatible PHP 7.4 et plus.
 *
 * Réponse JSON si la requête vient du JavaScript de la page (en-tête Accept: application/json),
 * sinon redirection vers /merci/ ou page d'erreur simple (navigateur sans JavaScript).
 */

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
// Adresse qui reçoit les demandes.
const DESTINATAIRE = 'contact@maisonclovali.fr';
// Expéditeur technique : doit être une adresse du domaine hébergé chez OVH,
// sinon les messages sont bloqués ou classés en spam.
const EXPEDITEUR = 'contact@maisonclovali.fr';
const NOM_EXPEDITEUR = 'Site Maison Clovali';
// Limite anti-abus : nombre d'envois autorisés par adresse IP et par heure.
const ENVOIS_MAX_PAR_HEURE = 5;

const PROJETS = ['La location saisonnière', 'L’intendance de ma propriété', 'Les deux', 'Autre'];

// ---------------------------------------------------------------------------

date_default_timezone_set('Europe/Paris');
header('X-Content-Type-Options: nosniff');

$accept = isset($_SERVER['HTTP_ACCEPT']) ? $_SERVER['HTTP_ACCEPT'] : '';
$json = strpos($accept, 'application/json') !== false;

function repondre(bool $json, int $code, bool $ok, string $message): void
{
    http_response_code($code);
    if ($json) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['success' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
    } elseif ($ok) {
        header('Location: /merci/', true, 303);
    } else {
        header('Content-Type: text/html; charset=utf-8');
        $texte = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
        echo '<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
            . '<title>Envoi impossible | Maison Clovali</title><meta name="robots" content="noindex">'
            . '<body style="font-family:sans-serif;background:#f6f3ee;color:#3f3f3f;max-width:40rem;margin:4rem auto;padding:0 1rem">'
            . '<h1 style="color:#5a5a47">Votre message n’a pas pu être envoyé</h1><p>' . $texte . '</p>'
            . '<p><a href="/contact/" style="color:#5a5a47">Retour au formulaire</a></p></body></html>';
    }
    exit;
}

function champ(string $nom, int $max): string
{
    $valeur = isset($_POST[$nom]) && is_string($_POST[$nom]) ? trim($_POST[$nom]) : '';
    return mb_substr($valeur, 0, $max, 'UTF-8');
}

/** Retire les retours à la ligne pour empêcher l'injection d'en-têtes. */
function ligne(string $valeur): string
{
    return trim(preg_replace('/[\r\n\t]+/', ' ', $valeur));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    repondre($json, 405, false, 'Méthode non autorisée.');
}

// Champ piège : rempli uniquement par les robots. On simule un succès sans rien envoyer.
if (champ('site_web', 200) !== '') {
    repondre($json, 200, true, 'Message envoyé.');
}

$nom = ligne(champ('nom', 100));
$prenom = ligne(champ('prenom', 100));
$telephone = ligne(champ('telephone', 30));
$email = ligne(champ('email', 200));
$projet = ligne(champ('projet', 100));
$message = champ('message', 5000);
$consentement = champ('consentement', 10);

$erreurs = [];
if ($nom === '') $erreurs[] = 'le nom';
if ($prenom === '') $erreurs[] = 'le prénom';
if (!preg_match('/^[0-9+().\s\-]{10,30}$/', $telephone)) $erreurs[] = 'un numéro de téléphone valide';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $erreurs[] = 'une adresse e-mail valide';
if (!in_array($projet, PROJETS, true)) $erreurs[] = 'le type de projet';
if (trim($message) === '') $erreurs[] = 'votre message';
if ($consentement !== 'oui') $erreurs[] = 'votre accord pour le traitement de vos données';

if ($erreurs) {
    repondre($json, 422, false, 'Merci de renseigner ' . implode(', ', $erreurs) . '.');
}

// Limitation du nombre d'envois par adresse IP (fichier temporaire sur l'hébergement).
$ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'inconnue';
$fichier = rtrim(sys_get_temp_dir(), '/') . '/clovali_contact_' . sha1($ip);
$maintenant = time();
$envois = [];
if (is_readable($fichier)) {
    $envois = array_filter(
        array_map('intval', explode(',', (string) file_get_contents($fichier))),
        function ($t) use ($maintenant) { return $t > $maintenant - 3600; }
    );
}
if (count($envois) >= ENVOIS_MAX_PAR_HEURE) {
    repondre($json, 429, false, 'Trop de messages envoyés. Merci de réessayer plus tard ou de nous appeler.');
}

$sujet = 'Nouvelle demande : ' . $prenom . ' ' . $nom . ' (' . $projet . ')';
$corps = "Nouvelle demande reçue depuis le formulaire du site.\n\n"
    . "Nom : $nom\n"
    . "Prénom : $prenom\n"
    . "Téléphone : $telephone\n"
    . "E-mail : $email\n"
    . "Projet : $projet\n\n"
    . "Message :\n" . str_replace("\r\n", "\n", $message) . "\n\n"
    . "---\nConsentement au traitement des données : oui\n"
    . 'Envoyé le ' . date('d/m/Y à H:i') . "\n";

$entetes = [
    'From: =?UTF-8?B?' . base64_encode(NOM_EXPEDITEUR) . '?= <' . EXPEDITEUR . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

$envoye = mail(
    DESTINATAIRE,
    '=?UTF-8?B?' . base64_encode($sujet) . '?=',
    $corps,
    implode("\r\n", $entetes),
    '-f' . EXPEDITEUR
);

if (!$envoye) {
    repondre($json, 500, false, 'Une erreur technique est survenue. Merci de nous écrire à ' . DESTINATAIRE . '.');
}

$envois[] = $maintenant;
@file_put_contents($fichier, implode(',', $envois), LOCK_EX);

repondre($json, 200, true, 'Message envoyé.');
