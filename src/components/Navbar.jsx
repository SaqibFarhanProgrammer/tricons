import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { navLinks, site } from "@/lib/site";

/** Server Component — only MobileNav hydrates (drawer state). */
export default function Navbar() {
  return (
    <header className="contents">
      <nav
        aria-label="Primary"
        className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl rounded-full z-50 bg-white/90 backdrop-blur-md text-black border border-black/10 shadow-sm"
      >
        <div className="px-6 md:px-8 flex items-center justify-between h-12 md:h-14">
          <Link
            href="/"
            className="text-black text-base md:text-lg tracking-tight font-medium"
          >
            {site.name}
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black/60 text-[11px] tracking-wide hover:text-black transition-colors duration-300 focus-visible:outline-none focus-visible:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-1.5 bg-black text-white text-[11px] tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Get in Touch
          </Link>

          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
