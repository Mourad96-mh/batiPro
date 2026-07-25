import AboutContent from "@/components/pages/AboutContent";
import { dict } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  lang: "en",
  frPath: "/a-propos",
  absoluteTitle: dict.en.about.metaTitle,
  title: dict.en.about.hero.title,
  description: dict.en.about.metaDesc,
});

export default function Page() {
  return <AboutContent />;
}
