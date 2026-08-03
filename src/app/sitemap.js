import { COMPANY, dict } from "@/lib/dictionary";

// Required for `output: export` — generate a static sitemap.xml at build time.
export const dynamic = "force-static";

// Base site URL — single source of truth in dictionary.js (COMPANY.siteUrl).
const BASE = COMPANY.siteUrl;

// Auto-generated sitemap. New service entries in dictionary.js are picked up
// here automatically. Every URL is emitted in both languages (French at the
// root, English under /en) with hreflang alternates.
export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/a-propos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  ];

  const serviceRoutes = dict.fr.services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const routes = [...staticRoutes, ...serviceRoutes];

  // Trailing slashes everywhere to match `trailingSlash: true` (the canonical URLs).
  const slash = (p) => (p === "/" ? "/" : `${p}/`);
  const frUrl = (p) => `${BASE}${slash(p)}`;
  const enUrl = (p) => `${BASE}${p === "/" ? "/en/" : `/en${slash(p)}`}`;

  // Emit one entry per language, each linking to its alternates (hreflang).
  return routes.flatMap((r) => {
    const languages = { fr: frUrl(r.path), en: enUrl(r.path) };
    const common = {
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates: { languages },
    };
    return [
      { url: frUrl(r.path), ...common },
      { url: enUrl(r.path), ...common },
    ];
  });
}
