// lib/seo.js
import { site, getAbsoluteUrl } from "./site";

/**
 * WebSite schema (homepage / sitelinks).
 */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: site.locale,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

/**
 * WebPage Schema
 */
export function webPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
  datePublished,
  dateModified,
  image,
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: getAbsoluteUrl(path),
    ...(image && { image }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: getAbsoluteUrl(site.logo),
    },
    inLanguage: site.locale,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };
}

/**
 * Organization Schema
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: getAbsoluteUrl(site.logo),
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      availableLanguage: ["English"],
    },
    areaServed: ["Pakistan", "Karachi", "Global"],
    sameAs: [site.linkedin, site.instagram].filter(Boolean),
  };
}

/**
 * ItemList Schema (Portfolio ke liye)
 */
export function itemListJsonLd({ name, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url,
      ...(item.image && { image: item.image }),
    })),
  };
}

/**
 * Services Schema
 */
export function servicesJsonLd({ items }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tricons Digital Services",
    description: site.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: items.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: item.title ?? item.name,
          description: item.description,
        },
      })),
    },
  };
}

/**
 * Metadata Generator
 */
export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = site.ogImage,
  openGraph = {},
  twitter = {},
  ...rest
}) {
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : getAbsoluteUrl(ogImage);
  const defaultImages = [
    {
      url: ogImageUrl,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,

    alternates: {
      canonical: getAbsoluteUrl(path),
    },

    openGraph: {
      title,
      description,
      url: getAbsoluteUrl(path),
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: defaultImages,
      ...openGraph,
    },

    twitter: {
      card: "summary_large_image",
      site: site.twitterHandle,
      title,
      description,
      images: [ogImageUrl],
      ...twitter,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    ...rest,
  };
}