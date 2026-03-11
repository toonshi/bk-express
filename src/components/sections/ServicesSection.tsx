import { SERVICES } from "@/data";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-white overflow-hidden">
      {/* Technical Grid Background */}
      <div
        aria-hidden
        className="absolute inset-0 technical-grid opacity-50 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 pb-10 border-b border-dark/5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-dark text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Service Capabilities
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-dark leading-[0.9] tracking-tighter uppercase font-display">
              Infrastructure for <br />
              <span className="text-primary-dark">any cargo.</span>
            </h2>
          </div>
          <p className="text-dark/40 max-w-sm text-[15px] leading-relaxed font-bold uppercase tracking-tight">
            From industrial produce to household goods, we provide the backbone for Kenya's logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-dark/5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-10 bg-white border-r border-b border-dark/5 hover:bg-dark hover:text-white transition-all duration-300 overflow-hidden"
              >
                {/* Hover Reveal Grid */}
                <div className="absolute inset-0 technical-grid-dark opacity-0 group-hover:opacity-10 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded bg-primary flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(195,238,143,0.3)] transition-transform group-hover:scale-110">
                    <Icon size={24} weight="bold" className="text-dark" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark group-hover:text-primary transition-colors">
                    {service.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-dark group-hover:text-white leading-tight font-display uppercase italic">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm text-dark/40 group-hover:text-white/40 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-dark/10 group-hover:border-primary/30 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
