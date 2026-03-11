import { TESTIMONIALS } from "@/data";

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-dark text-white overflow-hidden">
      {/* Technical Grid Background */}
      <div
        aria-hidden
        className="absolute inset-0 technical-grid-dark opacity-10 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded mb-6 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(195,238,143,0.8)]" />
            Verified Feedback
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase font-display italic">
            Customer <br />
            <span className="text-primary">Intelligence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group relative p-12 bg-transparent border-r border-white/5 last:border-r-0 hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_5px_rgba(195,238,143,0.5)]" />
                ))}
              </div>
              <p className="text-white/60 text-[15px] font-bold uppercase tracking-tight leading-relaxed mb-10 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <span className="text-primary font-black text-xs font-display">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-black text-white uppercase tracking-wider font-display">{t.name}</p>
                  <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/5 group-hover:border-primary/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
