"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react/ssr";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#06060b]/80 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="BK Express"
            width={130}
            height={36}
            priority
            className="brightness-0 invert opacity-90"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:hello@bkexpress.co.ke"
            className="text-sm font-medium text-white/40 hover:text-white transition-colors duration-200"
          >
            Support
          </a>
          <a
            href="tel:+254700000000"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm bg-primary text-white hover:bg-primary-light hover:text-dark transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            Call Dispatch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#06060b]/95 backdrop-blur-xl z-50 border-t border-white/[0.06]">
          <div className="px-6 py-10 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 flex flex-col gap-3 border-t border-white/[0.06]">
              <a
                href="tel:+254700000000"
                className="inline-flex justify-center px-8 py-3.5 bg-primary text-white rounded-lg font-semibold text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                onClick={() => setMobileOpen(false)}
              >
                Call Dispatch
              </a>
              <a
                href="mailto:hello@bkexpress.co.ke"
                className="inline-flex justify-center px-8 py-3.5 border border-white/[0.08] text-white/60 rounded-lg font-medium text-sm hover:text-white hover:border-white/20 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
