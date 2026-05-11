import BookingWidget from "@/components/booking/BookingWidget";
import Image from "next/image";
import { Phone, Envelope } from "@phosphor-icons/react/ssr";
import { STATS } from "@/data";

export default function HeroSection() {
  return (
    <>
      {/* ── Header / Logo ────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#111111] rounded-lg flex items-center justify-center">
              <span className="text-[#b9ff66] font-bold text-[12px] font-display">BK</span>
            </div>
            <span className="font-bold text-[18px] tracking-tight text-[#111111] font-display">
              BK EXPRESS
            </span>
          </div>
          <a
            href="tel:+254700000000"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-[14px] bg-[#111111] text-white hover:bg-[#333333] transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Call us
          </a>
        </div>
      </div>

      {/* ── Announcement banner ──────────────────────────────────────────── */}
      <div className="bg-[#f8f8f8] border-b border-[#efefef] pt-20">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/30 flex-shrink-0" />
          <p
            className="text-[13px] font-medium text-[#666666] tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Overnight routes now active · Nairobi to Mombasa, Kisumu & Nakuru
          </p>
          <a
            href="#pricing"
            className="text-[13px] font-semibold text-[#111111] underline underline-offset-2 hover:no-underline"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book now →
          </a>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-24 lg:py-40 flex flex-col items-center">
        <div className="relative max-w-4xl mx-auto px-6 w-full text-center flex flex-col items-center gap-10">
          
          {/* Service badge */}
          <div className="inline-flex items-center gap-2 border border-[#efefef] rounded-full px-4 py-1.5 bg-white shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b9ff66]" />
            <span
              className="text-[14px] font-medium text-[#111111]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Reliable delivery across Kenya
            </span>
          </div>

          {/* Headline */}
          <h1
            role="heading"
            className="text-[48px] sm:text-[64px] lg:text-[80px] text-[#111111] leading-[1.05] tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
            }}
          >
            Move your goods with ease.
          </h1>

          {/* Subtext */}
          <p
            className="text-[20px] sm:text-[22px] text-[#555555] leading-[1.6] max-w-2xl"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            Simple, reliable transport across Nairobi and nationwide overnight. Get a price and book your delivery in seconds.
          </p>

          {/* Booking card — Centered */}
          <div className="w-full max-w-md bg-white border border-[#efefef] rounded-2xl overflow-hidden shadow-2xl mt-4">
            <div className="px-5 py-4 border-b border-[#efefef] bg-white flex items-center justify-between">
              <h3
                className="text-[17px] font-semibold text-[#111111]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                See your price
              </h3>
              <span
                className="text-[12px] font-medium text-[#999999]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Instant quote
              </span>
            </div>
            <div className="p-5">
              <BookingWidget />
            </div>
          </div>

          {/* Stats row — Centered */}
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-24 pt-16 w-full">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-[36px] font-bold text-[#111111]"
                  style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[14px] text-[#666666] mt-0.5 font-medium"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Contact line */}
          <div className="flex flex-wrap items-center justify-center gap-10 pt-10 border-t border-[#efefef] w-full max-w-2xl">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-[15px] font-medium text-[#999999] hover:text-[#111111] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Phone size={14} />
              +254 700 000 000
            </a>
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="flex items-center gap-2 text-[15px] font-medium text-[#999999] hover:text-[#111111] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Envelope size={14} />
              hello@bkexpress.co.ke
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
