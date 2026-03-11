import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PhotoSection from "@/components/sections/PhotoSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CitiesSection from "@/components/sections/CitiesSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const TRUSTED_BY = [
  "Naivas Supermarkets",
  "Twiga Foods",
  "Jumia Kenya",
  "Carrefour Kenya",
  "Quickmart",
  "Java House",
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* Trusted-by logos strip — mirrors Metronome "TRUSTED BY…" row */}
      <section className="border-t border-b border-[#efefef] bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-center text-[11px] font-medium tracking-[0.18em] uppercase text-[#999999] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trusted by businesses across Kenya
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {TRUSTED_BY.map((name) => (
              <span
                key={name}
                className="text-[15px] font-semibold text-[#cccccc] hover:text-[#999999] transition-colors duration-200 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <PhotoSection />
      <HowItWorksSection />
      <CitiesSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
