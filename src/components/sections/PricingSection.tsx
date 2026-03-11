import { PLANS } from "@/data";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-dark text-white overflow-hidden">
      {/* Technical Grid Background */}
      <div
        aria-hidden
        className="absolute inset-0 technical-grid-dark opacity-10 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded mb-6 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
            Pricing Infrastructure
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase font-display italic">
            Transparent <br />
            <span className="text-primary">Calculation.</span>
          </h2>
          <p className="mt-8 text-white/40 max-w-lg mx-auto text-sm font-bold uppercase tracking-tight">
            Our pricing engine computes real-time rates based on industrial route data and cargo specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-12 border-r border-white/5 flex flex-col last:border-r-0 ${
                plan.highlight
                  ? "bg-white/5 backdrop-blur-sm"
                  : "bg-transparent"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-yellow" />
              )}

              <div className="mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 block mb-2">
                  {plan.highlight ? "Optimized Choice" : "Standard Tier"}
                </span>
                <h3 className="text-3xl font-black text-white uppercase font-display italic">
                  {plan.name}
                </h3>
                <p className="text-xs mt-3 text-white/40 font-bold uppercase tracking-wider">
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-12">
                {plan.base !== null ? (
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary font-display">
                      KES {plan.base}
                    </span>
                    <span className="text-[11px] mt-2 text-white/30 font-bold uppercase tracking-widest">
                      Base + KES {plan.perKm}/km
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-black text-white uppercase font-display italic">
                    Custom Quote
                  </span>
                )}
              </div>

              <ul className="space-y-4 flex-1 mb-12">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-4">
                    <div className="w-4 h-4 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-yellow' : 'bg-primary'}`} />
                    </div>
                    <span className="text-[13px] font-bold text-white/60 uppercase tracking-tight">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center py-4 rounded font-black text-[11px] uppercase tracking-[0.2em] transition-all active:scale-[0.98] ${
                  plan.highlight
                    ? "bg-yellow text-dark hover:bg-primary"
                    : "border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                {plan.base !== null ? "Initialize" : "Contact Operations"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
