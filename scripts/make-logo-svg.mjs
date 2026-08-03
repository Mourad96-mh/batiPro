// Génère public/logo.svg + public/logo-light.svg : le lockup BATIPRO complet,
// symbole vectoriel + texte converti en tracés Poppins. Les lettres étant
// vectorisées, le fichier ne dépend d'aucune police au moment du rendu.
//
// Prérequis : npm i -D opentype.js
// Les deux fontes Poppins (SIL OFL) sont téléchargées à la demande dans
// .fonts/ (à ignorer par git). Usage : node scripts/make-logo-svg.mjs
//
// ⚠️ Les tracés du symbole sont dupliqués depuis src/components/BrandMark.js :
// modifier l'un, reporter dans l'autre.
import opentype from "opentype.js";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, ".fonts");
const OUT = join(ROOT, "public");

const FONTS = {
  "Poppins-ExtraBold.ttf":
    "https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-ExtraBold.ttf",
  "Poppins-SemiBold.ttf":
    "https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-SemiBold.ttf",
};

mkdirSync(DIR, { recursive: true });
for (const [file, url] of Object.entries(FONTS)) {
  if (existsSync(join(DIR, file))) continue;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Téléchargement de ${file} : HTTP ${res.status}`);
  writeFileSync(join(DIR, file), Buffer.from(await res.arrayBuffer()));
  console.log(`↓ ${file}`);
}

const load = (f) => opentype.parse(readFileSync(join(DIR, f)).buffer);
const extrabold = load("Poppins-ExtraBold.ttf");
const semibold = load("Poppins-SemiBold.ttf");

// Pose une chaîne glyphe par glyphe pour appliquer l'interlettrage (opentype.js
// ne gère pas letter-spacing). Renvoie le tracé et la largeur réelle de l'encre.
function layout(font, text, size, tracking = 0, x = 0, y = 0) {
  const upm = font.unitsPerEm;
  const glyphs = font.stringToGlyphs(text);
  let cursor = x;
  let d = "";
  for (const g of glyphs) {
    d += g.getPath(cursor, y, size).toPathData(2);
    cursor += (g.advanceWidth / upm) * size + tracking;
  }
  // largeur = avance totale moins le dernier interlettrage (pas d'espace final)
  return { d, width: cursor - x - tracking };
}

function capHeight(font, size) {
  return (font.tables.os2.sCapHeight / font.unitsPerEm) * size;
}

// ---------------------------------------------------------------- géométrie
// Le symbole reprend exactement les tracés de src/components/BrandMark.js
// (viewBox 162×136) pour que l'asset et le logo du site soient identiques.
const MARK_W = 162;
const MARK_H = 136;

const GAP = 16; // espace entre symbole et texte

// « BATIPRO » : calibré sur la hauteur de capitale, pas sur la largeur — le logo
// client utilise une graisse plus large que Poppins ; c'est le rapport
// symbole/texte qu'il faut conserver (cap ≈ 0,355 × hauteur du symbole).
const MAIN_TRACK_EM = -0.02; // même interlettrage que .wm-main dans globals.css
const mainCap = 0.355 * MARK_H;
const mainSize = mainCap / (extrabold.tables.os2.sCapHeight / extrabold.unitsPerEm);
const mainTrack = MAIN_TRACK_EM * mainSize;

const MAIN_X = MARK_W + GAP;
const MAIN_BASE = 80; // ligne de base ≈ centre vertical du symbole

// « BATI » navy puis « PRO » orange : deux tracés, le second démarre à l'avance
// cumulée du premier.
const bati = layout(extrabold, "BATI", mainSize, mainTrack, MAIN_X, MAIN_BASE);
const proX = MAIN_X + bati.width + mainTrack;
const pro = layout(extrabold, "PRO", mainSize, mainTrack, proX, MAIN_BASE);
const WORD_W = bati.width + mainTrack + pro.width; // largeur réelle de « BATIPRO »

// « BTP CONSULTING » : mêmes rapports que .wm-sub / .wm-main dans globals.css
// (0.5rem sur 1.5rem, interlettrage 0.16em) → l'asset et l'en-tête concordent.
const subSize = mainSize / 3;
const subTrack = 0.16 * subSize;
const SUB_BASE = MAIN_BASE + mainCap * 0.73;

const subProbe = layout(semibold, "BTP CONSULTING", subSize, subTrack);
// Centré sous BATIPRO, filets de part et d'autre jusqu'aux bords du bloc.
const subX = MAIN_X + (WORD_W - subProbe.width) / 2;
const sub = layout(semibold, "BTP CONSULTING", subSize, subTrack, subX, SUB_BASE);

const RULE_GAP = mainSize * 0.208; // = gap 5px pour un wm-main de 24px
const ruleY = SUB_BASE - capHeight(semibold, subSize) / 2;
const ruleH = mainSize * 0.0625; // = 1.5px pour un wm-main de 24px
const ruleLeftW = subX - RULE_GAP - MAIN_X;
const ruleRightW = MAIN_X + WORD_W - (subX + subProbe.width + RULE_GAP);

// marge à droite : l'encre du « O » déborde légèrement de son avance
const VB_W = Math.ceil(MAIN_X + WORD_W + 6);
const VB_H = MARK_H;

console.log(
  `BATIPRO size=${mainSize.toFixed(1)} cap=${mainCap.toFixed(1)} | sub size=${subSize.toFixed(
    1
  )} w=${subProbe.width.toFixed(1)} | rules L=${ruleLeftW.toFixed(1)} R=${ruleRightW.toFixed(
    1
  )} | viewBox ${VB_W}×${VB_H}`
);

// ---------------------------------------------------------------- rendu SVG
function svg({ light }) {
  const dark = light ? "#ffffff" : "#0b2a5c";
  const accent = light ? "#ff9f3a" : "#f5820c";
  const rules =
    ruleLeftW > 1 && ruleRightW > 1
      ? `
  <rect x="${MAIN_X.toFixed(2)}" y="${ruleY.toFixed(2)}" width="${ruleLeftW.toFixed(
          2
        )}" height="${ruleH.toFixed(2)}" fill="${dark}"/>
  <rect x="${(subX + subProbe.width + RULE_GAP).toFixed(2)}" y="${ruleY.toFixed(
          2
        )}" width="${ruleRightW.toFixed(2)}" height="${ruleH.toFixed(2)}" fill="${dark}"/>`
      : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VB_W} ${VB_H}" width="${VB_W}" height="${VB_H}" role="img" aria-label="BATIPRO — BTP Consulting">
  <title>BATIPRO — BTP Consulting</title>
  <!-- Logo BATIPRO. Symbole : mêmes tracés que src/components/BrandMark.js.
       Texte : Poppins ExtraBold / SemiBold vectorisé (SIL OFL) — aucun appel de
       police au rendu. Régénéré par scripts/make-logo-svg.mjs. -->

  <!-- symbole : « A » plein évidé -->
  <path d="M84 12 L134 92 L34 92 Z M84 38 L114 92 L54 92 Z" fill="${dark}" fill-rule="evenodd"/>
  <!-- pic orange -->
  <path d="M84 66 L96 92 L72 92 Z" fill="${accent}"/>
  <!-- courbe navy -->
  <path d="M2 120 C 46 98, 106 84, 158 92 C 108 96, 48 108, 2 120 Z" fill="${dark}"/>
  <!-- courbe orange -->
  <path d="M8 130 C 50 110, 104 96, 146 100 C 104 106, 50 118, 8 130 Z" fill="${accent}"/>

  <!-- BATI -->
  <path d="${bati.d}" fill="${dark}"/>
  <!-- PRO -->
  <path d="${pro.d}" fill="${accent}"/>
  <!-- BTP CONSULTING + filets -->
  <path d="${sub.d}" fill="${dark}"/>${rules}
</svg>
`;
}

writeFileSync(`${OUT}/logo.svg`, svg({ light: false }));
writeFileSync(`${OUT}/logo-light.svg`, svg({ light: true }));
console.log("→ public/logo.svg, public/logo-light.svg");
