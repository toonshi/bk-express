import { TESTIMONIALS } from "@/data";

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden square-grid">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-[#efefef] rounded-md px-3.5 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span
              className="text-[12px] font-medium text-[#666666] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Customer Stories
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl text-[#111111] leading-tight tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
          >
            Trusted by thousands.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group relative p-8 bg-white border border-[#efefef] rounded-lg hover:border-[#111111]/20 hover:shadow-sm transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#111111] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p
                className="text-[#444444] text-[15px] leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f4ffb0] border border-[#e8f59e] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-[#111111] font-bold text-[12px]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    className="text-[14px] font-semibold text-[#111111]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[12px] text-[#999999] mt-0.5"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
