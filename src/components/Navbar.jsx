"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl rounded-full z-50 bg-white/90 backdrop-blur-md text-black border border-black/10 shadow-sm">
        <div className="px-6 md:px-8 flex items-center justify-between h-12 md:h-14">
          <a
            href="#home"
            className="text-black text-base md:text-lg tracking-tight font-medium"
          >
            Tricons
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-black/60 text-[11px] tracking-wide hover:text-black transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-1.5 bg-black text-white text-[11px] tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1 p-2"
          >
            <span className="block w-4 h-0.5 bg-black" />
            <span className="block w-4 h-0.5 bg-black" />
            <span className="block w-4 h-0.5 bg-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">
          <span className="font-medium">Tricons</span>

          <button onClick={() => setMenuOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-black/70 text-lg hover:text-black transition"
            >
              {link.label}
            </a>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 px-8 py-3 bg-black text-white text-sm rounded-full"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
