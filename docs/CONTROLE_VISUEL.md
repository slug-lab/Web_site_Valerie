# Contrôle visuel et écarts restants

> Section 17.8 du `CLAUDE.md`. Contrôle effectué le 10/10/2026 sur le build de production (`astro build` + `astro preview`).

## Méthode

- Captures en Chromium headless à **1366 × 768** (dimensions des maquettes), puis montage maquette (haut) / rendu (bas) pour chaque page.
- La 2ᵉ maquette d'accueil (`ACCUEIL 2.png`) a été comparée à la portion de page située juste sous le hero (capture 1366 × 1700 recadrée).
- 3 itérations de corrections (largeur de conteneur, hauteur des bandeaux photo, espacements du formulaire, retours à la ligne des titres, alignement des cartes tarifaires, pictogrammes).
- Contrôle responsive automatisé (Playwright) à **375, 768, 1024 et 1920 px** sur les 9 pages : **aucun débordement horizontal**.
- Tests fonctionnels : menu mobile (ouverture, `Échap`), lien « Votre projet » → `/contact`, liens internes (aucun lien cassé), validation du formulaire, envoi réussi et envoi en erreur.
- Formulaire testé de bout en bout dans un conteneur Apache + PHP 8.2 (équivalent de l'hébergement OVH, e-mails interceptés) : envoi avec et sans JavaScript, validation côté serveur, champ piège, tentative d'injection d'en-tête refusée, limite de 5 envois/heure (6ᵉ refusé), encodage UTF-8 du sujet et du message.

## Résultat par page

| Maquette | Page | Conformité | Écarts restants |
|---|---|---|---|
| `ACCUEIL_NEW.png` | `/` (hero) | Conforme (comparaison à 1366 × 768 le 11/10/2026) : panneau, accroche, atouts, boutons côte à côte | Pictogramme « clés » redessiné en SVG ; menu non repris (menu validé depuis) |
| `ACCUEIL 2.png` | `/` (suite) | Conforme | Photo temporaire ; retours à la ligne légèrement différents |
| `Page _A PROPOS.png` | `/a-propos` | Conforme | Portrait définitif en place ; bloc boutons ≈ 30 px plus bas |
| `Page _NOS ENGAGEMENTS.png` | `/nos-engagements` | Conforme | Photo temporaire (extérieur de mas au lieu d'un intérieur) |
| `Page _NOTRE ACCOMPAGNEMENT.png` | `/notre-accompagnement` | Conforme | Photo temporaire ; description de l'étape 03 en italique comme les autres (harmonisation) |
| `Page _FORMULES & TARIFS.png` | `/formules-et-tarifs` | Conforme | Fond photo temporaire ; la carte Intendance s'étire à la hauteur du panneau voisin |
| `Page _NOTRE TERRITOIRE.png` | `/a-propos/#notre-territoire` | Conforme | Fusionnée sous les avis de la page À propos (11/10/2026) ; carte illustrée définitive en place |
| `Page _CONTACT.png` | `/contact` | Conforme | Case de consentement RGPD ajoutée (obligation légale) ; bouton « Envoyer » gris foncé au survol |

## Écarts volontaires (documentés)

1. **Lien actif du menu** : sur les maquettes Formules et Engagements, « ACCUEIL » est doré par erreur. Le site met en doré la page courante.
2. **Orthographe et typographie corrigées** (validé par la cliente) : accents sur les capitales (À PROPOS, ÉCHANGER, DÉCOUVREZ, SAISONNIÈRES, SÉRÉNITÉ, DÉMARRAGE, RÉGION, ÉCRIVEZ, PRÉFÉREZ, À VOTRE ÉCOUTE), « pour pour » → « pour », « nos exigence » → « nos exigences », « des compte-rendu » → « des comptes rendus », « Eguilles » → « Éguilles », « COEUR » → « CŒUR », citation d'À propos (« l'écoute », « à chaque », majuscule initiale), « 18% » → « 18 % ».
3. **Pied de page** : absent des maquettes ; créé sobrement (logo, navigation, coordonnées, mentions légales) dans la palette du site.
4. **Pages ajoutées** : Blog (décision cliente), Mentions légales & confidentialité, page « Merci » (confirmation sans JavaScript), page 404.
5. **Contraste** : le texte blanc sur le vert sauge `#A1A08A` (bandeaux, boutons) est conservé pour respecter la maquette, mais son contraste (≈ 2,6:1) est inférieur au seuil d'accessibilité WCAG AA. Recommandation : foncer légèrement la teinte (ex. `#8A8973`) si la cliente l'accepte.
6. **Responsive** (maquettes desktop uniquement) : menu burger sous 1248 px ; colonnes empilées sur mobile ; frise des étapes en 2 colonnes (tablette) puis verticale ; formulaire sur une colonne ; photos fondues remplacées par des bandeaux en haut de page sur mobile.

## Captures

Les captures et montages de comparaison sont générés dans `screenshots/` (ignoré par git) : `cmp-*.png` (desktop), `full-*-mob.png` et `full-*-tab.png` (pages entières mobile et tablette).
