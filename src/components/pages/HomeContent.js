"use client";

import Link from "@/components/LocaleLink";
import { useLang } from "@/lib/LangContext";
import { Icon } from "@/components/Icon";
import ContactButtons from "@/components/ContactButtons";
import Reveal from "@/components/Reveal";
import CardMedia from "@/components/CardMedia";
import { serviceImages } from "@/lib/media";

export default function HomeContent() {
  const { t } = useLang();

  // Aperçu accueil : « Rénovation & réhabilitation » est retiré de la grille et
  // « Entretien & maintenance » prend sa place (2ᵉ carte). Les deux services
  // restent listés sur /services avec leur page dédiée.
  const homeServices = (() => {
    const list = t.services.filter((s) => s.id !== "renovation");
    const i = list.findIndex((s) => s.id === "maintenance");
    return i < 0 ? list : [list[0], list[i], ...list.slice(1).filter((s) => s.id !== "maintenance")];
  })();

  // FAQPage schema, built from the active language for rich-result eligibility.
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* HERO */}
      <section className="hero">
        <span className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <Icon name="helmet" size={14} /> {t.hero.eyebrow}
            </span>
            <h1>{t.hero.title}</h1>
            <p className="hero-sub">{t.hero.subtitle}</p>
            <ContactButtons variant="hero" />
            <div className="hero-trust">
              <span><span className="tick"><Icon name="check" size={13} /></span>{t.whyUs.items[0].title}</span>
              <span><span className="tick"><Icon name="check" size={13} /></span>{t.whyUs.items[1].title}</span>
              <span><span className="tick"><Icon name="check" size={13} /></span>{t.whyUs.items[3].title}</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <picture>
                <source srcSet="/img/hero.webp" type="image/webp" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/hero.jpg" alt="Chantier BATIPRO : structure en béton armé et banches de coffrage en cours de montage" width="1000" height="530" fetchPriority="high" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {t.stats.map((st) => (
            <div className="stat" key={st.label}>
              <span className="stat-value">{st.value}</span>
              <span className="stat-label">{st.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">{t.servicesOverview.eyebrow}</span>
            <h2>{t.servicesOverview.title}</h2>
            <p>{t.servicesOverview.subtitle}</p>
          </Reveal>
          <div className="cards">
            {homeServices.map((s, i) => (
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
          <div className="cta-row cta-row--center" style={{ marginTop: 40 }}>
            <Link href="/services" className="btn btn-ghost">
              {t.servicesOverview.cta} <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH / METHOD */}
      <section className="section section--sand">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">{t.approach.eyebrow}</span>
            <h2>{t.approach.title}</h2>
            <p>{t.approach.subtitle}</p>
          </Reveal>
          <div className="timeline">
            {t.approach.steps.map((step, i) => (
              <Reveal className="tl-step" key={step.title} style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="tl-num">{i + 1}</span>
                <div className="tl-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section--blue">
        <div className="container">
          <Reveal className="section-head center">
            <h2>{t.whyUs.title}</h2>
          </Reveal>
          <div className="why-grid">
            {t.whyUs.items.map((it, i) => {
              const icons = ["shield", "eye", "spark", "helmet"];
              return (
                <Reveal className="why-item" key={it.title} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="why-ic"><Icon name={icons[i]} size={22} /></div>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h2>{t.faq.title}</h2>
            <p>{t.faq.subtitle}</p>
          </Reveal>
          <Reveal className="faq-list">
            {t.faq.items.map((it) => (
              <details className="faq-item" key={it.q}>
                <summary>
                  <span>{it.q}</span>
                  <span className="faq-ic"><Icon name="arrow" size={18} /></span>
                </summary>
                <p>{it.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--blue">
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
