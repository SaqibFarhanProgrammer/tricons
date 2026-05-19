import Link from "next/link";
import { navLinks, site } from "@/lib/site";

/** Server Component — mobile menu uses native <details> (no client JS). */
export default function Navbar() {
  return (
    <header className="contents">
      <nav
        aria-label="Primary"
        className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl rounded-full z-50 bg-white/90 backdrop-blur-md text-black border border-black/10 shadow-sm"
      >
        <motion className="px-6 md:px-8 flex items-center justify-between h-12 md:h-14">
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
                  className="text-black/60 text-[11px] tracking-wide hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-1.5 bg-black text-white text-[11px] tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>

          <details className="md:hidden relative">
            <summary
              aria-label="Open menu"
              className="flex flex-col gap-1 p-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
            >
              <span className="block w-4 h-0.5 bg-black" />
              <span className="block w-4 h-0.5 bg-black" />
              <span className="block w-4 h-0.5 bg-black" />
            </summary>

            <div className="fixed inset-0 z-[60] bg-white pt-0">
              <motion className="flex items-center justify-between px-6 h-16 border-b border-black/10">
                <span className="font-medium">{site.name}</span>
                <Link href="/" className="text-xl p-2" aria-label="Close menu">
                  ✕
                </Link>
              </div>

              <ul className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-black/70 text-lg hover:text-black transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex mt-2 px-8 py-3 bg-black text-white text-sm rounded-full"
                  >
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </motion>
          </details>
        </div>
      </nav>
    </header>
  );
}
