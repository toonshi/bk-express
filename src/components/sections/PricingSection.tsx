import { PLANS } from "@/data";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 bg-[#f8f8f8] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 border border-[#efefef] rounded-md px-3.5 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span
              className="text-[12px] font-medium text-[#666666] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pricing
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl text-[#111111] leading-tight tracking-[-0.03em] mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
          >
            Transparent pricing.
          </h2>
          <p
            className="text-[#666666] max-w-lg text-[17px] leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Real-time rates based on route data and cargo specifications. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative h-full p-8 bg-white border rounded-lg flex flex-col transition-all ${
                plan.highlight
                  ? "border-[#111111] shadow-sm"
                  : "border-[#efefef] hover:border-[#111111]/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-6">
                  <span
                    className="inline-flex items-center gap-1.5 bg-[#6aaf15] px-3 py-1 rounded-md text-[11px] font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-7 pt-2">
                <h3
                  className="text-[20px] font-bold text-[#111111]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-[14px] mt-1 text-[#666666]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-8">
                {plan.base !== null ? (
                  <div>
                    <span
                      className="text-[36px] font-bold text-[#111111]"
                      style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                    >
                      KES {plan.base}
                    </span>
                    <span
                      className="text-[13px] ml-2 text-[#999999]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      + KES {plan.perKm}/km
                    </span>
                  </div>
                ) : (
                  <span
                    className="text-[24px] font-bold text-[#111111]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Custom Quote
                  </span>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-sm bg-[#d4c830]/30 border border-[#c8b820] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-sm bg-[#111111]" />
                    </div>
                    <span
                      className="text-[14px] text-[#444444]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center py-3.5 rounded-lg font-semibold text-[14px] transition-colors ${
                  plan.highlight
                    ? "bg-[#111111] text-white hover:bg-[#333333]"
                    : "border border-[#efefef] text-[#666666] hover:text-[#111111] hover:border-[#111111]/20"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {plan.base !== null ? "Get Started" : "Contact Us"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
