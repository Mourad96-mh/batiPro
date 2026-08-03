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

