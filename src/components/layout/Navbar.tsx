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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-dark/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image src="/logo.svg" alt="BK Express" width={140} height={40} priority className="brightness-0 invert" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="mailto:hello@bkexpress.co.ke"
            className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Support
          </a>
          <a
            href="tel:+254700000000"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest bg-primary text-dark hover:bg-yellow transition-all active:scale-95"
          >
            Call Dispatch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-dark z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-10 flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-10 flex flex-col gap-4 border-t border-white/5">
              <a
                href="tel:+254700000000"
                className="inline-flex justify-center px-8 py-4 bg-primary text-dark rounded-lg font-black text-sm uppercase tracking-widest"
                onClick={() => setMobileOpen(false)}
              >
                Call Dispatch
              </a>
              <a
                href="mailto:hello@bkexpress.co.ke"
                className="inline-flex justify-center px-8 py-4 border border-white/10 text-white rounded-lg font-black text-sm uppercase tracking-widest"
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
