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
**Date** : 2026-10-28 · **Statut** : en cours · **Lot** : L-001 · **Type** : produit

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

---

### D-002 : Semaine 05, Airtable
**Date** : 2026-10-28 · **Statut** : brouillon · **Lot** : L-002 · **Type** : contenu

**Quoi** :
- La Semaine 05 passe de « à venir » à « publiée », avec ses 4 rubriques et ses captures, au modèle existant.

**Pourquoi** : c'est la première semaine sur la partie qui intéresse le plus Geoffrey (données et automatisation), donc la plus utile pour son maître d'apprentissage.
**Couches** : Contenu.
**Maquette** : aucune (contenu au modèle existant).
**Textes** : à écrire avec Geoffrey en fin de semaine (vendredi 30 octobre), à partir de son récit et de ses captures.
**Actions destructives** : aucune.
**C'est fini quand** : à compléter.

**Manque pour passer en `prête`** : le récit de Geoffrey, ses captures dans `captures-a-trier/`, les textes validés.

**Compte rendu** (rempli par le chef) :

---

### D-003 : Clins d'œil à Akira et petites animations
**Date** : 2026-10-28 · **Statut** : brouillon · **Lot** : L-003 · **Type** : produit

**Quoi** (idée à affiner) :
- Ajouter quelques clins d'œil à l'univers d'Akira et du cyberpunk manga pour rendre le site plus vivant, et des petits effets animés (ex. titre qui glitche au survol, traînée lumineuse, apparition des cartes au défilement).

**Pourquoi** : Geoffrey veut un site plus stylé et plus personnel ; sa première page codée en formation était un hommage à Akira, ça fait le lien.
**Couches** : Site.
**Maquette** : à faire (v3), à valider par Geoffrey avant de passer en `prête`.
**Règle déjà fixée** : uniquement des clins d'œil **originaux** (couleur, ambiance, typographie, motifs, petits textes). Aucune affiche, aucun logo, aucun personnage, aucune image ni titre stylisé tirés du film, du manga ou de la série.
**Textes** : à définir.
**Actions destructives** : aucune.
**C'est fini quand** : à compléter.

**Manque pour passer en `prête`** : la liste précise des clins d'œil et animations, la maquette v3 validée, la décision d'autoriser un peu de JavaScript ou non (les animations peuvent souvent se faire en CSS seul).

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
