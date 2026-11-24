"use client";

import React from "react";
import Link from "next/link";
import { PortfolioProject } from "@/types";
import { ProjectMockup } from "./ProjectMockup";
import { ArrowUpRight, Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Alternating layout: even indices show details left, odd indices show mockup left
  const isReversed = index % 2 !== 0;

  return (
    <div className="relative rounded-3xl border border-[#D5D5CD] bg-white p-6 sm:p-10 lg:p-12 shadow-subtle hover:border-[#BDBDB5] transition-all duration-300 overflow-hidden">
      {/* Decorative Large Editorial Number Watermark */}
      <span className="absolute -top-6 right-6 font-mono font-bold text-6xl sm:text-9xl text-[#F2F2EC] select-none pointer-events-none -z-0 opacity-40 sm:opacity-100">
        0{index + 1}
      </span>

      <div
        className={cn(
          "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center",
          isReversed ? "lg:grid-flow-dense" : ""
        )}
      >
        {/* Project Details Column */}
        <div
          className={cn(
            "lg:col-span-5 space-y-6",
            isReversed ? "lg:col-start-8" : "lg:col-start-1"
          )}
        >
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#3457E5] bg-[#EEF2FF] px-2.5 py-1 rounded">
              CASE // 0{index + 1}
            </span>
            <span className="font-mono text-xs text-[#737373] bg-[#F2F2EC] px-2.5 py-1 rounded">
              {project.industry}
            </span>
            <span className="font-mono text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
              Demonstration Blueprint
            </span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717]">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-[#737373] uppercase tracking-wider">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            {project.description}
          </p>

          {/* Architectural Challenge & Highlights */}
          <div className="space-y-2 pt-2 border-t border-[#F2F2EC]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#171717] block font-semibold">
              Architectural Highlights:
            </span>
            {project.results.map((result, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#737373]">
                <Check className="w-4 h-4 text-[#3457E5] shrink-0 mt-0.5" />
                <span>{result}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono bg-[#F7F7F2] text-[#171717] px-2.5 py-1 rounded border border-[#E5E5E0]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="pt-3">
            <Link
              href={`/work#${project.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#171717] hover:bg-[#3457E5] text-white text-xs sm:text-sm font-medium transition-colors group min-h-[44px]"
            >
              <span>Examine Architecture Specification</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Visual Mockup Column */}
        <div
          className={cn(
            "lg:col-span-7",
            isReversed ? "lg:col-start-1" : "lg:col-start-6"
          )}
        >
          <ProjectMockup project={project} />
        </div>
      </div>
    </div>
  );
};
