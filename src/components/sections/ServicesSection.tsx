import { SERVICES } from "@/data";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 bg-white overflow-hidden square-grid">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 border border-[#efefef] rounded-md px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              <span
                className="text-[12px] font-medium text-[#666666] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Service Capabilities
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl text-[#111111] leading-tight tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Infrastructure for<br />any cargo.
            </h2>
          </div>
          <p
            className="text-[#666666] max-w-sm text-[17px] leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            From industrial produce to household goods, we provide the backbone for Kenya&apos;s logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-8 bg-white border border-[#efefef] rounded-lg hover:border-[#111111]/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#f8f8f8] border border-[#efefef] flex items-center justify-center mb-6 group-hover:bg-[#d4c830]/30 group-hover:border-[#c8b820] transition-colors">
                  <Icon size={20} className="text-[#111111]" />
                </div>
                <span
                  className="text-[11px] font-semibold text-[#999999] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.tag}
                </span>
                <h3
                  className="mt-3 text-[17px] font-bold text-[#111111] leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-3 text-[14px] text-[#666666] leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
