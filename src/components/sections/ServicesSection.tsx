import { SERVICES } from "@/data";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 bg-dark overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid pointer-events-none opacity-60"
      />
      {/* Subtle glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
              <span className="text-xs text-primary-light font-medium tracking-wide">
                Service Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight font-display">
              Infrastructure for <br />
              <span className="gradient-text">any cargo.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-[15px] leading-relaxed">
            From industrial produce to household goods, we provide the backbone for Kenya&apos;s logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-8 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                {/* Corner gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                    <Icon size={22} className="text-primary-light" />
                  </div>
                  <span className="text-xs font-semibold text-primary-light/70 tracking-wide uppercase">
                    {service.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white leading-snug font-display">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/40 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
