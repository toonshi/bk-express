import BookingWidget from "@/components/booking/BookingWidget";
import { Phone, Envelope, ArrowDown } from "@phosphor-icons/react/ssr";
import { STATS } from "@/data";

export default function HeroSection() {
  return (
    <section className="relative bg-dark text-white overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Technical Grid Background */}
      <div
        aria-hidden
        className="absolute inset-0 technical-grid-dark opacity-20 pointer-events-none"
      />
      
      {/* Glow Effect */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Service badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(195,238,143,0.8)]" />
          <span className="text-[11px] text-white/80 font-bold uppercase tracking-widest">
            Across Kenya · Real-time Pricing
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8 font-display">
          LOGISTICS FOR THE <br />
          <span className="text-primary italic">MODERN WORLD.</span>
        </h1>

        <p className="mt-8 text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-sans">
          BK Express provides industrial-grade delivery infrastructure for{" "}
          <span className="text-white font-medium">market produce</span>,{" "}
          <span className="text-white font-medium">household goods</span>, and{" "}
          <span className="text-white font-medium">parcels</span>.
        </p>

        {/* Booking widget container - Centered */}
        <div className="mt-12 max-w-4xl mx-auto bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
          <BookingWidget />
        </div>

        {/* Contact & Stats Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10 pt-10 border-t border-white/5">
          {/* Contact shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-primary transition-colors uppercase tracking-wider"
            >
              <Phone size={16} weight="bold" />
              +254 700 000 000
            </a>
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-primary transition-colors uppercase tracking-wider"
            >
              <Envelope size={16} weight="bold" />
              hello@bkexpress.co.ke
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl font-black text-primary font-display">{stat.value}</p>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <a
            href="#services"
            aria-label="Scroll to services"
            className="group flex flex-col items-center gap-3 text-[10px] font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest"
          >
            Explore Services
            <div className="w-px h-12 bg-white/10 group-hover:bg-primary/50 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-scroll-down" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
