import { Package, Clock, ShieldCheck, Truck } from "@phosphor-icons/react/ssr";

const SERVICES = [
  {
    icon: Clock,
    title: "Same-Day Delivery",
    description:
      "Urgent parcels picked up and delivered within hours anywhere in the city.",
    tag: "Express",
  },
  {
    icon: Package,
    title: "Standard Delivery",
    description:
      "Scheduled deliveries at a great price for non-urgent packages and goods.",
    tag: "Affordable",
  },
  {
    icon: Truck,
    title: "Bulk & Freight",
    description:
      "Large volume pickups for businesses — furniture, stock, and equipment.",
    tag: "Business",
  },
  {
    icon: ShieldCheck,
    title: "Secure Handling",
    description:
      "Fragile or high-value items handled with extra care and full insurance.",
    tag: "Protected",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-[#B9FF66] text-[#1A1C22] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              What we do
            </span>
            <h2 className="text-4xl font-bold text-[#1A1C22]">
              Services built for speed
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Whether it's a single parcel or a full truckload, we have a service
            that fits your timeline and budget.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl border border-gray-100 bg-[#F6F6F6] hover:bg-[#1A1C22] transition-all duration-200 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-[#B9FF66] flex items-center justify-center mb-5 transition-colors shadow-sm">
                <service.icon size={20} className="text-[#1A1C22]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B9FF66] group-hover:text-[#B9FF66]">
                {service.tag}
              </span>
              <h3 className="mt-2 text-lg font-bold text-[#1A1C22] group-hover:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
