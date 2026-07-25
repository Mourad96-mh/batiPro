import ContactContent from "@/components/pages/ContactContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "fr",
  frPath: "/contact",
  title: "Contact & devis gratuit",
  description:
    "Devis gratuit BATIPRO BTP CONSULTING : construction, rénovation, aménagement et OPC à Kénitra, Rabat, Tanger, Meknès et Casablanca. Réponse rapide.",
});

export default function Page() {
  return <ContactContent />;
}
