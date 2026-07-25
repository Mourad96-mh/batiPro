// Optimizes source photos in assets-src/ → public/img/ as WebP (primary) + JPG (fallback).
// Sources stay OUT of public/ so originals don't ship. Run: node scripts/make-webp.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "assets-src");
const OUT = join(__dirname, "..", "public", "img");
mkdirSync(OUT, { recursive: true });

// [source file, output basename, target width]
const CONFIG = [
  ["crane-hero.jpg",        "hero",            1000],
  ["steelbeams.jpg",        "svc-gros-oeuvre",  800],
  ["scaffolding.jpg",       "svc-renovation",   800],
  ["interior.jpg",          "svc-amenagement",  800],
  ["onsite-blueprint.jpg",  "svc-opc",          800],
  ["engineer-drawings.jpg", "svc-assistance",   800],
  ["electrical.jpg",        "svc-entretien",    800],
  ["safetygear.jpg",        "svc-qse",          800],
  ["architects-plans.jpg",  "about",           1000],
  ["urbansite.jpg",         "real-1",           800],
  ["towercranes.jpg",       "real-2",           800],
  ["craneblue.jpg",         "real-3",           800],
];

let total = 0;
for (const [src, base, w] of CONFIG) {
  const input = join(SRC, src);
  const pipeline = sharp(input).resize({ width: w, withoutEnlargement: true });
  await pipeline.clone().webp({ quality: 72 }).toFile(join(OUT, `${base}.webp`));
  await pipeline.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(join(OUT, `${base}.jpg`));
  const meta = await sharp(join(OUT, `${base}.webp`)).metadata();
  console.log(`${base.padEnd(18)} ${meta.width}×${meta.height}  webp+jpg`);
  total++;
}
console.log(`\n${total} images → public/img/ (webp + jpg each)`);
