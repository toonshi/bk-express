import { STEPS } from "@/data";

export default function HowItWorksSection() {
  return (
    <section id="about" className="relative py-28 bg-[#f8f8f8] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 border border-[#efefef] rounded-md px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-pulse" />
              <span
                className="text-[12px] font-medium text-[#666666] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How It Works
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl text-[#111111] leading-tight tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Simple four-step<br />process.
            </h2>
          </div>
          <p
            className="text-[#666666] max-w-sm text-[17px] leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Our automated dispatch sequence ensures rapid deployment and high-precision delivery tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative group">
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-[22px] left-[calc(50%+40px)] right-[-50%] h-px bg-[#efefef] z-0"
                />
              )}
              <div className="relative z-10 p-7 bg-white border border-[#efefef] rounded-lg hover:border-[#111111]/20 hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#f4ffb0] border border-[#e8f59e] flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-[12px] font-bold text-[#111111]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-[#efefef]" />
                </div>
                <h3
                  className="text-[16px] font-bold text-[#111111] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[14px] text-[#666666] leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
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
