"use client";

import { useLang } from "@/lib/LangContext";
import { COMPANY, telHref } from "@/lib/dictionary";
import { Icon } from "./Icon";

export default function StickyBar() {
  const { t } = useLang();
  const primary = COMPANY.phones[0].number;
  const waMsg = encodeURIComponent(
    "Bonjour BATIPRO, je souhaite un devis. / Hello BATIPRO, I'd like a quote."
  );

  return (
    <div className="fab-stack">
      <a
        className="fab fab-whats"
        href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <Icon name="whatsapp" size={26} />
      </a>
      <a
        className="fab fab-call"
        href={`tel:${telHref(primary)}`}
        aria-label={t.hero.ctaCall}
      >
        <Icon name="phone" size={24} />
      </a>
    </div>
  );
}
