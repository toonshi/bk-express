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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center">
        {/* Logo */}
        <a href="/" className="flex items-center mr-auto">
          <Image src="/logo.svg" alt="BK Express" width={160} height={50} priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 mr-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-[family-name:'Oswald'] uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:hello@bkexpress.co.ke"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-[family-name:'Oswald'] uppercase tracking-wide"
          >
            Email Us
          </a>
          <a
            href="tel:+254700000000"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm border-2 border-black text-black hover:bg-slate-50 transition-colors font-[family-name:'Oswald'] uppercase tracking-wide"
          >
            Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 py-1 transition-colors font-[family-name:'Oswald'] uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2 border-t border-slate-100">
              <a
                href="mailto:hello@bkexpress.co.ke"
                className="inline-flex justify-center px-5 py-2.5 text-slate-700 border border-slate-200 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors font-[family-name:'Oswald'] uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Email Us
              </a>
              <a
                href="tel:+254700000000"
                className="inline-flex justify-center px-5 py-2.5 border-2 border-black text-black rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors font-[family-name:'Oswald'] uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
