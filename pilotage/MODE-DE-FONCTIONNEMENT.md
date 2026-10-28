# Mode de fonctionnement : Journal de bord

> À lire par le chef de projet avant toute discussion produit ou technique sur Journal de bord.

## En une phrase

Geoffrey décide avec le chef de projet. Le chef de projet écrit les décisions dans `pilotage/DECISIONS.md` et le brief du lot. Un **chef de chantier** (une session Claude Code) lance lui-même les sessions de couche, leur écrit leurs prompts, suit, vérifie, fusionne, déploie, coche la roadmap et rend un rapport. Geoffrey ne copie-colle plus de prompts de couche et ne relit pas les prompts.

## Qui fait quoi

| Qui | Rôle | Ne fait jamais |
|---|---|---|
| **Geoffrey** | Décide. Répond aux questions produit. Raconte sa semaine et fournit ses captures. Teste en usage réel (ouvre le site, sur ordinateur et téléphone). | Copier-coller des prompts de couche, relire des prompts, lancer des commandes terminal, toucher à git |
| **Chef de projet** (conversation Claude avec accès au dossier) | Réfléchit avec Geoffrey, challenge, explique les choix en langage simple. Écrit les décisions et le brief. Prépare les maquettes. Met en forme le contenu de chaque semaine à partir de ce que Geoffrey raconte. Écrit le **prompt de lancement** du chef. **Vérifie après chaque lot** (roadmap, site en ligne, ce qui a été coché). | Coder, écrire les prompts des sessions de couche |
| **Chef de chantier** (Claude Code, à la racine) | Lit `CHEF-DE-CHANTIER.md`, le brief et les décisions, découpe le travail, lance les sessions de couche, leur écrit leurs prompts, vérifie, fusionne, déploie, **coche la roadmap**, rend compte. | Coder lui-même, prendre une décision produit qui n'est pas écrite |
| **Sessions de couche** (Claude Code) | Une par couche, dans le worktree du lot. Exécutent. | Toucher les fichiers d'une autre couche, décider du produit, toucher à la roadmap |

Les couches (2 au maximum) :
- **Site** : le code du site Astro (mise en page, composants, pages, styles, configuration, mise en ligne automatique). Gros travail au début, puis rare.
- **Contenu** : les semaines, les captures, les projets et les outils affichés. Aucun code. C'est la couche qui tourne chaque semaine.

Détail des dossiers dans `CHEF-DE-CHANTIER.md` et dans le `CLAUDE.md` racine.

## Les fichiers

Le `CLAUDE.md` de la racine décrit **ce qu'est** le site et les règles de chaque couche.

Le dossier `pilotage/` décrit **ce qu'on décide et comment on construit** :

| Fichier | Contenu | Qui écrit |
|---|---|---|
| `MODE-DE-FONCTIONNEMENT.md` | Ce fichier | Chef de projet, quand le mode change |
| `DECISIONS.md` | Le journal des décisions produit et de lot, avec leur statut | Le chef de projet écrit les décisions ; le chef de chantier met à jour le statut, le compte rendu et les questions ouvertes |
| `ROADMAP.md` | La roadmap : ce qui est prévu, en cours, livré | Le chef de chantier coche ; le chef de projet ajoute les lignes |
| `lots/_ORDRE.md` | La file d'attente des lots : ordre, statut, dépendances | Le chef de projet ; le chef de chantier met à jour le statut |
| `lots/L-xxx-<nom>.md` | Le **brief** d'un lot, son **état** (tenu par le chef de chantier) et les prompts de couche en annexe | Le chef de projet écrit le brief ; le chef de chantier tient l'état et l'annexe |
| `CHEF-DE-CHANTIER.md` | Les consignes permanentes du chef de chantier | Chef de projet, quand une règle change |

Les maquettes validées vivent dans `resources/screens/` (fichiers HTML ouvrables dans un navigateur, captures dans `resources/screens/captures/`).

Le chef de projet commite ses propres fichiers (`pilotage/`, `resources/`, `CLAUDE.md`) directement sur `main`, avant le lancement d'un lot. **Exception tant que le chef de projet n'a pas de terminal sur l'ordinateur de Geoffrey** : il écrit ses fichiers dans le dossier, et le prompt de lancement demande au chef de chantier de les commiter sur `main` en tout premier (commit `[projet]`, chemins précis). Tout le reste passe par la branche d'un lot.

## Le cycle d'un lot

1. **On discute** (Geoffrey + chef de projet). Plan global, puis questions et brainstorming. Le chef de projet challenge, explique en langage simple ce que le lecteur verra, vise propre sans usine à gaz. Les décisions sont validées par Geoffrey **ici**, avant tout lancement.
2. **Le chef de projet écrit les décisions** dans `DECISIONS.md`, une entrée `D-xxx` par décision, au statut `prête` (voir « Test de la décision prête »).
3. **Maquette d'abord.** Si la décision change l'apparence du site : maquette validée par Geoffrey, enregistrée dans `resources/screens/` et liée dans la décision. Claude Code ne conçoit jamais un visuel. Une nouvelle semaine qui suit le modèle existant n'a pas besoin de maquette.
4. **Le chef de projet écrit le brief du lot** dans `pilotage/lots/` : tout ce que la conversation contient et que la doc ne dit pas.
5. **Le chef de projet donne à Geoffrey le prompt de lancement du chef**, dans un bloc de code, prêt à coller. C'est le **seul** copier-coller de Geoffrey.
6. **Le chef de chantier exécute tout le lot** : branche et worktree, sessions de couche, vérifications, fusion, mise en ligne, roadmap, `DECISIONS.md`.
7. **Geoffrey revient chez le chef de projet** (« le chef a fini » ou « le chef bloque »). Le chef de projet relit `DECISIONS.md` et le brief, **vérifie** que la roadmap et le site en ligne disent la même chose que le rapport, puis traite les questions ouvertes avec Geoffrey et écrit les décisions suivantes.

Pas de recette à préparer pour Geoffrey : il teste en usage réel. Les retours arrivent au fil de l'eau et deviennent des décisions comme les autres.

## Le rythme d'une semaine (une fois le site en place)

1. En fin de semaine, Geoffrey raconte sa semaine en vrac au chef de projet et dépose ses captures dans `captures-a-trier/` à la racine.
2. Le chef de projet met en forme les 4 rubriques, les fait valider par Geoffrey, écrit la décision et le brief (couche Contenu seule).
3. Geoffrey colle le prompt de lancement. Le chef de chantier publie.

## Test de la décision prête

Avant de passer une décision en `prête`, le chef de projet vérifie qu'elle contient :

- **Quoi** : le comportement attendu, vu par le lecteur.
- **Pourquoi** : une ou deux phrases. Le chef s'en sert pour trancher les petits cas.
- **Couches touchées**.
- **Maquette** : fichier de `resources/screens/` si l'apparence change.
- **Textes** : les textes importants validés par Geoffrey.
- **Actions destructives** : si la décision supprime quelque chose (fichiers, pages, captures), elle le **nomme explicitement**. Sinon, le chef s'arrête.
- **C'est fini quand** : 2 à 5 critères vérifiables.

Si une info manque, le chef de projet pose la question à Geoffrey **avant** d'écrire la décision.

## Modèle du prompt de lancement (écrit par le chef de projet)

```
Tu es le chef de chantier de Journal de bord.
Relis d'abord pilotage/CHEF-DE-CHANTIER.md, puis pilotage/DECISIONS.md.

Lot : L-<numéro>, <titre court> (branche lot/<nom>)
Brief : pilotage/lots/L-<numéro>-<nom>.md (lis-le en entier)
Décisions à livrer : D-<xx>, D-<yy>

Exécute le lot de bout en bout selon tes consignes. Arrête-toi seulement dans les cas prévus par CHEF-DE-CHANTIER.md.
À la fin, mets à jour DECISIONS.md, l'état du lot et la roadmap, et donne-moi ton rapport.
```

## Mise en route (une seule fois)

- **Lancement à la racine** : le chef se lance toujours dans le dossier racine du projet (`~/Documents/01-Projets/journal-de-bord`), sinon il ne voit pas tout le projet.
- **Lancement des sessions de couche** : le chef lance lui-même une session neuve par couche et par lot, en mode Auto, nommée « Journal de bord | <Couche> | <lot> », et leur compte rendu lui revient. Il vérifie que ça marche au premier lot. **Plan B** : prompts en annexe du brief, Geoffrey ouvre les sessions.
- **Plan Pro** : une seule session de couche à la fois, sauf si Geoffrey demande du parallèle. Le système est le même, il prend juste plus de temps et consomme moins de quota.
- **Autorisations, à deux endroits** :
  1. **Les commandes du terminal** : fichier `.claude/settings.local.json` à la racine (ignoré par git). Autorisés d'office : git courant, `npm install`, `npm run build`, `npm run dev`, scripts du projet, `gh run list` / `gh run view`. À confirmer : `git push`, changement des réglages du dépôt GitHub. Interdits : git destructif, `rm -rf`.
  2. **Les connecteurs** : dans l'app Claude, Personnalisation > Connecteurs, outil par outil (autoriser / demander / bloquer). Lecture autorisée, écriture et suppression à confirmer.
  Restent toujours à confirmer par Geoffrey : tout ce qui supprime des fichiers ou des contenus publiés, l'envoi d'e-mails, les paiements réels.
- **Hébergement** : GitHub Pages, dépôt `baroncegeoffrey-wq/journal-de-bord`, public. Mise en ligne automatique par GitHub Actions à chaque arrivée sur `main`. Adresse : `https://baroncegeoffrey-wq.github.io/journal-de-bord/`.
- **Scripts** : `scripts/worktree-nouveau.sh <nom>` crée la branche et le worktree d'un lot ; `scripts/worktree-fin.sh <nom>` les nettoie après fusion.
- **Git** : `.gitattributes` avec `pilotage/DECISIONS.md merge=union` ; `.worktrees/`, `.claude/settings.local.json`, `node_modules/`, `dist/` et `.astro/` dans `.gitignore`.
