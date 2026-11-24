import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/lib/site-config";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Info, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Selected Work & Architecture Blueprints — Vanguard Studio",
  description:
    "Review our demonstration digital projects and case architectures: LegalEdge, EstateFlow, Medivista, and BuildCore. High-performance web solutions built with purpose.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Selected Work & Case Studies"
        title="Digital experiences built with purpose."
        description="Explore our demonstration portfolio blueprints. Each project reflects our commitment to Swiss typography, extreme speed, modular Next.js architecture, and tailored user flows."
      />

      <section className="py-20 md:py-28 bg-[#F7F7F2] border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ethical Disclaimer Banner */}
          <div className="mb-12 p-5 rounded-xl bg-white border border-[#E5E5E0] shadow-subtle flex items-start gap-3.5 text-xs sm:text-sm text-[#737373]">
            <Info className="w-5 h-5 text-[#3457E5] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-[#171717] font-semibold block">
                Ethical Disclosure &amp; Demonstration Notice
              </strong>
              <p>
                In compliance with transparent commercial standards, the projects showcased below are fully functional demonstration blueprints authored by Vanguard Studio to illustrate our design and architectural capabilities for specific industries. They are not represented as third-party corporate client engagements.
              </p>
            </div>
          </div>

          {/* Project List */}
          <div className="space-y-16">
            {siteConfig.portfolioProjects.map((project, idx) => (
              <div key={project.id} id={project.id} className="scroll-mt-32">
                <ProjectCard project={project} index={idx} />
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#111318] text-white border border-[#262A34] text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold block mb-2">
              [ Bespoke Scoping ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Require a tailored digital solution for your industry?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#8E8E8A] leading-relaxed">
              We engineer custom web platforms tailored to your exact business specifications, compliance parameters, and workflow integrations.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact" variant="primary" size="md" withArrow>
                Request Architectural Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
