import { Phone, Envelope, MapPin } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="bg-surface text-white border-t border-white/[0.06]">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 dot-grid opacity-30 pointer-events-none"
        />
        {/* Glow */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-[120px] pointer-events-none"
        />

        {/* CTA Banner */}
        <div className="border-b border-white/[0.06]">
          <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight font-display">
                Ready to get <br />
                <span className="gradient-text">started?</span>
              </h2>
              <p className="text-white/40 mt-5 text-[15px] leading-relaxed max-w-md mx-auto md:mx-0">
                Book your delivery in seconds — or contact us for large-scale logistics solutions.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="mailto:hello@bkexpress.co.ke"
                className="px-8 py-3.5 border border-white/[0.08] text-white/60 rounded-xl font-medium text-sm hover:text-white hover:border-white/20 transition-all w-full sm:w-auto text-center"
              >
                Email Support
              </a>
              <a
                href="#booking"
                className="px-8 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-light transition-all w-full sm:w-auto text-center shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
                <span className="text-primary-light font-bold text-xs font-display">BK</span>
              </div>
              <span className="font-bold text-xl tracking-tight font-display text-white">BK EXPRESS</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-8">
              Industrial-grade logistics infrastructure. Moving market produce and household goods across the Kenyan corridor with high-precision dispatch.
            </p>
            <div className="space-y-3.5">
              <a
                href="tel:+254700000000"
                className="flex items-center gap-3 text-sm text-white/35 hover:text-white/70 transition-colors"
              >
                <Phone size={14} />
                +254 700 000 000
              </a>
              <a
                href="mailto:hello@bkexpress.co.ke"
                className="flex items-center gap-3 text-sm text-white/35 hover:text-white/70 transition-colors"
              >
                <Envelope size={14} />
                hello@bkexpress.co.ke
              </a>
              <div className="flex items-center gap-3 text-sm text-white/25">
                <MapPin size={14} />
                Nairobi HQ, Kenya
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-6">
              Company
            </h4>
            <ul className="space-y-3.5">
              {["About", "Services", "Pricing", "Operations", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-6">
              Legal
            </h4>
            <ul className="space-y-3.5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} BK Express. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
              <p className="text-xs text-white/35">Engineered in Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
