const STEPS = [
  {
    number: "01",
    title: "Enter locations",
    description:
      "Type in your pickup and drop-off addresses. We support any location in our coverage zone.",
  },
  {
    number: "02",
    title: "See your price",
    description:
      "We instantly calculate the distance using real road routing and give you a transparent price.",
  },
  {
    number: "03",
    title: "Pick a date & time",
    description:
      "Choose when you want us to arrive. We'll automatically calculate your estimated delivery time.",
  },
  {
    number: "04",
    title: "We deliver",
    description:
      "Our team arrives at your pickup location on time and ensures safe, fast delivery.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="about" className="py-24 bg-[#1A1C22]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-[#B9FF66] text-[#1A1C22] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              How it works
            </span>
            <h2 className="text-4xl font-bold text-white">
              Four simple steps
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            From quote to delivery in minutes. No paperwork, no fuss.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-6 left-full w-full h-px bg-[#B9FF66]/20 -translate-x-1/2 z-0"
                />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#B9FF66]/10 border border-[#B9FF66]/20 flex items-center justify-center mb-5">
                  <span className="text-[#B9FF66] font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
