import { MapPin } from "@phosphor-icons/react/ssr";
import { CITIES } from "@/data";

export default function CitiesSection() {
  return (
    <section id="cities" className="relative py-28 bg-dark overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid pointer-events-none opacity-50"
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[160px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
              <span className="text-xs text-accent font-medium tracking-wide">
                Network Coverage
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight font-display">
              Regional <br />
              <span className="gradient-text">deployment.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-[15px] leading-relaxed">
            Our logistics network covers Nairobi and major industrial hubs across Kenya with daily dispatch cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CITIES.map((city) => (
            <div
              key={city.name}
              className={`group relative p-7 rounded-2xl border transition-all duration-300 ${
                city.comingSoon
                  ? "opacity-40 bg-white/[0.02] border-white/[0.05] cursor-default"
                  : "bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.07] hover:border-accent/20"
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-[11px] font-semibold text-accent/60 tracking-wide mb-1.5 block">
                    {city.comingSoon ? "Coming Soon" : "Active"}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {city.name}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin
                    size={16}
                    className={city.comingSoon ? "text-white/20" : "text-accent"}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                  city.comingSoon
                    ? "bg-white/5 text-white/30"
                    : "bg-accent/10 text-accent border border-accent/20"
                }`}>
                  {city.time}
                </span>
              </div>

              <p className="text-sm text-white/35 leading-relaxed">
                {city.areas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
