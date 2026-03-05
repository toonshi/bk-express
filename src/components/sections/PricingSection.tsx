import { PLANS } from "@/data";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-green-100">
            Pricing
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto text-sm">
            No hidden charges. Use the booking widget to get an exact quote for your route — or call us for lorry hire rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-xl border flex flex-col ${
                plan.highlight
                  ? "bg-slate-900 border-slate-900 shadow-2xl"
                  : "bg-white border-slate-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-8">
                {plan.base !== null ? (
                  <>
                    <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      KES {plan.base}
                    </span>
                    <span className={`text-sm ml-2 ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      base + KES {plan.perKm}/km
                    </span>
                  </>
                ) : (
                  <span className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    Custom quote
                  </span>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlight ? "bg-green-600/30" : "bg-green-50"
                      }`}
                    >
                      <svg className="w-3 h-3 text-green-500" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                }`}
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
