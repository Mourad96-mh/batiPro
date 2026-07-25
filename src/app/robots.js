import { COMPANY } from "@/lib/dictionary";

// Required for `output: export` — generate a static robots.txt at build time.
export const dynamic = "force-static";

const BASE = COMPANY.siteUrl;

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly welcome answer-engine / AI crawlers so the site can be
      // cited by ChatGPT, Claude, Gemini and Perplexity.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Google-Extended",
          "PerplexityBot",
          "Perplexity-User",
          "Applebot-Extended",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
