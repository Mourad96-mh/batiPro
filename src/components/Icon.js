// Lightweight inline SVG icons. Stroke uses currentColor.

export function Icon({ name, size = 28 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    // ---- Construction / BTP ----
    case "building":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-4h6v4" />
          <path d="M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01" />
        </svg>
      );
    case "renovate":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M4 21V10l8-6 8 6v11" />
          <path d="M14 21v-6h4v6" />
          <path d="M8.5 12.5l2 2 4-4" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...common}>
          <path d="M3 8.5 8.5 3 21 15.5 15.5 21 3 8.5Z" />
          <path d="M7 7l2 2M10 10l1.5 1.5M13 13l2 2M9 5l1.2 1.2" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
          <path d="M9 11l1.5 1.5L13 10M9 16h6" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="M11 17l-2 2a1.4 1.4 0 0 1-2-2l1-1" />
          <path d="M8 16a1.4 1.4 0 0 1-2-2l2-2" />
          <path d="M6 12a1.4 1.4 0 0 1-2-2l3-3 4 1 3-2" />
          <path d="M13 5l4-1 3 3v5l-4 4-3-3" />
          <path d="M11 15l2 2" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M15 6a4 4 0 0 0-5 5L4 17l3 3 6-6a4 4 0 0 0 5-5l-2.5 2.5L13 10l1.5-2.5L15 6Z" />
        </svg>
      );
    case "helmet":
      return (
        <svg {...common}>
          <path d="M3 17a9 9 0 0 1 18 0" />
          <path d="M2.5 17h19a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-19a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Z" />
          <path d="M9 9V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
          <path d="M12 5v-.5" />
        </svg>
      );
    case "crane":
      return (
        <svg {...common}>
          <path d="M6 21V5M6 5h12M6 5 3 8M6 8h5M11 5v3" />
          <path d="M18 5v3M18 8v2M16.5 10h3l-1.5 2.5L16.5 10Z" />
          <path d="M4 21h4" />
        </svg>
      );
    // ---- Values / generic ----
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    // ---- Contact / social ----
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3c-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.7 4.3 3.8a14 14 0 0 0 1.4.5c.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 9V7c0-1 .3-1.5 1.5-1.5H17V2.6C16.5 2.5 15.5 2.4 14.6 2.4c-2.4 0-4 1.4-4 4.1V9H8v3h2.6v9h3.4v-9h2.4l.4-3H14Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.5h3.3V21H3.3V8.5Zm5.4 0h3.16v1.7h.05c.44-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 4.9V21h-3.3v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H8.7V8.5Z" />
        </svg>
      );
    default:
      return null;
  }
}
