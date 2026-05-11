import { STEPS } from "@/data";

export default function HowItWorksSection() {
  return (
    <section id="about" className="relative py-28 bg-[#f8f8f8] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Simple.
          </h2>
          <p
            className="text-[#666666] mt-4 text-[18px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Three steps to get your goods moving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className="relative p-8 bg-white border border-[#efefef] rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#f4ffb0] border border-[#e8f59e] flex items-center justify-center mb-6">
                <span
                  className="text-[14px] font-bold text-[#111111]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                className="text-[18px] font-bold text-[#111111] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              }</h3>
              <p
                className="text-[15px] text-[#666666] leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
