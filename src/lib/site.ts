import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Construit un chemin interne sous le « base » du site (/journal-de-bord/),
// sans double slash. url('semaines/x/') -> /journal-de-bord/semaines/x/
export function url(chemin = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const suite = chemin.replace(/^\/+/, '');
  return `${base}/${suite}`;
}

// Chemin public d'une capture (relatif à public/captures/).
export function urlCapture(fichier: string): string {
  return url(`captures/${fichier}`);
}

const deuxChiffres = (n: number) => String(n).padStart(2, '0');

// « 28.09 → 23.10.2026 », ou « 28.12.2026 → 08.01.2027 » si l'année change.
export function plageDeDates(debut: Date, fin: Date): string {
  const jm = (d: Date) => `${deuxChiffres(d.getUTCDate())}.${deuxChiffres(d.getUTCMonth() + 1)}`;
  const memeAnnee = debut.getUTCFullYear() === fin.getUTCFullYear();
  const gauche = memeAnnee ? jm(debut) : `${jm(debut)}.${debut.getUTCFullYear()}`;
  return `${gauche} → ${jm(fin)}.${fin.getUTCFullYear()}`;
}

// « 01-04 » -> « Semaines 01 à 04 » ; « 05 » -> « Semaine 05 ».
export function libelleNumero(numero: string): string {
  const morceaux = numero.split('-').map((m) => m.trim());
  if (morceaux.length === 2) return `Semaines ${morceaux[0]} à ${morceaux[1]}`;
  return `Semaine ${numero}`;
}

// Lit la largeur et la hauteur d'une image de public/captures/ au moment du build
// (en-tête PNG, WebP ou JPEG), sans dépendance.
export function tailleImage(fichier: string): { largeur: number; hauteur: number } {
  const chemin = join(process.cwd(), 'public', 'captures', fichier);
  let o: Buffer;
  try {
    o = readFileSync(chemin);
  } catch {
    throw new Error(`Capture introuvable : public/captures/${fichier}`);
  }

  // PNG : signature puis bloc IHDR.
  if (o.length > 24 && o.readUInt32BE(0) === 0x89504e47) {
    return { largeur: o.readUInt32BE(16), hauteur: o.readUInt32BE(20) };
  }

  // WebP : RIFF....WEBP puis VP8 / VP8L / VP8X.
  if (o.length > 30 && o.toString('ascii', 0, 4) === 'RIFF' && o.toString('ascii', 8, 12) === 'WEBP') {
    const type = o.toString('ascii', 12, 16);
    if (type === 'VP8 ') {
      return { largeur: o.readUInt16LE(26) & 0x3fff, hauteur: o.readUInt16LE(28) & 0x3fff };
    }
    if (type === 'VP8L') {
      const bits = o.readUInt32LE(21);
      return { largeur: (bits & 0x3fff) + 1, hauteur: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (type === 'VP8X') {
      return { largeur: o.readUIntLE(24, 3) + 1, hauteur: o.readUIntLE(27, 3) + 1 };
    }
  }

  // JPEG : on cherche le marqueur SOF.
  if (o.length > 4 && o[0] === 0xff && o[1] === 0xd8) {
    let i = 2;
    while (i + 9 < o.length) {
      if (o[i] !== 0xff) { i++; continue; }
      const marqueur = o[i + 1];
      const estSOF = marqueur >= 0xc0 && marqueur <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marqueur);
      if (estSOF) return { largeur: o.readUInt16BE(i + 7), hauteur: o.readUInt16BE(i + 5) };
      i += 2 + o.readUInt16BE(i + 2);
    }
  }

  throw new Error(`Format d'image non reconnu (PNG, WebP ou JPEG attendu) : public/captures/${fichier}`);
}
