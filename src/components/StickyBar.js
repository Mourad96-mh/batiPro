"use client";

import { useLang } from "@/lib/LangContext";
import { COMPANY, telHref } from "@/lib/dictionary";
import { Icon } from "./Icon";

// Boutons flottants, du secondaire (haut) vers l'action principale (bas, sous
// le pouce) : réseaux sociaux, WhatsApp, appel. Les réseaux viennent de
// COMPANY.social — ajouter un réseau là suffit, il apparaît ici et en bas de page.
export default function StickyBar() {
  const { t } = useLang();
  const primary = COMPANY.phones[0].number;
  const waMsg = encodeURIComponent(
    "Bonjour BATIPRO, je souhaite un devis. / Hello BATIPRO, I'd like a quote."
  );

  return (
    <div className="fab-stack">
      {COMPANY.social.map((s) => (
        <a
          key={s.url}
          className={`fab fab-${s.icon}`}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.footer.followOn.replace("{network}", s.name)}
          title={s.name}
        >
          <Icon name={s.icon} size={26} />
        </a>
      ))}
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
