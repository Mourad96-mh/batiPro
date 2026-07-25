import RealisationsContent from "@/components/pages/RealisationsContent";
import { dict } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "en",
  frPath: "/realisations",
  absoluteTitle: dict.en.realisations.metaTitle,
  title: dict.en.realisations.hero.title,
  description: dict.en.realisations.metaDesc,
});

export default function Page() {
  return <RealisationsContent />;
}
