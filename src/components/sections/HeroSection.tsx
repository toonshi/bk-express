import BookingWidget from "@/components/booking/BookingWidget";
import { Phone, Envelope } from "@phosphor-icons/react/ssr";
import { STATS } from "@/data";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-green-950 pointer-events-none"
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-slate-300">
            Serving Nairobi, upcountry routes &amp; overnight delivery
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl">
          Trucks that{" "}
          <span className="text-green-400">move Kenya</span>{" "}
          forward.
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
          BK Express operates a fleet of trucks and lorries across Kenya — moving{" "}
          <strong className="text-slate-300 font-medium">market produce</strong>,{" "}
          <strong className="text-slate-300 font-medium">household goods</strong>, and{" "}
          <strong className="text-slate-300 font-medium">overnight parcels</strong>{" "}
          between Nairobi, Mombasa, Kisumu and beyond. Get an instant price — no sign-up needed.
        </p>

        {/* Booking widget */}
        <div className="mt-10 max-w-2xl">
          <BookingWidget />
        </div>

        {/* Stats + contact */}
        <div className="mt-12 flex flex-wrap items-center gap-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-green-400">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}

          {/* Contact shortcuts */}
          <div className="ml-auto hidden sm:flex items-center gap-4">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors"
            >
              <Phone size={15} />
              +254 700 000 000
            </a>
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors"
            >
              <Envelope size={15} />
              hello@bkexpress.co.ke
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
