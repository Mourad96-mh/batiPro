"use client";

import Link from "@/components/LocaleLink";
import { useLang } from "@/lib/LangContext";
import { Icon } from "@/components/Icon";
import ContactButtons from "@/components/ContactButtons";
import Reveal from "@/components/Reveal";

// Renders one service detail page from the service id (looked up per-language so
// the text follows the active language).
export default function ServiceDetail({ id }) {
  const { t } = useLang();
  const s = t.services.find((x) => x.id === id);
  if (!s) return null;
  const others = t.services.filter((x) => x.id !== id);

  return (
    <>
      <section className={`page-head page-head--photo tone-${id}`}>
        <span className="ph-icon" aria-hidden="true"><Icon name={s.icon} size={64} /></span>
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'ariane">
            <Link href="/">{t.nav.home}</Link>
            <span>/</span>
            <Link href="/services">{t.nav.services}</Link>
            <span>/</span>
            <span>{s.title}</span>
          </nav>
          <span className="eyebrow eyebrow--onDark">{t.serviceDetail.eyebrow}</span>
          <h1>{s.title}</h1>
          <p>{s.desc}</p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-grid">
          <div>
            <Reveal>
              <p className="service-intro">{s.intro}</p>
            </Reveal>
            <Reveal>
              <h2>{t.serviceDetail.includedTitle}</h2>
              <ul className="check-list">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <span className="tick"><Icon name="check" size={14} /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 style={{ marginTop: 36 }}>{t.serviceDetail.audienceTitle}</h2>
              <p className="service-audience">{s.audience}</p>
              <p className="service-areas">{t.serviceDetail.areasLine}</p>
            </Reveal>
          </div>

          <aside className="service-aside">
            <h3>{t.serviceDetail.quoteAside}</h3>
            <p>{t.serviceDetail.quoteAsideText}</p>
            <ContactButtons variant="stack" />
            <div className="aside-others">
              <h4>{t.serviceDetail.otherServices}</h4>
              {others.map((o) => (
                <Link key={o.id} href={`/services/${o.slug}`} className="aside-other">
                  <span className="ao-ic"><Icon name={o.icon} size={18} /></span>
                  {o.title}
                  <span className="ao-arrow"><Icon name="arrow" size={16} /></span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--blue" style={{ paddingTop: 0, background: "linear-gradient(150deg, var(--navy-900), var(--navy-700))" }}>
        <div className="container final-cta">
          <Reveal>
            <h2>{t.finalCta.title}</h2>
            <p>{t.finalCta.subtitle}</p>
            <div className="cta-row cta-row--center">
              <ContactButtons />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
