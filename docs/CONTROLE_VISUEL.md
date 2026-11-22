# Contrôle visuel et écarts restants

> Section 17.8 du `CLAUDE.md`. Contrôle effectué le 10/10/2026 sur le build de production (`astro build` + `astro preview`).

## Contrôle du 22/11/2026 (référence `references/update_du_22_11/`, PDF de 17 pages)

**Méthode**
- Captures Chromium headless à **1366 px** de large, sur le build de production (`astro build` + `astro preview`).
- Chaque page du PDF (rendue en 1366 × 768) est comparée à la portion correspondante de la capture, dans un montage maquette en haut et rendu en bas. Script : `screenshots/u22/cmp.py`.
- Deux passes de corrections : hauteur du hero de l'accueil, en-tête ramené à 82 px, couleur du rameau, espacements des titres et séparateurs, largeur de la carte et de la liste des communes, cartes des prestations, bloc de contact, grille du blog.
- **Débordement horizontal** : test automatisé (iframes de largeur fixe, comparaison de `scrollWidth`) à **320, 375, 768, 1024, 1280 et 1920 px** sur les 13 pages. Deux débordements ont été corrigés : le titre de Notre accompagnement à 320 px et les cartes du blog à 768 px. Il n'en reste **aucun**.
- **Liens** : tous les `href` et `src` internes du build pointent vers un fichier existant.

| PDF | Page | Conformité | Écarts restants |
|---|---|---|---|
| p. 1 | `/` (hero) | Conforme : colonne ivoire, photo à bord courbe et voile clair, atouts, 2 boutons empilés | Courbe obtenue par `clip-path: ellipse()`, très proche de la maquette ; le petit trait isolé au bord de la photo, probable artefact de la maquette, n'est pas repris. Sur mobile : texte puis photo, comme le demande la charte. |
| p. 2 | `/` (suite) | Conforme | Retours à la ligne légèrement différents ; 3 avis (1 réel + 2 de test) au lieu des placeholders « Avis client 1/2/3 ». |
| p. 3 | `/a-propos/` | Conforme | Lien « Découvrir notre territoire → » ajouté sous le texte (demande du 22/11), ce qui descend le bouton d'environ 30 px. |
| p. 4 | `/notre-accompagnement/` | Conforme | — |
| p. 5 | `/notre-accompagnement/#engagements` | Conforme | Branche d'olivier : orientation du fichier fourni, différente de la maquette ; photo retournée (voir `CREDITS_PHOTOS.md`). |
| p. 6 | `/prestations-et-tarifs/` | Conforme | Libellé de menu « Prestations & tarifs » (choix de la cliente) au lieu de « Formules & tarifs ». |
| p. 7 | `/notre-territoire/` | Conforme | Carte un peu plus petite que sur la maquette, pour garder l'encadré des communes lisible. |
| p. 8 | `/contact/` | Conforme | Case de consentement RGPD ajoutée (absente de la maquette). |
| p. 9 | `/blog/` | Conforme | — |
| p. 10–17 | 3 articles | Conformes : pastilles, sous-titres, puces, points de vigilance, encadré « L'essentiel à retenir », bloc de contact | Le pied de page du site s'ajoute en bas de chaque page (absent des maquettes). |

---

## Historique : contrôle du 10/10/2026

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
| `ACCUEIL_NEW.png` | `/` (hero) | Conforme (comparaison à 1366 × 768 le 11/10/2026) : panneau, accroche, atouts, boutons côte à côte | Pictogrammes des atouts fournis par la MOA (home.png, key.png) ; menu non repris (menu validé depuis) |
| `ACCUEIL 2.png` | `/` (suite) | Conforme | Photo temporaire ; retours à la ligne légèrement différents |
| `Page _A PROPOS.png` | `/a-propos` | Conforme | Portrait définitif en place ; bloc boutons ≈ 30 px plus bas |
| `Page _NOS ENGAGEMENTS.png` | `/nos-engagements` | Conforme | Photo intérieure et pictogrammes des 4 valeurs fournis par la MOA (11/10/2026) |
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
7. **Maquettes du 24/10/2026** (blog, articles, territoire) : elles montrent l'ancien menu (« Votre projet », sans « Notre accompagnement ») ; le menu actuel à 7 entrées est conservé. Sur le territoire, « Justifier tous les paragraphes » a été lu d'après l'image APRÈS, où les textes sont **centrés** (confirmé par la cliente le 24/10/2026).
8. **Article « Faire appel à une conciergerie »** : la maquette répète la section « Bénéficier d'un service adapté à sa situation » (n° 5 et 6, texte identique) ; le doublon n’est pas repris (5 sections, validé par la cliente le 24/10/2026). Corrections typographiques : « voyageurs: » → « voyageurs : », « nécessaires, Même » → « nécessaires. Même », espace double supprimée.
9. **Encart contact du blog** : texte légèrement plus foncé que sur la maquette (gris très clair sur beige, illisible) pour un contraste suffisant.

## Contrôle du 24/10/2026

Captures 1366 × 768 superposées aux maquettes `update_du_24_10/` (`screenshots/cmp-blog.png`, `cmp-article1.png`, `cmp-article2.png`) et contrôle à 390 px : structure, ordre des sections, proportions et typographie conformes ; écarts restants ci-dessus. À propos / territoire conforme à `Page _NOTRE TERRITOIRE (2).png`.

## Captures

Les captures et montages de comparaison sont générés dans `screenshots/` (ignoré par git) : `cmp-*.png` (desktop), `full-*-mob.png` et `full-*-tab.png` (pages entières mobile et tablette).
