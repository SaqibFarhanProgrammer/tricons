"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span
          className={`absolute block h-0.5 w-4 bg-black transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute block h-0.5 w-4 bg-black transition-all duration-300 ${
            open ? "opacity-0 scale-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block h-0.5 w-4 bg-black transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      {open ? (
        <aside
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[60] md:hidden"
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-6 h-16">
              <span className="font-medium text-lg">{site.name}</span>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8 pb-12">
              <ul className="flex flex-col gap-6 list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-medium text-black/80 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm rounded-full font-medium hover:bg-black/90 transition-colors"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </aside>
      ) : null}
    </>
  );
}
