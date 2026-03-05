const PLANS = [
  {
    name: "Standard",
    tagline: "For everyday deliveries",
    base: 150,
    perKm: 25,
    features: [
      "Same-day scheduling",
      "Real-time tracking",
      "Standard insurance",
      "Email confirmation",
    ],
    highlight: false,
  },
  {
    name: "Express",
    tagline: "For urgent pickups",
    base: 250,
    perKm: 35,
    features: [
      "Priority pickup",
      "Live GPS tracking",
      "Enhanced insurance",
      "SMS + Email updates",
      "Dedicated support",
    ],
    highlight: true,
  },
  {
    name: "Business",
    tagline: "For high-volume clients",
    base: null,
    perKm: null,
    features: [
      "Volume discounts",
      "Dedicated account manager",
      "Custom routing",
      "Monthly invoicing",
      "Priority SLA",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#B9FF66] text-[#1A1C22] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
            Pricing
          </span>
          <h2 className="text-4xl font-bold text-[#1A1C22]">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm">
            No hidden charges. Use the booking widget above to get an instant
            quote for your exact route.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                plan.highlight
                  ? "bg-[#1A1C22] border-[#1A1C22] shadow-2xl"
                  : "bg-white border-gray-100"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B9FF66] text-[#1A1C22] text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-[#1A1C22]"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}
                >
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-8">
                {plan.base !== null ? (
                  <>
                    <span
                      className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-[#1A1C22]"}`}
                    >
                      KES {plan.base}
                    </span>
                    <span
                      className={`text-sm ml-2 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}
                    >
                      base + KES {plan.perKm}/km
                    </span>
                  </>
                ) : (
                  <span
                    className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-[#1A1C22]"}`}
                  >
                    Custom quote
                  </span>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlight ? "bg-[#B9FF66]/20" : "bg-[#B9FF66]/30"
                      }`}
                    >
                      <svg
                        className="w-3 h-3 text-[#B9FF66]"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-[#B9FF66] text-[#1A1C22] hover:bg-[#a8ef55]"
                    : "border-2 border-[#1A1C22] text-[#1A1C22] hover:bg-[#1A1C22] hover:text-white"
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
