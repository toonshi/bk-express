import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CitiesSection from "@/components/sections/CitiesSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-space-grotesk)]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <CitiesSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
