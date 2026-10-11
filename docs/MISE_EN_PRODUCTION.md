# Avant la mise en production

## Commandes

```bash
npm install          # installation
npm run dev          # développement : http://localhost:4321
npm run build        # génération du site statique dans dist/
npm run preview      # prévisualisation du build
```

Le site est généré en statique dans `dist/`, plus un script PHP pour le formulaire. Il est prévu pour l'**hébergement web OVH** (Apache + PHP).

> En local (`npm run dev` / `npm run preview`), le PHP n'est pas exécuté : le formulaire affiche un message d'erreur. C'est normal. Il fonctionne une fois en ligne chez OVH.

## Mise en ligne chez OVH

1. `npm run build`.
2. Se connecter en FTP/SFTP à l'hébergement (identifiants : espace client OVH > Hébergements > FTP-SSH), par exemple avec FileZilla.
3. Envoyer **tout le contenu** du dossier `dist/` dans le dossier `www/` de l'hébergement, **y compris le fichier caché `.htaccess`** (dans FileZilla : Serveur > Forcer l'affichage des fichiers cachés).
4. Dans l'espace client OVH :
   - vérifier que la version de PHP est **8.x** (Hébergements > Informations générales) ;
   - activer le certificat **SSL** (Multisite), puis décommenter la redirection HTTPS dans `public/.htaccess` et renvoyer le fichier.
5. Envoyer un message de test depuis `/contact/` et vérifier la réception.

À chaque modification du site : relancer `npm run build` et renvoyer le contenu de `dist/`.

## À configurer

### 1. Formulaire de contact (script PHP, sans service externe)

Le formulaire envoie les demandes au script `api/contact.php`, qui les transmet par e-mail grâce à la messagerie de l'hébergement OVH.

- **Configuration** : en tête de `public/api/contact.php` :
  - `DESTINATAIRE` : adresse qui reçoit les demandes (contact@maisonclovali.fr) ;
  - `EXPEDITEUR` : doit être **une adresse du domaine hébergé chez OVH** (contact@maisonclovali.fr). Avec une adresse Gmail ou autre, OVH bloque l'envoi ou le message arrive en spam ;
  - `ENVOIS_MAX_PAR_HEURE` : limite anti-abus par visiteur (5 par défaut).
- Le bouton « Répondre » de votre messagerie répond directement au visiteur (en-tête `Reply-To`).
- Protections intégrées : vérification des champs côté serveur, champ piège anti-robots, blocage des tentatives d'injection, limite d'envois.
- Si les messages n'arrivent pas : vérifier le dossier spam, puis l'état des envois dans l'espace client OVH (Hébergements > E-mails / Scripts e-mail). OVH peut suspendre les envois en cas de volume anormal.

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
