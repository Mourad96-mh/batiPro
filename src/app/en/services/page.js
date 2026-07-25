import ServicesContent from "@/components/pages/ServicesContent";
import { dict } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "en",
  frPath: "/services",
  title: "Our areas of expertise",
  description: dict.en.servicesPage.metaDesc,
});

export default function Page() {
  return <ServicesContent />;
}
