import ServicesContent from "@/components/pages/ServicesContent";
import { dict } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "fr",
  frPath: "/services",
  title: "Nos domaines d'intervention",
  description: dict.fr.servicesPage.metaDesc,
});

export default function Page() {
  return <ServicesContent />;
}
