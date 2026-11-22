# Avant la mise en production

## Commandes

```bash
npm install          # installation
npm run dev          # développement : http://localhost:4321
npm run build        # génération du site statique dans dist/
npm run preview      # prévisualisation du build
```

Le site est entièrement statique (`dist/`) ; le formulaire passe par le service Web3Forms (aucun script côté serveur). Hébergement prévu : **Infomaniak** (hébergement web Apache, qui lit le fichier `.htaccess`).

## Mise en ligne chez Infomaniak

1. `npm run build`.
2. Se connecter en FTP/SFTP à l'hébergement (identifiants dans le Manager Infomaniak, rubrique de l'hébergement web), par exemple avec FileZilla.
3. Envoyer **tout le contenu** du dossier `dist/` dans le dossier racine du site, **y compris le fichier caché `.htaccess`** (dans FileZilla : Serveur > Forcer l'affichage des fichiers cachés).
4. Activer le certificat **SSL** (Let's Encrypt) du domaine dans le Manager. Une fois `https://www.maisonclovali.fr` fonctionnel, dans `public/.htaccess` : décommenter les 3 redirections de la section « HTTPS et www » (http → https, sans www → www, ajout du / final), rebuild et renvoyer le fichier. Après quelques jours sans problème, activer aussi la ligne `Strict-Transport-Security` (HSTS).
5. Envoyer un message de test depuis `/contact/` et vérifier la réception.

> Les libellés exacts du Manager Infomaniak sont à vérifier lors de la première mise en ligne.

À chaque modification du site : relancer `npm run build` et renvoyer le contenu de `dist/`.

## À configurer

### 1. Formulaire de contact (Web3Forms)

Le formulaire envoie les demandes au service [Web3Forms](https://web3forms.com), qui les transmet par e-mail. Offre gratuite : **250 envois par mois**. Aucun script ne tourne sur l'hébergement.

- **Clé d'accès (bloquant)** : créer la clé sur web3forms.com avec l'adresse **contact@maisonclovali.fr** (la clé est envoyée par e-mail), puis la coller dans `src/data/site.ts` (`web3formsKey`, actuellement `A_REMPLACER_PAR_LA_CLE_WEB3FORMS`) et relancer le build. Sans clé valide, l'envoi échoue et le visiteur voit un message d'erreur.
- La clé est **publique par conception** (visible dans le code HTML) : elle permet seulement d'envoyer des messages vers l'adresse associée.
- Les demandes arrivent à l'adresse associée à la clé ; le bouton « Répondre » répond directement au visiteur (champ `email`).
- Protections : validation dans le navigateur, case piège anti-robots `botcheck`, filtrage anti-spam de Web3Forms. Option : activer hCaptcha (gratuit chez Web3Forms) en cas de spam.
- Sans JavaScript, le formulaire est envoyé normalement et Web3Forms redirige vers `/merci/` (URL construite à partir du domaine de `astro.config.mjs`).
- Si les messages n'arrivent pas : vérifier le dossier spam, puis le tableau de bord Web3Forms (quota mensuel, clé).
- RGPD : Web3Forms est mentionné comme sous-traitant dans les mentions légales (section Données personnelles).

### 2. Domaine

Remplacer `https://www.maisonclovali.fr` s'il diffère, dans `astro.config.mjs` (`site`) et `public/robots.txt`.

### 3. Visuels à fournir (remplacer dans `public/images/`, mêmes noms de fichiers)

| Fichier / emplacement | Usage | Pourquoi |
|---|---|---|
| Logo en **SVG** (ou PNG ≥ 600 px de large) | En-tête et pied de page (`logo-maison-clovali.png` et sa variante `-clair`) | Le fichier actuel ne fait que 289 × 60 px. Le « Logo MC SVG.png » du 22/11 est un PNG de 101 × 65 px. |
| `blog-conciergerie.webp` | Article « Faire appel à une conciergerie… » | Recadrage de maquette de 320 × 153 px, flou sur écran haute densité |
| `accueil-mas.webp` (766 × 691), `proprietaire.webp` (446 × 234), `contact-porte.webp` (312 × 661) | Accueil, Contact | Utilisables, mais un peu justes sur écran haute densité : originaux HD souhaités |
| Pictogrammes en SVG (facultatif) | Atouts, valeurs, feuille | Fournis en PNG de 46 à 83 px |

### 4. Contenus à compléter

- **Avis clients (bloquant)** : `src/components/Testimonials.astro` contient 1 témoignage réel (Marie C., transmis le 11/10/2026) et 2 **avis de test rédigés pour la mise en page** (marqués `example: true`, ce ne sont pas de vrais clients). Ils sont conservés à la demande de la cliente (22/11/2026) pour visualiser la section. Ils doivent être remplacés par des avis réels, avec l'accord écrit de leurs auteurs, ou retirés **avant la mise en ligne** : publier de faux avis est une pratique commerciale trompeuse (Code de la consommation, art. L121-4).
- **Mentions légales** : forme juridique, adresse, SIRET, durée de conservation des données (`src/pages/mentions-legales.astro`, champs entre crochets).
- **Blog** : 3 articles en ligne. L'article « Location saisonnière : les obligations essentielles des propriétaires » (22/11/2026) contient des affirmations juridiques et fiscales datées (loi Le Meur, déclaration obligatoire depuis le 20 mai 2026, revenus 2026…). Elles sont reprises telles quelles du PDF de la cliente, qui doit les **faire vérifier et les tenir à jour** (la charte précise qu'elles ne sont pas certifiées). Pour ajouter un article, compléter `src/data/blog.ts` : la page `/blog/<slug>/` est générée automatiquement.
- **Code postal** utilisé dans les données structurées (13650, Meyrargues) : à vérifier dans `src/pages/index.astro`.

### 5. Vérifications finales

- **Contraste** : la palette validée par la charte du 22/11 donne un texte blanc peu contrasté sur le vert sauge `#9FA798` (≈ 2,5:1 : bloc « Vous êtes propriétaire ? », panneau Contact, encadré des communes, titres des prestations) et sur le beige `#C0A380` (≈ 2,4:1 : prix, pastilles numérotées). Le seuil WCAG AA est de 4,5:1 (3:1 pour les grands textes). Reproduit à l'identique de la maquette ; si la cliente le souhaite, foncer légèrement ces deux teintes pour les textes.
- **Redirections** : `.htaccess` redirige les anciennes adresses `/formules-et-tarifs/` → `/prestations-et-tarifs/` et `/nos-engagements/` → `/notre-accompagnement/#engagements` (301).
- Déclarer le site dans Google Search Console et soumettre `sitemap-index.xml`.
- Créer une fiche Google Business Profile (référencement local).
