// "BATIPRO" wordmark: two-tone (navy "BATI" + orange "PRO") with the
// "BTP CONSULTING" descriptor beneath — echoing the logo. The name is the logo.
// `light` recolors it for dark backgrounds (footer): white + bright orange.
export default function Wordmark({ light = false, className = "" }) {
  return (
    <span className={`wordmark ${light ? "wordmark--light" : ""} ${className}`.trim()}>
      <span className="wm-main">
        BATI<span className="wm-accent">PRO</span>
      </span>
      {/* filets de part et d'autre du descripteur, comme sur le logo */}
      <span className="wm-sub">
        <i className="wm-rule" aria-hidden="true" />
        BTP CONSULTING
        <i className="wm-rule" aria-hidden="true" />
      </span>
    </span>
  );
}
