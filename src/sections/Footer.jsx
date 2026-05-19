import Link from "next/link";
import { navLinks, site } from "@/lib/site";

const footerServices = [
  "Web Development",
  "Meta Ads Management",
  "Google Ads Management",
  "Video Editing",
  "Graphic Design",
  "Social Media Management",
  "Brand Building",
  "Product Photography",
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-white border-t border-black/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-black text-2xl tracking-tight font-semibold block mb-4"
            >
              {site.name}
            </Link>

            <p className="text-black/50 text-sm leading-relaxed max-w-xs">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h2 className="text-black text-xs tracking-[0.15em] uppercase mb-6">
              Services
            </h2>

            <ul className="space-y-3 list-none m-0 p-0">
              {footerServices.map((service) => (
                <li
                  key={service}
                  className="text-black/50 text-sm"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="lg:col-span-2"
          >
            <h2 className="text-black text-xs tracking-[0.15em] uppercase mb-6">
              Quick Links
            </h2>

            <ul className="space-y-3 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black/50 text-sm hover:text-black transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-black text-xs tracking-[0.15em] uppercase mb-6">
              Contact
            </h2>

            <address className="not-italic space-y-4 text-sm">
              <p>
                <span className="block text-black/40 text-[10px] uppercase tracking-wide">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-black/70 hover:text-black transition-colors duration-300"
                >
                  {site.email}
                </a>
              </p>

              <p>
                <span className="block text-black/40 text-[10px] uppercase tracking-wide">
                  Working Hours
                </span>
                <span className="text-black/70">
                  Mon – Sat · 10AM – 7PM PKT
                </span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-black/40 text-[11px] tracking-wide">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {site.linkedin ? (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 text-sm hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            ) : null}
            {site.instagram ? (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 text-sm hover:text-black transition-colors"
              >
                Instagram
              </a>
            ) : null}
            <Link
              href="/contact"
              className="text-black/50 text-sm hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
