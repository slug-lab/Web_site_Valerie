# Plan d'implémentation

## Décisions validées par la cliente (10/10/2026)

| Sujet | Décision |
|---|---|
| Accueil | `ACCUEIL.png` = haut de la page d'accueil, `ACCUEIL 2.png` = suite sur la même page |
| Menu « Votre projet » | Retiré le 11/10/2026 ; « Notre accompagnement » ajouté entre À propos et Nos engagements |
| Menu « Blog » | Page simple, optimisée SEO, sans contenu inventé |
| Prix Intendance annuelle | « À partir de 123 €/mois » |
| Mention tarifaire tronquée | Conservée telle quelle pour le moment |
| Texte étape 02 (Accompagnement) | Conservé tel quel |
| Avis clients | Factices (« Avis client 1/2/3 ») pour le moment |
| Fautes d'orthographe | Corrigées |
| Photos / logo | Visuels temporaires, remplacés plus tard |
| Téléphone / e-mail | 07 85 74 25 96 / contact@maisonclovali.fr — confirmés |
| Envoi du formulaire | Script PHP sur l'hébergement web OVH (Web3Forms écarté par la cliente) |

## Stack

- **Astro** (sortie statique) + **Tailwind CSS 4** (`@tailwindcss/vite`, jetons dans `@theme`).
- Polices auto-hébergées via `@fontsource` : Cormorant Garamond, Raleway.
- **Hébergement : OVH, offre hébergement web** (Apache + PHP). Le site est généré en statique ; `public/.htaccess` gère la page 404, le cache et la compression.
- **Formulaire : script PHP `public/api/contact.php`** exécuté par OVH, envoi par la fonction `mail()` de l'hébergement. Aucun service tiers ni clé. Validation côté navigateur et côté serveur, champ piège anti-robots, limite de 5 envois par heure et par IP, case de consentement RGPD. Fonctionne aussi sans JavaScript (redirection vers `/merci/`).

## Arborescence

```
src/
  layouts/BaseLayout.astro      (head SEO, Header, Footer)
  components/
    Header.astro                (logo + nav + burger mobile)
    Logo.astro                  (monogramme temporaire en SVG/texte)
    Footer.astro                (à créer : absent des maquettes)
    Divider.astro               (rameau d'olivier ± filets)
    Button.astro                (variantes : dark, outline-dark, sage, outline-light, outline-grey)
    Testimonials.astro          (« Ils nous font confiance »)
    PricingCard.astro
    ContactForm.astro
    icons/…                     (pictogrammes SVG au trait)
  pages/
    index.astro                 ACCUEIL + ACCUEIL 2
    a-propos.astro
    nos-engagements.astro
    notre-accompagnement.astro
    formules-et-tarifs.astro
    contact.astro
    blog.astro
    mentions-legales.astro      (nécessité légale)
    merci.astro                 (confirmation hors JS)
    404.astro
  styles/global.css             (Tailwind + jetons de design)
public/
  images/                       (photos temporaires, à remplacer)
```

## Étapes

1. Initialisation Astro + Tailwind 4 + polices.
2. Jetons de design (`global.css`) et composants communs.
3. Les 7 pages maquettées + Blog + Mentions légales.
4. Formulaire, menu mobile.
5. Captures à 1366 × 768 et en mobile, comparaison avec les maquettes, corrections.
6. Documentation de mise en production (`docs/MISE_EN_PRODUCTION.md`).
