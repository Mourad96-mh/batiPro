"use client";

import { useLang } from "@/lib/LangContext";
import { COMPANY } from "@/lib/dictionary";
import { Icon } from "./Icon";

export default function ContactButtons({ variant = "default" }) {
  const { t } = useLang();
  const primary = COMPANY.phones[0];
  const waMsg = encodeURIComponent(
    "Bonjour BATIPRO, je souhaite un devis. / Hello BATIPRO, I'd like a quote."
  );

  return (
    <div className={`cta-row cta-row--${variant}`}>
      <a className="btn btn-primary" href={`tel:+212${primary.slice(1)}`}>
        <Icon name="phone" size={18} />
        {t.hero.ctaCall}
      </a>
      <a
        className="btn btn-whats"
        href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={18} />
        {t.hero.ctaWhats}
      </a>
    </div>
  );
}
