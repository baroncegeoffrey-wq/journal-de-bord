import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { lireJour } from './lib/formation';

// Couleurs de la maquette utilisables dans les fichiers de données.
const couleur = z.enum(['jaune', 'cyan', 'magenta', 'vert']);

const texte = z.string().trim().min(1, { error: 'Ce texte ne peut pas être vide.' });
const listeDeTextes = z.array(texte);

// Les 4 rubriques et les captures d'une semaine publiée.
const RUBRIQUES = {
  appris: 'rubrique 01, « Ce que j\'ai appris »',
  construit: 'rubrique 02, « Ce que j\'ai construit »',
  coince: 'rubrique 03, « Ce qui a coincé »',
  suite: 'rubrique 04, « La suite »',
  captures: 'galerie « En images »',
} as const;

const semaines = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/semaines' }),
  schema: z
    .object({
      numero: texte,
      ordre: z.number(),
      titre: texte,
      debut: z.coerce.date(),
      fin: z.coerce.date(),
      resume: texte,
      outils: listeDeTextes,
      statut: z.enum(['publiee', 'a-venir'], {
        error: 'Le statut doit être « publiee » ou « a-venir ».',
      }),
      appris: listeDeTextes.optional(),
      construit: listeDeTextes.optional(),
      coince: listeDeTextes.optional(),
      suite: listeDeTextes.optional(),
      captures: z
        .array(
          z.object({
            fichier: texte.regex(/^[^/].*\.(png|webp|jpe?g)$/i, {
              error:
                'Le chemin d\'une capture est relatif à public/captures/ (ex. "semaines-01-04/akira-code.png"), sans « / » au début, en .png, .webp ou .jpg.',
            }),
            legende: texte,
          }),
        )
        .optional(),
    })
    .superRefine((semaine, ctx) => {
      if (semaine.fin < semaine.debut) {
        ctx.addIssue({
          code: 'custom',
          path: ['fin'],
          message: 'La date de fin est avant la date de début.',
        });
      }
      if (semaine.statut !== 'publiee') return;
      for (const [champ, nom] of Object.entries(RUBRIQUES)) {
        const valeur = semaine[champ as keyof typeof RUBRIQUES];
        if (!valeur || valeur.length === 0) {
          ctx.addIssue({
            code: 'custom',
            path: [champ],
            message: `Une semaine « publiee » doit avoir le champ « ${champ} » (${nom}) avec au moins un élément.`,
          });
        }
      }
    }),
});

// Lit un tableau JSON et donne à chaque élément un id (sa position),
// pour garder l'ordre du fichier à l'affichage.
const tableauOrdonne = (text: string) =>
  (JSON.parse(text) as Record<string, unknown>[]).map((element, index) => ({
    ...element,
    id: String(index).padStart(3, '0'),
    position: index,
  }));

const projets = defineCollection({
  loader: file('src/data/projets.json', { parser: tableauOrdonne }),
  schema: z.object({
    position: z.number(),
    nom: texte,
    etiquette: texte,
    couleur,
    outils: listeDeTextes,
    description: texte,
  }),
});

const outils = defineCollection({
  loader: file('src/data/outils.json', { parser: tableauOrdonne }),
  schema: z.object({
    position: z.number(),
    nom: texte,
    couleur,
  }),
});

// Une date du bootcamp dans site.json : « AAAA-MM-JJ », lue à minuit UTC.
const jourFormation = (champ: string) =>
  z
    .string({ error: `site.json : « formation.${champ} » manque (date au format "AAAA-MM-JJ").` })
    .transform((valeur, ctx) => {
      const d = lireJour(valeur);
      if (!d) {
        ctx.addIssue({
          code: 'custom',
          message: `site.json : « formation.${champ} » vaut "${valeur}", ce n'est pas une date valide au format "AAAA-MM-JJ".`,
        });
        return z.NEVER;
      }
      return d;
    });

// Textes de l'en-tête de l'accueil : un seul objet, rangé sous l'id « site ».
const site = defineCollection({
  loader: file('src/data/site.json', {
    parser: (text) => [{ ...JSON.parse(text), id: 'site' }],
  }),
  schema: z.object({
    intro: texte,
    etiquettes: z
      .array(z.object({ texte, couleur }))
      .min(1, { error: 'Il faut au moins une étiquette dans site.json.' }),
    // Dates du bootcamp, pour la barre « SYNC FORMATION » de l'accueil.
    formation: z
      .object(
        { debut: jourFormation('debut'), fin: jourFormation('fin') },
        {
          error:
            'site.json : il manque « formation », de la forme "formation": { "debut": "2026-09-28", "fin": "2026-12-24" }.',
        },
      )
      .superRefine((f, ctx) => {
        if (f.fin < f.debut) {
          ctx.addIssue({
            code: 'custom',
            path: ['fin'],
            message: 'site.json : « formation.fin » est avant « formation.debut ».',
          });
        }
      }),
  }),
});

export const collections = { semaines, projets, outils, site };
