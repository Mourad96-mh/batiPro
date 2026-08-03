// Symbole BATIPRO : « A » plein (triangle navy évidé) surmontant un pic orange,
// posé sur la double courbe navy + orange — d'après le logo final du client.
// Dessin vectoriel inline pour rester net à toute taille.
//   - défaut  : navy + orange, pour les fonds clairs (header)
//   - `light` : navy remplacé par du blanc, pour les fonds sombres (footer)
export default function BrandMark({ light = false, className = "" }) {
  const dark = light ? "#ffffff" : "#0b2a5c";
  const accent = light ? "#ff9f3a" : "#f5820c";

  return (
    <svg
      viewBox="0 0 162 136"
      className={`brand-mark ${className}`.trim()}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* « A » : triangle plein évidé (fill-rule evenodd) */}
      <path
        d="M84 12 L134 92 L34 92 Z M84 38 L114 92 L54 92 Z"
        fill={dark}
        fillRule="evenodd"
      />
      {/* pic orange dans le creux du A */}
      <path d="M84 66 L96 92 L72 92 Z" fill={accent} />
      {/* courbe navy */}
      <path d="M2 120 C 46 98, 106 84, 158 92 C 108 96, 48 108, 2 120 Z" fill={dark} />
      {/* courbe orange */}
      <path d="M8 130 C 50 110, 104 96, 146 100 C 104 106, 50 118, 8 130 Z" fill={accent} />
    </svg>
  );
}
