import { STEPS } from "@/data";

export default function HowItWorksSection() {
  return (
    <section id="about" className="relative py-28 bg-surface overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid pointer-events-none opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-medium tracking-wide">
                How It Works
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight font-display">
              Simple four-step <br />
              <span className="gradient-text">process.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-[15px] leading-relaxed">
            Our automated dispatch sequence ensures rapid deployment and high-precision delivery tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-[22px] left-[calc(50%+40px)] right-[-50%] h-px bg-white/[0.06] z-0"
                />
              )}
              <div className="relative z-10 p-7 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:border-primary/20 hover:bg-white/[0.06] transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                    <span className="text-xs font-bold text-primary-light">{step.number}</span>
                  </div>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
