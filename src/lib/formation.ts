// Barre « SYNC FORMATION » : calcul fait au build (aucun JavaScript dans le navigateur).
// Toutes les dates sont ramenées à minuit UTC pour comparer des jours, pas des heures
// (GitHub Actions tourne en UTC).

const JOUR = 24 * 60 * 60 * 1000;
const FORMAT = /^\d{4}-\d{2}-\d{2}$/;

export type EtatCase = 'ok' | 'encours' | 'vide';

export interface Progression {
  /** Semaine en cours (0 avant le début, total après la fin). */
  semaine: number;
  /** Nombre total de semaines de la formation. */
  total: number;
  /** Une case par semaine. */
  cases: EtatCase[];
}

// « AAAA-MM-JJ » -> date à minuit UTC, ou null si la date n'existe pas.
export function lireJour(texte: string): Date | null {
  if (!FORMAT.test(texte)) return null;
  const [a, m, j] = texte.split('-').map(Number);
  const d = new Date(Date.UTC(a, m - 1, j));
  const valide = d.getUTCFullYear() === a && d.getUTCMonth() === m - 1 && d.getUTCDate() === j;
  return valide ? d : null;
}

// N'importe quel instant -> minuit UTC du même jour (UTC).
export function minuitUTC(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

const joursEntre = (a: Date, b: Date) => Math.round((b.getTime() - a.getTime()) / JOUR);

// Fonction pure : mêmes dates en entrée, même résultat.
export function progression(debut: Date, fin: Date, aujourdhui: Date): Progression {
  const d = minuitUTC(debut);
  const f = minuitUTC(fin);
  const jour = minuitUTC(aujourdhui);
  if (f < d) throw new Error('Formation : la date de fin est avant la date de début.');

  const total = Math.max(1, Math.ceil(joursEntre(d, f) / 7));
  const ecoules = joursEntre(d, jour);
  const semaine = ecoules < 0 ? 0 : Math.min(total, Math.floor(ecoules / 7) + 1);
  const terminee = jour > f;

  const cases: EtatCase[] = Array.from({ length: total }, (_, i) => {
    const n = i + 1;
    if (terminee || n < semaine) return 'ok';
    if (n === semaine) return 'encours';
    return 'vide';
  });

  return { semaine, total, cases };
}

// Date « aujourd'hui » du build. JDB_DATE_TEST=AAAA-MM-JJ la force, pour tester en local
// seulement (le workflow ne la définit jamais).
export function aujourdhuiDuBuild(): Date {
  const forcee = process.env.JDB_DATE_TEST;
  if (!forcee) return minuitUTC(new Date());
  const d = lireJour(forcee);
  if (!d) throw new Error(`JDB_DATE_TEST invalide : « ${forcee} » (format attendu AAAA-MM-JJ).`);
  return d;
}
