"use client";

import Link from "@/components/LocaleLink";
import { useLang } from "@/lib/LangContext";
import { COMPANY, coverageArea, telHref, telDisplay } from "@/lib/dictionary";
import { Icon } from "./Icon";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t, lang } = useLang();
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
            <span>{coverageArea(lang)}</span>
          </p>
        </div>

        <div className="footer-col">
          <h2>{t.footer.company}</h2>
          <Link href="/a-propos">{t.nav.about}</Link>
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
            <a key={p.number} href={`tel:${telHref(p.number)}`}>
              {telDisplay(p.number)}
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
          {/* Bureau de Kénitra — position exacte (coordonnées GPS) sur Google Maps. */}
          <a
            href={COMPANY.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link footer-map"
          >
            <Icon name="pin" size={16} />
            <span>
              {COMPANY.office.street}
              <br />
              {COMPANY.office.locality}, {COMPANY.country}
            </span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} {COMPANY.legalName}. {t.footer.rights}</p>
        <SocialLinks variant="footer" size={17} />
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
