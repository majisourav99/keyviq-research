import { HeroCarousel } from "../components/sections/HeroCarousel";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { AboutPreview } from "../components/sections/AboutPreview";
import { WhyKeyviq } from "../components/sections/WhyKeyviq";
import { IndustriesSplit } from "../components/sections/IndustriesSplit";
import { ConsultationSection } from "../components/sections/ConsultationSection";
import { Testimonials } from "../components/sections/Testimonials";
import { Locations } from "../components/sections/Locations";

export function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesGrid />
      <AboutPreview />
      <WhyKeyviq />
      <IndustriesSplit />
      <ConsultationSection />
      <Testimonials />
      <Locations />
    </>
  );
}
