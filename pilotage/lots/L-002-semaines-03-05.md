# L-002 : Semaines 03 à 05 (Merise, UML, Airtable) + correction du récap 01-02

> Brief écrit par le chef de projet avant le lancement. Le chef de chantier et les sessions ont toute la doc et le code, mais pas la conversation : tout ce qui compte dans la conversation et qui n'est écrit nulle part va ici.

**Date** : 2026-10-28 · **Décisions** : D-002 (détail dans `pilotage/DECISIONS.md`) · **Dossiers touchés** : `src/content/semaines/`, `public/captures/` · **Sessions prévues** : Contenu seule · **Publier la version test** : oui (mise en ligne normale après fusion)

## L'objectif

Le maître d'apprentissage de Geoffrey voit enfin la partie qui compte : comment Geoffrey a appris à modéliser des données (Merise, UML) puis à construire avec Airtable (formules, automatisations, interfaces), jusqu'à son projet fil rouge. Et le journal colle au vrai calendrier de la formation : le premier récap ne couvre que les semaines 1 et 2.

## Ce qu'on a écarté, et pourquoi

- **Attendre vendredi pour publier** : Geoffrey veut publier maintenant. La partie Airtable s'est terminée mercredi 28 ; jeudi et vendredi (logique algorithmique) iront dans la prochaine entrée.
- **Garder « Semaines 01-04 »** : faux d'après l'agenda officiel (Merise/UML dès le 13.10, Airtable dès le 15.10).
- **Mermaid** : mauvaise compréhension au départ, il s'agit de **Merise** (méthode française de modélisation). Ne pas écrire « Mermaid ».
- **La capture de l'e-mail reçu dans Gmail** : écartée, elle montre la boîte mail personnelle de Geoffrey.

## Pièges connus et points d'attention

- **Les captures sont hors git** : elles sont dans le dossier principal, `captures-a-trier/semaines-03-05/` (ignoré par git, donc **absent du worktree**). La session Contenu les copie depuis le chemin absolu `/home/mogeogeogeo/Documents/01-Projets/journal-de-bord/captures-a-trier/semaines-03-05/` vers `public/captures/semaines-03-05/` du worktree, renommées sans le préfixe numéroté (voir D-002). Elles sont déjà recadrées, sans les onglets du navigateur, et les numéros de téléphone sont floutés : **ne pas les remplacer par d'autres captures** du dossier `~/Pictures`.
- **Renommer, pas copier** : `git mv` pour `semaines-01-04.md` → `semaines-01-02.md` et pour `public/captures/semaines-01-04/` → `public/captures/semaines-01-02/`, pour garder l'historique. Mettre à jour les 3 chemins `fichier:` dans le Markdown.
- **L'ancienne adresse `/semaines/semaines-01-04/` va renvoyer une page introuvable** : c'est accepté (le site a moins d'un jour, personne n'a encore le lien).
- **Les guillemets** : certains textes contiennent des « » imbriqués. En YAML, garder les chaînes entre guillemets droits doubles `"..."` ; les « » à l'intérieur ne posent pas de problème.
- **Ordre** : `semaines-01-02` garde `ordre: 1`, `semaines-03-05` prend `ordre: 2`.
- **La barre SYNC FORMATION** ne dépend pas des semaines publiées : elle ne doit pas bouger.

## Ce qui est hors du lot

- Toute modification de code, de styles ou de schéma (pas de session Site).
- Une nouvelle carte « à venir » : pas pour l'instant.
- La logique algorithmique (29-30.10) : prochaine entrée, décidée vendredi.

## Maquettes et textes

- Maquette : aucune, contenu au modèle existant.
- Textes : tous dans D-002, à reprendre mot pour mot.

## Questions déjà tranchées en cours de discussion

- Découpage, d'après l'agenda Alegria : S1 = rentrée, intro IA, HTML/CSS ; S2 = Webflow ; S3 = RGPD (lundi 12), Merise/UML (13-14), Airtable (15-16) ; S4 = Airtable ; S5 = Airtable (26-28), logique algorithmique (29-30).
- Outils vus : Whimsical et Miro pour les schémas, Airtable pour la construction.
- Ce qui a le plus coincé : les relations et les cardinalités.
- Publication : maintenant.

## Zones sensibles réservées

- `src/content/semaines/` et `public/captures/` : réservés à ce lot jusqu'à sa fusion.

---

## État du lot (tenu par le chef de chantier)

- **Statut** : pas commencé
- **Branche / worktree** : 
- **Ports** : 4341 (prévu)
- **Comptes de test créés** : aucun (site sans compte)
- **Sessions lancées** : 
- **Fait** : 
- **Reste à faire** : 
- **Bloquant** : 

---

## Annexe : prompts de couche (écrits par le chef de chantier)
