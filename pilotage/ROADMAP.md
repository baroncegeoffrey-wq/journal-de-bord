# Roadmap : Journal de bord

> Tenue par le chef de chantier : il coche en fin de lot, avec une note courte. Le chef de projet ajoute les lignes. Les sessions de couche n'y touchent jamais.
> Une ligne = une décision `D-xxx`. `[ ]` à faire · `[~]` en cours · `[x]` livré et en ligne.

## Mise en place

- [x] **D-001** : site en ligne (Astro + GitHub Pages), accueil, récap semaines 01 à 04, semaine 05 à venir · lot L-001 · en ligne le 2026-10-28

## Les semaines

- [~] **D-004** : semaine 05 (logique algorithmique en Ruby), cartes projets perso « Journal de bord » et « Roadmap », outil Ruby · lot L-004
- [x] **D-002** : semaines 03 à 05 (Merise, UML, Airtable) et récap corrigé en semaines 01-02 · lot L-002 · en ligne le 2026-10-28

## Améliorations prévues

- [x] **D-003** : clins d'œil à Akira (Néo-Paris, traînée rouge, glitch, curseur) et barre de progression du bootcamp · lot L-003 · en ligne le 2026-10-28, reconstruction automatique chaque lundi 6 h UTC
- [ ] Idée : un vrai nom de domaine (environ 10 € par an), pas encore décidé
- [ ] Idée : passer « EN FORMATION » à « EN ALTERNANCE » en janvier 2027, pas encore décidé

## Corrections et améliorations

> Section permanente : bugs et petits ajustements découverts en route.

- [x] Ajouter `src/lib/` à la liste des fichiers de la couche Site dans le `CLAUDE.md` racine (fichier créé au L-001). Pour le chef de projet. Fait au passage au modèle v3 (2026-10-28).
- [x] Node.js est installé dans `~/.local/node` mais pas dans le PATH permanent : chaque session doit faire `export PATH="$HOME/.local/node/bin:$PATH"`. À rendre permanent (ligne dans `~/.profile`) si Geoffrey l'autorise, ou à noter dans le `CLAUDE.md`. Noté dans le `CLAUDE.md` (partie 5) au passage au modèle v3 (2026-10-28).
- [ ] Avertissement GitHub : l'étiquette `ubuntu-latest` du workflow « Deploy » passe à Ubuntu 26. Rien à faire tant que le déploiement reste vert.
- [x] Le build échouait dans `.worktrees/` (« Tsconfig not found astro/tsconfigs/strict ») : l'outil de build remonte jusqu'au `tsconfig.json` du dossier principal, qui n'avait pas ses dépendances. Réglé au L-003 par `npm ci` dans le dossier principal (rien de commité). À refaire si `node_modules/` du dossier principal disparaît.
