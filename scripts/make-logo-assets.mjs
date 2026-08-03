// Génère toutes les déclinaisons du logo à partir du fichier fourni par le
// client (`match-logo.jpeg`, fond blanc opaque) — c'est la SEULE source :
//
//   public/logo.png        → fond transparent, couleurs d'origine (fonds clairs : header)
//   public/logo-light.png  → fond transparent + marque inversée en blanc,
//                            l'orange conservé (fonds sombres : footer navy)
//   src/app/icon.png       → favicon : le symbole seul (triangle + courbes),
//                            découpé dans le logo réel, blanc sur tuile navy
//
// Pourquoi la version "light" : la marque est majoritairement navy (#0b2a5c-ish).
// Rendue transparente telle quelle sur le footer navy, « BATI » et « BTP CONSULTING »
// deviennent illisibles. On aplatit donc les pixels non-orange en blanc.
//
// Usage : node scripts/make-logo-assets.mjs   (relancer et mettre `SRC` à jour si
// le client fournit une nouvelle version).
import sharp from "sharp";
import { statSync } from "node:fs";

const SRC = "match-logo.jpeg";
const WIDTH = 720; // ~3× la taille d'affichage max (~230px de large) → net en hi-dpi
const ICON = 256; // favicon carré

// Un pixel est considéré comme fond si ses 3 canaux sont quasi blancs.
const BG_MIN = 238; // >= : totalement transparent
const RAMP = 200; // 200..238 : rampe d'alpha, tue le halo JPEG sur les bords

const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

const alphaAt = (min) =>
  min >= BG_MIN ? 0 : min > RAMP ? Math.round(((BG_MIN - min) * 255) / (BG_MIN - RAMP)) : 255;

function rgba({ light }) {
  const out = Buffer.alloc(W * H * 4);
  for (let p = 0; p < W * H; p++) {
    const i = p * C;
    let r = data[i], g = data[i + 1], b = data[i + 2];
    const a = alphaAt(Math.min(r, g, b));

    if (light) {
      // L'orange de la marque est préservé ; tout le reste (navy, y compris ses
      // dégradés) devient blanc franc pour ressortir sur fond sombre. On aplatit
      // plutôt que d'inverser la luminance : le dégradé navy donnerait des gris
      // ternes. L'alpha ci-dessus suffit à rendre les bords propres.
      const isOrange = r > 170 && b < 140 && r - b > 60 && g > 60;
      if (!isOrange) { r = 255; g = 255; b = 255; }
    }

    out[p * 4] = r; out[p * 4 + 1] = g; out[p * 4 + 2] = b; out[p * 4 + 3] = a;
  }
  return out;
}

const raw = (buf) => sharp(buf, { raw: { width: W, height: H, channels: 4 } });

// --- lockup complet ---------------------------------------------------------
// `.trim()` supprime la marge blanche autour du lockup : sans ça le logo paraît
// décalé par rapport aux éléments alignés sur le conteneur.
// ⚠️ le ratio final n'est donc plus celui de la source → reporter les dimensions
// imprimées ci-dessous dans les attributs width/height de `components/Logo.js`.
// PNG palettisé : sur un logo à plats de couleur il bat le WebP tout en gardant
// l'alpha — donc pas de <picture> à écrire.
for (const [name, light] of [["logo", false], ["logo-light", true]]) {
  const file = `public/${name}.png`;
  const o = await raw(rgba({ light }))
    .trim({ threshold: 1 })
    .resize(WIDTH)
    .png({ compressionLevel: 9, palette: true })
    .toFile(file);
  console.log(`${name}.png: ${o.width}×${o.height} — ${(statSync(file).size / 1024).toFixed(1)} KB`);
}

// --- favicon : le symbole seul ---------------------------------------------
// On isole le triangle + les courbes du mot « BATIPRO ». Chercher une colonne
// entièrement vide ne marche pas : la queue de la courbe navy passe sous le
// « B ». On regarde donc uniquement la bande horizontale médiane (sous la pointe
// du triangle, au-dessus des courbes) : là, symbole et texte sont bien séparés
// par un vide franc, dont la fin marque le début du mot.
const on = (x, y) => {
  const i = (y * W + x) * C;
  return alphaAt(Math.min(data[i], data[i + 1], data[i + 2])) > 0;
};
const bandTop = Math.round(H * 0.28);
const bandBot = Math.round(H * 0.55);
const bandHas = [];
for (let x = 0; x < W; x++) {
  let hit = false;
  for (let y = bandTop; y < bandBot && !hit; y++) hit = on(x, y);
  bandHas.push(hit);
}
let cut = 0, gapLen = 0, runStart = -1;
for (let x = bandHas.indexOf(true); x <= bandHas.lastIndexOf(true); x++) {
  if (!bandHas[x]) {
    if (runStart < 0) runStart = x;
  } else if (runStart >= 0) {
    if (x - runStart > gapLen) { gapLen = x - runStart; cut = x; }
    runStart = -1;
  }
}
if (!cut) throw new Error("symbole introuvable : aucun vide entre le symbole et le mot");

// Boîte du symbole dans la zone à gauche de la coupe.
let x0 = -1, y0 = -1, x1 = -1, y1 = -1;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < cut; x++) {
    if (!on(x, y)) continue;
    if (x0 < 0 || x < x0) x0 = x;
    if (x1 < x) x1 = x;
    if (y0 < 0) y0 = y;
    y1 = y;
  }
}
const symW = x1 - x0 + 1;
const symH = y1 - y0 + 1;

// Tuile blanche + symbole aux couleurs d'origine : c'est le symbole du client
// tel quel (dégradé navy, pic orange), pas une version recolorée.
const PAD = 0.78; // part de la tuile occupée par le symbole
// Découpe puis redimensionnement en deux passes : enchaîner extract + resize
// sur une entrée `raw` fait échouer sharp ("bad extract area").
const cropped = await raw(rgba({ light: false }))
  .extract({ left: x0, top: y0, width: symW, height: symH })
  .png()
  .toBuffer();
const symbol = await sharp(cropped)
  .resize({ width: Math.round(ICON * PAD), height: Math.round(ICON * PAD), fit: "inside" })
  .png()
  .toBuffer();

const tile = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${ICON}" height="${ICON}">` +
    `<rect width="${ICON}" height="${ICON}" rx="${Math.round(ICON * 0.2)}" fill="#ffffff"/></svg>`
);
await sharp(tile)
  .composite([{ input: symbol, gravity: "centre" }])
  .png({ compressionLevel: 9 })
  .toFile("src/app/icon.png");
console.log(`icon.png: ${ICON}×${ICON} (symbole ${symW}×${symH} px dans la source)`);
