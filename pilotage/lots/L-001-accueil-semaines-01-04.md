# L-001 : Site en ligne, accueil + semaines 01 à 04

> Brief écrit par le chef de projet avant le lancement. Le chef de chantier et les sessions ont toute la doc et le code, mais pas la conversation : tout ce qui compte dans la conversation et qui n'est écrit nulle part va ici.

**Date** : 2026-10-28 · **Décisions** : D-001 (détail dans `pilotage/DECISIONS.md`) · **Dossiers touchés** : tout le projet Astro (à créer à la racine), `.github/workflows/` · **Sessions prévues** : Site, puis Contenu · **Publier la version test** : oui, c'est le but du lot (mise en ligne sur GitHub Pages)

## L'objectif

Après ce lot, Geoffrey a un vrai site en ligne qu'il peut envoyer à son futur maître d'apprentissage chez MCI Group et mettre sur son CV. L'accueil présente son journal, ses projets et ses outils ; une première page raconte ses 4 premières semaines de bootcamp (HTML, CSS, Webflow) avec 3 captures. La semaine 05 est annoncée « à venir ». Et surtout, publier une nouvelle semaine ne demandera plus qu'un fichier texte et des captures.

## Ce qu'on a écarté, et pourquoi

- **Notion, Softr, Wix, Webflow** pour héberger le journal : moins personnalisables ou payants pour un rendu pro, et impossibles à piloter avec le système chef de chantier. Ne pas les réintroduire.
- **Netlify, Vercel, Cloudflare Pages** : très bien aussi, mais demandent un compte de plus ; le dépôt est déjà sur GitHub. On reste sur GitHub Pages.
- **React, Vue, Tailwind, librairie d'UI** : inutiles pour un site de cette taille, et ajoutent de la complexité. Astro seul, CSS maison.
- **Maquette v1** (fond crème, pastel) : refusée par Geoffrey. La v2 néon cyberpunk est la seule référence.
- **Thème clair** : pas pour l'instant, le style est sombre par nature.
- **Un texte de présentation de Geoffrey** sur l'accueil : il a choisi de ne pas en mettre (juste l'intro d'une phrase et les deux étiquettes).

## Pièges connus et points d'attention

- **Le `base` de GitHub Pages** : le site vit sous `/journal-de-bord/`. Tout lien ou chemin d'image écrit « en dur » qui commence par `/` marche en local et casse en ligne. Toujours passer par `import.meta.env.BASE_URL`. La vérification se fait **sur l'adresse en ligne**, pas seulement en local.
- **Activer GitHub Pages** : dans les réglages du dépôt, la source doit être « GitHub Actions ». Le chef de chantier peut le faire avec `gh api` (cas prévu dans ses consignes). Le dépôt doit être **public** : Geoffrey a donné son accord pour que le dépôt et le site soient publics. Si le dépôt est encore privé, **arrêt** : donner à Geoffrey les clics (Settings > General > Danger Zone > Change visibility > Public, puis Settings > Pages > Source : GitHub Actions).
- **Le dépôt n'a pas encore de `package.json`** : le script `worktree-nouveau.sh` n'installera rien au premier lancement. La session Site crée le projet Astro **dans le worktree, à la racine** (pas dans un sous-dossier), sans écraser `pilotage/`, `resources/`, `scripts/`, `CLAUDE.md`, `.gitignore`, `.gitattributes`.
- **Les polices Google Fonts** : les charger avec `preconnect` + `display=swap`. Les maquettes les utilisent déjà.
- **Les notes HTML en commentaire** dans les maquettes (« Maquette validée... ») ne s'affichent pas sur le site.
- **Nombre de colonnes des captures** : la grille de la maquette est en `auto-fit` ; avec 3 captures, c'est 3 colonnes sur grand écran et 1 sur téléphone. C'est voulu.
- **Les captures Webflow** montrent des photos d'illustration de l'exercice : Geoffrey confirme qu'elles sont libres de droit. La capture du code Akira ne montre que du code : OK.
- **Le récap 01-04** est un seul fichier qui couvre 4 semaines : `numero: "01-04"`, nom de fichier `semaines-01-04.md`, adresse `/journal-de-bord/semaines/semaines-01-04/`.

## Ce qui est hors du lot

- Les clins d'œil à Akira et les animations (D-003, lot L-003) : même si c'est tentant, **rien d'animé** dans ce lot au-delà du survol des cartes déjà dans la maquette.
- Le contenu réel de la semaine 05 (D-002, lot L-002).
- Un nom de domaine, des statistiques de visite, un formulaire de contact, un flux RSS.
- Toute page « À propos » ou « Contact ».

## Maquettes et textes

- Maquettes : `resources/screens/accueil.html` et `resources/screens/semaine.html` (v2, validées le 2026-10-28). Les ouvrir dans un navigateur pour les voir. Elles contiennent déjà toutes les couleurs, polices, tailles et effets.
- Captures de référence à publier : `resources/screens/captures/s1-4-akira-code.png`, `s1-4-webflow-editeur.png`, `s1-4-webflow-mobile.png` → à copier par la session Contenu dans `public/captures/semaines-01-04/` sous les noms `akira-code.png`, `webflow-editeur.png`, `webflow-mobile.png` (compressées si plus de 500 Ko).
- Textes utilisateur validés : tous dans D-001, à reprendre mot pour mot.

## Questions déjà tranchées en cours de discussion

- Techno : Astro + GitHub Pages + mise en ligne automatique : validé par Geoffrey.
- Nom affiché : « Geoffrey Baronce » (orthographe confirmée).
- Style : néon cyberpunk façon Edgerunners, mais 100 % original (aucun logo, nom ou personnage de la série).
- Format d'une semaine : 4 rubriques fixes (appris / construit / coincé / suite) + captures.
- Les premières semaines sont « des bases, pas forcément intéressantes » : on les regroupe en un seul récap court plutôt que 4 pages.
- C'est bien du **CSS** (pas un CMS) qui a été vu en semaines 1-2.
- Le site Webflow « Switch and Go » est un exercice de reproduction, pas une vraie agence : on ne le nomme pas, on dit « un exercice de la formation ».
- Ce qui a coincé en semaines 1-4 : rien de bloquant (texte validé).
- Accueil : liste des semaines + projets (Pacity, Golden Wing) + outils. Pas de présentation longue.
- Public : Geoffrey est d'accord pour que le dépôt et le site soient publics.
- Golden Wing : description volontairement vague (pas de chiffres, pas d'associée nommée, pas de détails juridiques).

## Zones sensibles réservées

- `astro.config.mjs`, `package.json`, `src/content.config.ts`, `.github/workflows/deploy.yml` : réservés à ce lot jusqu'à sa fusion (L-002 et L-003 en dépendent).

---

## État du lot (tenu par le chef de chantier)

- **Statut** : pas commencé
- **Branche / worktree** : 
- **Ports** : 4331 (prévu)
- **Comptes de test créés** : aucun (site sans compte)
- **Sessions lancées** : 
- **Fait** : 
- **Reste à faire** : 
- **Bloquant** : 

---

## Annexe : prompts de couche (écrits par le chef de chantier)
