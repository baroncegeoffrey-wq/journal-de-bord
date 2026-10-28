#!/usr/bin/env bash
# Cree l'espace de travail d'un lot : une branche lot/<nom> et un worktree dans .worktrees/<nom>.
# Usage (depuis la racine du projet) : bash scripts/worktree-nouveau.sh <nom>
# Exemple : bash scripts/worktree-nouveau.sh page-accueil
set -euo pipefail

nom="${1:-}"
[ -n "$nom" ] || { echo "Usage : bash scripts/worktree-nouveau.sh <nom>"; exit 1; }
racine="$(git rev-parse --show-toplevel)"
cd "$racine"

branche="lot/$nom"
dossier=".worktrees/$nom"

if [ -e "$dossier" ]; then echo "Le worktree $dossier existe deja."; exit 1; fi

# main a jour avant de partir
git fetch origin main --quiet 2>/dev/null || true
base="origin/main"; git rev-parse --verify --quiet "$base" >/dev/null || base="main"

# --no-track : la branche du lot ne suit pas main, un simple "git push" ne peut pas pousser sur main
git worktree add --no-track "$dossier" -b "$branche" "$base"

# Recopie les fichiers d'environnement locaux (jamais affiches, jamais commites)
for f in .env .env.local; do
  [ -f "$f" ] && cp "$f" "$dossier/$f" && echo "Copie de $f (contenu non affiche)"
done

# Installe les dependances si le projet en a
if [ -f "$dossier/package.json" ]; then (cd "$dossier" && npm install --silent); fi

echo
echo "Pret : $dossier sur la branche $branche (partie de $base)."
