import { TESTIMONIALS } from "@/data";

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-dark text-white overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid pointer-events-none opacity-40"
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[150px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
            <span className="text-xs text-primary-light font-medium tracking-wide">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight font-display">
            Trusted by <br />
            <span className="gradient-text">thousands.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group relative p-8 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:bg-white/[0.06] hover:border-primary/15 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-primary-light fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/60 text-[15px] leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-light font-bold text-xs font-display">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white font-display">{t.name}</p>
                  <p className="text-xs text-white/35 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
