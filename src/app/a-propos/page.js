import AboutContent from "@/components/pages/AboutContent";
import { dict } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "fr",
  frPath: "/a-propos",
  absoluteTitle: dict.fr.about.metaTitle,
  title: dict.fr.about.hero.title,
  description: dict.fr.about.metaDesc,
});

export default function Page() {
  return <AboutContent />;
}
