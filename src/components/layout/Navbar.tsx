"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react/ssr";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b border-[#efefef] shadow-[0_1px_0_#efefef]" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="BK Express"
            width={150}
            height={40}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#111111]/60 hover:text-[#111111] tracking-wide uppercase transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:hello@bkexpress.co.ke"
            className="text-[14px] font-medium text-[#111111]/50 hover:text-[#111111] transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Support
          </a>
          <a
            href="tel:+254700000000"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-[14px] bg-[#b9ff66] text-[#111111] hover:bg-[#a8f050] transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Talk to Dispatch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#111111]/60 hover:text-[#111111] hover:bg-[#efefef] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-50 border-t border-[#efefef]">
          <div className="px-6 py-10 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-[#111111]/70 hover:text-[#111111] transition-colors tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 flex flex-col gap-3 border-t border-[#efefef]">
              <a
                href="tel:+254700000000"
                className="inline-flex justify-center px-8 py-3.5 bg-[#b9ff66] text-[#111111] rounded-lg font-semibold text-sm"
                style={{ fontFamily: "var(--font-display)" }}
                onClick={() => setMobileOpen(false)}
              >
                Talk to Dispatch
              </a>
              <a
                href="mailto:hello@bkexpress.co.ke"
                className="inline-flex justify-center px-8 py-3.5 border border-[#efefef] text-[#111111]/60 rounded-lg font-medium text-sm hover:text-[#111111] hover:border-[#111111]/20 transition-all"
                style={{ fontFamily: "var(--font-display)" }}
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
