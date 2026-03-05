import { SERVICES } from "@/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-green-100">
              What we do
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              Services built for speed
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Whether it's a single parcel or a full truckload, we have a service
            that fits your timeline and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-green-50 group-hover:bg-green-600 flex items-center justify-center mb-5 transition-colors">
                  <Icon size={20} className="text-green-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                  {service.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
