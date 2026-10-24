# Correspondance maquettes ↔ pages

> Document produit en application de la section 17.5 du `CLAUDE.md`. Détail de l'analyse : `docs/ANALYSE_MAQUETTES.md`.
> Implémentation : Astro, routage par fichiers dans `src/pages/`. Contrôle visuel : `docs/CONTROLE_VISUEL.md`.

| Image | Page | Sections principales | Composants partagés | Éléments interactifs |
|---|---|---|---|---|
| `ACCUEIL_NEW.png` (remplace `ACCUEIL.png` depuis le 11/10/2026) | **Accueil** (haut) — `src/pages/index.astro` | Hero photo plein écran + panneau translucide (titre, accroche, sous-titre, 2 CTA) | `Header`, `Divider` (rameau + filets), `Button` | Menu ; « Découvrez notre accompagnement » → `/notre-accompagnement` ; « Échanger sur votre projet » → `/contact` |
| `ACCUEIL 2.png` | **Accueil** (suite) — même fichier `src/pages/index.astro` | « Bienvenue chez Maison CLOVALI » ; bandeau « Vous êtes propriétaire ? » (photo + texte) ; « Ils nous font confiance » | `Testimonials`, `Button` (contour clair) | « Échanger sur votre projet » → `/contact` |
| `Page _A PROPOS.png` | **À propos** — `src/pages/a-propos.astro` | Portrait + présentation de la fondatrice ; bouton « Échanger sur votre projet » + citation (bouton « Découvrir notre territoire » supprimé le 11/10/2026) ; section « Notre territoire » (`#notre-territoire`) ; « Ils nous font confiance » en bas de page (déplacé le 11/10/2026) | `Header`, `Button`, `Testimonials` | « Échanger sur votre projet » → `/contact` |
| `Page _NOS ENGAGEMENTS.png` | **Nos engagements** — `src/pages/nos-engagements.astro` | Titre + photo fondue ; 5 engagements ; encart CTA ; rangée de 4 valeurs avec pictogrammes | `Header`, `Button` | « Contactez-nous » → `/contact` |
| `Page _NOTRE ACCOMPAGNEMENT.png` | **Notre accompagnement** — `src/pages/notre-accompagnement.astro` (hors menu) | Intro + photo ; frise de 5 étapes ; CTA | `Header`, `Divider`, `Button` | « Découvrir nos formules » → `/formules-et-tarifs` |
| `Page _FORMULES & TARIFS.png` | **Formules & tarifs** — `src/pages/formules-et-tarifs.astro` | En-tête de page + CTA ; groupe Locations saisonnières (Essentiel, Confort) ; groupe Intendance (Intendance annuelle) | `Header`, `Divider`, `Button`, `PricingCard`, fond photo voilé | « Contactez-nous » → `/contact` |
| `Page _NOTRE TERRITOIRE.png` | **Notre territoire** — section `#notre-territoire` de `src/pages/a-propos.astro` (page fusionnée le 11/10/2026 à la demande de la cliente) | Hero titre + photo fondue ; texte secteur ; carte illustrée ; liste des communes ; CTA | `Header`, `Divider`, `Button` | « Contactez-nous » → `/contact` |
| `update_du_24_10/Page _LE BLOG.png` (24/10/2026) | **Blog** — `src/pages/blog/index.astro` | Bandeau « Le blog » + photo d'olivier ; liste des articles (vignette, titre, extrait, « Lire l'article ») ; « Revenir à la page d'accueil » ; encart contact | `Header`, `Divider`, `Button`, `BlogCta` | Liens vers les articles ; « Contactez-nous » → `/contact` |
| `update_du_24_10/Page _ARTICLE BLOG-2.png` et `Page_ARTICLE BLOG_1.png` (24/10/2026) | **Articles** — `src/pages/blog/[slug].astro`, contenus dans `src/data/blog.ts` (`/blog/reussir-sa-location-saisonniere/`, `/blog/avantages-conciergerie-proprietaires/`) | Titre, séparateur, chapeau + photo ; introduction ; sections numérotées sur 2 colonnes ; encart contact | `Header`, `Sprig`, `BlogCta` | « Contactez-nous » → `/contact` |
| `Page _CONTACT.png` | **Contact** — `src/pages/contact.astro` | En-tête « Parlons de votre projet » ; carte coordonnées ; formulaire | `Header`, `Divider`, `Button`, fond photo voilé | Formulaire (validation, envoi, confirmation) ; lien `tel:` ; lien `mailto:` |

## Pages sans maquette (décisions de la cliente du 10/10/2026)

| Entrée | Décision | Implémentation |
|---|---|---|
| Menu (11/10/2026) | 7 entrées : Accueil · À propos · Notre accompagnement · Nos engagements · Formules & tarifs · Blog · Contact (« Votre projet » retiré à la demande de la cliente) | `src/data/site.ts` |
| Mentions légales & confidentialité | Obligatoires (formulaire = données personnelles) | `src/pages/mentions-legales.astro` (lien en pied de page) |
| Confirmation d'envoi / 404 | Nécessité fonctionnelle | `src/pages/merci.astro`, `src/pages/404.astro` |

## Composants partagés

| Composant | Rôle |
|---|---|
| `layouts/BaseLayout.astro` | `<head>` SEO (title, description, canonical, Open Graph), en-tête, pied de page |
| `Header.astro` / `Logo.astro` | Logo, navigation, état actif, menu burger (< 1248 px) |
| `Footer.astro` | Pied de page (absent des maquettes) |
| `Divider.astro` / `Sprig.astro` | Rameau d'olivier seul ou entre deux filets — picto « Feuille vert olive 1 » fourni le 24/10/2026 (`feuille-olive.webp`, et `feuille-olive-verticale.webp` pour l'encart du blog) |
| `Button.astro` | 7 variantes de boutons relevées sur les maquettes |
| `BlogCta.astro` | Encart « Vous souhaitez louer votre propriété… » (blog et articles) |
| `Testimonials.astro` | « Ils nous font confiance » (Accueil, À propos) |
| `PricingCard.astro` | Cartes Essentiel / Confort / Intendance |
| `ContactForm.astro` | Formulaire, envoyé au service Web3Forms (clé dans `src/data/site.ts`) |
| `Icon.astro` | Pictogrammes SVG |

## Bilan

- **8 images → 7 pages distinctes** : les deux images « ACCUEIL » sont le haut et la suite de la même page d'accueil (confirmé par la cliente).
- 12 pages générées : les 7 pages maquettées + Blog et 2 articles (maquettes du 24/10/2026), Mentions légales, Merci, 404.

## Mise à jour du 24/10/2026 (`references/update_du_24_10/`)

Consignes du document « Modifications pages site internet MC.docx » appliquées :

| Page | Consigne | Réalisation |
|---|---|---|
| Toutes | Remplacer les pictos feuille par « Feuille vert olive 1 » | `Sprig.astro` utilise désormais l'image fournie (séparateurs, cartes tarifs, étapes, contact, pied de page). Sur les étapes de Notre accompagnement (fond sauge), le picto est assombri pour rester visible. |
| Accueil | « bienveillance » → « transparence » | `index.astro` |
| À propos | « nos » → « mes » ; centrer « Échanger sur votre projet » | Bouton centré sous le portrait (même grille que la photo) |
| À propos › Notre territoire | Cible : `Page _NOTRE TERRITOIRE (2).png` | Séparateur déplacé sous le sous-titre ; pointillé bas supprimé ; 2ᵉ séparateur remplacé par un filet ; écart réduit avant « Vous ne trouvez pas… » ; bloc communes calé à droite ; carte agrandie (jusqu'à 600 px sur grand écran) |
| Nos engagements | « et leur partageons » → « qui partagent » | `nos-engagements.astro` |
| Formules & tarifs | Phrase « Trouvez la formule… » plus visible ; supprimer « Premie » | Graisse semi-grasse, taille augmentée (fond laissé transparent) ; mention tarifaire nettoyée |
| Contact | « recontactée ou recontacté au sujet de ma demande » → « contacté » | `ContactForm.astro` |
| Blog | Nouvelles maquettes | Page liste + 2 articles (voir tableau ci-dessus) |
