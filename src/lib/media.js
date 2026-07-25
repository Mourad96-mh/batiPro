// Maps content to the optimized photos in /public/img/ (WebP + JPG fallback).
// Photos are free-license stock (Pexels) used as decorative/atmospheric imagery —
// NOT presented as BATIPRO's own réalisations. Swap for real client photos by
// replacing the files in assets-src/ and re-running scripts/make-webp.mjs.

// Service slug → image basename in /public/img/
export const serviceImages = {
  "construction-gros-oeuvre": "svc-gros-oeuvre",
  "renovation-rehabilitation": "svc-renovation",
  "amenagement-interieur-exterieur": "svc-amenagement",
  "opc-suivi-coordination-chantier": "svc-opc",
  "assistance-technique-conseil": "svc-assistance",
  "entretien-maintenance": "svc-entretien",
  "qualite-securite-environnement": "svc-qse",
};

// Réalisations capability card icon → reused service photo (generic capability
// illustration — not a claim of a specific completed project).
export const capabilityImagesByIcon = {
  building: "svc-gros-oeuvre",
  renovate: "svc-renovation",
  ruler: "svc-amenagement",
  clipboard: "svc-opc",
  wrench: "svc-entretien",
  helmet: "svc-qse",
};
