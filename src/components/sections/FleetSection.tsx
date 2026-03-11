const FLEET = [
  {
    src: "https://github.com/user-attachments/assets/af203c77-5598-4e89-b060-770881b6ac17",
    alt: "BK Express Isuzu FRR — KDK 175E",
    caption: "KDK 175E",
  },
  {
    src: "https://github.com/user-attachments/assets/d8d691c2-5530-4f56-98cf-ea0752f44bcc",
    alt: "BK Express box truck — KDN 185H side view",
    caption: "KDN 185H",
  },
  {
    src: "https://github.com/user-attachments/assets/de28adce-3209-4fb8-bbbf-d8511503742a",
    alt: "BK Express Isuzu FRR — KDL 226E",
    caption: "KDL 226E",
  },
  {
    src: "https://github.com/user-attachments/assets/f8e6b6b6-5b94-46a0-a482-0dc913ffd97d",
    alt: "BK Express box truck — KDN 185H loading",
    caption: "KDN 185H",
  },
];

export default function FleetSection() {
  return (
    <section id="fleet" className="relative py-28 bg-[#0D171A] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-md px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b9ff66]" />
              <span
                className="text-[12px] font-medium text-white/50 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Fleet
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl text-white leading-tight tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Built for<br />the road ahead.
            </h2>
          </div>
          <p
            className="text-white/50 max-w-sm text-[17px] leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Every truck in our fleet is a branded Isuzu FRR, maintained to the highest standard — ready to move your cargo across Kenya, day or night.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Large feature tile — first image spans 2 rows on md+ */}
          <div className="relative col-span-2 md:col-span-2 md:row-span-2 rounded-xl overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FLEET[1].src}
              alt={FLEET[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: "340px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span
              className="absolute bottom-4 left-4 text-[11px] font-medium text-white/60 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {FLEET[1].caption}
            </span>
          </div>

          {/* Tile 2 */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FLEET[0].src}
              alt={FLEET[0].alt}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span
              className="absolute bottom-3 left-3 text-[11px] font-medium text-white/60 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {FLEET[0].caption}
            </span>
          </div>

          {/* Tile 3 */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FLEET[2].src}
              alt={FLEET[2].alt}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span
              className="absolute bottom-3 left-3 text-[11px] font-medium text-white/60 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {FLEET[2].caption}
            </span>
          </div>

          {/* Tile 4 */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FLEET[3].src}
              alt={FLEET[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span
              className="absolute bottom-3 left-3 text-[11px] font-medium text-white/60 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {FLEET[3].caption}
            </span>
          </div>
        </div>

        {/* Stats bar at the bottom */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
          {[
            { value: "Isuzu FRR", label: "All trucks" },
            { value: "3 t", label: "Max payload" },
            { value: "24 / 7", label: "On-road hours" },
            { value: "Kenya-wide", label: "Coverage" },
          ].map((item) => (
            <div key={item.label} className="bg-[#0D171A] px-7 py-6">
              <p
                className="text-[28px] font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.value}
              </p>
              <p
                className="text-[12px] text-white/40 mt-1 font-medium tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
