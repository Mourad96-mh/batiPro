// Génère les déclinaisons du logo à partir de `last-logo.jpeg` (dernière version
// fournie par le client, fond blanc opaque) :
//
//   public/logo.png / .webp        → fond transparent, couleurs d'origine (fonds clairs)
//   public/logo-light.png / .webp  → fond transparent + marque inversée en blanc,
//                                    l'orange conservé (fonds sombres : footer navy)
//
// Pourquoi la version "light" : la marque est majoritairement navy (#0b2a5c-ish).
// Rendue transparente telle quelle sur le footer navy, « BATI » et « BTP CONSULTING »
// deviennent illisibles. On inverse donc la luminance des pixels non-orange.
//
// Usage : node scripts/make-logo-assets.mjs   (relancer et mettre `SRC` à jour si
// le client fournit une nouvelle version — c'est la seule source).
import sharp from "sharp";

const SRC = "last-logo.jpeg";
const WIDTH = 480; // ~4× la taille d'affichage max (78px de haut) → net en hi-dpi

// Un pixel est considéré comme fond si ses 3 canaux sont quasi blancs.
const BG_MIN = 238; // >= : totalement transparent
const RAMP = 200; // 200..238 : rampe d'alpha, tue le halo JPEG sur les bords

const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

function build({ light }) {
  const out = Buffer.alloc(W * H * 4);
  for (let p = 0; p < W * H; p++) {
    const i = p * C;
    let r = data[i], g = data[i + 1], b = data[i + 2];

    const min = Math.min(r, g, b);
    let a = 255;
    if (min >= BG_MIN) a = 0;
    else if (min > RAMP) a = Math.round(((BG_MIN - min) * 255) / (BG_MIN - RAMP));

    if (light) {
      // L'orange de la marque est préservé ; tout le reste (navy, y compris ses
      // dégradés) devient blanc franc pour ressortir sur fond sombre. On aplatit
      // plutôt que d'inverser la luminance : le dégradé navy donnerait des gris
      // ternes. L'alpha ci-dessus suffit à rendre les bords propres.
      const isOrange = r > 170 && b < 140 && r - b > 60 && g > 60;
      if (!isOrange) {
        r = 255;
        g = 255;
        b = 255;
      }
    }

    out[p * 4] = r; out[p * 4 + 1] = g; out[p * 4 + 2] = b; out[p * 4 + 3] = a;
  }
  // `.trim()` supprime la marge transparente autour du lockup : sans ça le logo
  // paraît décalé vers la droite par rapport au texte aligné sur le conteneur.
  // ⚠️ le ratio final n'est donc plus celui de logo.jpeg → reporter les dimensions
  // affichées ci-dessous dans les attributs width/height de `components/Logo.js`.
  return sharp(out, { raw: { width: W, height: H, channels: 4 } })
    .trim({ threshold: 1 })
    .resize(WIDTH);
}

// PNG palettisé uniquement : sur un logo à plats de couleur il bat le WebP
// (29 KB vs 55 KB ici) tout en gardant l'alpha — donc pas de <picture> à écrire.
import { statSync } from "node:fs";

for (const [name, light] of [["logo", false], ["logo-light", true]]) {
  await build({ light }).png({ compressionLevel: 9, palette: true }).toFile(`public/${name}.png`);
  console.log(`${name}.png: ${(statSync(`public/${name}.png`).size / 1024).toFixed(1)} KB`);
}
