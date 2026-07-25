"use client";

import Link from "@/components/LocaleLink";
import { useLang } from "@/lib/LangContext";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";

// Zones d'intervention (Kénitra, Rabat, Tanger, Meknès, Casablanca).
// Contenu piloté par dict[lang].coverage — voir src/lib/dictionary.js.
export default function Coverage({ tone = "sand" }) {
  const { t } = useLang();
  const c = t.coverage;

  return (
    <section className={`section${tone === "sand" ? " section--sand" : ""}`} id="zones">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">
            <Icon name="pin" size={14} /> {c.eyebrow}
          </span>
          <h2>{c.title}</h2>
          <p>{c.subtitle}</p>
        </Reveal>

        <div className="coverage-grid">
          {c.cities.map((city, i) => (
            <Reveal
              className="coverage-item"
              key={city.name}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="cov-ic">
                <Icon name="pin" size={20} />
              </span>
              <h3>{city.name}</h3>
              <p className="cov-region">{city.region}</p>
              <p className="cov-desc">{city.desc}</p>
            </Reveal>
          ))}
        </div>

        <p className="coverage-note">
          {c.note}{" "}
          <Link href="/contact" className="cov-link">
            {t.nav.quote} <Icon name="arrow" size={14} />
          </Link>
        </p>
      </div>
    </section>
  );
}
