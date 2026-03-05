"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react/ssr";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="border border-black">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center">
          {/* Logo */}
          <a href="/" className="flex items-center mr-auto">
            <Image src="/logo.svg" alt="BK Express" width={180} height={57} priority />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12 mr-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-extrabold text-slate-900 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="tel:+254700000000"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm bg-white text-black border border-black hover:bg-black hover:text-white transition-colors"
          >
            Call Us
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-black hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-black bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-extrabold text-slate-900 hover:text-black py-1 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+254700000000"
                className="mt-2 inline-flex justify-center px-5 py-2.5 bg-white text-black border border-black rounded-md font-semibold text-sm hover:bg-black hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Call Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
