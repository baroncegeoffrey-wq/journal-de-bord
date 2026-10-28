# Décisions : Journal de bord

> Le journal des décisions produit et de lot. Le chef de projet écrit les décisions. Le chef de chantier met à jour le statut, le compte rendu et les questions ouvertes.
> Les choix purement techniques restent dans le `CLAUDE.md` racine. Ici on garde **ce qu'on a décidé, pourquoi, et où ça en est**.

**Statuts** : `brouillon` (écrite, attend la maquette ou une validation) → `prête` (le chef peut l'exécuter) → `en cours` → `livrée` · `bloquée` (voir questions ouvertes) · `abandonnée` (on garde l'entrée et on dit pourquoi)

**Numérotation** : décisions `D-001`, `D-002`... · lots `L-001`, `L-002`... · questions `Q-001`... Les numéros ne sont jamais réutilisés.

---

## Questions ouvertes

> Écrites par le chef de chantier quand il bloque. Le chef de projet les traite avec Geoffrey, puis les déplace dans la décision concernée (ou en crée une nouvelle) et les retire d'ici.

_Aucune pour l'instant._

<!--
### Q-001 : <titre> (lot L-xxx, décision D-xxx)
<La question en une ou deux phrases, en langage simple.>
Options : A) ... B) ...
Ce qui est fait en attendant : ...
-->

---

## Décisions

### D-001 : Le site en ligne, avec l'accueil et le récap des semaines 1 à 4
**Date** : 2026-10-28 · **Statut** : livrée · **Lot** : L-001 · **Type** : produit

**Quoi** :
- Le site existe et est en ligne gratuitement à `https://baroncegeoffrey-wq.github.io/journal-de-bord/`, construit avec Astro et mis en ligne automatiquement par GitHub Pages à chaque arrivée sur `main`.
- **Page d'accueil**, dans cet ordre (maquette `resources/screens/accueil.html`) :
  1. Une barre du haut façon terminal : `JDB://GEOFFREY.BARONCE` à gauche, `EN FORMATION` (témoin vert) à droite (masqué sur téléphone).
  2. L'en-tête : petit surtitre `> JOURNAL_DE_BORD.LOG`, le titre « Journal de bord de » + « Geoffrey Baronce » en grand (jaune, effet glitch cyan/magenta), la phrase d'intro, deux étiquettes « AI Builder · Alegria » (cyan) et « Alternance MCI Group · janv. 2027 » (magenta).
  3. « 01 Les semaines » : une carte par semaine, la plus récente en haut. Carte publiée = badge jaune avec le numéro, titre, dates, résumé, étiquettes d'outils, « LIRE >> », cliquable vers la page de la semaine. Carte « à venir » = grisée, badge en pointillés, mention « CHARGEMENT… » après les dates, non cliquable.
  4. « 02 Mes projets » : Pacity et Golden Wing.
  5. « 03 Mes outils » : Claude, Airtable, Make, Softr, Webflow, HTML / CSS.
  6. Pied de page : `© GEOFFREY BARONCE` et `MAJ HEBDO // FIN DE TRANSMISSION`.
- **Page d'une semaine** (maquette `resources/screens/semaine.html`) : lien retour, badge, titre glitché, dates, résumé, étiquettes, puis les 4 rubriques toujours dans le même ordre et les mêmes couleurs (01 Ce que j'ai appris = cyan, 02 Ce que j'ai construit = jaune, 03 Ce qui a coincé = magenta, 04 La suite = vert), puis « En images » (grille de captures avec légende, clic = capture en grand), puis navigation précédente / suivante. Une semaine voisine « à venir » s'affiche dans la navigation sans lien, avec la mention « (à venir) » ; s'il n'y en a pas, « Aucune ».
- **Deux semaines en contenu** : le récap « Semaines 01 à 04 » (publié) et la « Semaine 05 » (à venir, carte grisée seulement).
- Ajouter une semaine plus tard = ajouter un fichier Markdown et ses captures, **sans toucher au code**.
- Titre de l'onglet : « Journal de bord de Geoffrey Baronce » (accueil) et « <Titre de la semaine> · Journal de bord » (semaine). Description pour les moteurs de recherche et les aperçus de lien : la phrase d'intro.
- Icône d'onglet (favicon) : un carré jaune `#FCEE0A` à coins coupés avec « GB » noir en Chakra Petch.

**Pourquoi** : le maître d'apprentissage de Geoffrey chez MCI Group veut un point chaque semaine, et Geoffrey veut un portfolio. Un site toujours au même format se lit vite, et une nouvelle semaine ne demande qu'un fichier texte. Le style néon cyberpunk est le choix de Geoffrey (inspiration Edgerunners), en version 100 % originale.
**Couches** : Site, puis Contenu.
**Maquette** : `resources/screens/accueil.html` et `resources/screens/semaine.html` (v2, validées par Geoffrey le 2026-10-28). Captures de référence dans `resources/screens/captures/`.
**Textes** (validés par Geoffrey, à reprendre mot pour mot) :
- Intro : « Ma reconversion dans l'IA et le no-code, semaine après semaine : ce que j'apprends en formation, ce que je construis, et ce qui coince. »
- Semaines 01 à 04 : numéro « 01-04 », dates 28.09 → 23.10.2026, titre « Les bases : HTML, CSS et Webflow », outils HTML, CSS, Webflow.
  - Résumé (un seul champ, affiché sur l'accueil et sur la page) : « Un mois pour poser les fondations : coder un site à la main, puis refaire la même chose sans une ligne de code avec Webflow. »
  - Ce que j'ai appris : « Le HTML pour structurer une page (titres, textes, images, liens) et le CSS pour la mettre en forme. » · « Webflow : les mêmes principes, mais en visuel. Le panneau « Navigator » c'est le HTML, le panneau « Style » c'est le CSS. » · « Le responsive : un site qui s'adapte à l'ordinateur, la tablette et le téléphone. »
  - Ce que j'ai construit : « Une page hommage au film Akira, codée entièrement à la main en HTML et CSS : synopsis, fiches personnages, filmographie. » · « La reproduction d'un site vitrine complet dans Webflow (un exercice de la formation), en version ordinateur et mobile. »
  - Ce qui a coincé : « Rien de bloquant : c'était surtout de la prise en main des outils. »
  - La suite : « Airtable, puis Make : la partie données et automatisation, celle qui m'intéresse le plus. »
  - Captures (dans cet ordre) : `s1-4-akira-code.png` « Le code HTML de la page Akira » · `s1-4-webflow-editeur.png` « Le même travail, en visuel dans Webflow » · `s1-4-webflow-mobile.png` « La version mobile du site ».
- Semaine 05 (à venir) : numéro « 05 », dates 26.10 → 30.10.2026, titre « Airtable : penser en données », résumé « Le début de la partie qui m'intéresse le plus : bases de données, relations, vues. », outil Airtable.
- Pacity (étiquette « App no-code », outils Airtable, Softr) : « Une app de réservation d'espaces de coworking, construite avec Airtable et Softr : modèle de données, automatisations, interface. »
- Golden Wing (étiquette « Entreprise », étiquettes Airtable, Gestion) : « Une agence de production audiovisuelle que je co-fonde. Je m'occupe de la structure et de la gestion, avec un tableau de bord Airtable. »

**Actions destructives** : aucune.
**C'est fini quand** :
- `https://baroncegeoffrey-wq.github.io/journal-de-bord/` affiche l'accueil conforme à la maquette, à 1280 px et à 390 px, sans défilement horizontal.
- La carte « Semaines 01-04 » ouvre sa page, avec les 4 rubriques, les textes ci-dessus et les 3 captures qui se chargent **en ligne** (pas seulement en local).
- La Semaine 05 apparaît grisée sur l'accueil, non cliquable, et n'a pas de page.
- Retirer un champ obligatoire d'une semaine publiée fait échouer `npm run build` (le schéma protège le format) ; testé puis remis en état.
- Un push sur `main` remet le site en ligne tout seul (workflow « Deploy » vert dans GitHub Actions).

**Compte rendu** (rempli par le chef) :
- **Livré et en ligne le 2026-10-28** : https://baroncegeoffrey-wq.github.io/journal-de-bord/ (workflow « Deploy » vert, run 40681236532).
- Commits : `6755a45` [site] (Astro 7.4.2, aucune autre dépendance), `3ce19d2` [contenu], plus les commits [chef] de suivi.
- Critères vérifiés : accueil et page « Semaines 01-04 » conformes aux maquettes à 1280 et 390 px, sans défilement horizontal ; les 3 captures se chargent en ligne ; la Semaine 05 est grisée, sans lien, et n'a pas de page (404) ; retirer `appris` (session Site) puis `suite` (chef) d'une semaine publiée fait échouer le build avec un message clair, remis en état ; textes identiques mot pour mot à cette décision.
- Écarts assumés : grille « En images » en colonnes de 240 px minimum (au lieu de 260) pour garder 3 colonnes sur ordinateur ; badge « 01-04 » en 20 px sur téléphone ; la navigation affiche le titre complet de la semaine voisine ; ajout d'un fichier de code `src/lib/site.ts` (hors liste de la couche Site dans le CLAUDE.md, à ajouter).
- Textes d'interface écrits par la session Site : « Voir la capture en grand » (infobulle), « Autres semaines » et « Outils » (lecteurs d'écran seulement).
- Captures publiées : akira-code 1600 px / 262 Ko, webflow-editeur 1600 px / 164 Ko, webflow-mobile 581 px / 316 Ko.
- Mise en route : dépôt passé en public par Geoffrey, GitHub Pages activé (mode GitHub Actions), Node.js 22.23.4 installé dans `~/.local/node` (hors PATH permanent, refusé par les autorisations).

---

### D-002 : Semaine 05, Airtable
**Date** : 2026-10-28 · **Statut** : brouillon · **Lot** : L-002 · **Type** : contenu

**Quoi** :
- La Semaine 05 passe de « à venir » à « publiée », avec ses 4 rubriques et ses captures, au modèle existant.

**Pourquoi** : c'est la première semaine sur la partie qui intéresse le plus Geoffrey (données et automatisation), donc la plus utile pour son maître d'apprentissage.
**Couches** : Contenu.
**Maquette** : aucune (contenu au modèle existant).
**Textes** : à écrire avec Geoffrey en fin de semaine (vendredi 30 octobre), à partir de son récit et de ses captures.
**Déjà noté** : la semaine couvre aussi **UML** (schématiser la logique d'un système) et **Mermaid** (dessiner ces schémas à partir de texte), vus avant Airtable : l'angle est « avant de construire, j'ai appris à dessiner la logique ». Geoffrey fournira du code Mermaid et des captures. Outils de la carte à prévoir : Airtable, UML, Mermaid (Make arrive la semaine suivante).
**Actions destructives** : aucune.
**C'est fini quand** : à compléter.

**Manque pour passer en `prête`** : le récit de Geoffrey, ses captures dans `captures-a-trier/`, les textes validés.

**Compte rendu** (rempli par le chef) :

---

### D-003 : Clins d'œil à Akira et petites animations
**Date** : 2026-10-28 · **Statut** : en cours · **Lot** : L-003 · **Type** : produit

**Quoi** (idées A, C, D, E, F, H de la maquette v3, retenues par Geoffrey ; B « kanji » et G « apparition au défilement » écartées) :
- **D, un rouge néon** `#FF1E2D`, nouvelle variable CSS `--rouge`, réservé aux clins d'œil (A et C, et une des ombres du glitch E). Pas utilisé ailleurs.
- **A, « NEO-PARIS 2026 »** : dans la barre du haut de l'accueil, à la suite de `JDB://GEOFFREY.BARONCE`, en rouge : `JDB://GEOFFREY.BARONCE · NEO-PARIS 2026`. Visible aussi sur téléphone (le texte passe à la ligne si besoin, sans défilement horizontal).
- **C, la traînée lumineuse** : une ligne rouge lumineuse (dégradé transparent → rouge → blanc, halo) qui se dessine de gauche à droite en 1,4 s, une seule fois à l'ouverture de la page, puis reste affichée. Sous le nom sur l'accueil (largeur max 760 px), sous le titre sur la page d'une semaine (largeur max 560 px). Purement décorative (`aria-hidden`).
- **E, le glitch animé au survol** : au survol de « Geoffrey Baronce » (accueil) et du titre d'une semaine (page semaine), le texte « bugge » (décalages cyan / magenta / rouge, petits sauts, découpes), en boucle tant que la souris est dessus. Au repos, le glitch statique actuel ne change pas. Rien sur téléphone (pas de survol), c'est normal.
- **F, le curseur** : un bloc cyan qui clignote (1 s) juste après `> JOURNAL_DE_BORD.LOG` sur l'accueil.
- **H, la barre « SYNC FORMATION »** : sous les deux étiquettes de l'en-tête de l'accueil. Libellé à gauche `SYNC FORMATION`, à droite `<semaine en cours> / <nombre total> SEMAINES` en vert (ex. `05 / 13 SEMAINES`), puis une case par semaine de bootcamp : semaines passées en vert lumineux, semaine en cours en jaune qui clignote, semaines à venir vides. Le calcul se fait **au moment de la construction du site** à partir de deux dates : début 2026-09-28, fin 2026-12-24 (= 13 semaines, du lundi 28 septembre à la semaine du 21 décembre). Avant le début : 00, tout vide. Après la fin : `13 / 13 SEMAINES`, tout en vert, rien ne clignote.
- **Mise à jour automatique de H** : le site se reconstruit tout seul **chaque lundi matin** (ajout d'un déclenchement planifié au workflow « Deploy », lundi 6 h UTC), pour que la barre avance même les semaines où rien n'est publié.
- **Toutes les animations** sont en CSS seul (aucun JavaScript), et coupées si l'appareil demande moins d'animations (`prefers-reduced-motion`) : la traînée s'affiche alors directement en entier, le curseur reste fixe, la case en cours reste jaune.

**Pourquoi** : Geoffrey veut un site plus stylé et plus personnel ; sa première page codée en formation était un hommage à Akira, ça fait le lien (Néo-Tokyo → Néo-Paris, le rouge, les feux de la moto). La barre de progression est utile à son maître d'apprentissage : on voit d'un coup d'œil où il en est.
**Couches** : Site (styles, composants, calcul de la barre, workflow), puis Contenu (les deux dates dans `src/data/site.json`).
**Maquette** : `resources/screens/accueil.html` et `resources/screens/semaine.html` (v3, validées par Geoffrey le 2026-10-28 ; remplacent la v2, toujours visible dans l'historique git). La maquette affiche un état figé de la barre (`05 / 13`) : en vrai, elle est calculée.
**Règle** : uniquement des clins d'œil **originaux**. Aucune affiche, aucun logo, aucun personnage, aucune image, aucune pilule, aucun titre stylisé tirés du film, du manga ou de la série.
**Textes** : `NEO-PARIS 2026` · `SYNC FORMATION` · `<NN> / <TT> SEMAINES` (numéros sur 2 chiffres). Dates de la formation : début 2026-09-28, fin 2026-12-24.
**Actions destructives** : aucune. (Les maquettes v2 sont remplacées par les v3 dans `resources/screens/` : c'est fait par le chef de projet, l'historique git les garde.)
**C'est fini quand** :
- En ligne, l'accueil montre `NEO-PARIS 2026` en rouge, le curseur qui clignote, la traînée rouge qui se dessine sous le nom, et le nom qui glitche au survol ; la page « Semaines 01-04 » montre la traînée sous le titre et le glitch au survol du titre.
- La barre affiche la bonne semaine pour la date du jour de construction (le 28/10/2026 : `05 / 13`, 4 cases vertes, 1 jaune, 8 vides) ; testé aussi avec une date avant le début et une date après la fin (le calcul accepte une date forcée pour le test, sans que ça reste dans le code en ligne).
- Le workflow « Deploy » a un déclenchement planifié le lundi et un lancement manuel réussi après la fusion.
- Avec « réduire les animations » activé (émulation Playwright `reducedMotion: 'reduce'`), plus rien ne bouge et tout reste lisible.
- 1280 px et 390 px conformes à la maquette, sans défilement horizontal ; aucune couleur en dur (le rouge passe par `--rouge`) ; aucun JavaScript côté navigateur.

**Compte rendu** (rempli par le chef) :

<!-- Modèle à copier pour chaque décision :

### D-xxx : <titre court>
**Date** : AAAA-MM-JJ · **Statut** : brouillon · **Lot** : L-xxx · **Type** : produit

**Quoi** :
- <le comportement attendu, vu par le lecteur>

**Pourquoi** : <une ou deux phrases>
**Couches** : <site / contenu>
**Maquette** : <fichier de resources/screens/>, ou « aucune (contenu au modèle existant) »
**Textes** : <textes validés>, ou « aucun »
**Actions destructives** : aucune, ou <ce qui est supprimé, nommé explicitement>
**C'est fini quand** :
- <critère vérifiable 1>
- <critère vérifiable 2>

**Compte rendu** (rempli par le chef) :

-->
