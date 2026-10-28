# Roadmap : Journal de bord

> Tenue par le chef de chantier : il coche en fin de lot, avec une note courte. Le chef de projet ajoute les lignes. Les sessions de couche n'y touchent jamais.
> Une ligne = une décision `D-xxx`. `[ ]` à faire · `[~]` en cours · `[x]` livré et en ligne.

## Mise en place

- [x] **D-001** : site en ligne (Astro + GitHub Pages), accueil, récap semaines 01 à 04, semaine 05 à venir · lot L-001 · en ligne le 2026-10-28

## Les semaines

- [ ] **D-002** : semaine 05, Airtable · lot L-002 (après le récit de Geoffrey, vendredi 30 octobre)

## Améliorations prévues

- [ ] **D-003** : clins d'œil à Akira et petites animations · lot L-003 (maquette v3 à faire)
- [ ] Idée : un vrai nom de domaine (environ 10 € par an), pas encore décidé
- [ ] Idée : passer « EN FORMATION » à « EN ALTERNANCE » en janvier 2027, pas encore décidé

## Corrections et améliorations

> Section permanente : bugs et petits ajustements découverts en route.

- [ ] Ajouter `src/lib/` à la liste des fichiers de la couche Site dans le `CLAUDE.md` racine (fichier créé au L-001). Pour le chef de projet.
- [ ] Node.js est installé dans `~/.local/node` mais pas dans le PATH permanent : chaque session doit faire `export PATH="$HOME/.local/node/bin:$PATH"`. À rendre permanent (ligne dans `~/.profile`) si Geoffrey l'autorise, ou à noter dans le `CLAUDE.md`.
- [ ] Avertissement GitHub : l'étiquette `ubuntu-latest` du workflow « Deploy » passe à Ubuntu 26. Rien à faire tant que le déploiement reste vert.
