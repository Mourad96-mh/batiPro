// "BATIPRO" wordmark: two-tone (navy "BATI" + orange "PRO") with the
// "BTP CONSULTING" descriptor beneath — echoing the logo. The name is the logo.
// `light` recolors it for dark backgrounds (footer): white + bright orange.
export default function Wordmark({ light = false, className = "" }) {
  return (
    <span className={`wordmark ${light ? "wordmark--light" : ""} ${className}`.trim()}>
      <span className="wm-main">
        BATI<span className="wm-accent">PRO</span>
      </span>
      <span className="wm-sub">BTP CONSULTING</span>
    </span>
  );
}
