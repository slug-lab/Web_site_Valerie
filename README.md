# Maison Clovali — site vitrine

Site de **Maison Clovali**, conciergerie privée à Meyrargues (Provence) : gestion de locations saisonnières haut de gamme et intendance de résidences secondaires, autour d'Aix-en-Provence et du Luberon.

## Stack

- [Astro 7](https://astro.build) : site 100 % statique
- [Tailwind CSS 4](https://tailwindcss.com) (plugin Vite)
- Polices auto-hébergées : Cormorant Garamond et Raleway (`@fontsource`)
- Formulaire de contact : service [Web3Forms](https://web3forms.com) (offre gratuite, 250 envois/mois), clé dans `src/data/site.ts`
- Hébergement cible : **Infomaniak** (hébergement web Apache, site statique)

## Démarrage

Prérequis : Node.js 22 ou plus.

```bash
npm install        # installe les dépendances
npm run dev        # serveur de développement : http://localhost:4321
npm run build      # génère le site dans dist/
npm run preview    # prévisualise le build
```

> L'envoi du formulaire nécessite une clé Web3Forms valide dans `src/data/site.ts` (voir `docs/MISE_EN_PRODUCTION.md`).

## Pages

| URL | Fichier |
|---|---|
| `/` | `src/pages/index.astro` |
| `/a-propos/` | `src/pages/a-propos.astro` |
| `/notre-accompagnement/` (dont la section `#engagements`) | `src/pages/notre-accompagnement.astro` |
| `/prestations-et-tarifs/` | `src/pages/prestations-et-tarifs.astro` |
| `/notre-territoire/` (hors menu) | `src/pages/notre-territoire.astro` |
| `/blog/` et `/blog/<article>/` | `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro` (contenus dans `src/data/blog.ts`) |
| `/contact/` | `src/pages/contact.astro` |
| `/mentions-legales/`, `/merci/`, `/404` | pages utilitaires |

## Structure

```
public/            fichiers copiés tels quels (images, favicon, .htaccess, robots.txt)
src/
  components/      composants partagés (Header, Footer, Logo, Button, ContactStrip, Ornament, ContactForm…)
  data/site.ts     coordonnées, entrées du menu, clé Web3Forms
  data/blog.ts     articles du blog
  layouts/         BaseLayout (balises <head>, SEO, en-tête et pied de page)
  pages/           une page par fichier
  styles/          global.css : thème Tailwind (couleurs, polices, breakpoints)
docs/              documentation du projet (mise en production, crédits photos, analyse des maquettes)
```

Les couleurs (palette HEX de la charte du 22/11/2026), les polices et les breakpoints personnalisés (`nav` = 78rem, `wide` = 85rem) sont centralisés dans `src/styles/global.css`.

## Mise en ligne

Seul le contenu de **`dist/`** est envoyé à la racine du site sur l'hébergement, y compris le fichier caché `.htaccess`. Le reste du dépôt (sources, documentation) ne part jamais sur le serveur.

La procédure complète et la liste des éléments à configurer avant la mise en production (domaine, HTTPS, adresse du formulaire, contenus à compléter) sont dans [`docs/MISE_EN_PRODUCTION.md`](docs/MISE_EN_PRODUCTION.md).

## Crédits

Origine et licences des photos : [`docs/CREDITS_PHOTOS.md`](docs/CREDITS_PHOTOS.md).

© Maison Clovali. Tous droits réservés.
