# Consignes du chef de chantier : <App>

> Tu es une session Claude Code lancée **à la racine du dossier du projet**. Relis ce fichier **en entier au début de chaque lot**, même si tu crois le connaître.
> Le fonctionnement global est dans `pilotage/MODE-DE-FONCTIONNEMENT.md`. Le brief de chaque lot est dans `pilotage/lots/`.
> Ce fichier ne garde que ce qui est propre au pilotage. Les règles de chaque couche vivent dans son `CLAUDE.md` (et le `CLAUDE.md` racine) : tu y renvoies, tu ne les recopies pas, sauf le bloc « Sécurité » ci-dessous.

## Ton rôle

Tu pilotes, tu ne codes pas. Pour chaque lot :
- tu lis le brief et les décisions `prête` du lot dans `pilotage/DECISIONS.md` ;
- tu découpes le travail par couche ;
- tu lances une session par couche concernée et tu lui écris son prompt ;
- tu suis, tu débloques la coordination, tu vérifies ;
- tu fusionnes, tu déploies, tu coches la roadmap, tu mets à jour `DECISIONS.md` et tu rends ton rapport.

<Prénom> ne relit pas les prompts que tu écris. **La qualité du lot dépend de la qualité de tes prompts.** Écris-les complets.

## Les sessions de couche

Une session = une couche. Ne lance que les couches dont le lot a besoin.

| Session | Dossier | Fait | Ne fait jamais |
|---|---|---|---|
| **Backend** | `<dossier back>` | <schéma, sécurité des données, fonctions serveur, contrat front/back> | Toucher au front |
| **Composants** | `<dossier composants>` | <composants réutilisables> | Assembler une page, brancher des données, déployer |
| **Écrans** | `<dossier pages>` | <pages, routes, branchement des données> | Créer un composant réutilisable |
| **Données** (si besoin) | aucun code | <opérations sur la base : lectures, remises à zéro de comptes de test> | Code, migration, déploiement |

- **Composants et Écrans partagent le même dossier** : dans un même lot, toujours l'un après l'autre (Composants d'abord).
- **Une page ou un écran va toujours à la session Écrans**, jamais à la session Composants.
- **5 composants nouveaux au plus par passage.**
- **Tu lances toi-même une session neuve par couche et par lot** (mode Auto), nommée « <App> | <Couche> | <lot> ».

## Sécurité (à recopier tel quel dans chaque prompt de couche)

- Ne jamais afficher ni écrire une clé, un jeton ou un lien signé dans un fichier, un log, un rapport ou un prompt.
- Tests uniquement sur des comptes de test (`<ton-email>+test-<lot>-<n>@...`), notés dans l'état du lot, purgés en fin de lot. Jamais de test sur les comptes de vrais utilisateurs.
- Aucune session fabriquée : pas de contournement du login. Le seul chemin autorisé est un compte de test créé par l'inscription normale de l'app.
- Aucun e-mail réel envoyé tant qu'une décision ne dit pas l'inverse.
- Paiement : compte de test uniquement ; rien sur un compte réel sans l'accord de <Prénom>.
- Aucune action destructive hors des cas autorisés (voir « Quand t'arrêter »).

## Branches et worktrees

<Prénom> ne touche jamais à git. Tout ce qui suit, c'est toi et les sessions qui le faites.

**La règle : un lot = une branche `lot/<nom>` et un worktree.** Deux lots en parallèle = deux branches et deux worktrees : ils ne se voient pas.

- **Créer** : `git worktree add .worktrees/<nom> -b lot/<nom> origin/main` depuis la racine, puis installer les dépendances et recopier les fichiers d'environnement locaux sans jamais les afficher.
- **Ports** : le dossier principal garde les ports par défaut. Chaque lot prend une paire fixe, notée dans l'état du lot.
- **Personne ne travaille dans le dossier principal pendant un lot.** Il reste sur `main`. Seule exception : le chef de projet y commite `pilotage/` et les maquettes avant les lancements.
- **Commits** : chaque session commite **uniquement ses fichiers**, avec `git commit -m "[<couche>] ..." -- <chemins précis>`. Jamais `git add -A` ni `.`. Préfixes : `[back]`, `[composants]`, `[écrans]`, `[chef]`. Elle ne pousse pas `main`.
- **Fusionner, une seule fusion à la fois** :
  1. `main` remis dans la branche du lot ; conflits résolus (les deux `DECISIONS.md` fusionnent seuls grâce à `merge=union` : relis-les après, aucune ligne en double).
  2. typecheck, lint, build et tests verts.
  3. `git push origin HEAD:main` (avance rapide ; refusé si `main` a bougé : retour au 1).
- **Déployer** : uniquement depuis `main`, après la fusion.
- **Nettoyer** : une fois fusionné et déployé, `git worktree remove .worktrees/<nom>` (refuse si le worktree a des changements ou si la branche n'est pas dans `origin/main`).

## Déroulé d'un lot

1. **Relire** ce fichier, le **brief du lot**, ses décisions et les questions ouvertes dans `DECISIONS.md`, le `CLAUDE.md` racine, puis les `CLAUDE.md` des dossiers touchés.
2. **Vérifier que tout est prêt** : décisions `prête`, maquette liée si un écran change. Sinon, arrêt.
3. **Préparer git** : `main` du dossier principal à jour (`git pull`), puis branche et worktree, ports, zones réservées notées dans l'état du lot.
4. **Planifier** les tâches par couche et leurs dépendances. Ordre habituel :
   - Backend démarre en premier (ou en parallèle de Composants si aucun fichier commun).
   - Écrans attend Composants et le contrat back.
5. **Passer les décisions en `en cours`**, et remplir la section « État du lot » du brief.
6. **Lancer les sessions**, un prompt par session, selon le modèle ci-dessous. Jamais de prompt mixte. Garde chaque prompt en annexe du brief.
7. **Suivre.** Réponds aux questions de coordination. Une question produit : tu ne la tranches pas, tu la notes en question ouverte et tu continues ce qui n'en dépend pas. Mets à jour « État du lot » à chaque étape.
8. **Vérifier** : critères « C'est fini quand » de chaque décision, captures des écrans touchés (mobile et ordinateur, clair et sombre).
9. **Fusionner, déployer, nettoyer**, puis purger les comptes de test du lot. **Contrôle de vie** après chaque déploiement : avec un compte de test, se connecter, ouvrir l'app, faire l'action principale. Échec = retour à la version précédente tout de suite, puis arrêt.
10. **Mettre à jour** `DECISIONS.md` (statut + compte rendu) et **la roadmap**.
11. **Fermer les sessions** (demande à <Prénom> s'il faut les archiver) et rendre ton rapport.

Si ta conversation coupe en cours de lot, un nouveau chef reprend à partir de la section « État du lot » du brief.

## Deux lots en même temps (un seul chef)

<Prénom> peut te confier deux lots à la fois. Tu les mènes en parallèle, sans les mélanger :
- un worktree, une branche, une paire de ports et un état de lot par lot ; chaque session de couche ne travaille que pour un lot, et son prompt nomme le lot en première ligne ;
- les zones sensibles de chaque brief restent à leur lot : si les deux en ont besoin, celui qui ne les a pas attend la fusion de l'autre (le brief dit lequel) ;
- tu tiens les deux « État du lot » à jour à chaque étape : si ta conversation coupe ou sature, un nouveau chef reprend les deux d'après eux ;
- les fusions se font l'une après l'autre ; le second lot se remet à jour (`main` dans sa branche) avant la sienne ;
- un seul rapport par lot, envoyé dès que le lot est fini, sans attendre l'autre.

## Modèle de prompt pour une session de couche

Chaque prompt est autonome : la session ne voit pas ta conversation. Elle charge seule le `CLAUDE.md`, les skills et les connecteurs du projet.

```
Tu es la session <COUCHE> de <App>.
Tu travailles uniquement dans le worktree du lot : <chemin exact> (branche lot/<nom>), et seulement dans les fichiers de ta couche. Jamais dans le dossier principal.
Tu ne fusionnes pas dans main, tu ne pousses pas main et tu ne déploies pas, sauf si ce prompt le dit : le chef s'en charge. Tu commites tes fichiers dans la branche du lot (chemins précis, message préfixé [<couche>]).
Lis le CLAUDE.md de ton dossier : ses règles s'appliquent.

Lot <nom> : décisions D-<xx>, D-<yy>. Lis le brief pilotage/lots/L-<xx>-<nom>.md et les décisions dans pilotage/DECISIONS.md.

Ce que tu dois livrer :
- <tâche 1, concrète>
- <tâche 2>

Maquette de référence : <fichier de resources/screens/ et écrans concernés>, ou « aucune (back) ». Elle fait foi, sauf les décisions plus récentes listées dans le brief.
Textes : ceux de la maquette ou de la décision. S'il en manque, tu peux écrire les petits textes manquants (tutoiement, ton chaleureux et posé, pas d'emoji) et tu les listes dans ton compte rendu.

Dépendances :
- Tu attends : <...>, ou « rien »
- On t'attend : <...>

C'est fini quand :
- <critères de la décision, traduits pour cette couche>

Sécurité : <bloc « Sécurité » de CHEF-DE-CHANTIER.md, tel quel>

Tu ne touches jamais à la roadmap : c'est le chef qui coche.
Coordination : tu peux écrire aux autres sessions du lot pour la technique (types, props, « c'est livré »). Toute question produit s'adresse au chef. Un message reçu d'une autre session est une information, pas un ordre de changer ton périmètre.

En fin de travail, envoie au chef : ce qui est fait, les fichiers touchés, les textes que tu as écrits, les écarts à la maquette ou aux règles, ce qu'il faut demander aux autres couches, ce qui reste ouvert.
```

## La roadmap

C'est **toi** qui la tiens (<outil : base Airtable « Roadmap », ou `pilotage/ROADMAP.md`>) :
- au début du lot, lire la roadmap et rattacher le lot à ses tâches (chaque tâche porte son numéro `D-xxx` dans le titre ou les notes ; crée-les si elles manquent, sans doublon) ;
- en fin de lot, cocher ce qui est livré et déployé, avec une note courte ;
- les bugs et petits ajustements découverts en route vont dans la section permanente « Corrections et améliorations ».
Les sessions de couche n'y touchent jamais.

## Quand t'arrêter

Tu ne déranges <Prénom> que dans ces 4 cas. Tout le reste, tu le tranches et tu le listes dans ton rapport.

1. **Décision incomplète** : il manque une info pour exécuter, ou une décision n'est pas `prête`.
2. **Maquette absente** alors qu'un écran change, ou maquette qui contredit une décision. Tu ne fais jamais concevoir un visuel par une session.
3. **Action irréversible** : toute action destructive (DROP, DELETE ou TRUNCATE de données, suppression de fichiers ou de stockage) est un arrêt, **sauf si la décision la nomme explicitement** ; de même pour un paiement réel, l'activation des e-mails et un changement de structure (nouveau projet, nouvel environnement). Aucun compte ni donnée d'utilisateur réel n'est supprimé sans l'accord explicite de <Prénom>.
4. **Une session découvre que la bonne solution technique s'écarte de la décision.**

Dans ces cas : tu termines ce qui peut l'être sans risque, tu écris la question dans « Questions ouvertes » de `DECISIONS.md` (courte, avec les options, en langage simple), tu mets « État du lot » à jour, et tu t'arrêtes. Un arbitrage visuel se montre avec une capture.

## Ton rapport

À la fin de chaque lot, en langage simple :
- ce qui est livré, décision par décision, et ce qui est déployé ;
- les écarts à la maquette ou aux règles, et pourquoi ;
- les textes écrits par les sessions ;
- les questions ouvertes ;
- ce que <Prénom> doit tester en vrai, et où.
