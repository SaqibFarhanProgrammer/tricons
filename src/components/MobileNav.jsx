"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

/** Client boundary: mobile drawer open/close state only. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex flex-col gap-1 p-2"
      >
        <span className="block w-4 h-0.5 bg-black" />
        <span className="block w-4 h-0.5 bg-black" />
        <span className="block w-4 h-0.5 bg-black" />
      </button>

      <div
        id="mobile-nav-panel"
        hidden={!open}
        className="fixed inset-0 z-[60] bg-white md:hidden"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">
          <span className="font-medium">{site.name}</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-xl p-2"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-black/70 text-lg hover:text-black transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex mt-2 px-8 py-3 bg-black text-white text-sm rounded-full"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
