"use client";

import { useLang } from "@/lib/LangContext";
import { COMPANY } from "@/lib/dictionary";
import { Icon } from "@/components/Icon";
import ContactButtons from "@/components/ContactButtons";
import Reveal from "@/components/Reveal";

export default function AboutContent() {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      <section className="page-head page-head--about">
        <span className="ph-icon" aria-hidden="true"><Icon name="building" size={64} /></span>
        <div className="container">
          <h1>{a.hero.title}</h1>
          <p>{a.hero.subtitle}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container narrow-prose">
          {a.intro.map((p, i) => (
            <Reveal as="p" key={i} className="prose-p">{p}</Reveal>
          ))}
          <Reveal className="about-figure">
            <picture>
              <source srcSet="/img/about.webp" type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/about.jpg" alt="Ingénieurs BATIPRO étudiant des plans de construction" loading="lazy" width="1000" height="563" />
            </picture>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--sand" style={{ paddingTop: 0, background: "var(--steel-100)" }}>
        <div className="container">
          <Reveal className="section-head center">
            <h2>{a.valuesTitle}</h2>
          </Reveal>
          <div className="cards">
            {a.values.map((v, i) => (
              <Reveal className="value-card" key={v.title} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="value-ic"><Icon name={v.icon} size={24} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="section section--blue">
        <div className="container narrow-prose">
          <Reveal className="section-head center">
            <h2>{a.engagementTitle}</h2>
          </Reveal>
          {a.engagement.map((p, i) => (
            <Reveal as="p" key={i} className="prose-p prose-p--onDark">{p}</Reveal>
          ))}
        </div>
      </section>

      {/* MOT DU DIRECTEUR */}
      <section className="section">
        <div className="container director-block">
          <Reveal className="director-card">
            <div className="director-head">
              <span className="director-avatar"><Icon name="handshake" size={30} /></span>
              <div>
                <span className="eyebrow">{a.directorTitle}</span>
                <h2>{a.directorName}</h2>
                <p className="director-role">{a.directorRole}</p>
              </div>
            </div>
            <div className="director-text">
              {a.director.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="director-sign">{a.directorName}</p>
          </Reveal>
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
