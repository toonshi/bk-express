import BookingWidget from "@/components/booking/BookingWidget";
import { Phone, Envelope, MapPin, ArrowDown } from "@phosphor-icons/react/ssr";
import { STATS } from "@/data";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-white to-white pointer-events-none"
      />
      {/* Decorative green blob — top right */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[560px] h-[560px] bg-green-100 rounded-full opacity-50 blur-3xl pointer-events-none"
      />
      {/* Decorative green blob — bottom left */}
      <div
        aria-hidden
        className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-emerald-50 rounded-full opacity-70 blur-2xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left column ───────────────────────────────────────── */}
          <div>
            {/* Service badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-700 font-medium">
                Nairobi · Mombasa · Kisumu · Upcountry
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight max-w-xl">
              Trucks that{" "}
              <span className="text-green-600">move Kenya</span>{" "}
              forward.
            </h1>

            <p className="mt-5 text-lg text-slate-500 max-w-lg leading-relaxed">
              BK Express moves{" "}
              <strong className="text-slate-700 font-semibold">market produce</strong>,{" "}
              <strong className="text-slate-700 font-semibold">household goods</strong>, and{" "}
              <strong className="text-slate-700 font-semibold">overnight parcels</strong>{" "}
              across Kenya. Get an instant price — no sign-up needed.
            </p>

            {/* Booking widget */}
            <div className="mt-8">
              <BookingWidget />
            </div>

            {/* Contact shortcuts */}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href="tel:+254700000000"
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-green-600 transition-colors"
              >
                <Phone size={15} weight="bold" />
                +254 700 000 000
              </a>
              <a
                href="mailto:hello@bkexpress.co.ke"
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-green-600 transition-colors"
              >
                <Envelope size={15} weight="bold" />
                hello@bkexpress.co.ke
              </a>
            </div>

            {/* Mobile-only stats */}
            <div className="mt-8 flex flex-wrap gap-6 lg:hidden">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-green-600">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column (desktop) ─────────────────────────────── */}
          <div className="hidden lg:flex flex-col gap-4">

            {/* Example route card */}
            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
                Live route example
              </p>

              {/* Route stops */}
              <div className="space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center">
                      <MapPin size={16} className="text-green-400" weight="fill" />
                    </div>
                    <div className="w-px h-8 bg-slate-700 mt-1 border-l border-dashed border-slate-600" />
                  </div>
                  <div className="pt-1.5">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Pickup
                    </p>
                    <p className="text-base font-semibold text-white leading-snug">
                      Marikiti Market, Nairobi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-green-400" weight="fill" />
                  </div>
                  <div className="pt-1.5">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Drop-off
                    </p>
                    <p className="text-base font-semibold text-white leading-snug">
                      Mombasa CBD
                    </p>
                  </div>
                </div>
              </div>

              {/* Route meta */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 grid grid-cols-3 gap-3">
                <div>
                  <p className="text-[11px] text-slate-500">Distance</p>
                  <p className="text-sm font-bold text-green-400 mt-0.5">480 km</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">Est. time</p>
                  <p className="text-sm font-bold text-green-400 mt-0.5">~8 hrs</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-500">Price</p>
                  <p className="text-lg font-extrabold text-white mt-0.5">
                    KES 12,550
                  </p>
                </div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-green-50 border border-green-100 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-extrabold text-green-700">{stat.value}</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-1">
              <a
                href="#services"
                aria-label="Scroll to services"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-green-600 transition-colors"
              >
                <ArrowDown size={13} />
                See what we move
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

