import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Vanguard Studio",
  description: "Privacy policy and data governance practices at Vanguard Studio.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        label="Legal & Governance"
        title="Privacy Policy"
        description={`Last updated: January 2025. How ${siteConfig.legalName} collects, protects, and handles your business information.`}
        backHref="/"
        backLabel="Return to Homepage"
      />

      <section className="py-20 bg-[#F7F7F2] border-b border-[#E5E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-[#171717]">
          <div className="p-8 rounded-2xl bg-white border border-[#E5E5E0] shadow-subtle space-y-8 text-sm sm:text-base leading-relaxed text-[#737373]">
            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you initiate a project enquiry through our website ({siteConfig.url}), we collect basic contact and business information that you voluntarily submit:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[#171717]">
                <li>Full name and job designation</li>
                <li>Business or company name</li>
                <li>Corporate email address and phone number</li>
                <li>Selected service category and estimated budget parameters</li>
                <li>Project descriptions and technical specifications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We process your information strictly for legitimate commercial consulting purposes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[#171717]">
                <li>Assessing technical feasibility and preparing tailored architectural proposals</li>
                <li>Contacting you via email or phone to discuss your project requirements</li>
                <li>Sending milestone invoices and project deliverables under agreed contracts</li>
                <li>Maintaining administrative records of business communications</li>
              </ul>
              <p className="mt-3">
                We never sell, rent, monetize, or disclose your contact details or project briefs to third-party advertisers or external marketing lists.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                3. Strict Confidentiality &amp; Non-Disclosure
              </h2>
              <p>
                We treat all submitted project descriptions, business ideas, workflows, and commercial information as strictly confidential. If required prior to submitting detailed proprietary documentation, we are pleased to execute a bilateral Non-Disclosure Agreement (NDA).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                4. Data Storage &amp; Security
              </h2>
              <p>
                We employ industry-standard encryption protocols (HTTPS/TLS) across our entire web infrastructure. Form submissions are processed securely through isolated backend API endpoints and stored in encrypted databases protected with role-based access control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                5. Your Rights &amp; Inquiries
              </h2>
              <p>
                You may at any time request the review, amendment, or permanent deletion of your contact records from our active enquiry databases by emailing us directly at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#3457E5] underline font-medium"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-[#E5E5E0] text-xs font-mono text-[#737373]">
              <span>Official contact: {siteConfig.legalName} • {siteConfig.contact.address.display}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
