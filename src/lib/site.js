/** @type {Readonly<{
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  locale: string;
}>} */
export const site = {
  name: "Tricons",
  legalName: "Tricons Digital Agency",
  tagline: "Digital agency for web, apps, AI, and growth",
  description:
    "Tricons is a creative digital agency focused on web design, full-stack development, UI/UX, AI solutions, automation, and performance marketing that helps businesses scale online.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tricons.agency",
  email: "studiotricons@gmail.com",
  locale: "en_US",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
