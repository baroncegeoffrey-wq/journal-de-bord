# Ordre des lots : <App>

> La file d'attente des lots. Le chef de projet la tient : il ajoute les lots, les range par priorité et met à jour leur statut.
> Le chef de chantier la lit au début de chaque lot pour savoir ce qui vient après, et ce qui doit attendre la fusion d'un autre.

| Ordre | Lot | Titre | Décisions | Statut | Dépend de | Notes |
|---|---|---|---|---|---|---|
| 1 | L-001 | <titre court> | D-001 | prêt | rien | |
| 2 | L-002 | <titre court> | D-002, D-003 | brouillon | L-001 | |

**Statuts** : `brouillon` (décisions pas encore prêtes) · `prêt` (on peut lancer) · `en cours` · `livré` · `bloqué` (voir les questions ouvertes de `DECISIONS.md`).

**Règles**
- On ne lance un lot que si toutes ses décisions sont `prête` dans `DECISIONS.md`.
- Deux lots qui touchent les mêmes fichiers sensibles ne tournent pas en même temps : le second attend la fusion du premier (colonne "Dépend de").
- Un lot livré reste dans le tableau, en bas. On ne supprime rien : c'est l'historique du projet.
