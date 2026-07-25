import ServiceDetail from "@/components/ServiceDetail";
import { COMPANY, dict, areaServedLd } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return dict.en.services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = dict.en.services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return buildMetadata({
    lang: "en",
    frPath: `/services/${s.slug}`,
    absoluteTitle: s.metaTitle,
    title: s.title,
    description: s.metaDesc,
  });
}

export default function Page({ params }) {
  const s = dict.en.services.find((x) => x.slug === params.slug);
  if (!s) return null;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.metaDesc,
    url: `${COMPANY.siteUrl}/en/services/${s.slug}/`,
    areaServed: areaServedLd("en"),
    provider: { "@type": "GeneralContractor", name: COMPANY.legalName, "@id": `${COMPANY.siteUrl}/#business` },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.en.nav.home, item: `${COMPANY.siteUrl}/en/` },
      { "@type": "ListItem", position: 2, name: dict.en.nav.services, item: `${COMPANY.siteUrl}/en/services/` },
      { "@type": "ListItem", position: 3, name: s.title, item: `${COMPANY.siteUrl}/en/services/${s.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <ServiceDetail id={s.id} />
    </>
  );
}
