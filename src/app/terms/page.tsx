import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Vanguard Studio",
  description: "Terms and conditions governing web development and digital consulting engagements with Vanguard Studio.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Commercial Terms"
        title="Terms of Service"
        description={`Standard engagement terms governing digital engineering, design services, and consulting provided by ${siteConfig.legalName}.`}
        backHref="/"
        backLabel="Return to Homepage"
      />

      <section className="py-20 bg-[#F7F7F2] border-b border-[#E5E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-[#171717]">
          <div className="p-8 rounded-2xl bg-white border border-[#E5E5E0] shadow-subtle space-y-8 text-sm sm:text-base leading-relaxed text-[#737373]">
            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                1. Engagement &amp; Scope of Work
              </h2>
              <p>
                All digital development, UI/UX design, web application engineering, and automation consulting services provided by {siteConfig.legalName} (&ldquo;Vanguard Studio&rdquo;) are governed by formal, written Statement of Work (SOW) documents detailing milestones, deliverables, timelines, and fixed compensation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                2. Intellectual Property &amp; Source Code Ownership
              </h2>
              <p>
                Upon final milestone completion and full settlement of agreed project fees, all intellectual property rights, bespoke custom source code, design assets, and production deployment accounts transfer entirely and exclusively to the client. Vanguard Studio retains no proprietary claims or royalties on client-commissioned solutions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                3. Milestone Payments &amp; Delivery
              </h2>
              <p>
                Projects are structured into transparent, deliverable-based milestones (e.g. Discovery &amp; Architecture, Interactive Prototype, Staging Build, and Final Production Launch). Work commences upon receipt of the agreed upfront deposit, with subsequent payments pegged to verified deliverable sign-offs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                4. 30-Day Post-Launch Warranty
              </h2>
              <p>
                Every standard web development deployment includes a complimentary thirty (30) calendar-day post-launch warranty period during which any reproducible software defects, browser discrepancies, or responsive layout issues within the agreed project scope are resolved promptly at zero additional charge.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                5. Demonstration Blueprints Notice
              </h2>
              <p>
                Demonstration projects displayed on our website (including LegalEdge, EstateFlow, Medivista, and BuildCore) are conceptual prototypes authored by Vanguard Studio to exhibit architectural capabilities. They are not to be construed as formal representations of third-party clients.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171717] tracking-tight mb-3">
                6. Governing Jurisdiction
              </h2>
              <p>
                These terms and any bilateral project agreements shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction resting in the courts of Bengaluru, Karnataka.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E5E5E0] text-xs font-mono text-[#737373]">
              <span>Inquiries regarding commercial terms: {siteConfig.contact.email}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
