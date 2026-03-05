import { MapPin } from "@phosphor-icons/react/ssr";

const CITIES = [
  {
    name: "Nairobi CBD",
    areas: "Westlands, Kilimani, Karen, Lavington",
    time: "1–2 hrs",
  },
  {
    name: "Thika Road",
    areas: "Kasarani, Ruiru, Juja, Thika",
    time: "2–3 hrs",
  },
  {
    name: "South Nairobi",
    areas: "Langata, Ongata Rongai, Kiserian",
    time: "2–3 hrs",
  },
  {
    name: "Eastlands",
    areas: "Kayole, Umoja, Embakasi, Utawala",
    time: "1–2 hrs",
  },
  {
    name: "Satellite Towns",
    areas: "Kitengela, Athi River, Limuru, Kikuyu",
    time: "3–5 hrs",
  },
  {
    name: "Coming Soon",
    areas: "Mombasa, Kisumu, Nakuru",
    time: "—",
    comingSoon: true,
  },
];

export default function CitiesSection() {
  return (
    <section id="cities" className="py-24 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block bg-[#B9FF66] text-[#1A1C22] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
            Coverage
          </span>
          <h2 className="text-4xl font-bold text-[#1A1C22]">
            Where we deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((city) => (
            <div
              key={city.name}
              className={`p-6 rounded-2xl border ${
                city.comingSoon
                  ? "border-dashed border-gray-300 bg-white/60 opacity-60"
                  : "border-gray-100 bg-white hover:shadow-md transition-shadow"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin
                    size={16}
                    className={
                      city.comingSoon ? "text-gray-400" : "text-[#B9FF66]"
                    }
                  />
                  <h3
                    className={`font-bold text-base ${city.comingSoon ? "text-gray-400" : "text-[#1A1C22]"}`}
                  >
                    {city.name}
                  </h3>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    city.comingSoon
                      ? "bg-gray-100 text-gray-400"
                      : "bg-[#B9FF66]/20 text-[#1A1C22]"
                  }`}
                >
                  {city.time}
                </span>
              </div>
              <p className="text-sm text-gray-500">{city.areas}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
