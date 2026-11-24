import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ArrowUpRight, Info } from "lucide-react";

export const PortfolioSection: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#F7F7F2] border-b border-[#E5E5E0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E0]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
                04 // SELECTED ARCHITECTURE &amp; BLUEPRINTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717]">
              Selected work
            </h2>
            <p className="mt-3 text-lg text-[#737373] max-w-xl font-normal">
              Digital experiences built with purpose.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#737373] hidden sm:inline">
              FOUR CURATED BLUEPRINTS
            </span>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#3457E5] transition-colors group shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div className="my-8 p-4 rounded-xl bg-[#F2F2EC] border border-[#E5E5E0] flex items-start sm:items-center gap-3 text-xs text-[#737373]">
          <Info className="w-4 h-4 text-[#3457E5] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#171717] font-semibold">Demonstration Blueprints:</strong> The following projects represent fully realized demonstration architecture and UI/UX prototypes engineered to showcase our capabilities across key industries, not fabricated client claims.
          </p>
        </div>

        {/* Project Cards Stack with Alternating Layouts */}
        <div className="space-y-16">
          {siteConfig.portfolioProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
