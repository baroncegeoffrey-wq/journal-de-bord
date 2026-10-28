# Journal de bord : règlement du chantier

> Le premier fichier que Claude lit à chaque conversation. Il décrit comment on travaille ici, pas l'historique. Une info vit à un seul endroit : ailleurs, on pointe vers elle.

## 1. Le projet en 2 lignes

Un petit site statique et public où Geoffrey Baronce publie chaque semaine ses avancées dans sa reconversion IA / no-code (bootcamp AI Builder d'Alegria, puis alternance chez MCI Group).
Son futur maître d'apprentissage y lit un point clair chaque semaine, et le site sert de portfolio ; publier une semaine ne demande qu'un fichier texte et des captures.

## 2. Où trouver quoi

| Tu cherches... | C'est dans... |
|---|---|
| Ce qu'est le site (lecteurs, fonctionnalités, écrans, modèle d'une semaine) | `PROJECT-CONTEXT.md` |
| Comment on travaille (chef de projet, chef de chantier, cycle d'un lot) | `pilotage/MODE-DE-FONCTIONNEMENT.md` |
| Les consignes du chef de chantier | `pilotage/CHEF-DE-CHANTIER.md` |
| Les décisions et leur statut | `pilotage/DECISIONS.md` |
| Le brief d'un lot (et son état) | `pilotage/lots/L-xxx-<nom>.md` |
| L'ordre des lots | `pilotage/lots/_ORDRE.md` |
| La roadmap | `pilotage/ROADMAP.md` |
| Les maquettes validées (elles font foi pour l'apparence) | `resources/screens/` (captures de référence dans `resources/screens/captures/`) |
| Les captures brutes de Geoffrey (ignoré par git) | `captures-a-trier/` |
| Les scripts de branche et d'espace de travail | `scripts/worktree-nouveau.sh`, `scripts/worktree-fin.sh` |
| La configuration du site | `astro.config.mjs`, `package.json`, `tsconfig.json`, `.github/workflows/deploy.yml` |
| Le code du site | `src/layouts/`, `src/components/`, `src/pages/`, `src/styles/`, `src/lib/`, `src/content.config.ts` (schéma) |
| Le contenu | `src/content/semaines/` (une semaine = un fichier `.md`), `src/data/` (`site.json`, `projets.json`, `outils.json`) |
| Les fichiers servis tels quels | `public/` (favicon) et `public/captures/<semaine>/` (captures publiées) |

## 3. Qui fait quoi

- **Geoffrey** décide, raconte sa semaine, fournit ses captures et teste le site en vrai (ordinateur et téléphone). Il débute : il ne code pas et ne touche pas à git.
- **Le chef de projet** (conversation Claude) réfléchit avec lui, écrit les décisions, les briefs et les maquettes, met en forme le texte de chaque semaine, vérifie après chaque lot. Il ne code pas.
- **Le chef de chantier** (Claude Code, à la racine) lance une session par couche, vérifie, fusionne, met en ligne, coche la roadmap et rend un rapport en langage simple. Il ne code pas.
- **Les sessions de couche** (une session Claude Code par couche et par lot) exécutent dans leur couche. Deux couches : **Site** et **Contenu** (règles ci-dessous). Elles ne décident jamais du produit.

## 4. Les règles non négociables

1. Aucune action destructive sans validation de Geoffrey (supprimer des fichiers, des pages ou des captures en ligne, forcer git), sauf si la décision du lot la nomme.
2. Lire un fichier en entier avant de le modifier.
3. Pas de maquette, pas de changement d'apparence : on reproduit `resources/screens/`, on ne conçoit jamais un visuel.
4. Aucune couleur en dur : tout passe par les variables CSS de la maquette (`--fond`, `--panneau`, `--jaune`, `--cyan`, `--magenta`, `--vert`...), reprises telles quelles dans `src/styles/`.
5. Aucune clé, jeton ou lien signé dans un fichier commité, un log, un rapport ou un prompt.
6. Une session ne touche que les fichiers de sa couche et commite avec des chemins précis (jamais `git add -A` ni `.`).
7. « Terminé » n'est pas « en ligne » : on vérifie sur `https://baroncegeoffrey-wq.github.io/journal-de-bord/` avant de dire que c'est livré.
8. Le site est public : aucune donnée personnelle au-delà de ce que les décisions valident (pas d'adresse, de téléphone, d'e-mail, rien sur la famille ni sur les finances de Golden Wing).
9. Images : uniquement les captures du travail de Geoffrey et les visuels de la maquette. Jamais d'affiche, de logo, de personnage ou d'image d'une œuvre protégée, même pour un clin d'œil.
10. Aucun service tiers (statistiques, cookies, formulaire, police hors Google Fonts) et pas de JavaScript côté navigateur sans décision.
11. Tous les liens internes et chemins d'images passent par `import.meta.env.BASE_URL` (un chemin en dur qui commence par `/` marche en local et casse en ligne).
12. `npm run build` doit être vert avant toute fusion : il vérifie aussi que chaque semaine respecte le schéma.
13. Les textes affichés viennent du contenu (`src/content/`, `src/data/`), jamais écrits en dur dans les composants, sauf les libellés fixes de l'interface (« Les semaines », « Mes projets », « Ce que j'ai appris »...).

### Couche Site

**Fichiers** : `src/layouts/`, `src/components/`, `src/pages/`, `src/styles/`, `src/lib/`, `src/content.config.ts`, `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json`, `public/` sauf `public/captures/`, `.github/workflows/`.

- La maquette de `resources/screens/` fait foi : couleurs, polices, coins coupés, grille de fond, lignes de balayage, effet glitch sur les grands titres, titres en majuscules.
- Couleurs fixes des rubriques : 01 appris = cyan, 02 construit = jaune, 03 ce qui a coincé = magenta, 04 la suite = vert.
- Site uniquement en sombre : pas de thème clair.
- Responsive : parfait à 390 px (téléphone) et à 1280 px, sans défilement horizontal.
- Accessibilité de base : un seul `h1` par page, `alt` sur chaque image, contrastes lisibles, liens au clavier, `lang="fr"`, animations coupées si `prefers-reduced-motion`.
- Images : `<img>` simple avec `loading="lazy"` et dimensions ; un clic sur une capture l'ouvre en grand (lien direct vers le fichier, sans JS).
- Pas de nouvelle dépendance npm sans le signaler dans le compte rendu (seule autorisée d'office : `astro`).

### Couche Contenu

**Fichiers** : `src/content/semaines/`, `src/data/`, `public/captures/`.

- Aucun code, aucune modification du schéma : si le schéma bloque, on le signale au chef. La forme des fichiers est décrite dans `PROJECT-CONTEXT.md` (« Modèle de données »).
- Les textes viennent de la décision du lot (validés par Geoffrey). Ne pas en inventer, ne pas les « améliorer ». S'il manque un petit texte (une légende), l'écrire selon le ton ci-dessous et le lister dans le compte rendu.
- Captures : copiées depuis `captures-a-trier/` ou `resources/screens/captures/` vers `public/captures/<nom-de-la-semaine>/`, renommées en minuscules avec des tirets, compressées (largeur max 1600 px, PNG ou WebP, moins de 500 Ko chacune). Ne jamais supprimer les originaux.

## 5. La stack et le ton

**Stack**

| Pièce | Choix |
|---|---|
| Générateur de site | **Astro** (dernière version stable), site 100 % statique, sans framework JS (pas de React/Vue) |
| Contenu | Fichiers Markdown avec en-tête validé par un schéma (`src/content.config.ts`), plus quelques fichiers JSON |
| Styles | CSS maison avec variables (`src/styles/`), pas de Tailwind ni de librairie d'UI |
| Polices | Google Fonts : Chakra Petch (titres), Rajdhani (texte), Share Tech Mono (étiquettes façon terminal) |
| Hébergement | GitHub Pages, dépôt public `baroncegeoffrey-wq/journal-de-bord` |
| Mise en ligne | GitHub Actions (`.github/workflows/deploy.yml`, workflow « Deploy », action officielle `withastro/action`) à chaque push sur `main` |
| Adresse | `https://baroncegeoffrey-wq.github.io/journal-de-bord/` |

- Réglages Astro obligatoires pour GitHub Pages : `site: 'https://baroncegeoffrey-wq.github.io'` et `base: '/journal-de-bord'`.
- Node.js est installé dans `~/.local/node`, hors du PATH permanent : chaque commande qui utilise node ou npm commence par `export PATH="$HOME/.local/node/bin:$PATH" && ...`.
- Commandes : `npm install`, `npm run dev`, `npm run build`, `npm run preview`. Le dossier principal garde le port 4321 ; chaque lot a son port (voir `pilotage/CHEF-DE-CHANTIER.md`).

**Ton des textes**

- Première personne (« j'ai appris »), phrases courtes, direct, un peu familier mais propre : le lecteur principal est un futur responsable.
- Pas de langage corporate, pas de ton « motivation LinkedIn », pas d'emoji, **jamais de tiret long** (utiliser deux-points, virgules ou parenthèses).
- Honnête : un exercice de formation est présenté comme un exercice (« reproduction d'un site vitrine pour l'exercice »).
