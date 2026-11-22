# Correspondance maquettes ↔ pages

## Référence du 22/11/2026 (`references/update_du_22_11/SITE INTERNET Maison Clovali.pdf`) — implémentée le 22/11/2026

> Cette référence remplace celles listées plus bas, conservées pour l'historique. Détail : `docs/ANALYSE_MAQUETTES.md` § « Référence du 22/11/2026 ».

| Image (page du PDF) | Page | Sections principales | Composants partagés | Éléments interactifs |
|---|---|---|---|---|
| p. 1 + p. 2 | **Accueil** : `src/pages/index.astro` | Hero en 2 colonnes (marque + atouts + boutons / photo à bord courbe) ; Bienvenue ; bandeau « Vous êtes propriétaire ? » ; avis | `Header`, `Divider`, `Button`, `Testimonials` | « Découvrez notre accompagnement » → `/notre-accompagnement/` ; « Échanger sur votre projet » (×2) → `/contact/` |
| p. 3 | **À propos** : `src/pages/a-propos.astro` | Portrait + présentation ; bouton ; citation ; avis (section Territoire **retirée**) | `Header`, `Divider`, `Button`, `Testimonials` | « Échanger sur votre projet » → `/contact/` ; « Découvrir notre territoire » → `/notre-territoire/` (lien ajouté à la demande du 22/11) |
| p. 4 + p. 5 | **Notre accompagnement** : `src/pages/notre-accompagnement.astro` (absorbe Nos engagements) | Intro + photo ; 5 étapes à pastilles ; bouton ; Engagements (photo + 5 engagements + encart contact) ; 4 valeurs | `Header`, `Divider`, `Button`, pastille `.badge-number`, `ContactStrip` | « Découvrir nos prestations » → `/prestations-et-tarifs/` ; « Contactez-nous » → `/contact/` |
| p. 6 | **Prestations & tarifs** : `src/pages/prestations-et-tarifs.astro` (menu renommé : la cliente propose des prestations à la carte, plus de formules) | Titre + bouton ; 4 cartes prestations | `Header`, `Divider`, `Button`, `Ornament` (`PricingCard` supprimé) | « Contactez-nous » → `/contact/` |
| p. 7 | **Notre territoire** : `src/pages/notre-territoire.astro` (recréée ; hors menu, liens depuis À propos et le pied de page) | Titre + photo ; secteur ; carte ; communes ; bloc contact | `Header`, `Divider`, `Ornament`, `ContactStrip` | « Contactez-nous » → `/contact/` |
| p. 8 | **Contact** : `src/pages/contact.astro` | Photo latérale ; titre ; panneau coordonnées ; formulaire | `Header`, `Divider`, `ContactForm` | Formulaire Web3Forms ; `tel:` ; `mailto:` |
| p. 9 | **Blog** : `src/pages/blog/index.astro` | Titre + photo ; grille de 3 cartes ; retour à l'accueil ; bloc contact | `Header`, `Divider`, `Button`, `ContactStrip` | « Lire l'article » ×3 ; « Revenir à la page d'accueil » → `/` |
| p. 10 + p. 11 | **Article** `/blog/reussir-sa-location-saisonniere/` | En-tête d'article ; intro ; 5 conseils ; bloc contact | `src/pages/blog/[slug].astro` (gabarit commun), `.badge-number`, `ContactStrip` | « Contactez-nous » |
| p. 12 + p. 13 | **Article** `/blog/avantages-conciergerie-proprietaires/` | Idem ; 5 avantages | idem | idem |
| p. 14 à p. 17 | **Article** `/blog/obligations-location-saisonniere/` (**nouveau**) | Idem ; 8 obligations (sous-titres, vigilance, puces) ; encadré « L'essentiel à retenir » | idem + encadré `takeaway` (`src/data/blog.ts`) | idem |

Pages sans maquette conservées : Mentions légales, Merci, 404. Redirections 301 (`public/.htaccess`) : `/nos-engagements/` → `/notre-accompagnement/#engagements`, `/formules-et-tarifs/` → `/prestations-et-tarifs/`.

Composants partagés (22/11/2026) : `Header` (6 entrées, `src/data/site.ts`), `Footer` (lien Notre territoire), `Button` (`primary`, `secondary`, `light`, `submit`), `Divider` / `Sprig` (rameau vert foncé entre deux filets), `Ornament` (filet beige à deux pastilles), `ContactStrip` (bloc « Confiez-nous le suivi de votre maison »), `Testimonials`, `ContactForm`, `Icon`. `BlogCta` et `PricingCard` ont été supprimés.

---

## Historique (références d'octobre 2026)

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
