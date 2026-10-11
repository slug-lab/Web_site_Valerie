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
4. Activer le certificat **SSL** (Let's Encrypt) du domaine dans le Manager, puis décommenter la redirection HTTPS dans `public/.htaccess` et renvoyer le fichier.
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

| Fichier / emplacement | Usage | Format conseillé |
|---|---|---|
| `hero-accueil.webp` | Fond de la page Contact + image de partage | 1920 × 1080, WebP |
| `proprietaire.webp` | Bandeau « Vous êtes propriétaire ? » | 1200 × 900 |
| Logo haute résolution (SVG idéalement) | Remplacer `public/images/logo-maison-clovali.png` et sa variante `-clair` (le fichier actuel ne fait que 289 × 60 px) | SVG ou PNG ≥ 600 px de large |
Déjà fournis par la cliente (le 11/10/2026) : photo de l'accueil, portrait, carte, bandeau du territoire, fond des tarifs, bandeau du blog, photo des engagements (voir `docs/CREDITS_PHOTOS.md`). Restent temporaires (Wikimedia Commons) : `hero-accueil.webp`, `proprietaire.webp` : **à remplacer avant la mise en ligne**.

### 4. Contenus à compléter

- **Avis clients (bloquant)** : `src/components/Testimonials.astro` contient 1 témoignage réel (Marie C., transmis le 11/10/2026) et 2 **avis d’exemple rédigés pour la mise en page** (marqués `example: true`, pas de vrais clients). Les remplacer par des avis réels, avec l’accord écrit de leurs auteurs, ou retirer la section **avant la mise en ligne** : publier de faux avis est une pratique commerciale trompeuse (Code de la consommation, art. L121-4).
- **Mention tarifaire** de la formule Intendance : texte tronqué (« … Premie ») dans `src/pages/formules-et-tarifs.astro`.
- **Mentions légales** : forme juridique, adresse, SIRET, durée de conservation des données (`src/pages/mentions-legales.astro`, champs entre crochets).
- **Blog** : ajouter les articles dans `src/pages/blog.astro` (tableau `posts`), ou demander la mise en place d'articles en Markdown.
- **Code postal** utilisé dans les données structurées (13650, Meyrargues) : à vérifier dans `src/pages/index.astro`.

### 5. Vérifications finales

- Valider la teinte des bandeaux sauge (contraste, cf. `docs/CONTROLE_VISUEL.md` § 5).
- Déclarer le site dans Google Search Console et soumettre `sitemap-index.xml`.
- Créer une fiche Google Business Profile (référencement local).
