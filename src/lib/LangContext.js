"use client";

import { createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { dict } from "./dictionary";

const LangContext = createContext({
  lang: "fr",
  t: dict.fr,
  localePath: (h) => h,
  frHref: "/",
  enHref: "/en",
});

// Language is derived from the URL: anything under /en is English, everything
// else is French (the primary language, served at the root). This makes each
// URL render one language deterministically — required for SEO/indexing.
export function LangProvider({ children }) {
  const pathname = usePathname() || "/";
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";

  // Reflect the active language on <html lang> (the root layout renders it as
  // "fr" in static HTML; this corrects it client-side for /en pages).
  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch (e) {}
  }, [lang]);

  // Prefix internal links with /en when browsing in English.
  const localePath = (href) => {
    if (lang !== "en" || typeof href !== "string" || !href.startsWith("/")) return href;
    if (href === "/") return "/en";
    if (href === "/en" || href.startsWith("/en/")) return href;
    return `/en${href}`;
  };

  // Canonical FR path of the current page (strip the /en prefix), used to build
  // the language-switch links so they point to the same page in each language.
  const frPath =
    pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
  const frHref = frPath;
  const enHref = frPath === "/" ? "/en" : `/en${frPath}`;

  return (
    <LangContext.Provider value={{ lang, t: dict[lang], localePath, frHref, enHref }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
