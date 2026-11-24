import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Check, ShieldCheck, Compass, Terminal, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Studio Philosophy & Architecture",
  description:
    "Learn about Vanguard Studio's business-first engineering philosophy, our disciplined development standards, and our mission to simplify technology for growing enterprises.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Our Studio"
        title="We are an independent digital architecture studio."
        description="Founded on the conviction that digital systems should be durable, fast, and engineered around actual business outcomes rather than fleeting aesthetic trends."
      />

      {/* Main Philosophy Narrative */}
      <section className="py-20 md:py-28 bg-[#F7F7F2] border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold block mb-2">
                [ Studio Genesis ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717]">
                A deliberate rejection of agency bloat.
              </h2>
              <p className="mt-4 text-base text-[#737373] leading-relaxed">
                Traditional agencies often drown clients in layers of account managers, bloated billable hours, and fragile website templates that break months after handoff.
              </p>
              <div className="mt-6 p-5 rounded-xl bg-white border border-[#E5E5E0] text-xs font-mono text-[#171717] space-y-2">
                <div className="flex items-center justify-between">
                  <span>FOUNDED:</span>
                  <span className="text-[#3457E5]">2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>LOCATION:</span>
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>MODEL:</span>
                  <span>Direct Senior Practitioner Access</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#737373] leading-relaxed">
              <p className="font-serif italic text-2xl sm:text-3xl font-normal text-[#171717] leading-snug">
                &ldquo;We created Vanguard Studio to deliver what ambitious businesses actually need: high-calibre digital products engineered with craftsmanship, speed, and absolute technical transparency.&rdquo;
              </p>
              <p>
                Our studio operates at the intersection of modern Swiss editorial design and resilient software engineering. We believe visual clarity is not just decoration—it is the fastest way to communicate authority, dismantle user hesitation, and drive conversion.
              </p>
              <p>
                Every project we undertake is authored with strict TypeScript, modern Next.js server architecture, semantic accessible HTML, and maintainable styles. We do not recycle bloated themes or lock clients into proprietary software silos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Standards / Principles */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12 mb-12 border-b border-[#E5E5E0]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold block mb-2">
              [ Operating Principles ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717]">
              The standards we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#F7F7F2] border border-[#E5E5E0]">
              <span className="font-mono text-xs text-[#3457E5] font-semibold bg-[#EEF2FF] px-2 py-0.5 rounded">
                PRINCIPLE 01
              </span>
              <h3 className="text-xl font-medium tracking-tight text-[#171717] mt-3 mb-2">
                Performance is a Non-Negotiable Feature
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                A slow website costs revenue and damages search ranking. We optimize typography, image compression, script payloads, and server caching from day one to guarantee &gt;95 Google Core Web Vitals scores.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F7F7F2] border border-[#E5E5E0]">
              <span className="font-mono text-xs text-[#3457E5] font-semibold bg-[#EEF2FF] px-2 py-0.5 rounded">
                PRINCIPLE 02
              </span>
              <h3 className="text-xl font-medium tracking-tight text-[#171717] mt-3 mb-2">
                Clarity Over Complexity
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                We avoid gratuitous animations, disorienting 3D effects, and unnecessary third-party plugins. Interfaces must be intuitive, effortless to navigate, and accessible across all devices and network speeds.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F7F7F2] border border-[#E5E5E0]">
              <span className="font-mono text-xs text-[#3457E5] font-semibold bg-[#EEF2FF] px-2 py-0.5 rounded">
                PRINCIPLE 03
              </span>
              <h3 className="text-xl font-medium tracking-tight text-[#171717] mt-3 mb-2">
                100% Client Ownership
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                Upon final deployment, all source code, design assets, domain records, and deployment credentials belong completely to your business. You are never trapped in a closed retainer model.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F7F7F2] border border-[#E5E5E0]">
              <span className="font-mono text-xs text-[#3457E5] font-semibold bg-[#EEF2FF] px-2 py-0.5 rounded">
                PRINCIPLE 04
              </span>
              <h3 className="text-xl font-medium tracking-tight text-[#171717] mt-3 mb-2">
                Direct Communication &amp; Predictability
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                You work directly with lead engineers and design architects. No sales intermediaries, no opaque change-order billing, and guaranteed fixed milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111318] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Let&apos;s discuss your next digital milestone.
          </h2>
          <p className="mt-4 text-base text-[#8E8E8A] leading-relaxed">
            Whether scoping a brand new website or overhauling an existing application, we are ready to assist.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Start a Project
            </Button>
            <Button href="/services" variant="outline" size="lg" className="text-white border-[#383E50] hover:bg-white hover:text-[#171717]">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
