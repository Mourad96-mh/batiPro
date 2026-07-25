"use client";

import { useLang } from "@/lib/LangContext";
import { Icon } from "@/components/Icon";
import ContactButtons from "@/components/ContactButtons";
import Reveal from "@/components/Reveal";
import { capabilityImagesByIcon } from "@/lib/media";

export default function RealisationsContent() {
  const { t } = useLang();
  const r = t.realisations;

  return (
    <>
      <section className="page-head page-head--realisations">
        <span className="ph-icon" aria-hidden="true"><Icon name="crane" size={64} /></span>
        <div className="container">
          <h1>{r.hero.title}</h1>
          <p>{r.hero.subtitle}</p>
        </div>
      </section>

      {/* NOTICE — honest "portfolio in progress" for a new company */}
      <section className="section">
        <div className="container">
          <Reveal className="notice-card">
            <span className="notice-ic"><Icon name="clipboard" size={28} /></span>
            <div>
              <h2>{r.noticeTitle}</h2>
              <p>{r.noticeText}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES GRID (generic construction visuals) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head center">
            <h2>{r.capabilitiesTitle}</h2>
            <p>{r.capabilitiesSubtitle}</p>
          </Reveal>
          <div className="cap-grid">
            {r.capabilities.map((c, i) => (
              <Reveal className="cap-card" key={c.title} style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="cap-visual cap-visual--photo">
                  <picture>
                    <source srcSet={`/img/${capabilityImagesByIcon[c.icon]}.webp`} type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/img/${capabilityImagesByIcon[c.icon]}.jpg`} alt={c.title} loading="lazy" width="800" height="450" />
                  </picture>
                  <span className={`card-media-badge tone-${i % 2 === 0 ? "navy" : "orange"}`} aria-hidden="true">
                    <Icon name={c.icon} size={18} />
                  </span>
                </div>
                <div className="cap-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--blue" style={{ paddingTop: 0 }}>
        <div className="container final-cta">
          <Reveal>
            <h2>{r.ctaTitle}</h2>
            <p>{r.ctaText}</p>
            <div className="cta-row cta-row--center">
              <ContactButtons />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
