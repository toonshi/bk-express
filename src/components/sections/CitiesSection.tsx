import { MapPin } from "@phosphor-icons/react/ssr";
import { CITIES } from "@/data";

export default function CitiesSection() {
  return (
    <section id="cities" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-green-100">
            Coverage
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Where we operate</h2>
          <p className="mt-3 text-slate-500 text-sm max-w-md">
            Covering Nairobi and surroundings daily, plus overnight runs to major upcountry towns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((city) => (
            <div
              key={city.name}
              className={`p-6 rounded-xl border transition-shadow ${
                city.comingSoon
                  ? "border-dashed border-slate-300 bg-white/60 opacity-60"
                  : "border-slate-200 bg-white hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className={city.comingSoon ? "text-slate-400" : "text-green-600"}
                  />
                  <h3 className={`font-semibold text-lg ${city.comingSoon ? "text-slate-400" : "text-slate-900"}`}>
                    {city.name}
                  </h3>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    city.comingSoon
                      ? "bg-slate-100 text-slate-400"
                      : "bg-green-50 text-green-700 border border-green-100"
                  }`}
                >
                  {city.time}
                </span>
              </div>
              <p className="text-sm text-slate-500">{city.areas}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
