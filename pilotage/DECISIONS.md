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

### D-002 : Semaines 03 à 05 (Merise, UML, Airtable) et correction du récap en « Semaines 01-02 »
**Date** : 2026-10-28 · **Statut** : prête · **Lot** : L-002 · **Type** : contenu

**Quoi** :
- **Correction** : d'après l'agenda officiel Alegria, HTML/CSS = semaine 1 et Webflow = semaine 2 ; Merise/UML et Airtable ont commencé en semaine 3. Le récap publié « Semaines 01 à 04 » devient « Semaines 01 à 02 », du 28.09 au 09.10.2026.
- **Nouvelle entrée publiée** « Semaines 03 à 05 : Merise, UML et Airtable », du 12.10 au 28.10.2026, avec ses 4 rubriques et 5 captures. Elle apparaît en haut de l'accueil.
- **La carte « à venir » Semaine 05 « Airtable : penser en données » disparaît** (son contenu est couvert par la nouvelle entrée). Aucune nouvelle carte « à venir » pour l'instant : la prochaine entrée (logique algorithmique, 29-30.10) sera décidée vendredi.
- Le reste du site ne change pas.

**Pourquoi** : publier tout de suite la partie la plus intéressante pour le maître d'apprentissage, et que le journal colle au vrai calendrier de la formation.
**Couches** : Contenu.
**Maquette** : aucune (contenu au modèle existant).
**Textes** (validés par Geoffrey, à reprendre mot pour mot) :

*Fichier `semaines-01-02.md` (ex-`semaines-01-04.md`)* : seuls ces champs changent, tout le reste reste identique.
- numero « 01-02 » · fin 2026-10-09
- resume : « Deux semaines pour poser les fondations : coder un site à la main, puis refaire la même chose sans une ligne de code avec Webflow. »
- suite : « Merise, UML et Airtable : la partie données, celle qui m'intéresse le plus. »
- chemins des 3 captures : `semaines-01-02/akira-code.png`, `semaines-01-02/webflow-editeur.png`, `semaines-01-02/webflow-mobile.png` (légendes inchangées).

*Fichier `semaines-03-05.md`* :
- numero « 03-05 » · ordre 2 · debut 2026-10-12 · fin 2026-10-28 · statut publiee
- titre : « Merise, UML et Airtable : penser en données »
- resume : « Avant de construire, apprendre à dessiner la logique : modéliser les données avec Merise et UML, puis tout monter dans Airtable avec des formules, des automatisations et des interfaces. »
- outils : Merise, UML, Whimsical, Miro, Airtable
- Ce que j'ai appris :
  - « Une journée RGPD : ce qu'on a le droit de faire (ou pas) avec des données personnelles. »
  - « Merise et UML : découper un sujet en tables, choisir les bons champs, et relier les tables avec les bonnes cardinalités (1/N, N/N). Schémas faits sur Whimsical et Miro. »
  - « Airtable : les tables liées, les champs lookup et rollup, et les formules (conditions, dates, textes). »
  - « Les automatisations : un déclencheur, des conditions, une boucle « pour chaque », puis un e-mail, un message Slack, une ligne Google Sheets ou un événement d'agenda. »
  - « Les interfaces et les formulaires : donner une vraie appli aux utilisateurs, sans leur montrer la base. »
- Ce que j'ai construit :
  - « Une série d'exercices de modélisation : fête foraine, salle de sport, plateforme de musique, plateforme d'e-learning. »
  - « La base d'un salon fictif, le « NoCode Summit » : conférences, intervenants, invités, inscriptions et salles, avec un taux de remplissage et un statut calculés, et des notifications automatiques. »
  - « Mon projet fil rouge : un outil de gestion de cours (étudiants, cours, sessions, présences). Les sessions se créent toutes seules, chaque étudiant reçoit un e-mail pour confirmer sa présence, et tout se suit dans une interface et un calendrier. »
- Ce qui a coincé :
  - « Les relations et les cardinalités : savoir quand un simple lien suffit et quand il faut une table de liaison (un N/N). J'ai refait mes schémas plusieurs fois avant que tout se tienne. »
- La suite :
  - « Jeudi et vendredi : la logique algorithmique, pour apprendre à penser comme un programme. »
- Captures (dans cet ordre, déjà recadrées et floutées par le chef de projet, dans `captures-a-trier/semaines-03-05/` du dossier principal) :
  1. `1-merise-mcd.png` → `merise-mcd.png` : « Mon schéma Merise du projet fil rouge, avec les cardinalités »
  2. `2-schema-whimsical.png` → `schema-whimsical.png` : « Le modèle du NoCode Summit, dessiné sur Whimsical »
  3. `3-airtable-formules.png` → `airtable-formules.png` : « Les conférences : taux de remplissage et statut calculés par des formules »
  4. `4-automatisation-email.png` → `automatisation-email.png` : « L'automatisation qui envoie le formulaire de présence à chaque étudiant »
  5. `5-interface-cours.png` → `interface-cours.png` : « L'interface « Cours » du projet fil rouge (données de test) »

**Actions destructives** (autorisées par Geoffrey, nommées explicitement) :
- Renommer `src/content/semaines/semaines-01-04.md` en `semaines-01-02.md` : l'adresse `/journal-de-bord/semaines/semaines-01-04/` disparaît, remplacée par `/journal-de-bord/semaines/semaines-01-02/`.
- Déplacer `public/captures/semaines-01-04/` vers `public/captures/semaines-01-02/` (les 3 mêmes fichiers).
- Supprimer `src/content/semaines/semaine-05.md` (la carte « à venir »).
Rien d'autre n'est supprimé. Les originaux de `captures-a-trier/` restent en place.

**C'est fini quand** :
- En ligne, l'accueil montre, de haut en bas : « Semaines 03-05 » (publiée, cliquable), puis « Semaines 01-02 » ; plus de carte « Semaine 05 à venir ».
- La page `/journal-de-bord/semaines/semaines-03-05/` affiche les textes ci-dessus mot pour mot et les 5 captures, qui se chargent en ligne ; la navigation va de 03-05 à 01-02 et inversement.
- La page `/journal-de-bord/semaines/semaines-01-02/` affiche « Semaines 01 à 02 », 28.09 → 09.10.2026, le nouveau résumé et ses 3 captures.
- Les 5 nouvelles captures font moins de 500 Ko chacune ; `npm run build` est vert ; la barre « SYNC FORMATION » n'a pas bougé.

**Compte rendu** (rempli par le chef) :

---

### D-003 : Clins d'œil à Akira et petites animations
**Date** : 2026-10-28 · **Statut** : livrée · **Lot** : L-003 · **Type** : produit

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
- **Livré et en ligne le 2026-10-28** : https://baroncegeoffrey-wq.github.io/journal-de-bord/ (workflow « Deploy » vert : run 40716949353 au push, puis lancement manuel 40717264989 vert).
- Commits : `5d514c2` [site] (2 composants nouveaux : `Trainee.astro`, `SyncFormation.astro` ; calcul dans `src/lib/formation.ts` ; aucune dépendance ajoutée), `5fdc822` [contenu] (`formation` dans `site.json`), plus les commits [chef] de suivi.
- Critères vérifiés : en ligne, NEO-PARIS 2026 en rouge, curseur, traînée sous le nom et sous le titre de la semaine, glitch animé au survol ; barre `05 / 13 SEMAINES` (4 vertes, 1 jaune, 8 vides) le 28/10/2026 ; dates forcées (`JDB_DATE_TEST`, jamais utilisée par le workflow) : 2026-09-01 → `00 / 13` tout vide, 2027-01-15 → `13 / 13` tout vert sans clignotement ; build en échec avec message clair si `formation` manque ou si fin < début ; `schedule` le lundi 6 h UTC ajouté, `push` et `workflow_dispatch` gardés ; moins d'animations : rien ne bouge, traînée entière, case en cours jaune ; 1280 et 390 px sans défilement horizontal (13 cases de 24 px, 4 px d'écart) ; aucune couleur en dur ; aucune balise `<script>`.
- Écarts assumés : avec « moins d'animations », la traînée reste à pleine opacité (la maquette finit à 0,85 après l'animation) ; le dernier jour (24/12) la 13e case est encore jaune, elle passe au vert à partir du 25/12 ; nouvelle variable `--blanc` (bout de la traînée) et `--halo-vert` (via `color-mix`) en plus de `--rouge`.
- Textes écrits par les sessions : aucun.
- Incident réglé en route : le build échouait dans `.worktrees/` (dépendances absentes du dossier principal), réglé par une installation des dépendances dans le dossier principal (rien de commité, voir la roadmap).

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
