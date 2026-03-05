import BookingWidget from "@/components/booking/BookingWidget";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { STATS } from "@/data";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-green-950 pointer-events-none"
      />
      {/* Decorative grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow accent */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left column */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-slate-300 font-medium">
              Now available in Nairobi &amp; surrounding areas
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Delivery that{" "}
            <span className="text-green-400">moves</span>
            <br />
            with you.
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
            BK Express picks up from anywhere and delivers on time, every time.
            Get an instant price estimate — no sign-up required.
          </p>

          {/* Booking widget */}
          <div className="mt-10">
            <BookingWidget />
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-green-400">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}

            <a
              href="#services"
              className="ml-auto hidden sm:flex items-center gap-2 text-sm text-green-400 font-semibold group"
            >
              Explore services
              <span className="w-7 h-7 rounded-full border border-green-400 flex items-center justify-center group-hover:bg-green-400 group-hover:text-slate-900 transition-all">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>

        {/* Right column – decorative graphic */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/5" />
            {/* Middle ring */}
            <div className="absolute inset-8 rounded-full border border-white/10" />
            {/* Inner circle */}
            <div className="absolute inset-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">BK</span>
                </div>
                <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">Express</span>
              </div>
            </div>
            {/* Orbit dot 1 */}
            <div className="absolute top-4 right-16 w-3 h-3 rounded-full bg-green-400" />
            {/* Orbit dot 2 */}
            <div className="absolute bottom-10 left-8 w-2 h-2 rounded-full bg-green-600" />
            {/* Orbit dot 3 */}
            <div className="absolute top-1/2 right-0 w-4 h-4 rounded-full bg-white/10 border border-white/20" />
            {/* Card floating */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3 whitespace-nowrap">
              <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Delivered on time</p>
                <p className="text-xs text-slate-400">98% success rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
