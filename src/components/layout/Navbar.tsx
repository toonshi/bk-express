"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react/ssr";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Cities", href: "#cities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-200 border-b ${
          stuck
            ? "bg-[#1A1C22]/95 backdrop-blur-md border-white/10 shadow-lg"
            : "bg-white border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                stuck ? "bg-[#B9FF66]" : "bg-[#1A1C22]"
              }`}
            >
              <span
                className={`text-sm font-bold leading-none transition-colors duration-200 ${
                  stuck ? "text-[#1A1C22]" : "text-[#B9FF66]"
                }`}
              >
                BK
              </span>
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-200 ${
                stuck ? "text-[#B9FF66]" : "text-[#1A1C22]"
              }`}
            >
              BK EXPRESS
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  stuck
                    ? "text-gray-300 hover:text-[#B9FF66]"
                    : "text-gray-600 hover:text-[#1A1C22]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#booking"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
              stuck
                ? "bg-[#B9FF66] text-[#1A1C22] hover:bg-[#a8ef55]"
                : "bg-[#B9FF66] text-[#1A1C22] hover:bg-[#a8ef55]"
            }`}
          >
            Get a Quote
          </a>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              stuck
                ? "text-white hover:bg-white/10"
                : "text-[#1A1C22] hover:bg-gray-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className={`md:hidden border-t ${stuck ? "border-white/10 bg-[#1A1C22]" : "border-gray-100 bg-white"}`}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-1 transition-colors ${
                    stuck
                      ? "text-gray-300 hover:text-[#B9FF66]"
                      : "text-gray-700 hover:text-[#1A1C22]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                className="mt-2 inline-flex justify-center px-5 py-2.5 bg-[#B9FF66] text-[#1A1C22] rounded-lg font-semibold text-sm hover:bg-[#a8ef55] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
