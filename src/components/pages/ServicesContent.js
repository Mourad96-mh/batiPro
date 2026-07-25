"use client";

import Link from "@/components/LocaleLink";
import { useLang } from "@/lib/LangContext";
import { COMPANY } from "@/lib/dictionary";
import { Icon } from "@/components/Icon";
import ContactButtons from "@/components/ContactButtons";
import Reveal from "@/components/Reveal";
import CardMedia from "@/components/CardMedia";
import { serviceImages } from "@/lib/media";

export default function ServicesContent() {
  const { t, localePath } = useLang();
  const p = t.servicesPage;

  // ItemList schema listing every service for richer indexing. Each ListItem
  // uses `item` (Google's documented property) with a locale-correct URL.
  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: t.services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      item: `${COMPANY.siteUrl}${localePath(`/services/${s.slug}/`)}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listLd) }}
      />

      <section className="page-head page-head--services">
        <span className="ph-icon" aria-hidden="true"><Icon name="crane" size={64} /></span>
        <div className="container">
          <h1>{p.title}</h1>
          <p>{p.subtitle}</p>
        </div>
      </section>

      {/* INTRO PROSE */}
      <section className="section">
        <div className="container">
          <Reveal className="lead-prose">
            {p.intro.map((par, i) => (
              <p key={i}>{par}</p>
            ))}
          </Reveal>

          {/* SERVICE CARDS */}
          <div className="cards">
            {t.services.map((s, i) => (
              <Reveal className="card card--media" key={s.id} style={{ transitionDelay: `${i * 50}ms` }}>
                <Link href={`/services/${s.slug}`} className="card-link">
                  <CardMedia icon={s.icon} img={serviceImages[s.slug]} alt={s.title} tone={i % 2 === 0 ? "navy" : "orange"} />
                  <div className="card-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="card-more">{t.serviceDetail.learnMore} <Icon name="arrow" size={15} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE DUO */}
      <section className="section section--sand" style={{ background: "var(--steel-100)" }}>
        <div className="container">
          <Reveal className="section-head center">
            <h2>{p.audience.title}</h2>
            <p>{p.audience.subtitle}</p>
          </Reveal>
          <div className="duo">
            <Reveal className="duo-card">
              <div className="duo-ic"><Icon name="building" size={26} /></div>
              <h3>{p.audience.pro.title}</h3>
              <p>{p.audience.pro.desc}</p>
            </Reveal>
            <Reveal className="duo-card">
              <div className="duo-ic"><Icon name="renovate" size={26} /></div>
              <h3>{p.audience.home.title}</h3>
              <p>{p.audience.home.desc}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--blue" style={{ paddingTop: 0 }}>
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
