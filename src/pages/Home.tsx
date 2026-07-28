import { Hero } from "../components/sections/Hero";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { AboutPreview } from "../components/sections/AboutPreview";
import { WhyKeyviq } from "../components/sections/WhyKeyviq";
import { WhatWeDeliver } from "../components/sections/WhatWeDeliver";
import { IndustryExpertise } from "../components/sections/IndustryExpertise";
import { SuccessStories } from "../components/sections/SuccessStories";
import { Methodology } from "../components/sections/Methodology";
import { CoreValues } from "../components/sections/CoreValues";
import { CTASection } from "../components/ui/CTASection";

export function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <WhyKeyviq />
      <WhatWeDeliver />
      <IndustryExpertise />
      <SuccessStories />
      <Methodology />
      <CoreValues />
      <CTASection
        title="Ready to Gain a Competitive Edge?"
        subtitle="Partner with Keyviq Research to unlock AI-driven insights that accelerate growth and sharpen every strategic decision."
        buttonLabel="Start Now"
        buttonTo="/contact"
      />
    </>
  );
}
