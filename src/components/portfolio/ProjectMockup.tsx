"use client";

import React, { useState } from "react";
import { PortfolioProject } from "@/types";
import { Scale, Building2, Activity, HardHat, ArrowUpRight, Code, Eye, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectMockupProps {
  project: PortfolioProject;
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project, className }) => {
  const [viewMode, setViewMode] = useState<"interface" | "schema">("interface");

  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-[#D5D5CD] bg-white shadow-editorial overflow-hidden group transition-all duration-300",
        className
      )}
    >
      {/* Editorial Browser Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#F2F2EC] border-b border-[#E5E5E0]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0D8] border border-[#C5C5BD]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0D8] border border-[#C5C5BD]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0D8] border border-[#C5C5BD]" />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-[#737373] hidden sm:inline">
            ARCHITECTURAL PROTOTYPE
          </span>
        </div>

        {/* View Mode Toggle: Interface vs Architectural Schema */}
        <div className="flex items-center bg-[#E5E5E0] p-0.5 rounded text-[10px] font-mono">
          <button
            onClick={() => setViewMode("interface")}
            className={cn(
              "px-2 py-0.5 rounded transition-all",
              viewMode === "interface" ? "bg-white text-[#171717] font-semibold" : "text-[#737373]"
            )}
          >
            UI View
          </button>
          <button
            onClick={() => setViewMode("schema")}
            className={cn(
              "px-2 py-0.5 rounded transition-all",
              viewMode === "schema" ? "bg-white text-[#171717] font-semibold" : "text-[#737373]"
            )}
          >
            Schema Spec
          </button>
        </div>
      </div>

      {/* Interface Preview Mode */}
      {viewMode === "interface" ? (
        <div className="p-6 sm:p-8 bg-[#FAFAFA] min-h-[300px] flex flex-col justify-between">
          {project.id === "legaledge" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBEBE6]">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#171717]" />
                  <span className="text-xs font-semibold text-[#171717] tracking-tight">
                    LEGMOUNT &amp; EDGE ADVOCATES
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#3457E5] bg-[#EEF2FF] px-2 py-0.5 rounded">
                  ESTD. 2008
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#3457E5] font-semibold block">
                  CORPORATE GOVERNANCE &amp; ANTITRUST DEFENSE
                </span>
                <h4 className="text-xl sm:text-2xl font-light text-[#171717] leading-snug">
                  Strategic counsel on cross-border acquisitions and institutional litigation.
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded border border-[#E5E5E0]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Practice Dossiers</span>
                  <span className="text-xs font-medium text-[#171717]">14 Core Disciplines</span>
                </div>
                <div className="p-3 bg-white rounded border border-[#E5E5E0]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Client Portal</span>
                  <span className="text-xs font-medium text-emerald-700">256-bit Encrypted Intake</span>
                </div>
              </div>
            </div>
          )}

          {project.id === "estateflow" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBEBE6]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#171717]" />
                  <span className="text-xs font-semibold text-[#171717] tracking-tight">
                    THE OBSIDIAN RESIDENCES
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  8 Units Available
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#3457E5] font-semibold block">
                  ARCHITECTURAL PENTHOUSE COLLECTION
                </span>
                <h4 className="text-xl sm:text-2xl font-light text-[#171717] leading-snug">
                  Curated luxury residences with 360° private terrace vistas.
                </h4>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 bg-white rounded border border-[#E5E5E0] text-center">
                  <span className="text-[10px] font-mono text-[#737373] block">Unit Area</span>
                  <span className="text-xs font-semibold text-[#171717]">4,250 SQ.FT</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#E5E5E0] text-center">
                  <span className="text-[10px] font-mono text-[#737373] block">Configuration</span>
                  <span className="text-xs font-semibold text-[#171717]">4 Suites</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#E5E5E0] text-center">
                  <span className="text-[10px] font-mono text-[#737373] block">Tour Engine</span>
                  <span className="text-xs font-semibold text-[#3457E5]">Interactive</span>
                </div>
              </div>
            </div>
          )}

          {project.id === "medivista" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBEBE6]">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#3457E5]" />
                  <span className="text-xs font-semibold text-[#171717] tracking-tight">
                    MEDIVISTA CLINICAL NETWORK
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  TRIAGE LIVE
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#3457E5] font-semibold block">
                  MULTI-SPECIALTY PATIENT PORTAL
                </span>
                <h4 className="text-xl sm:text-2xl font-light text-[#171717] leading-snug">
                  Compassionate clinical diagnostics and on-demand specialist appointments.
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded border border-[#E5E5E0]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Verified Specialists</span>
                  <span className="text-xs font-medium text-[#171717]">48 Physicians</span>
                </div>
                <div className="p-3 bg-white rounded border border-[#E5E5E0]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Telehealth Slot</span>
                  <span className="text-xs font-medium text-emerald-700">Available in 15 mins</span>
                </div>
              </div>
            </div>
          )}

          {project.id === "buildcore" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBEBE6]">
                <div className="flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-[#171717]" />
                  <span className="text-xs font-semibold text-[#171717] tracking-tight">
                    BUILDCORE INFRASTRUCTURE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#737373] bg-[#EAEAE4] px-2 py-0.5 rounded">
                  ISO 9001:2015
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#3457E5] font-semibold block">
                  EPC CONTRACTING &amp; HEAVY CIVIL WORKS
                </span>
                <h4 className="text-xl sm:text-2xl font-light text-[#171717] leading-snug">
                  Precision civil engineering, structural steel and turnkey industrial plants.
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded border border-[#E5E5E0]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Tenders Active</span>
                  <span className="text-xs font-medium text-[#171717]">24 Commercial Works</span>
                </div>
                <div className="p-3 bg-white rounded border border-[#E5E5E0]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Safety Record</span>
                  <span className="text-xs font-medium text-emerald-700">1,200 Days Safe</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Telemetry Bar */}
          <div className="pt-4 border-t border-[#EBEBE6] flex items-center justify-between text-[11px] font-mono text-[#737373]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              STATUS: DEMO BLUEPRINT
            </span>
            <span className="text-[#171717] font-medium flex items-center gap-1">
              SWISS GRID // ACCESSIBLE
            </span>
          </div>
        </div>
      ) : (
        /* Schema Specification Mode */
        <div className="p-6 sm:p-8 bg-[#111318] text-white min-h-[300px] flex flex-col justify-between font-mono text-xs">
          <div className="space-y-3">
            <span className="text-[10px] text-[#3457E5] uppercase tracking-wider block">
              // ARCHITECTURAL MANIFEST
            </span>
            <div className="p-3 rounded bg-[#181B22] border border-[#262A34] space-y-1.5 text-[#E5E5E0]">
              <div>&gt; target_industry: &quot;{project.industry}&quot;</div>
              <div>&gt; render_mode: &quot;Server Components (RSC) + Tailwind&quot;</div>
              <div>&gt; compliance: &quot;WCAG 2.1 AA / AAA Contrast&quot;</div>
              <div>&gt; latency_budget: &quot;&lt; 200ms TTFB&quot;</div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#262A34] text-[10px] text-[#8E8E8A] flex items-center justify-between">
            <span>SPEC: 100% STRICT TYPESCRIPT</span>
            <span className="text-emerald-400">PASSED AUDIT</span>
          </div>
        </div>
      )}
    </div>
  );
};
