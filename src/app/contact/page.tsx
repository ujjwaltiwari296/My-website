import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us & Project Enquiry — Vanguard Studio",
  description:
    "Initiate your digital project consultation. Share your business requirements, timeline, and budget parameters for a prompt architectural review within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Project Enquiry & Consultation"
        title="Have a project in mind? Let's make it happen."
        description="Share your project goals, technical requirements, and target timeline. A senior technical director will personally review your inquiry and prepare a structured proposal within 24 business hours."
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}
