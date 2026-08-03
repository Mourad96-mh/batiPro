import BrandMark from "./BrandMark";
import Wordmark from "./Wordmark";

// Lockup horizontal BATIPRO : symbole à gauche, nom à droite (cf. croquis client).
// Tout est vectoriel/texte — net à toute taille, et le nom hérite de Poppins.
//   - défaut  : navy + orange, pour les fonds clairs (header)
//   - `light` : marque inversée en blanc, pour les fonds sombres (footer navy)
export default function Logo({ light = false, className = "" }) {
  return (
    <span className={`brand-lockup ${className}`.trim()}>
      <BrandMark light={light} />
      <Wordmark light={light} />
    </span>
  );
}
