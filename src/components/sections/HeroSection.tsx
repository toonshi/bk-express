import BookingWidget from "@/components/booking/BookingWidget";
import { Phone, Envelope } from "@phosphor-icons/react/ssr";
import { STATS } from "@/data";

export default function HeroSection() {
  return (
    <section className="relative bg-dark text-white overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dot grid background */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid pointer-events-none"
      />

      {/* Gradient glow blobs */}
      <div
        aria-hidden
        className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-primary/20 blur-[160px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-24 text-center">
        {/* Service badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
          <span className="text-xs text-white/60 font-medium tracking-wide">
            Across Kenya · Real-time Pricing
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight mb-6 font-display">
          Logistics for the <br />
          <span className="gradient-text">Modern World.</span>
        </h1>

        <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed font-sans">
          BK Express delivers{" "}
          <span className="text-white/80 font-medium">market produce</span>,{" "}
          <span className="text-white/80 font-medium">household goods</span>, and{" "}
          <span className="text-white/80 font-medium">parcels</span>{" "}
          across Kenya with industrial-grade reliability.
        </p>

        {/* Booking widget */}
        <div className="mt-12 max-w-4xl mx-auto">
          <BookingWidget />
        </div>

        {/* Stats + Contact row */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/[0.06]">
          {/* Contact shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/80 transition-colors"
            >
              <Phone size={14} />
              +254 700 000 000
            </a>
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/80 transition-colors"
            >
              <Envelope size={14} />
              hello@bkexpress.co.ke
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center md:text-right">
                <p className="text-2xl font-bold text-primary-light font-display">{stat.value}</p>
                <p className="text-[11px] text-white/30 mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-14">
          <a
            href="#services"
            aria-label="Scroll to services"
            className="group flex flex-col items-center gap-3 text-[11px] font-medium text-white/20 hover:text-white/50 transition-colors"
          >
            Explore Services
            <div className="w-px h-10 bg-white/10 group-hover:bg-primary/40 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-light animate-scroll-down" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
