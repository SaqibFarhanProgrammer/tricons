import { site } from "./site";

/**
 * @param {{
 *   title: string;
 *   description: string;
 *   path: string;
 *   ogType?: "website" | "article";
 *   noIndex?: boolean;
 * }} options
 */
export function createMetadata({
  title,
  description,
  path,
  ogType = "website",
  noIndex = false,
}) {
  const canonical = new URL(path, site.url).toString();
  const fullTitle =
    path === "/" ? title : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: ogType,
      locale: site.locale.replace("_", "-"),
      url: canonical,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** @param {Record<string, unknown> | Record<string, unknown>[]} data */
export function jsonLdScript(data) {
  const payload = Array.isArray(data) ? data : [data];
  return {
    __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "UI/UX Design",
      "Full Stack Development",
      "AI Development",
      "Digital Marketing",
    ],
  };
}

/**
 * @param {{ name: string; description: string; path: string }} page
 */
export function webPageJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: new URL(page.path, site.url).toString(),
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };
}

/**
 * @param {{ items: { name: string; description: string }[] }} options
 */
export function servicesJsonLd({ items }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.name,
        description: item.description,
        provider: {
          "@type": "Organization",
          name: site.legalName,
          url: site.url,
        },
      },
    })),
  };
}
