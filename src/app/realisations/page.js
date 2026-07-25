import RealisationsContent from "@/components/pages/RealisationsContent";
import { dict } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "fr",
  frPath: "/realisations",
  absoluteTitle: dict.fr.realisations.metaTitle,
  title: dict.fr.realisations.hero.title,
  description: dict.fr.realisations.metaDesc,
});

export default function Page() {
  return <RealisationsContent />;
}
