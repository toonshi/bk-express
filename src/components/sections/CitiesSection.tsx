import { MapPin } from "@phosphor-icons/react/ssr";
import { CITIES } from "@/data";

export default function CitiesSection() {
  return (
    <section id="cities" className="relative py-32 bg-white overflow-hidden">
      {/* Technical Grid Background */}
      <div
        aria-hidden
        className="absolute inset-0 technical-grid opacity-50 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 pb-10 border-b border-dark/5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-dark text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow shadow-[0_0_8px_rgba(255,242,0,0.8)]" />
              Network Coverage
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-dark leading-[0.9] tracking-tighter uppercase font-display italic">
              Regional <br />
              <span className="text-primary-dark">Deployment.</span>
            </h2>
          </div>
          <p className="text-dark/40 max-w-sm text-[15px] leading-relaxed font-bold uppercase tracking-tight">
            Our logistics network covers Nairobi and major industrial hubs across Kenya with daily dispatch cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-dark/5">
          {CITIES.map((city) => (
            <div
              key={city.name}
              className={`group relative p-10 bg-white border-r border-b border-dark/5 transition-all duration-300 ${
                city.comingSoon
                  ? "opacity-40 grayscale"
                  : "hover:bg-dark hover:text-white"
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark mb-2">
                    {city.comingSoon ? "Awaiting Activation" : "Active Node"}
                  </span>
                  <h3 className="text-3xl font-black font-display uppercase italic tracking-tight">
                    {city.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded bg-dark/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <MapPin
                    size={20}
                    weight="bold"
                    className={city.comingSoon ? "text-dark/20" : "text-primary-dark group-hover:text-primary"}
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <span className={`text-[11px] font-black px-3 py-1.5 rounded uppercase tracking-widest ${
                  city.comingSoon
                    ? "bg-dark/5 text-dark/40"
                    : "bg-primary text-dark"
                }`}>
                  {city.time}
                </span>
              </div>

              <p className="text-sm font-bold uppercase tracking-tight text-dark/40 group-hover:text-white/40 transition-colors">
                {city.areas}
              </p>

              {!city.comingSoon && (
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-all" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
