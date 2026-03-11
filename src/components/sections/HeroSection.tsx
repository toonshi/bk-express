import Image from "next/image";
import BookingWidget from "@/components/booking/BookingWidget";
import { Phone } from "@phosphor-icons/react/ssr";
import { STATS } from "@/data";

export default function HeroSection() {
  return (
    <>
      {/* ── Announcement banner ──────────────────────────────────────────── */}
      <div className="bg-[#d4c830] border-b border-[#b8ae20] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0" />
          <p
            className="text-[13px] font-medium text-[#111111] tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Now serving overnight routes · Nairobi → Mombasa · Kisumu · Nakuru
          </p>
          <a
            href="#pricing"
            className="text-[13px] font-semibold text-[#111111] underline underline-offset-2 hover:no-underline"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See plans →
          </a>
        </div>
      </div>

      {/* ── Hero — full-bleed cinematic ───────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-104px)] flex flex-col justify-end overflow-hidden">

        {/* Background image — Next.js Image for LCP optimisation */}
        <Image
          src="https://github.com/user-attachments/assets/d8d691c2-5530-4f56-98cf-ea0752f44bcc"
          alt="BK Express truck on Kenya roads"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Layered dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D171A] via-[#0D171A]/65 to-[#0D171A]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D171A]/80 via-[#0D171A]/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-16 pt-24">

          {/* ── Headline block ───────────────────────────────────────── */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-md px-3.5 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6aaf15]" />
              <span
                className="text-[12px] font-medium text-white/60 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Across Kenya · Real-time Pricing
              </span>
            </div>

            <h1
              className="text-[60px] md:text-[80px] text-white leading-[0.95] tracking-[-0.04em] mb-7"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Move anything.<br />
              <span style={{ color: "#6aaf15" }}>Anywhere</span><br />
              in Kenya.
            </h1>

            <p
              className="text-[18px] text-white/60 leading-relaxed max-w-lg mb-10"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Industrial-grade logistics for market produce, household goods, and
              parcels — dispatched fast across Kenya.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+254700000000"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-[#6aaf15] text-white hover:bg-[#5a9a10] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Phone size={16} weight="bold" />
                Talk to Dispatch
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] border border-white/25 text-white hover:bg-white/10 transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* ── Stats + Booking row ──────────────────────────────────── */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-end gap-10 justify-between">

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-[32px] font-bold text-white"
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[12px] text-white/40 mt-0.5 font-medium tracking-wide"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Booking card */}
            <div className="w-full lg:w-auto lg:min-w-[400px] bg-white/96 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-2xl">
              <div className="px-5 py-4 border-b border-[#efefef] flex items-center justify-between">
                <h3
                  className="text-[16px] font-semibold text-[#111111]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Book a Delivery
                </h3>
                <span
                  className="text-[12px] font-medium text-[#999999] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Instant Quote
                </span>
              </div>
              <div className="p-5">
                <BookingWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
