const TESTIMONIALS = [
  {
    name: "Amina W.",
    role: "Small business owner",
    quote:
      "BK Express has become our go-to for deliveries. The price calculator is a game-changer — no more guessing!",
    initials: "AW",
  },
  {
    name: "Brian O.",
    role: "E-commerce seller",
    quote:
      "I was skeptical at first but the same-day service genuinely delivered in under 3 hours. Highly recommend.",
    initials: "BO",
  },
  {
    name: "Faith K.",
    role: "Freelance designer",
    quote:
      "Super easy to use. I booked on my phone in 2 minutes and my package arrived safely the same afternoon.",
    initials: "FK",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#B9FF66] text-[#1A1C22] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-[#1A1C22]">
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#B9FF66] text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1C22] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B9FF66] font-bold text-xs">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1C22]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
