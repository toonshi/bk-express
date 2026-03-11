import { Phone, Envelope, MapPin } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-white/5">
      {/* Technical Grid Background */}
      <div className="relative overflow-hidden">
        <div
            aria-hidden
            className="absolute inset-0 technical-grid-dark opacity-5 pointer-events-none"
        />
        
        {/* CTA Banner */}
        <div className="border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-display italic leading-none tracking-tighter">
                    Ready for <br />
                    <span className="text-primary">Deployment?</span>
                </h2>
                <p className="text-white/40 mt-6 text-sm font-bold uppercase tracking-widest max-w-md mx-auto md:mx-0">
                Initialize your logistics sequence in seconds — or contact operations for industrial-scale hire.
                </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-4">
                <a
                href="mailto:hello@bkexpress.co.ke"
                className="px-10 py-4 border border-white/10 text-white rounded font-black text-[11px] uppercase tracking-widest hover:bg-white/5 transition-all w-full sm:w-auto"
                >
                Email Support
                </a>
                <a
                href="#booking"
                className="px-10 py-4 bg-primary text-dark rounded font-black text-[11px] uppercase tracking-widest hover:bg-yellow transition-all w-full sm:w-auto"
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
            <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center shadow-[0_0_15px_rgba(195,238,143,0.3)]">
                <span className="text-dark font-black text-xs font-display italic">BK</span>
                </div>
                <span className="font-black text-2xl tracking-tighter font-display italic">BK EXPRESS</span>
            </div>
            <p className="text-white/40 text-[13px] font-bold uppercase tracking-tight leading-relaxed max-w-sm mb-10">
                INDUSTRIAL-GRADE LOGISTICS INFRASTRUCTURE. MOVING MARKET PRODUCE AND HOUSEHOLD GOODS ACROSS THE KENYAN CORRIDOR WITH HIGH-PRECISION DISPATCH.
            </p>
            <div className="space-y-4">
                <a
                href="tel:+254700000000"
                className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/30 hover:text-primary transition-colors"
                >
                <Phone size={16} weight="bold" />
                +254 700 000 000
                </a>
                <a
                href="mailto:hello@bkexpress.co.ke"
                className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/30 hover:text-primary transition-colors"
                >
                <Envelope size={16} weight="bold" />
                hello@bkexpress.co.ke
                </a>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/20">
                <MapPin size={16} weight="bold" />
                NAIROBI HQ // KENYA
                </div>
            </div>
            </div>

            {/* Navigation */}
            <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8 border-b border-white/5 pb-2">
                Infrastructure
            </h4>
            <ul className="space-y-4">
                {["About", "Services", "Pricing", "Operations", "Careers"].map((item) => (
                <li key={item}>
                    <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                    >
                    {item}
                    </a>
                </li>
                ))}
            </ul>
            </div>

            {/* Legal */}
            <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8 border-b border-white/5 pb-2">
                Compliance
            </h4>
            <ul className="space-y-4">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                    <a href="#" className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    {item}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                © {new Date().getFullYear()} BK EXPRESS. LOGISTICS REDEFINED.
            </p>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">ENGINEERED IN NAIROBI</p>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
