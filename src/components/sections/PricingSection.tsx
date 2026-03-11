import { PLANS } from "@/data";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 bg-surface text-white overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-50 pointer-events-none"
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[160px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
            <span className="text-xs text-primary-light font-medium tracking-wide">
              Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight font-display">
            Transparent <br />
            <span className="gradient-text">pricing.</span>
          </h2>
          <p className="mt-5 text-white/40 max-w-lg mx-auto text-[15px] leading-relaxed">
            Real-time rates based on route data and cargo specifications. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={plan.highlight ? "gradient-border" : ""}
            >
              <div
                className={`relative h-full p-8 rounded-2xl flex flex-col ${
                  plan.highlight
                    ? "bg-[#0f0f1a] border-0"
                    : "bg-white/[0.03] border border-white/[0.07] rounded-2xl"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-primary px-3 py-1 rounded-full text-xs font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.5)]">
                      <span className="w-1 h-1 rounded-full bg-primary-light" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-7 pt-2">
                  <h3 className="text-xl font-bold text-white font-display">{plan.name}</h3>
                  <p className="text-sm mt-1 text-white/40">{plan.tagline}</p>
                </div>

                <div className="mb-8">
                  {plan.base !== null ? (
                    <div>
                      <span className="text-4xl font-extrabold text-white font-display">
                        KES {plan.base}
                      </span>
                      <span className="text-sm ml-2 text-white/30">
                        + KES {plan.perKm}/km
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold text-white font-display">
                      Custom Quote
                    </span>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlight
                          ? "bg-primary/20 border border-primary/30"
                          : "bg-white/[0.05] border border-white/10"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? "bg-primary-light" : "bg-white/40"}`} />
                      </div>
                      <span className="text-sm text-white/60">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-primary-light shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                      : "border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20"
                  }`}
                >
                  {plan.base !== null ? "Get Started" : "Contact Us"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
