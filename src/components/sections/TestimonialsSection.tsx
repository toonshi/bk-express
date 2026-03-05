import { TESTIMONIALS } from "@/data";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-green-100">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-slate-900">What our customers say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
