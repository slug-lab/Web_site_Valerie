# Maison Clovali — site vitrine

Site de **Maison Clovali**, conciergerie privée à Meyrargues (Provence) : gestion de locations saisonnières haut de gamme et intendance de résidences secondaires, autour d'Aix-en-Provence et du Luberon.

## Stack

- [Astro 7](https://astro.build) : site 100 % statique
- [Tailwind CSS 4](https://tailwindcss.com) (plugin Vite)
- Polices auto-hébergées : Cormorant Garamond et Raleway (`@fontsource`)
- Formulaire de contact : script PHP (`public/api/contact.php`) envoyant les messages avec `mail()`, sans service tiers
- Hébergement cible : **OVH hébergement web** (Apache + PHP 8)

## Démarrage

Prérequis : Node.js 22 ou plus.

```bash
npm install        # installe les dépendances
npm run dev        # serveur de développement : http://localhost:4321
npm run build      # génère le site dans dist/
npm run preview    # prévisualise le build
```

> En local, le PHP n'est pas exécuté : l'envoi du formulaire affiche une erreur. C'est normal, il fonctionne une fois le site en ligne chez OVH.

## Pages

| URL | Fichier |
|---|---|
| `/` | `src/pages/index.astro` |
| `/a-propos/` (dont la section `#notre-territoire`) | `src/pages/a-propos.astro` |
| `/notre-accompagnement/` | `src/pages/notre-accompagnement.astro` |
| `/nos-engagements/` | `src/pages/nos-engagements.astro` |
| `/formules-et-tarifs/` | `src/pages/formules-et-tarifs.astro` |
| `/blog/` | `src/pages/blog.astro` |
| `/contact/` | `src/pages/contact.astro` |
| `/mentions-legales/`, `/merci/`, `/404` | pages utilitaires |

## Structure

```
public/            fichiers copiés tels quels (images, favicon, .htaccess, robots.txt, api/contact.php)
src/
  components/      composants partagés (Header, Footer, Logo, Button, PricingCard, ContactForm…)
  data/site.ts     coordonnées et entrées du menu
  layouts/         BaseLayout (balises <head>, SEO, en-tête et pied de page)
  pages/           une page par fichier
  styles/          global.css : thème Tailwind (couleurs, polices, breakpoints)
docs/              documentation du projet (mise en production, crédits photos, analyse des maquettes)
```

Les couleurs, les polices et les breakpoints personnalisés (`nav` = 78rem, `wide` = 85rem) sont centralisés dans `src/styles/global.css`.

## Mise en ligne

Seul le contenu de **`dist/`** est envoyé sur l'hébergement, dans le dossier `www/` d'OVH, y compris le fichier caché `.htaccess`. Le reste du dépôt (sources, documentation) ne part jamais sur le serveur.

La procédure complète et la liste des éléments à configurer avant la mise en production (domaine, HTTPS, adresse du formulaire, contenus à compléter) sont dans [`docs/MISE_EN_PRODUCTION.md`](docs/MISE_EN_PRODUCTION.md).

## Crédits

Origine et licences des photos : [`docs/CREDITS_PHOTOS.md`](docs/CREDITS_PHOTOS.md).

© Maison Clovali. Tous droits réservés.
