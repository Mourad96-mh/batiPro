import ContactContent from "@/components/pages/ContactContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "en",
  frPath: "/contact",
  title: "Contact & free quote",
  description:
    "Free quote from BATIPRO BTP CONSULTING: construction, renovation, fit-out and OPC throughout Morocco. Fast response.",
});

export default function Page() {
  return <ContactContent />;
}
