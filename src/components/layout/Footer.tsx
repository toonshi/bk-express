import { Phone, Envelope, MapPin } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="max-w-xl">
            <h2
              className="text-4xl md:text-5xl text-white leading-tight tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Ready to get<br />started?
            </h2>
            <p
              className="text-white/50 mt-5 text-[16px] leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Book your delivery in seconds — or contact us for large-scale logistics solutions.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row items-start gap-3 mt-2">
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="px-8 py-3.5 border border-white/[0.12] text-white/60 rounded-lg font-medium text-[14px] hover:text-white hover:border-white/30 transition-all w-full sm:w-auto text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Email Support
            </a>
            <a
              href="#booking"
              className="px-8 py-3.5 bg-[#b9ff66] text-[#111111] rounded-lg font-semibold text-[14px] hover:bg-[#a8f050] transition-all w-full sm:w-auto text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-9 h-9 bg-[#b9ff66] rounded-lg flex items-center justify-center">
              <span
                className="text-[#111111] font-bold text-[12px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                BK
              </span>
            </div>
            <span
              className="font-bold text-[18px] tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              BK EXPRESS
            </span>
          </div>
          <p
            className="text-white/40 text-[14px] leading-relaxed max-w-sm mb-8"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Industrial-grade logistics infrastructure. Moving market produce and household goods across the Kenyan corridor with high-precision dispatch.
          </p>
          <div className="space-y-3.5">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-3 text-[14px] text-white/40 hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <Phone size={14} />
              +254 700 000 000
            </a>
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="flex items-center gap-3 text-[14px] text-white/40 hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <Envelope size={14} />
              hello@bkexpress.co.ke
            </a>
            <div className="flex items-center gap-3 text-[14px] text-white/30">
              <MapPin size={14} />
              Nairobi HQ, Kenya
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Company
          </h4>
          <ul className="space-y-3.5">
            {["About", "Services", "Pricing", "Operations", "Careers"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-[14px] text-white/40 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4
            className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Legal
          </h4>
          <ul className="space-y-3.5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[14px] text-white/40 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[12px] text-white/30"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © {new Date().getFullYear()} BK Express. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b9ff66]" />
            <p
              className="text-[12px] text-white/40"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Engineered in Nairobi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
