# L-004 : Semaine 05 (Ruby) + projet perso « Journal de bord »

> Brief écrit par le chef de projet avant le lancement. Le chef de chantier et les sessions ont toute la doc et le code, mais pas la conversation : tout ce qui compte dans la conversation et qui n'est écrit nulle part va ici.

**Date** : 2026-10-30 · **Décisions** : D-004 (détail dans `pilotage/DECISIONS.md`) · **Dossiers touchés** : `src/content/semaines/`, `src/data/`, `public/captures/` · **Sessions prévues** : Contenu seule · **Publier la version test** : oui (mise en ligne normale après fusion)

## L'objectif

Le journal montre la fin de la semaine 5 (deux jours de logique algorithmique en Ruby, avec deux mini-jeux) et met en avant les projets perso de Geoffrey, construits en pilotant Claude comme un chantier : ce site, et Roadmap, son outil de suivi de projets. Geoffrey envoie le lien à son futur maître d'apprentissage chez MCI Group juste après : le site doit être impeccable.

## Ce qu'on a écarté, et pourquoi

- **Publier la présentation « Présentation Claude.pdf »** (dans les Téléchargements de Geoffrey) : c'est le support de cours d'un intervenant, pas un travail de Geoffrey. Ne pas la publier, ni en capture ni en lien.
- **Les gros mots en clair** dans les captures des mini-jeux : masqués par des étoiles par le chef de projet (« ma g***** », « c** »). Ne pas republier les captures d'origine.
- **Une entrée séparée pour le projet Claude** : le projet perso va dans « Mes projets » (il dure dans le temps) et une ligne dans « Ce que j'ai construit » de la semaine.

## Pièges connus et points d'attention

- **Les captures sont hors git** : dans le dossier principal, `captures-a-trier/semaine-05/` (absent du worktree). Les copier depuis `/home/mogeogeogeo/Documents/01-Projets/journal-de-bord/captures-a-trier/semaine-05/` vers `public/captures/semaine-05/`, renommées sans le préfixe numéroté (voir D-004). Elles sont déjà recadrées : ne pas en prendre d'autres.
- **Nom de fichier** : `semaine-05.md` (singulier), adresse `/journal-de-bord/semaines/semaine-05/`. Ce nom a déjà existé (ancienne carte « à venir » supprimée au L-002) : c'est voulu, pas un conflit.
- **Ordre** : `semaine-05` prend `ordre: 3`.
- **Guillemets** : textes avec « » imbriqués, garder des guillemets droits doubles en YAML.
- **`projets.json`** : les deux nouvelles cartes (Journal de bord, puis Roadmap) vont **en premier** ; Pacity et Golden Wing ne changent pas. 4 cartes = 2 lignes de 2 sur ordinateur : vérifier que la grille reste propre.
- **Roadmap** : appli perso de Geoffrey déjà en ligne (Supabase + Netlify). On n'affiche pas son adresse : pas de lien vers l'appli, seulement la capture.

## Ce qui est hors du lot

- Toute modification de code, de styles ou de schéma (pas de session Site).
- Le mail au maître d'apprentissage : préparé à part par le chef de projet, envoyé par Geoffrey lui-même.

## Maquettes et textes

- Maquette : aucune, contenu au modèle existant.
- Textes : tous dans D-004, à reprendre mot pour mot.

## Questions déjà tranchées en cours de discussion

- Le cours (29-30.10) : logique algorithmique en Ruby. Syntaxe de base, if / elsif / else, boucles, méthodes (def), garder des infos pendant une partie. Mini-jeux : menu jeu 1 / jeu 2, Juste Prix (1 à 100), Guess What (deviner un mot parmi une liste).
- Difficulté : la syntaxe ; l'essentiel était de comprendre le mécanisme.
- Le projet Claude est un projet perso, à présenter comme tel.

## Zones sensibles réservées

- `src/content/semaines/`, `src/data/projets.json`, `src/data/outils.json`, `public/captures/` : réservés à ce lot jusqu'à sa fusion.

---

## État du lot (tenu par le chef de chantier)

- **Statut** : pas commencé
- **Branche / worktree** : 
- **Ports** : 4361 (prévu)
- **Comptes de test créés** : aucun (site sans compte)
- **Sessions lancées** : 
- **Fait** : 
- **Reste à faire** : 
- **Bloquant** : 

---

## Annexe : prompts de couche (écrits par le chef de chantier)
