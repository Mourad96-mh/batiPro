// Shared SEO helpers for bilingual (FR at root, EN under /en) routing.
// French is the primary language and lives at the root path; English mirrors
// live under /en. Every page declares hreflang alternates linking the pair.

// Build the hreflang `languages` map for a given French (root) path.
// Pass the canonical FR path, e.g. "/" or "/services" or "/services/amenagement".
export function altLanguages(frPath) {
  const en = frPath === "/" ? "/en" : `/en${frPath}`;
  return { fr: frPath, en, "x-default": frPath };
}

// Convenience: full alternates block (canonical + hreflang) for a page.
// `lang` is "fr" or "en"; `frPath` is the French (root) path.
export function alternatesFor(lang, frPath) {
  const en = frPath === "/" ? "/en" : `/en${frPath}`;
  return {
    canonical: lang === "en" ? en : frPath,
    languages: altLanguages(frPath),
  };
}

// Full metadata object for a page: title, description, canonical + hreflang,
// and a complete OpenGraph block (Next replaces openGraph per-segment, so each
// page must restate the share image). Use `absoluteTitle` for the home pages,
// where the "%s | BATIPRO" template should not be applied.
export function buildMetadata({ lang, frPath, title, description, absoluteTitle }) {
  const en = frPath === "/" ? "/en" : `/en${frPath}`;
  const url = lang === "en" ? en : frPath;
  const ogTitle = absoluteTitle || `${title} | BATIPRO BTP CONSULTING`;
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url, languages: altLanguages(frPath) },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: "BATIPRO BTP CONSULTING",
      locale: lang === "en" ? "en_MA" : "fr_MA",
      type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og.jpg"],
    },
  };
}
