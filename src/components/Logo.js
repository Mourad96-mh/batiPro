import { COMPANY } from "@/lib/dictionary";

// Le logo officiel du client, tel quel. `public/logo*.png` sont découpés dans
// `match-logo.jpeg` par scripts/make-logo-assets.mjs — ne pas redessiner la
// marque : toute retouche passe par une nouvelle image fournie par le client.
//   - défaut  : couleurs d'origine, pour les fonds clairs (header)
//   - `light` : marque aplatie en blanc (orange conservé), pour le footer navy
// Dimensions natives : 720×168 (cf. sortie du script) → à reporter ici si la
// source change, sinon la réservation d'espace (CLS) devient fausse.
export default function Logo({ light = false, className = "" }) {
  return (
    <img
      src={light ? "/logo-light.png" : "/logo.png"}
      alt={COMPANY.legalName}
      width="720"
      height="168"
      className={`brand-logo ${className}`.trim()}
    />
  );
}
