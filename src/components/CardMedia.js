import { Icon } from "./Icon";

// Service-card header visual. If `img` (a basename in /public/img/) is given, show
// the optimized photo (WebP + JPG fallback) with the service icon as a small badge.
// Without a photo it falls back to the on-brand "blueprint" gradient panel.
export default function CardMedia({ icon, img, alt = "", tone = "navy" }) {
  if (img) {
    return (
      <div className="card-media card-media--photo">
        <picture>
          <source srcSet={`/img/${img}.webp`} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/img/${img}.jpg`} alt={alt} loading="lazy" width="800" height="450" />
        </picture>
        <span className={`card-media-badge tone-${tone}`} aria-hidden="true">
          <Icon name={icon} size={20} />
        </span>
      </div>
    );
  }

  return (
    <div className={`card-media card-media--blueprint tone-${tone}`} role="img" aria-label={alt}>
      <span className="bp-grid" aria-hidden="true" />
      <span className="card-media-ic">
        <Icon name={icon} size={40} />
      </span>
    </div>
  );
}
