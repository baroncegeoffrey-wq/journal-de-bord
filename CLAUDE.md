# Journal de bord de Geoffrey Baronce

Un petit site statique où Geoffrey publie chaque semaine ses avancées dans sa reconversion IA / no-code : ce qu'il apprend au bootcamp AI Builder d'Alegria (depuis le 28 septembre 2026), ce qu'il construit (souvent avec Claude), avec des captures.

**Lecteurs** : son futur maître d'apprentissage chez MCI Group (alternance à partir de janvier 2027), qui veut un point chaque semaine, et toute personne à qui Geoffrey l'envoie comme portfolio. Le site est **public**.

**Geoffrey débute** : il ne code pas et ne touche pas à git. Tout passe par le système chef de projet / chef de chantier décrit dans `pilotage/MODE-DE-FONCTIONNEMENT.md`.

## Pilotage

- Comment on travaille : `pilotage/MODE-DE-FONCTIONNEMENT.md`
- Consignes du chef de chantier : `pilotage/CHEF-DE-CHANTIER.md`
- Décisions : `pilotage/DECISIONS.md` · Lots : `pilotage/lots/` · Roadmap : `pilotage/ROADMAP.md`
- Maquettes validées : `resources/screens/` (elles font foi pour l'apparence)

## La techno

| Pièce | Choix |
|---|---|
| Générateur de site | **Astro** (dernière version stable), site 100 % statique, sans framework JS (pas de React/Vue) |
| Contenu | Fichiers Markdown avec en-tête (frontmatter) validé par un schéma (`src/content.config.ts`) |
| Styles | CSS maison avec variables (`src/styles/`), pas de Tailwind ni de librairie d'UI |
| Polices | Google Fonts : Chakra Petch (titres), Rajdhani (texte), Share Tech Mono (étiquettes façon terminal) |
| Hébergement | GitHub Pages, dépôt public `baroncegeoffrey-wq/journal-de-bord` |
| Mise en ligne | GitHub Actions (`.github/workflows/deploy.yml`, action officielle `withastro/action`) à chaque push sur `main` |
| Adresse | `https://baroncegeoffrey-wq.github.io/journal-de-bord/` |

Réglages Astro obligatoires pour GitHub Pages : `site: 'https://baroncegeoffrey-wq.github.io'` et `base: '/journal-de-bord'`. Tous les liens internes et chemins d'images passent par `import.meta.env.BASE_URL` (sinon ils cassent en ligne alors qu'ils marchent en local).

Commandes : `npm install`, `npm run dev`, `npm run build` (doit être vert avant toute fusion), `npm run preview`.

## Arborescence

```
CLAUDE.md                     ce fichier
pilotage/                     décisions, lots, roadmap (chef de projet / chef de chantier)
resources/screens/            maquettes HTML validées + captures de référence
scripts/                      worktree-nouveau.sh, worktree-fin.sh
captures-a-trier/             (ignoré par git) Geoffrey y dépose ses captures brutes
astro.config.mjs, package.json, tsconfig.json
.github/workflows/deploy.yml
public/                       favicon, etc.
public/captures/<semaine>/    captures publiées, une sous-dossier par semaine
src/content.config.ts         schéma des semaines
src/content/semaines/         une semaine = un fichier .md
src/data/projets.json         projets affichés sur l'accueil
src/data/outils.json          outils affichés sur l'accueil
src/layouts/ src/components/ src/pages/ src/styles/
```

## Le modèle d'une semaine

Une semaine = un fichier `src/content/semaines/semaine-<NN>.md` (ou `semaines-<NN>-<MM>.md` pour un récap de plusieurs semaines). Toutes les infos sont dans l'en-tête, pour que l'affichage soit toujours identique :

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

Le corps du fichier (sous l'en-tête) est facultatif : un paragraphe libre affiché après les 4 rubriques, si un jour Geoffrey veut en dire plus. Pour une semaine `a-venir`, seuls `numero`, `ordre`, `titre`, `debut`, `fin`, `resume`, `outils` et `statut` sont obligatoires.

L'adresse d'une semaine publiée est `/journal-de-bord/semaines/<nom-du-fichier-sans-.md>/`.

## Le ton des textes

- Première personne (« j'ai appris »), phrases courtes, direct, un peu familier mais propre : le lecteur principal est un futur responsable.
- Pas de langage corporate, pas de ton « motivation LinkedIn », pas d'emoji, **jamais de tiret long** (utiliser deux-points, virgules ou parenthèses).
- Honnête : un exercice de formation est présenté comme un exercice (« reproduction d'un site vitrine pour l'exercice »).

## Couche Site

**Fichiers** : `src/layouts/`, `src/components/`, `src/pages/`, `src/styles/`, `src/content.config.ts`, `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json`, `public/` sauf `public/captures/`, `.github/workflows/`.

Règles :
- La maquette de `resources/screens/` fait foi : couleurs, polices, coins coupés, grille de fond, lignes de balayage, effet glitch sur les grands titres, textes en majuscules pour les titres. Les variables CSS de la maquette (`--fond`, `--panneau`, `--jaune`, `--cyan`, `--magenta`, `--vert`...) sont reprises telles quelles dans `src/styles/`.
- Couleurs fixes des rubriques : 01 appris = cyan, 02 construit = jaune, 03 ce qui a coincé = magenta, 04 la suite = vert.
- Site uniquement en sombre : pas de thème clair.
- Responsive : doit être parfait à 390 px (téléphone) et à 1280 px. Pas de défilement horizontal.
- Accessibilité de base : un seul `h1` par page, `alt` sur chaque image, contrastes lisibles, liens au clavier, `lang="fr"`, animations coupées si `prefers-reduced-motion`.
- Les textes affichés viennent du contenu (`src/content/`, `src/data/`), jamais écrits en dur dans les composants, sauf les libellés fixes de l'interface (« Les semaines », « Mes projets », « Ce que j'ai appris », etc.).
- Pas de JavaScript côté navigateur sauf décision explicite.
- Images : composant `<img>` simple avec `loading="lazy"` et dimensions ; un clic sur une capture l'ouvre en grand (lien direct vers le fichier, sans JS).
- Pas de nouvelle dépendance npm sans le signaler dans le compte rendu (seule autorisée d'office : `astro`).

## Couche Contenu

**Fichiers** : `src/content/semaines/`, `src/data/`, `public/captures/`.

Règles :
- Aucun code, aucune modification du schéma : si le schéma bloque, on le signale au chef.
- Les textes viennent de la décision du lot (validés par Geoffrey). Ne pas en inventer, ne pas les « améliorer ». S'il manque un petit texte (une légende), l'écrire selon « Le ton des textes » et le lister dans le compte rendu.
- Captures : copiées depuis `captures-a-trier/` ou `resources/screens/captures/` vers `public/captures/<nom-de-la-semaine>/`, renommées en minuscules avec des tirets, compressées (largeur max 1600 px, PNG ou WebP, moins de 500 Ko chacune). Ne jamais supprimer les originaux de `captures-a-trier/`.
- Ne jamais publier une image qui n'est pas une capture du travail de Geoffrey (pas d'affiche, de logo, de personnage d'une œuvre).
- `npm run build` doit rester vert.
