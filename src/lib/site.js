// lib/site.js

export const site = {
  name: "Tricons",
  legalName: "Tricons Digital Agency",
  tagline: "Digital Agency for High-Performance Websites, Apps & Growth",
  description:
    "Tricons is a Karachi-based digital agency specializing in SEO-first websites, custom web applications, UI/UX design, AI solutions, automation, and performance marketing.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tricons.agency",
  email: "studiotricons@gmail.com",

  locale: "en_US",
  country: "Pakistan",
  city: "Karachi",

  // SEO & Social
  twitterHandle: "@tricons",
  instagram: "https://instagram.com/tricons",
  linkedin: "https://linkedin.com/company/tricons",

  // Branding
  logo: "/globe.svg",
  ogImage:
    "https://i.pinimg.com/1200x/c0/c0/09/c0c009cf166c59996310c17c5646eda8.jpg",

  // Contact
  phone: "",
  address: {
    locality: "Karachi",
    region: "Sindh",
    country: "Pakistan",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Helper function
export function getAbsoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}