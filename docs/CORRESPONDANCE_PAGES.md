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
| `Page _CONTACT.png` | **Contact** — `src/pages/contact.astro` | En-tête « Parlons de votre projet » ; carte coordonnées ; formulaire | `Header`, `Divider`, `Button`, fond photo voilé | Formulaire (validation, envoi, confirmation) ; lien `tel:` ; lien `mailto:` |

## Pages sans maquette (décisions de la cliente du 10/10/2026)

| Entrée | Décision | Implémentation |
|---|---|---|
| Menu (11/10/2026) | 7 entrées : Accueil · À propos · Notre accompagnement · Nos engagements · Formules & tarifs · Blog · Contact (« Votre projet » retiré à la demande de la cliente) | `src/data/site.ts` |
| Menu **Blog** | Page simple, pensée pour le référencement | `src/pages/blog.astro` |
| Mentions légales & confidentialité | Obligatoires (formulaire = données personnelles) | `src/pages/mentions-legales.astro` (lien en pied de page) |
| Confirmation d'envoi / 404 | Nécessité fonctionnelle | `src/pages/merci.astro`, `src/pages/404.astro` |

## Composants partagés

| Composant | Rôle |
|---|---|
| `layouts/BaseLayout.astro` | `<head>` SEO (title, description, canonical, Open Graph), en-tête, pied de page |
| `Header.astro` / `Logo.astro` | Logo, navigation, état actif, menu burger (< 1248 px) |
| `Footer.astro` | Pied de page (absent des maquettes) |
| `Divider.astro` / `Sprig.astro` | Rameau d'olivier seul ou entre deux filets |
| `Button.astro` | 7 variantes de boutons relevées sur les maquettes |
| `Testimonials.astro` | « Ils nous font confiance » (Accueil, À propos) |
| `PricingCard.astro` | Cartes Essentiel / Confort / Intendance |
| `ContactForm.astro` | Formulaire, envoyé au script PHP `public/api/contact.php` |
| `Icon.astro` | Pictogrammes SVG |

## Bilan

- **8 images → 7 pages distinctes** : les deux images « ACCUEIL » sont le haut et la suite de la même page d'accueil (confirmé par la cliente).
- 11 pages générées : les 7 pages maquettées + Blog, Mentions légales, Merci, 404.
