import { STEPS } from "@/data";

export default function HowItWorksSection() {
  return (
    <section id="about" className="relative py-32 bg-dark overflow-hidden">
      {/* Technical Grid Background */}
      <div
        aria-hidden
        className="absolute inset-0 technical-grid-dark opacity-10 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/5 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded mb-6 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Operational Protocol
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase font-display italic">
              Execution <br />
              <span className="text-primary">Pipeline.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-[15px] leading-relaxed font-bold uppercase tracking-tight">
            Our automated dispatch sequence ensures rapid deployment and high-precision delivery tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-white/5 z-0"
                />
              )}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded bg-white/5 border border-white/5 flex flex-col items-center justify-center mb-8 transition-all group-hover:border-primary/30 group-hover:bg-white/10">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Step</span>
                  <span className="text-3xl font-black text-white font-display italic">{step.number}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 font-display uppercase italic tracking-tight">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-bold uppercase tracking-tight">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
