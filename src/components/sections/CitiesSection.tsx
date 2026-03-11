import { MapPin } from "@phosphor-icons/react/ssr";
import { CITIES } from "@/data";

export default function CitiesSection() {
  return (
    <section id="cities" className="relative py-28 bg-white overflow-hidden square-grid">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 border border-[#efefef] rounded-md px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              <span
                className="text-[12px] font-medium text-[#666666] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Network Coverage
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl text-[#111111] leading-tight tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Regional<br />deployment.
            </h2>
          </div>
          <p
            className="text-[#666666] max-w-sm text-[17px] leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Our logistics network covers Nairobi and major industrial hubs across Kenya with daily dispatch cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CITIES.map((city) => (
            <div
              key={city.name}
              className={`group relative p-7 rounded-lg border transition-all duration-300 ${
                city.comingSoon
                  ? "opacity-50 bg-[#f8f8f8] border-[#efefef] cursor-default"
                  : "bg-white border-[#efefef] hover:border-[#111111]/20 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span
                    className="text-[11px] font-semibold text-[#999999] tracking-widest mb-1.5 block uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {city.comingSoon ? "Coming Soon" : "Active"}
                  </span>
                  <h3
                    className="text-[18px] font-bold text-[#111111]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {city.name}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#f8f8f8] border border-[#efefef] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f4ffb0] group-hover:border-[#e8f59e] transition-colors">
                  <MapPin
                    size={16}
                    className={city.comingSoon ? "text-[#999999]" : "text-[#111111]"}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span
                  className={`inline-block text-[12px] font-semibold px-3 py-1 rounded-md ${
                    city.comingSoon
                      ? "bg-[#f8f8f8] text-[#999999] border border-[#efefef]"
                      : "bg-[#f4ffb0] text-[#111111] border border-[#e8f59e]"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {city.time}
                </span>
              </div>

              <p
                className="text-[14px] text-[#666666] leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {city.areas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
