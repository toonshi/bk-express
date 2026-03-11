import Image from "next/image";

const PHOTOS = [
  {
    src: "https://github.com/user-attachments/assets/af203c77-5598-4e89-b060-770881b6ac17",
    alt: "BK Express Isuzu truck on Kenya roads",
    span: "lg:col-span-2 lg:row-span-2",
    sizes: "(max-width: 1024px) 100vw, 66vw",
  },
  {
    src: "https://github.com/user-attachments/assets/de28adce-3209-4fb8-bbbf-d8511503742a",
    alt: "BK Express truck — active delivery",
    span: "lg:col-span-1 lg:row-span-1",
    sizes: "(max-width: 1024px) 50vw, 33vw",
  },
  {
    src: "https://github.com/user-attachments/assets/f8e6b6b6-5b94-46a0-a482-0dc913ffd97d",
    alt: "BK Express cargo loading",
    span: "lg:col-span-1 lg:row-span-1",
    sizes: "(max-width: 1024px) 50vw, 33vw",
  },
];

export default function PhotoSection() {
  return (
    <section aria-label="BK Express fleet in action">
      {/* Thin label row */}
      <div className="bg-[#0D171A] px-6 py-5 flex items-center justify-between max-w-none">
        <span
          className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/30"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Fleet in action
        </span>
        <span
          className="text-[11px] font-medium text-white/20 tracking-wide"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Isuzu FRR · Kenya-wide
        </span>
      </div>

      {/* Photo mosaic */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
        style={{ height: "clamp(320px, 55vw, 640px)" }}
      >
        {PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className={`relative overflow-hidden group ${photo.span}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes={photo.sizes}
            />
            {/* Subtle dark vignette */}
            <div className="absolute inset-0 bg-[#0D171A]/20 group-hover:bg-[#0D171A]/10 transition-colors duration-500" />
            {/* Green accent underline on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#6aaf15] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>
    </section>
  );
}
