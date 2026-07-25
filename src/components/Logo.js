// Logo client (lockup BATIPRO BTP CONSULTING), détouré depuis `logo.jpeg` par
// `scripts/make-logo-assets.mjs` → PNG à fond transparent.
//   - défaut  : couleurs d'origine, pour les fonds clairs (header)
//   - `light` : marque inversée en blanc (orange conservé), pour les fonds sombres
//               (footer navy) où le navy d'origine serait illisible
export default function Logo({ light = false, className = "" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? "/logo-light.png" : "/logo.png"}
      alt="BATIPRO BTP CONSULTING"
      className={`brand-logo ${className}`.trim()}
      /* dimensions intrinsèques des PNG détourés (cf. make-logo-assets.mjs) */
      width="480"
      height="401"
    />
  );
}
