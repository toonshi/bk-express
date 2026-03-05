import { Phone, Envelope, MapPin } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Ready to ship?</h2>
            <p className="text-slate-400 mt-2 text-sm">
              Get an instant price quote in seconds — or call us to arrange lorry hire.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="px-6 py-3 border border-white/20 text-white rounded-xl font-medium hover:bg-white/5 transition-colors text-sm"
            >
              Email Us
            </a>
            <a
              href="#booking"
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors text-sm"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BK</span>
            </div>
            <span className="font-bold text-lg tracking-tight">BK EXPRESS</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            A Kenyan fleet of trucks and lorries — moving market produce, household goods, and overnight parcels across the country.
          </p>
          <div className="mt-6 space-y-2">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors"
            >
              <Phone size={14} />
              +254 700 000 000
            </a>
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors"
            >
              <Envelope size={14} />
              hello@bkexpress.co.ke
            </a>
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={14} />
              Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-5">
            Company
          </h4>
          <ul className="space-y-3">
            {["About Us", "Services", "Pricing", "Blog", "Careers"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-sm text-slate-400 hover:text-green-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-5">
            Legal
          </h4>
          <ul className="space-y-3">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BK Express. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">Built with ❤️ in Nairobi</p>
        </div>
      </div>
    </footer>
  );
}
