import { Phone, Envelope, MapPin } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="bg-[#1A1C22] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold">Ready to ship?</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Get an instant price quote in seconds. No sign-up needed.
            </p>
          </div>
          <a
            href="#booking"
            className="flex-shrink-0 px-8 py-4 bg-[#B9FF66] text-[#1A1C22] rounded-xl font-bold hover:bg-[#a8ef55] transition-colors"
          >
            Get a Quote →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-[#B9FF66] rounded-lg flex items-center justify-center">
              <span className="text-[#1A1C22] font-bold text-sm">BK</span>
            </div>
            <span className="font-bold text-lg tracking-tight">BK EXPRESS</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Fast, reliable delivery across Nairobi and surrounding areas. Powered
            by technology, driven by trust.
          </p>
          <div className="mt-6 space-y-2">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#B9FF66] transition-colors"
            >
              <Phone size={14} />
              +254 700 000 000
            </a>
            <a
              href="mailto:hello@bkexpress.co.ke"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#B9FF66] transition-colors"
            >
              <Envelope size={14} />
              hello@bkexpress.co.ke
            </a>
            <p className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={14} />
              Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
            Company
          </h4>
          <ul className="space-y-3">
            {["About Us", "Services", "Pricing", "Blog", "Careers"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-sm text-gray-400 hover:text-[#B9FF66] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
            Legal
          </h4>
          <ul className="space-y-3">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#B9FF66] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BK Express. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with ❤️ in Nairobi
          </p>
        </div>
      </div>
    </footer>
  );
}
