import HomeContent from "@/components/pages/HomeContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "en",
  frPath: "/",
  absoluteTitle: "BATIPRO BTP CONSULTING — Construction & building in Morocco",
  title: "Home",
  description:
    "BATIPRO BTP CONSULTING: construction, renovation, fit-out, OPC and maintenance throughout Morocco. Free quote.",
});

export default function Page() {
  return <HomeContent />;
}
