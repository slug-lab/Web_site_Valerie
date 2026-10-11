# Analyse des maquettes — Maison Clovali

> Document produit en application de la section 17.3 du `CLAUDE.md`.
> Source : répertoire `references/` (8 fichiers PNG, tous en **1366 × 768 px**, version desktop uniquement).
> Les couleurs indiquées ont été relevées par échantillonnage de pixels ; les polices sont identifiées visuellement (à confirmer).

---

## 0. Constats préalables (importants)

1. **Les 8 images ne représentent que 7 pages distinctes.**
   `ACCUEIL.png` et `ACCUEIL 2.png` sont deux portions successives de la **même page d'accueil** :
   `ACCUEIL.png` montre l'en-tête et le hero (premier écran) ; `ACCUEIL 2.png` montre la suite (pas d'en-tête, fond continu, même format de section « Ils nous font confiance » que la page À propos).
   Le `CLAUDE.md` demande d'associer les 8 images à 8 pages distinctes : **ce n'est pas possible sans inventer une page**. → Question à trancher par la cliente (voir § 10).

2. **La navigation affiche 7 entrées** : Accueil · À propos · Nos engagements · Votre projet · Formules & tarifs · Blog · Contact.
   - **Blog** : aucune maquette.
   - **Votre projet** : aucune maquette portant ce nom. Deux candidates : *Notre accompagnement* (déroulé du projet en 5 étapes) ou *Contact* (titre « Parlons de votre projet »).
   - **Notre accompagnement** et **Notre territoire** : maquettes présentes mais **absentes du menu**. Elles sont atteintes par des boutons (« Découvrez notre accompagnement » sur l'accueil, « Découvrir notre territoire » sur À propos).

3. **Aucun pied de page n'est visible** sur aucune maquette (toutes sont coupées à 768 px de haut). Le footer est à concevoir (mentions légales obligatoires).

4. **Les maquettes semblent tronquées en bas** (Nos engagements : la rangée d'icônes est coupée ; Accueil 2 : les avis sont coupés ; Territoire, Contact). La suite éventuelle de ces pages est inconnue.

5. **Aucun fichier d'image source n'est fourni** (photos, logo, carte illustrée, icônes). Seules les captures des maquettes existent ; elles ne doivent pas être utilisées comme images du site (§ 17.2). Des visuels de remplacement seront nécessaires tant que les originaux ne sont pas fournis.

6. **Les sections 1 à 16 du `CLAUDE.md` sont absentes** : le fichier commence à la section 17. La stack est déduite de la mention « Astro et Tailwind CSS 4 » (§ 17.4). Les autres exigences éventuelles (hébergement, envoi du formulaire, SEO, etc.) ne sont pas connues.

---

## 1. Éléments communs

### 1.1 En-tête (présent sur 6 maquettes ; absent d'`ACCUEIL 2` qui est une suite de page)

| Élément | Observation |
|---|---|
| Fond | Crème `#F6F3EE`, hauteur ≈ 85–97 px. Sur l'accueil et le contact, il forme une bande séparée de l'image de fond ; ailleurs, il se confond avec le fond de page. |
| Logo (gauche) | Monogramme « MC » (lettres serif dorées/vert olive + rameau d'olivier) ≈ 60 px, suivi de « MAISON CLOVALI » (serif capitales, ≈ 24 px) et « Conciergerie privée » (sans-serif ≈ 15 px) centré dessous. |
| Navigation (droite) | 7 liens en capitales, sans-serif semi-gras ≈ 14–15 px, couleur `#5C5C49`. Un filet fin sous l'ensemble du menu (≈ 457 → 1332 px). |
| État actif | Couleur dorée `#A48C64` (visible sur « ACCUEIL » dans Formules & tarifs et Nos engagements). |
| Incohérence | Sur ces deux maquettes, c'est « ACCUEIL » qui est en doré alors que la page affichée n'est pas l'accueil → **erreur probable de maquette**. Interprétation retenue : le lien doré = page courante. |
| Incohérence | La position horizontale du logo varie de 15 à 30 px selon les maquettes → à harmoniser (≈ 30 px). |

### 1.2 Bloc « Ils nous font confiance » (Accueil 2, À propos)

- Titre centré en capitales sans-serif léger ≈ 24 px, encadré de deux filets horizontaux pleine largeur.
- 3 cartes grises `#ECECEC` ≈ 380 × 54 px, avec guillemets « ❞ » vert-olive à gauche et « Avis client N » centré.
- **Contenu fictif** (« Avis client 1/2/3 ») : les vrais avis ne sont pas fournis. Ne pas inventer d'avis.

### 1.3 Ornement « rameau d'olivier »

Petit rameau (≈ 50 px) seul ou centré entre deux filets horizontaux. Utilisé sous la plupart des titres (Accueil, Contact, Formules, Accompagnement, Territoire). Couleurs vert olive ou doré selon le contexte. → composant `Divider` avec variante « avec filets » / « seul ».

### 1.4 Boutons

| Variante | Aspect | Exemples |
|---|---|---|
| Plein foncé | Fond `#5A5A47`, texte blanc, capitales sans-serif gras | « Échanger sur votre projet » (hero), « Envoyer » (fond gris en maquette, cf. Contact) |
| Plein sauge | Fond `#A1A08A`, texte blanc | « Échanger sur votre projet » (À propos), « Découvrir nos formules », « Contactez-nous » (Formules, fond plus clair `#B9B8A5` env.) |
| Contour foncé | Bordure 3 px `#5A5A47`, texte foncé, fond transparent | « Découvrez notre accompagnement » (hero) |
| Contour clair | Bordure 2 px blanche/crème sur fond sauge, texte blanc | « Échanger sur votre projet » (Accueil 2), « Contactez-nous » (Engagements, Territoire) |
| Contour gris + icône | Bordure 2 px `#8C8C7A`, icône pin de localisation | « Découvrir notre territoire » (À propos) |

Angles droits (pas d'arrondi), hauteur ≈ 50 px, padding horizontal généreux.

### 1.5 Pied de page

**Absent de toutes les maquettes.** À créer de façon sobre et cohérente (à valider).

---

## 2. Image `ACCUEIL.png` — Accueil (partie haute)

- **Rôle** : page d'accueil, premier écran (hero).
- **En-tête** : bande crème séparée du hero.
- **Sections** :
  1. **Hero plein écran** : photo d'une terrasse de mas provençal avec piscine à débordement, oliviers, transats, au coucher du soleil (bord à bord, de 97 px jusqu'en bas de l'écran).
  2. **Panneau translucide** (blanc ≈ 40 % d'opacité), ≈ 635 × 530 px, positionné à gauche du centre (x ≈ 257 → 891) :
     - « MAISON / CLOVALI » — serif capitales très grand (≈ 56 px), sur deux lignes, centré.
     - Ornement rameau entre deux filets.
     - Accroche en serif italique ≈ 24 px : « Nous prenons soin de votre propriété comme si elle était la nôtre ».
     - Sous-titre sans-serif ≈ 15 px : « Conciergerie privée dédiée aux locations saisonnières haut de gamme et résidences secondaires en Provence ».
     - 2 boutons pleine largeur du contenu (≈ 413 px), empilés : **« Découvrez notre accompagnement »** (contour) → page *Notre accompagnement* ; **« Échanger sur votre projet »** (plein foncé) → page *Contact*.
- **Proportions** : panneau ≈ 46 % de la largeur ; texte centré dans le panneau.
- **Indéterminé** : comportement au scroll (en-tête fixe ou non), crédit/qualité de la photo, hauteur exacte du hero sur grand écran.

### 2.1 Nouvelle version `ACCUEIL_NEW.png` (MOA, 11/10/2026) — remplace `ACCUEIL.png` pour le hero

Même en-tête, même photo, même position et taille de panneau (≈ 635 × 533 px, x ≈ 256 → 891, y ≈ 147 → 680), même titre et même rameau. Changements dans le panneau :

| Élément | `ACCUEIL.png` | `ACCUEIL_NEW.png` |
|---|---|---|
| Accroche | « Nous prenons soin de votre propriété comme si elle était la nôtre » (serif italique ≈ 24 px) | « Conciergerie privée et intendance de résidences en Provence. » (serif italique **gras** ≈ 20 px, 2 lignes) |
| Sous-titre | « Conciergerie privée dédiée aux locations saisonnières haut de gamme… » (≈ 15 px) | « Nous assurons l'intendance de votre résidence secondaire et vous accompagnons dans vos projets de location saisonnière autour d'Aix-en-Provence et dans le Luberon. » (≈ 16 px, 3 lignes, ≈ 490 px de large) |
| Atouts | — | **Nouvelle rangée de 2 colonnes** alignées à gauche : pictogramme plein « maison » (≈ 44 px) + **Résidences secondaires** / « Suivi, entretien et préparation de votre propriété. » ; pictogramme au trait « clés + étiquette » + **Locations saisonnières** / « Accompagnement opérationnel et coordination des prestations. » (titre gras ≈ 13 px, texte ≈ 13 px) |
| Boutons | Empilés, ≈ 413 px de large ; « Découvrez… » en contour, « Échanger… » plein foncé | **Côte à côte** sur toute la largeur du panneau (marges ≈ 18 px, écart ≈ 9 px, hauteur ≈ 51 px) ; styles **inversés** : « Découvrez notre accompagnement » plein foncé (≈ 334 px), « Échanger sur votre projet » contour 2 px (≈ 265 px) |

- **Remarque** : l'accroche dit « intendance de résidences en Provence » (sans « secondaires ») ; reproduit tel quel.
- **Non repris** : le menu de la maquette (7 entrées avec « Votre projet ») ; le site garde le menu validé depuis (avec « Notre accompagnement », sans « Votre projet »).
- **Responsive** : atouts empilés sur mobile ; boutons empilés sous 1024 px (côte à côte au-delà).

## 3. Image `ACCUEIL 2.png` — Accueil (suite)

- **Rôle** : suite de la page d'accueil (sous le hero).
- **Sections** :
  1. **« Bienvenue chez Maison CLOVALI »** — titre serif italique ≈ 34 px centré ; 3 paragraphes sans-serif ≈ 18 px centrés (largeur ≈ 1150 px) ; phrase de signature en gras sauge `#A1A08A` : « Maison CLOVALI, l'art de prendre soin de votre propriété comme si elle était la nôtre. »
  2. **Bandeau bi-colonne pleine largeur** (≈ 235 px de haut) : photo de mas avec piscine et lavande à gauche (≈ 1/3, 446 px) ; à droite, fond sauge `#A1A08A`, titre « VOUS ÊTES PROPRIÉTAIRE ? » (sans-serif léger capitales ≈ 30 px, blanc), paragraphe blanc ≈ 18 px, bouton contour clair **« Échanger sur votre projet »** → *Contact*.
  3. **« Ils nous font confiance »** + 3 avis (composant partagé, cf. § 1.2).
- **Indéterminé** : ce qui suit les avis (autres sections ? footer ?), contenu des avis, éventuel carrousel.

## 4. Image `Page _A PROPOS.png` — À propos

- **Sections** :
  1. **Bloc fondatrice en 2 colonnes** :
     - Gauche (≈ 345 × 450 px, x 45 → 387) : portrait photo, coins arrondis ≈ 14 px.
     - Droite (x 444 → 1290) : « Valérie Deron » serif italique ≈ 38 px, couleur beige-taupe clair `#C9BFAF` env. ; « FONDATRICE DE MAISON CLOVALI » sans-serif capitales ≈ 20 px ; 7 paragraphes courts en sans-serif italique ≈ 15 px, justifiés, interligne très aéré (≈ 2).
  2. **Rangée boutons + citation** :
     - **« Échanger sur votre projet »** (plein sauge) → *Contact* ;
     - **« Découvrir notre territoire »** (contour gris + pictogramme localisation) → *Notre territoire* ;
     - Citation alignée à droite en serif italique espacé ≈ 22 px : « la confiance se construit dans le temps, par la présence, l'écoute et le soin apporté à chaque détail ».
  3. **« Ils nous font confiance »** + 3 avis (partagé).
- **Remarque texte** : la citation contient des accents manquants (« l'ecoute », « a chaque ») et commence par une minuscule → à corriger (validation cliente).
- **Indéterminé** : suite de la page, photo définitive.

## 5. Image `Page _CONTACT.png` — Contact

- **Fond** : photo pleine page d'un village perché provençal avec premier plan d'oliviers flou, sous un voile crème (≈ 60–70 %).
- **Sections** :
  1. **En-tête de page centré** : « PARLONS DE VOTRE PROJET » (serif capitales espacées ≈ 32 px, gras) ; rameau entre deux longs filets ; « NOUS SOMMES À VOTRE ÉCOUTE POUR VOUS ACCOMPAGNER » (sans-serif capitales espacées ≈ 20 px).
  2. **Deux cartes côte à côte** :
     - **Gauche** (≈ 360 px, fond gris clair `#E9E9E9`) : « VOUS PRÉFÉREZ NOUS JOINDRE DIRECTEMENT ? » (serif capitales espacées) ; rameau entre filets ; texte serif italique centré ; coordonnées avec icônes pleines vert olive : maison → « Maison Clovali / Meyrargues » ; téléphone → « 07 85 74 25 96 » ; enveloppe → « contact@maisonclovali.fr » (souligné, lien `mailto:`).
     - **Droite** (≈ 625 px, fond crème `#F7F1ED`) : formulaire « ÉCRIVEZ-NOUS ».
  3. **Formulaire** :
     - Nom* / Prénom* (2 colonnes) ; Téléphone* / Email* (2 colonnes) ;
     - « Votre projet concerne * » : 4 boutons radio — *La location saisonnière* · *L'intendance de ma propriété* · *Les deux* · *Autre* ;
     - « Parlez-nous de votre projet* » : zone de texte ;
     - Bouton **« ENVOYER »** pleine largeur (gris `#AAAAAA` en maquette — possiblement un état désactivé) ;
     - Mention « Les champs marqués d'un * sont obligatoires ».
     - Champs : fond blanc, bordure grise fine, angles droits.
- **Indéterminé** : service d'envoi du formulaire, message de confirmation/erreur, consentement RGPD (absent de la maquette mais légalement nécessaire), couleur du bouton actif. Numéro et e-mail à confirmer comme réels.

## 6. Image `Page _FORMULES & TARIFS.png` — Formules & tarifs

- **Fond** : photo de village perché + oliviers flous, voile crème plus léger qu'en Contact.
- **Sections** :
  1. **En-tête de page** : « FORMULES & TARIFS » (serif capitales ≈ 40 px, non gras) ; rameau ; « TROUVEZ LA FORMULE QUI VOUS CORRESPOND » (sans-serif capitales espacées ≈ 20 px). Bouton **« CONTACTEZ-NOUS »** (plein sauge clair) aligné à droite au même niveau → *Contact*.
  2. **Groupe « POUR VOS LOCATIONS SAISONNIÈRES »** (panneau rosé-gris `#E4DEE2`, ≈ 710 px) contenant **2 cartes** :
     - **Essentiel** — accroche « Vous gérez vos réservations, nous prenons en charge le reste » ; 4 prestations ; pied vert olive `#7A7A60` « Commission conciergerie **18 %** ».
     - **Confort** — accroche « Plus de services pour vous libérer des contraintes du quotidien. » ; 5 prestations ; pied « Commission conciergerie **23 %** ».
  3. **Groupe « POUR L'INTENDANCE DE VOTRE PROPRIÉTÉ »** (panneau gris-bleu `#D5D6D7`, ≈ 440 px) contenant **1 carte** :
     - **Intendance annuelle** — accroche « Une présence continue et proactive toute l'année. » ; 6 prestations ; pied doré `#A38B62` « À partir de …..€/mois » + mention en petit sur les fourchettes indicatives.
  - Anatomie d'une carte (fond crème `#F7F1ED`, ≈ 320 px) : pictogramme fin au trait dans un cercle ; titre serif ≈ 26 px ; rameau entre filets ; accroche serif italique gras ≈ 18 px ; liste sans puces sans-serif ≈ 14 px ; bandeau de pied coloré avec petit rameau à gauche.
- **Anomalies de contenu** : « pour pour » (doublon) ; prix intendance non renseigné (« …..€/mois ») ; mention tronquée (« … Premie ») ; « SAISONNIERES » sans accent. Les taux 18 % et 23 % sont-ils définitifs ? → **à confirmer, ne pas inventer de prix**.
- **Indéterminé** : interactivité des cartes (aucune n'a de bouton propre), texte complet de la mention.

## 7. Image `Page _NOS ENGAGEMENTS.png` — Nos engagements

- **Sections** :
  1. **Titre + photo** : « NOS ENGAGEMENTS POUR VOTRE SÉRÉNITÉ » (serif capitales ≈ 34 px, aligné à gauche) ; à droite, photo d'un salon provençal lumineux avec vase d'olivier, fondue en dégradé vers la gauche (≈ 590 × 295 px, bord droit).
  2. **Liste de 5 engagements** (colonne gauche ≈ 60 %) : coche « ✓ » vert olive + titre sans-serif semi-gras capitales ≈ 18 px + description sans-serif italique ≈ 17 px :
     Préservation de votre bien · Excellence de service · Respect & discrétion · Transparence & communication · Relation de confiance.
  3. **Encart CTA** (colonne droite, fond sauge `#A1A08A`, ≈ 347 × 215 px) : « Vous souhaitez parler de votre projet ? » + bouton contour clair **« CONTACTEZ-NOUS »** → *Contact*.
  4. **Filet** puis **rangée de 4 valeurs** avec pictogrammes au trait : Proximité · Réactivité · Disponibilité · Exigence (sans-serif capitales léger ≈ 20 px).
- **Anomalies** : « SÉRÉNITE » (accent manquant), « nos exigence » (accord), « compte-rendu réguliers » → à corriger. Lien actif incorrect (cf. § 1.1).
- **Indéterminé** : la rangée de valeurs est coupée (y a-t-il un texte sous chaque valeur ?), suite de la page.

## 8. Image `Page _NOTRE ACCOMPAGNEMENT.png` — Notre accompagnement

- **Sections** :
  1. **Intro 2 colonnes** : à gauche, « COMMENT SE DÉROULE NOTRE ACCOMPAGNEMENT ? » (serif capitales ≈ 32 px), rameau doré, paragraphe sans-serif italique justifié ≈ 17 px ; à droite, photo (≈ 368 × 245 px) d'une terrasse avec clés et carnet « Maison Clovali ».
  2. **Frise en 5 étapes** (bande sauge clair `#BCBBAA`, ≈ 1250 × 288 px), 5 colonnes séparées par des filets verticaux fins :
     - Numéro « 01 » à « 05 » (sans-serif léger ≈ 28 px, vert olive) ;
     - Titre capitales espacées semi-gras ≈ 18 px, couleur brun foncé `#544541` ;
     - Petit rameau ;
     - Description ≈ 15 px (italique sauf l'étape 03).
     Étapes : Premier échange · Visite de votre propriété · Proposition sur mesure · Démarrage de la collaboration · Une sérénité au quotidien.
  3. **Bouton** **« DÉCOUVRIR NOS FORMULES »** (plein sauge) centré → *Formules & tarifs*.
- **Anomalies** : description de l'étape 02 incomplète (« et définition des prestations souhaitées. ») ; étape 03 non italique (incohérence) ; « DEMARRAGE » sans accent.
- **Indéterminé** : lien avec l'entrée de menu « Votre projet ».

## 9. Image `Page _NOTRE TERRITOIRE.png` — Notre territoire

> Mise à jour 11/10/2026 : ce contenu n'est plus une page distincte ; il est intégré en bas de la page À propos (ancre `#notre-territoire`).

- **Sections** :
  1. **Hero 2 colonnes** : à gauche (≈ 50 %), « NOTRE TERRITOIRE » (serif capitales espacées gras ≈ 34 px), rameau entre filets, « UNE CONCIERGERIE LOCALE, AU CŒUR DE LA PROVENCE » (sans-serif capitales espacées ≈ 22 px) ; à droite, photo de village perché (≈ 670 × 240 px, fondue à gauche). Fin de section : filet pointillé pleine largeur.
  2. **Corps 3 zones** :
     - **Gauche** (≈ 340 px) : « UN SECTEUR D'INTERVENTION AU PLUS PRÈS DE CHEZ VOUS » (serif capitales espacées) ; rameau entre filets ; texte serif gras ≈ 17 px sur Meyrargues, Aix-en-Provence et le Luberon ; plus bas, texte serif « Vous ne trouvez pas votre commune ? Contactez-nous, nous étudierons votre demande. »
     - **Centre** (≈ 460 px) : **carte illustrée** stylisée (aquarelle) du secteur avec communes, routes et rivière.
     - **Droite** (≈ 533 px) : carte grise `#EBE6DF` « QUELQUES COMMUNES DE NOTRE SECTEUR » + rameau + liste à puces en 2 colonnes (10 communes : Meyrargues, Venelles, Aix-en-Provence, Puyricard, Le Puy-Sainte-Réparade, Pertuis, Lourmarin, Peyrolles-en-Provence, Jouques, Éguilles) ; sous-bloc sauge « UN PROJET DANS NOTRE RÉGION ? » + bouton contour clair **« CONTACTEZ-NOUS »** → *Contact*.
- **Indéterminé** : la carte est-elle une image fixe ou une carte interactive ? (hypothèse retenue : **image fixe**, fichier source requis). Accessible uniquement par le bouton de la page À propos.

---

## 10. Système de design commun (proposition)

### 10.1 Palette (valeurs échantillonnées)

| Jeton | Valeur | Usage |
|---|---|---|
| `cream` | `#F6F3EE` | Fond général, en-tête |
| `cream-card` | `#F7F1ED` | Cartes formules, formulaire |
| `sand` | `#EBE6DF` | Encarts clairs (communes) |
| `grey-card` | `#E9E9E9` / `#ECECEC` | Carte coordonnées, cartes d'avis |
| `sage` | `#A1A08A` | Bandeaux CTA, boutons pleins |
| `sage-light` | `#BCBBAA` | Frise d'étapes |
| `olive` | `#7A7A60` | Pieds de carte formules, icônes |
| `olive-dark` | `#5A5A47` | Textes de titres, bouton plein foncé, nav (`#5C5C49`) |
| `gold` | `#A48C64` | Lien actif, pied carte intendance, rameaux dorés |
| `taupe-light` | `#C9BFAF` (≈) | Nom « Valérie Deron » |
| `brown` | `#544541` | Titres des étapes |
| `ink` | `#3F3F3F` | Texte courant |
| `panel-rose` | `#E4DEE2` | Panneau locations saisonnières (supprimé le 11/10/2026 : les deux panneaux utilisent `panel-grey`, demande cliente) |
| `panel-grey` | `#D5D6D7` | Panneau intendance |

### 10.2 Typographies (identification visuelle, à confirmer)

- **Serif d'affichage** : *Cormorant Garamond* (titres, capitales espacées, italiques élégantes, chiffres « 18% »). Graisses 400 / 500 / 600 + italique.
- **Sans-serif** : *Raleway* (navigation, corps de texte, boutons, chiffres elzéviriens visibles dans « Avis client 1 » et le téléphone). Graisses 300 / 400 / 600 / 700 + italique.
- Les deux sont disponibles sur Google Fonts → auto-hébergement recommandé (`@fontsource`).

### 10.3 Échelle de tailles (desktop, ≈)

| Niveau | Taille | Police |
|---|---|---|
| Hero (« MAISON CLOVALI ») | 56 px | Serif |
| H1 de page | 32–40 px | Serif capitales (espacées 0,08–0,12 em selon page) |
| H2 / titres de section | 24–34 px | Serif italique ou sans léger capitales |
| Sous-titre de page | 20–22 px | Sans capitales espacées 0,1 em |
| Titre de carte / item | 18–26 px | Serif ou sans semi-gras |
| Corps | 15–18 px | Sans (souvent italique) |
| Navigation / boutons | 14–18 px | Sans semi-gras capitales |
| Mentions | 11–12 px | Sans |

### 10.4 Mise en page

- Largeur de référence : 1366 px. Contenu utile ≈ 1250–1290 px (marges ≈ 40–60 px). Proposition : `max-width: 1280px` + gouttières `clamp(16px, 4vw, 48px)`.
- Plusieurs sections sont **pleine largeur** (hero, bandeau propriétaire, photos fondues en bord droit, fonds photo).
- Espacements verticaux entre sections ≈ 40–60 px.
- **Rayons** : 0 partout, sauf le portrait (≈ 14 px).
- **Images** : photographies chaudes, lumineuses, provençales ; souvent **fondues** vers le fond crème (dégradé) ou sous un voile translucide.

### 10.5 Responsive (à déduire, maquettes desktop uniquement)

- **Navigation** : menu burger sous ≈ 1024 px (7 entrées ne tiennent pas en largeur tablette).
- **Colonnes** : passage en pile sous 768 px (À propos, Contact, Formules, Engagements, Territoire, bandeau Propriétaire).
- **Frise 5 étapes** : 5 col. → 2/3 col. (tablette) → liste verticale avec séparateurs horizontaux (mobile).
- **Avis** : 3 → 1 colonne.
- **Hero accueil** : panneau translucide centré pleine largeur sur mobile, photo recadrée (`object-position`).
- **Formulaire** : champs 2 colonnes → 1 colonne ; radios empilées.

---

## 11. Informations impossibles à déterminer depuis les images

1. Correspondance des 8 images avec 8 pages (seulement 7 pages visibles).
2. Contenu et maquette des pages **Blog** et **Votre projet**.
3. Contenu et apparence du **pied de page** (mentions légales, politique de confidentialité, réseaux sociaux…).
4. Suite des pages au-delà de 768 px de hauteur.
5. Fichiers sources : logo (vectoriel idéalement), photos HD, carte illustrée, pictogrammes.
6. Service d'envoi du formulaire et adresse de réception ; texte de consentement RGPD.
7. Tarif de la formule Intendance, texte complet de la mention tarifaire, confirmation des 18 % / 23 %.
8. Avis clients réels.
9. Comportements : en-tête fixe ou non, animations, survol des boutons/liens.
10. Version mobile (non fournie).
