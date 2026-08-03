// Generates a 1200×630 branded OG share card → public/og.jpg
// Brand: navy #0b2a5c background, orange #f5820c accent. Text wordmark (the
// client logo sits on white, so we don't embed it on the navy field).
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "og.jpg");

const NAVY = "#0b2a5c";
const NAVY2 = "#0a2148";
const ORANGE = "#f5820c";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${NAVY2}"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- orange accent bar -->
  <rect x="80" y="150" width="70" height="10" rx="5" fill="${ORANGE}"/>

  <!-- eyebrow -->
  <text x="80" y="205" font-family="Poppins, Arial, sans-serif" font-size="26" font-weight="600"
        letter-spacing="4" fill="${ORANGE}">CONSTRUCTION · GÉNIE CIVIL · OPC · CONSULTING</text>

  <!-- wordmark -->
  <text x="78" y="315" font-family="Poppins, Arial, sans-serif" font-size="92" font-weight="800"
        fill="#ffffff">BATI<tspan fill="${ORANGE}">PRO</tspan></text>
  <text x="82" y="368" font-family="Poppins, Arial, sans-serif" font-size="40" font-weight="600"
        letter-spacing="8" fill="#c9d6ea">BTP CONSULTING</text>

  <!-- tagline -->
  <text x="80" y="470" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="500"
        fill="#e7eef8">Construire aujourd'hui, bâtir la confiance de demain.</text>
  <text x="80" y="518" font-family="Inter, Arial, sans-serif" font-size="27" font-weight="400"
        fill="#9db2d2">Construction · Rénovation · OPC · Maintenance — partout au Maroc</text>

  <!-- domain chip -->
  <rect x="80" y="556" width="290" height="46" rx="23" fill="#ffffff" fill-opacity="0.08"/>
  <text x="104" y="586" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600"
        fill="#ffffff">batiprobtp.ma</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(out);
const meta = await sharp(out).metadata();
console.log(`OG written → public/og.jpg  (${meta.width}×${meta.height})`);
