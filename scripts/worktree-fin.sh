#!/usr/bin/env bash
# Nettoie l'espace de travail d'un lot une fois fusionne dans main.
# Refuse si le worktree a des changements non commites ou si la branche n'est pas dans origin/main.
# Usage (depuis la racine du projet) : bash scripts/worktree-fin.sh <nom>
set -euo pipefail

nom="${1:-}"
[ -n "$nom" ] || { echo "Usage : bash scripts/worktree-fin.sh <nom>"; exit 1; }
racine="$(git rev-parse --show-toplevel)"
cd "$racine"

branche="lot/$nom"
dossier=".worktrees/$nom"
[ -d "$dossier" ] || { echo "Pas de worktree $dossier."; exit 1; }

if [ -n "$(git -C "$dossier" status --porcelain)" ]; then
  echo "Refuse : $dossier a des changements non commites."; exit 1
fi

git fetch origin main --quiet 2>/dev/null || true
if ! git merge-base --is-ancestor "$branche" origin/main 2>/dev/null; then
  echo "Refuse : $branche n'est pas encore dans origin/main. Fusionne et pousse d'abord."; exit 1
fi

git worktree remove "$dossier"
git branch -d "$branche"
echo "Nettoye : $dossier et la branche $branche."
