import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsPlaceholder } from "@/components/sections/TestimonialsPlaceholder";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsPlaceholder />
      <FAQSection />
      <ContactSection />
    </>
  );
}
