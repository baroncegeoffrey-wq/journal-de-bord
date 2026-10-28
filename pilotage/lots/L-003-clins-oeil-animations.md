# L-003 : Clins d'œil Akira et animations

> Brief écrit par le chef de projet avant le lancement. Le chef de chantier et les sessions ont toute la doc et le code, mais pas la conversation : tout ce qui compte dans la conversation et qui n'est écrit nulle part va ici.

**Date** : 2026-10-28 · **Décisions** : D-003 (détail dans `pilotage/DECISIONS.md`) · **Dossiers touchés** : `src/styles/`, `src/components/`, `src/pages/`, `src/layouts/`, `src/lib/`, `.github/workflows/deploy.yml`, `src/data/site.json` · **Sessions prévues** : Site, puis Contenu · **Publier la version test** : oui (mise en ligne normale après fusion)

## L'objectif

Le site garde exactement sa structure, mais il devient plus vivant et plus perso : un clin d'œil à Akira (« NEO-PARIS 2026 » en rouge, une traînée lumineuse rouge sous le nom et sous le titre de chaque semaine), un nom qui « bugge » au survol, un curseur de terminal qui clignote. Et une barre « SYNC FORMATION » montre au maître d'apprentissage de Geoffrey où il en est du bootcamp, semaine par semaine, sans que personne ait à la mettre à jour.

## Ce qu'on a écarté, et pourquoi

- **B, le grand texte japonais (航海日誌) en fond** : beau sur ordinateur, mais charge l'en-tête et gêne la lecture sur téléphone. Ne pas le réintroduire.
- **G, l'apparition des cartes au défilement** : ne marche pas partout (Safari) et n'apporte pas grand-chose. Ne pas le réintroduire.
- **JavaScript** : inutile, tout se fait en CSS. Le calcul de la barre se fait à la construction du site (Astro, côté serveur), pas dans le navigateur.
- **Toute image, logo, pilule ou personnage d'Akira** : interdit (droits d'auteur, et règle 9 du `CLAUDE.md`). Les clins d'œil sont des idées (Néo-Tokyo → Néo-Paris, le rouge, les feux de moto), jamais des éléments du film.

## Pièges connus et points d'attention

- **La barre se calcule au build** : sans reconstruction, elle reste figée. D'où le déclenchement planifié du lundi dans `deploy.yml` (`schedule: - cron: '0 6 * * 1'`), en plus de `push` et `workflow_dispatch` qui restent. Le chef lance le workflow à la main une fois après la fusion pour vérifier qu'il passe.
- **Fuseau horaire** : GitHub Actions tourne en UTC. Le calcul de la semaine compare des dates (jour), pas des heures : utiliser des dates à minuit UTC des deux côtés pour éviter un décalage d'un jour.
- **Le calcul** : semaine en cours = nombre de jours écoulés depuis le début ÷ 7, arrondi vers le bas, + 1, borné entre 0 et le total. Total = nombre de semaines entre début et fin (arrondi vers le haut) = 13. Le mettre dans `src/lib/` (fonction pure, testable en lui passant une date). Pour tester avant / pendant / après, passer une date à la fonction, ou une variable d'environnement lue seulement au build (ex. `JDB_DATE_TEST`), jamais utilisée par le workflow.
- **Les deux dates sont du contenu** : elles vont dans `src/data/site.json` (couche Contenu), par exemple `"formation": { "debut": "2026-09-28", "fin": "2026-12-24" }`. La session Site définit la forme, la lit et la valide (build en échec si elle manque ou si fin < début), et pour travailler elle peut ajouter les dates dans sa copie sans les commiter ; la session Contenu les écrit pour de vrai.
- **13 cases sur téléphone** : la maquette tient à 390 px. Ne pas descendre sous 4 px d'écart entre les cases.
- **Règle 4 du CLAUDE.md** : aucune couleur en dur. Le rouge `#FF1E2D` devient la variable `--rouge`, déclarée avec les autres dans `src/styles/`. Le dégradé de la traînée et le halo vert de la barre (`rgba(61,255,139,.6)` dans la maquette) passent eux aussi par des variables ou par `color-mix()` sur les variables existantes.
- **Le glitch au survol** utilise `clip-path` : vérifier que le titre ne « saute » pas en hauteur (pas de changement de mise en page pendant l'animation).
- **`prefers-reduced-motion`** : la règle globale de la maquette coupe toutes les animations. Vérifier qu'avec elle, la traînée est visible en entier (pas bloquée à largeur 0) et que la case en cours reste jaune.
- **Les maquettes v3** remplacent les v2 aux mêmes noms de fichier. Pour voir les différences : `git diff HEAD~1 -- resources/screens/` après le commit [projet], ou chercher le commentaire `V3` dans le CSS de chaque maquette.

## Ce qui est hors du lot

- La semaine 05 (D-002, lot L-002) : la carte reste « à venir ».
- Passer « EN FORMATION » à « EN ALTERNANCE » en janvier : pas décidé.
- Toute autre animation que celles listées dans D-003, même petite.
- Le nom de domaine.

## Maquettes et textes

- Maquettes : `resources/screens/accueil.html` et `resources/screens/semaine.html` (v3, validées le 2026-10-28). Ouvrir l'accueil dans un navigateur, passer la souris sur le nom, recharger pour revoir la traînée. Tout le nouveau CSS est regroupé en fin de bloc `<style>` sous le commentaire `V3`.
- Textes validés : `NEO-PARIS 2026`, `SYNC FORMATION`, `<NN> / <TT> SEMAINES`. Dates : début 2026-09-28, fin 2026-12-24.

## Questions déjà tranchées en cours de discussion

- Idées retenues : A, C, D, E, F, H (les recommandations du chef de projet). B et G écartées.
- Page semaine : mêmes effets que l'accueil pour le titre (traînée C + glitch E), rien d'autre.
- Fin du bootcamp : « fin décembre » selon Geoffrey ; on prend le 24 décembre 2026 (13 semaines). Si la date exacte change, c'est une ligne à corriger dans `src/data/site.json`.
- Pas de JavaScript.

## Zones sensibles réservées

- `src/data/site.json` et `.github/workflows/deploy.yml` : réservés à ce lot jusqu'à sa fusion. Le lot L-002 attend la fusion de L-003.

---

## État du lot (tenu par le chef de chantier)

- **Statut** : pas commencé
- **Branche / worktree** : 
- **Ports** : 4351 (prévu)
- **Comptes de test créés** : aucun (site sans compte)
- **Sessions lancées** : 
- **Fait** : 
- **Reste à faire** : 
- **Bloquant** : 

---

## Annexe : prompts de couche (écrits par le chef de chantier)
