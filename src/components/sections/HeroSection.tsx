import BookingWidget from "@/components/booking/BookingWidget";
import { Phone, Envelope } from "@phosphor-icons/react/ssr";
import { STATS } from "@/data";

export default function HeroSection() {
  return (
    <>
      {/* ── Announcement banner ──────────────────────────────────────────── */}
      <div className="bg-[#f4ffb0] border-b border-[#e8f59e] mt-16">
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

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden min-h-[calc(100vh-104px)] flex flex-col justify-center">
        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* ── LEFT: Copy ──────────────────────────────────────────────── */}
            <div className="flex flex-col gap-8">
              {/* Service badge */}
              <div className="inline-flex items-center gap-2 w-fit border border-[#efefef] rounded-md px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                <span
                  className="text-[12px] font-medium text-[#666666] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Across Kenya · Real-time Pricing
                </span>
              </div>

              {/* Headline */}
              <h1
                role="heading"
                tabIndex={0}
                className="text-[56px] text-[#0D171A] leading-[1.0] tracking-[-0.04em]"
                style={{
                  fontFamily: "Saans, Arial, sans-serif",
                  fontWeight: 900,
                }}
              >
                Logistics for the<br />
                Modern World.
              </h1>

              {/* Subtext */}
              <p
                className="text-[22px] text-[#666666] leading-[1.5] max-w-lg"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
              >
                BK Express delivers{" "}
                <span className="text-[#111111] font-medium">market produce</span>,{" "}
                <span className="text-[#111111] font-medium">household goods</span>, and{" "}
                <span className="text-[#111111] font-medium">parcels</span>{" "}
                across Kenya with industrial-grade reliability.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-[#b9ff66] text-[#111111] hover:bg-[#a8f050] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Phone size={16} weight="bold" />
                  Talk to Dispatch
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-[#111111] text-white hover:bg-[#333333] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Explore Services
                </a>
              </div>

              {/* Contact line */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href="tel:+254700000000"
                  className="flex items-center gap-2 text-[14px] font-medium text-[#999999] hover:text-[#111111] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Phone size={13} />
                  +254 700 000 000
                </a>
                <a
                  href="mailto:hello@bkexpress.co.ke"
                  className="flex items-center gap-2 text-[14px] font-medium text-[#999999] hover:text-[#111111] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Envelope size={13} />
                  hello@bkexpress.co.ke
                </a>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-10 pt-6 border-t border-[#efefef]">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-[32px] font-bold text-[#111111]"
                      style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[12px] text-[#999999] mt-0.5 font-medium tracking-wide"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Truck Photo + Booking Overlay ───────────────────── */}
            <div className="relative">

              {/* Hero truck image */}
              <div className="relative rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github.com/user-attachments/assets/af203c77-5598-4e89-b060-770881b6ac17"
                  alt="BK Express truck — Isuzu FRR"
                  className="w-full object-cover"
                  style={{ height: "420px" }}
                />
                {/* dark gradient so the overlay card text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Live Tracking chip — top-right corner */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span
                    className="text-[11px] font-semibold text-[#111111] tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Live Tracking
                  </span>
                </div>

                {/* Bottom overlay — route progress */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[11px] font-medium text-white/70"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Marikiti Market
                    </span>
                    <span
                      className="text-[11px] font-medium text-white/70"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      #BKX-20483
                    </span>
                    <span
                      className="text-[11px] font-medium text-white/70"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Westlands
                    </span>
                  </div>
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-[#b9ff66] rounded-full" />
                  </div>
                  <p
                    className="text-[11px] text-white/50 mt-1.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    11.2 km · 68% complete · ETA 14 min
                  </p>
                </div>
              </div>

              {/* Booking card — overlapping the bottom of the photo */}
              <div className="relative -mt-6 mx-3 bg-white border border-[#efefef] rounded-lg overflow-hidden shadow-lg">
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
        </div>
      </section>
    </>
  );
}
