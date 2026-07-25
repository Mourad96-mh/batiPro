"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/LangContext";
import LocaleLink from "@/components/LocaleLink";
import Logo from "@/components/Logo";

export default function Header() {
  const { lang, t, localePath, frHref, enHref } = useLang();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/a-propos", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/realisations", label: t.nav.realisations },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <LocaleLink href="/" className="brand" onClick={() => setOpen(false)} aria-label="BATIPRO BTP CONSULTING">
          <Logo />
        </LocaleLink>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <LocaleLink
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === localePath(l.href) ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </LocaleLink>
          ))}
          <LocaleLink href="/contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            {t.nav.quote}
          </LocaleLink>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <Link
              href={frHref}
              className={lang === "fr" ? "is-active" : ""}
              aria-current={lang === "fr" ? "true" : undefined}
              hrefLang="fr"
              onClick={() => setOpen(false)}
            >
              FR
            </Link>
            <Link
              href={enHref}
              className={lang === "en" ? "is-active" : ""}
              aria-current={lang === "en" ? "true" : undefined}
              hrefLang="en"
              onClick={() => setOpen(false)}
            >
              EN
            </Link>
          </div>

          <button
            className={`burger ${open ? "is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
