"use client";

import { COMPANY } from "@/lib/dictionary";
import { useLang } from "@/lib/LangContext";
import { Icon } from "./Icon";

// Rangée d'icônes réseaux sociaux, alimentée par COMPANY.social (source unique,
// partagée avec le `sameAs` du JSON-LD). Utilisée dans l'en-tête et le bas de
// page ; `variant` ne change que l'habillage, pas le contenu.
//   - "header" : pastilles navy sur fond clair
//   - "footer" : pastilles blanches translucides sur le footer navy
export default function SocialLinks({ variant = "header", size = 16, className = "" }) {
  const { t } = useLang();
  if (!COMPANY.social?.length) return null;

  return (
    <ul className={`social-links social-links--${variant} ${className}`.trim()}>
      {COMPANY.social.map((s) => (
        <li key={s.url}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.followOn.replace("{network}", s.name)}
            title={s.name}
          >
            <Icon name={s.icon} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
