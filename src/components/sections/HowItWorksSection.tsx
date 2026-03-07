import { STEPS } from "@/data";

export default function HowItWorksSection() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-green-600/20 text-green-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-green-600/20">
              How it works
            </span>
            <h2 className="text-4xl font-bold text-white">Book in four steps</h2>
          </div>
          <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
            Get a price, pick your date, and our driver handles the rest. No calls needed to get a quote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-6 left-full w-full h-px bg-green-600/20 -translate-x-1/2 z-0"
                />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-5">
                  <span className="text-green-400 font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
