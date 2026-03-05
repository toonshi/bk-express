import BookingWidget from "@/components/booking/BookingWidget";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

export default function HeroSection() {
  return (
    <section className="relative bg-[#1A1C22] overflow-hidden">
      {/* Decorative lime blob */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-72 h-72 bg-[#B9FF66] rounded-full -translate-y-1/2 translate-x-1/3 opacity-20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-48 h-48 bg-[#B9FF66] rounded-full translate-y-1/2 -translate-x-1/3 opacity-10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#B9FF66] animate-pulse" />
          <span className="text-sm text-gray-300 font-medium">
            Now available in Nairobi &amp; surrounding areas
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          Delivery that{" "}
          <span className="text-[#B9FF66]">moves</span>
          <br />
          with you.
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
          BK Express picks up from anywhere and delivers on time, every time.
          Get an instant price estimate — no sign-up required.
        </p>

        {/* Booking widget */}
        <div className="mt-10">
          <BookingWidget />
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-wrap items-center gap-8">
          {[
            { value: "5,000+", label: "Deliveries completed" },
            { value: "98%", label: "On-time rate" },
            { value: "4.9 ★", label: "Customer rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-[#B9FF66]">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}

          <a
            href="#services"
            className="ml-auto hidden sm:flex items-center gap-2 text-sm text-[#B9FF66] font-semibold group"
          >
            Explore services
            <span className="w-7 h-7 rounded-full border border-[#B9FF66] flex items-center justify-center group-hover:bg-[#B9FF66] group-hover:text-[#1A1C22] transition-all">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
