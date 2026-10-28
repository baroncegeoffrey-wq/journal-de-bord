# Ordre des lots : Journal de bord

> La file d'attente des lots. Le chef de projet la tient : il ajoute les lots, les range par priorité et met à jour leur statut.
> Le chef de chantier la lit au début de chaque lot pour savoir ce qui vient après, et ce qui doit attendre la fusion d'un autre.

| Ordre | Lot | Titre | Décisions | Statut | Dépend de | Notes |
|---|---|---|---|---|---|---|
| 1 | L-001 | Site en ligne : accueil + semaines 01 à 04 | D-001 | livré | rien | Brief : `L-001-accueil-semaines-01-04.md`. Couches Site puis Contenu. |
| 2 | L-003 | Clins d'œil Akira et animations | D-003 | livré | L-001 | Brief : `L-003-clins-oeil-animations.md`. Site puis Contenu. Passe avant L-002 (prêt plus tôt). |
| 3 | L-002 | Semaines 03-05 : Merise, UML, Airtable + correction 01-02 | D-002 | livré | L-003 | Brief : `L-002-semaines-03-05.md`. Contenu seul. |

**Statuts** : `brouillon` (décisions pas encore prêtes) · `prêt` (on peut lancer) · `en cours` · `livré` · `bloqué` (voir les questions ouvertes de `DECISIONS.md`).

**Règles**
- On ne lance un lot que si toutes ses décisions sont `prête` dans `DECISIONS.md`.
- Deux lots qui touchent les mêmes fichiers sensibles ne tournent pas en même temps : le second attend la fusion du premier (colonne "Dépend de").
- Un lot livré reste dans le tableau, en bas. On ne supprime rien : c'est l'historique du projet.
