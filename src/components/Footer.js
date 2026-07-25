"use client";

import Link from "@/components/LocaleLink";
import { useLang } from "@/lib/LangContext";
import { COMPANY } from "@/lib/dictionary";
import { Icon } from "./Icon";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand--footer" aria-label={COMPANY.legalName}>
            <Logo light className="brand-logo--footer" />
          </Link>
          <p>{t.footer.tagline}</p>
          <p className="footer-areas">
            <Icon name="pin" size={15} />
            <span>{t.coverage.cities.map((c) => c.name).join(" · ")}</span>
          </p>
        </div>

        <div className="footer-col">
          <h2>{t.footer.company}</h2>
          <Link href="/a-propos">{t.nav.about}</Link>
          <Link href="/realisations">{t.nav.realisations}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </div>

        <div className="footer-col">
          <h2>{t.footer.services}</h2>
          {t.services.map((s) => (
            <Link key={s.id} href={`/services/${s.slug}`}>{s.title}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h2>{t.footer.contact}</h2>
          {COMPANY.phones.map((p) => (
            <a key={p} href={`tel:+212${p.slice(1)}`}>
              {p.replace(/(\d{2})(?=\d)/g, "$1 ").trim()}
            </a>
          ))}
          <a href={`mailto:${COMPANY.email}`} className="footer-icon-link">
            <Icon name="mail" size={16} /> {COMPANY.email}
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
          >
            <Icon name="whatsapp" size={16} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} {COMPANY.legalName}. {t.footer.rights}</p>
        <p className="footer-credit">
          {t.footer.madeBy}{" "}
          <a
            href="https://www.moudevpro.com/"
            target="_blank"
            rel="noopener"
            title="MouDevPro — création de sites web au Maroc"
          >
            MouDevPro
          </a>
        </p>
      </div>
    </footer>
  );
}
