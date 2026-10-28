# Journal de bord : le brief vivant

> Décrit ce que le site EST aujourd'hui. Après chaque lot livré, le chef de chantier met à jour les sections concernées.
> On ne journalise pas ici : l'historique et le « pourquoi » sont dans `pilotage/DECISIONS.md`.

## Résumé

Geoffrey Baronce est en reconversion dans l'IA et le no-code : bootcamp AI Builder d'Alegria depuis le 28 septembre 2026, puis alternance chez MCI Group à partir de janvier 2027.
Le site est son journal de bord public : chaque semaine, ce qu'il a appris, ce qu'il a construit (souvent avec Claude), ce qui a coincé et la suite, avec des captures.
Lecteurs : son futur maître d'apprentissage chez MCI Group, qui veut un point chaque semaine, et toute personne à qui Geoffrey l'envoie comme portfolio.
Toutes les semaines ont le même format, pour se lire vite. Publier une semaine ne demande qu'un fichier texte et des captures, sans toucher au code.

## Fonctionnalités

| Fonctionnalité | V1 (en ligne) | Plus tard | Hors scope |
|---|---|---|---|
| Accueil : en-tête, liste des semaines, projets, outils | x | | |
| Page d'une semaine : 4 rubriques, captures, navigation précédente / suivante | x | | |
| Semaine « à venir » : carte grisée sur l'accueil, sans page | x | | |
| Capture ouverte en grand au clic (sans JavaScript) | x | | |
| Récap des semaines 01 à 04 (publié) et semaine 05 (à venir) | x | | |
| Contenu de la semaine 05, Airtable (D-002) | | x | |
| Clins d'œil Akira (originaux) et petites animations (D-003) | | x | |
| Nom de domaine personnel | | idée | |
| « EN FORMATION » qui devient « EN ALTERNANCE » en janvier 2027 | | idée | |
| Thème clair | | | x |
| Statistiques de visite, cookies, formulaire de contact | | | x |
| Flux RSS | | | x |
| Page « À propos » ou « Contact », texte de présentation long | | | x |

## Parcours

1. Le lecteur arrive sur l'accueil : il voit qui est Geoffrey en une phrase, puis les semaines, la plus récente en haut.
2. Il ouvre une semaine publiée : résumé, ce qui a été appris, construit, ce qui a coincé, la suite, puis les captures.
3. Il agrandit une capture d'un clic, puis passe à la semaine précédente ou suivante.
4. En bas de l'accueil, il voit les projets de Geoffrey (Pacity, Golden Wing) et ses outils.

## Écrans

| Écran | Maquette | Ce qu'on y fait |
|---|---|---|
| Accueil (`/journal-de-bord/`) | `resources/screens/accueil.html` | Barre façon terminal, en-tête (nom glitché, intro, 2 étiquettes), « 01 Les semaines » (cartes publiées cliquables, cartes « à venir » grisées), « 02 Mes projets », « 03 Mes outils », pied de page |
| Semaine (`/journal-de-bord/semaines/<nom-du-fichier>/`) | `resources/screens/semaine.html` | Lien retour, badge, titre, dates, résumé, étiquettes, les 4 rubriques, texte libre facultatif, « En images », navigation précédente / suivante |

Titres d'onglet : « Journal de bord de Geoffrey Baronce » (accueil), « <Titre de la semaine> · Journal de bord » (semaine). Favicon : carré jaune à coins coupés avec « GB ».

## Modèle de données

**Une semaine** = un fichier `src/content/semaines/semaine-<NN>.md` (ou `semaines-<NN>-<MM>.md` pour un récap de plusieurs semaines). Tout est dans l'en-tête, pour que l'affichage soit toujours identique :

```yaml
---
numero: "01-04"            # texte affiché dans le badge ("05", "01-04")
ordre: 1                   # sert au tri (le plus grand en haut de l'accueil)
titre: "Les bases : HTML, CSS et Webflow"
debut: 2026-09-28
fin: 2026-10-23
resume: "Une ou deux phrases."
outils: ["HTML", "CSS", "Webflow"]
statut: publiee            # publiee | a-venir (a-venir = carte grisée sur l'accueil, pas de page)
appris: ["...", "..."]     # rubrique 01, cyan
construit: ["..."]         # rubrique 02, jaune
coince: ["..."]            # rubrique 03, magenta
suite: ["..."]             # rubrique 04, vert
captures:
  - fichier: "semaines-01-04/akira-code.png"   # relatif à public/captures/
    legende: "Le code HTML de la page Akira"
---
```

- Le corps du fichier (sous l'en-tête) est facultatif : un paragraphe libre affiché après les 4 rubriques.
- Semaine `publiee` : `appris`, `construit`, `coince`, `suite` et `captures` sont obligatoires, avec au moins un élément chacun, et chaque capture doit exister dans `public/captures/`. Sinon `npm run build` échoue avec un message qui dit ce qui manque.
- Semaine `a-venir` : seuls `numero`, `ordre`, `titre`, `debut`, `fin`, `resume`, `outils` et `statut` sont obligatoires.
- Adresse d'une semaine publiée : `/journal-de-bord/semaines/<nom-du-fichier-sans-.md>/`.

**Les données de l'accueil** (dans `src/data/`, l'ordre du fichier est l'ordre affiché, pas d'`id` à écrire ; couleurs possibles : `jaune`, `cyan`, `magenta`, `vert`) :

- `site.json` : `{ "intro": "...", "etiquettes": [{ "texte": "AI Builder · Alegria", "couleur": "cyan" }, ...] }`
- `projets.json` : `[{ "nom", "etiquette", "couleur", "outils": [], "description" }]`
- `outils.json` : `[{ "nom", "couleur" }]`

**Captures publiées** : `public/captures/<nom-de-la-semaine>/`, en minuscules avec des tirets, 1600 px de large au plus, moins de 500 Ko.

## Spécificités

- Site 100 % statique, en français (`lang="fr"`), uniquement en sombre, style néon cyberpunk 100 % original.
- Hébergé sous un sous-dossier : `https://baroncegeoffrey-wq.github.io/journal-de-bord/`. Mis en ligne automatiquement à chaque arrivée sur `main`.
- Lisible à 390 px (téléphone) et à 1280 px, sans défilement horizontal.
- Accessibilité de base : un seul grand titre par page, texte alternatif sur chaque image, navigation au clavier, animations coupées si le lecteur le demande.
- Aucun JavaScript côté navigateur, aucun service tiers, aucune donnée personnelle au-delà de ce qui est validé.

## Décisions ouvertes

- Semaine 05 : textes et captures à écrire avec Geoffrey (voir D-002).
- Clins d'œil Akira et animations : liste, maquette v3 et JavaScript autorisé ou non (voir D-003).
- Nom de domaine et passage à « EN ALTERNANCE » : idées de la roadmap, pas encore décidées.
