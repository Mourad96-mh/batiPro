import ServiceDetail from "@/components/ServiceDetail";
import { COMPANY, dict, areaServedLd } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return dict.fr.services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = dict.fr.services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return buildMetadata({
    lang: "fr",
    frPath: `/services/${s.slug}`,
    absoluteTitle: s.metaTitle,
    title: s.title,
    description: s.metaDesc,
  });
}

export default function Page({ params }) {
  const s = dict.fr.services.find((x) => x.slug === params.slug);
  if (!s) return null;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.metaDesc,
    url: `${COMPANY.siteUrl}/services/${s.slug}/`,
    areaServed: areaServedLd("fr"),
    provider: { "@type": "GeneralContractor", name: COMPANY.legalName, "@id": `${COMPANY.siteUrl}/#business` },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.fr.nav.home, item: `${COMPANY.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: dict.fr.nav.services, item: `${COMPANY.siteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: s.title, item: `${COMPANY.siteUrl}/services/${s.slug}/` },
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
