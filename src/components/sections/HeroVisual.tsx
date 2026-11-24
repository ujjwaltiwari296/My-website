"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Terminal, Layers, Eye, Code, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface ShowcaseTab {
  id: "legaledge" | "estateflow" | "medivista";
  name: string;
  category: string;
  tagline: string;
  sub: string;
  metric1: { label: string; val: string };
  metric2: { label: string; val: string };
  badge: string;
}

const showcases: ShowcaseTab[] = [
  {
    id: "legaledge",
    name: "LegalEdge Partners",
    category: "Corporate & Antitrust",
    tagline: "Precision advocacy for institutional transactions.",
    sub: "Cross-border governance, regulatory defense & encrypted intake routing.",
    metric1: { label: "Client Intake SLA", val: "< 2 Hours" },
    metric2: { label: "Security Level", val: "256-bit AES" },
    badge: "Bespoke Web Platform",
  },
  {
    id: "estateflow",
    name: "EstateFlow Architectural",
    category: "Spatial Real Estate",
    tagline: "Immersive residences with interactive floorplans.",
    sub: "Dynamic unit filtering, investor qualification funnels & private tours.",
    metric1: { label: "Interactive FPS", val: "60 FPS WebGL" },
    metric2: { label: "Asset Resolution", val: "Retina 4K" },
    badge: "Interactive Portal",
  },
  {
    id: "medivista",
    name: "Medivista Clinical",
    category: "Healthcare Diagnostics",
    tagline: "Patient-first multi-specialty triage & telehealth.",
    sub: "Physician directory, accessible contrast & 15-minute consultation slots.",
    metric1: { label: "Accessibility", val: "WCAG 2.1 AAA" },
    metric2: { label: "Triage Latency", val: "Instant" },
    badge: "Clinical System",
  },
];

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"legaledge" | "estateflow" | "medivista">("legaledge");
  const current = showcases.find((s) => s.id === activeTab) || showcases[0];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Decorative Editorial Corner Crosshairs */}
      <div className="absolute -top-3 -left-3 text-[#B8B8B0] font-mono text-xs select-none pointer-events-none">
        +
      </div>
      <div className="absolute -top-3 -right-3 text-[#B8B8B0] font-mono text-xs select-none pointer-events-none">
        +
      </div>
      <div className="absolute -bottom-3 -left-3 text-[#B8B8B0] font-mono text-xs select-none pointer-events-none">
        +
      </div>
      <div className="absolute -bottom-3 -right-3 text-[#B8B8B0] font-mono text-xs select-none pointer-events-none">
        +
      </div>

      {/* Main Agency Workbench Card */}
      <div className="rounded-xl border border-[#D5D5CD] bg-white shadow-editorial overflow-hidden">
        {/* Top Control Bar with Architecture Tab Switcher */}
        <div className="px-4 py-3 bg-[#F2F2EC] border-b border-[#E5E5E0] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E0E0D8] border border-[#C5C5BD]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E0E0D8] border border-[#C5C5BD]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E0E0D8] border border-[#C5C5BD]" />
            <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-[#737373]">
              LIVE WORKBENCH
            </span>
          </div>

          {/* Interactive Project Switcher Tabs */}
          <div className="flex items-center bg-[#E5E5E0] p-1 rounded-lg text-xs font-mono">
            {showcases.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={cn(
                  "px-3 py-1.5 rounded transition-all min-h-[36px] flex items-center justify-center",
                  activeTab === s.id
                    ? "bg-white text-[#171717] font-semibold shadow-xs"
                    : "text-[#737373] hover:text-[#171717]"
                )}
              >
                {s.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Live Interface Preview Body */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="p-6 sm:p-8 bg-[#FAFAFA] relative"
          >
            {/* Subtle Watermark Grid Identifier */}
            <div className="absolute top-4 right-6 text-right font-mono text-[10px] text-[#A0A09A] select-none">
              SPEC // {current.id.toUpperCase()}-v2.4
            </div>

            {/* Simulated Interface Masthead */}
            <div className="pb-5 border-b border-[#EBEBE6] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#171717] text-white flex items-center justify-center font-mono font-bold text-xs">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-tight text-[#171717] block">
                    {current.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider">
                    {current.category}
                  </span>
                </div>
              </div>

              <span className="font-mono text-[10px] text-[#3457E5] bg-[#EEF2FF] border border-[#C7D2FE] px-2 py-0.5 rounded">
                {current.badge}
              </span>
            </div>

            {/* Headline & Editorial Copy */}
            <div className="py-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                  ARCHITECTURE PREVIEW
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-light text-[#171717] tracking-tight leading-snug">
                {current.tagline}
              </h3>

              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed max-w-lg">
                {current.sub}
              </p>
            </div>

            {/* Metric Diagnostics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#EBEBE6]">
              <div className="p-3 bg-white rounded border border-[#E5E5E0]">
                <span className="text-[10px] font-mono text-[#737373] uppercase block">
                  {current.metric1.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#171717] font-mono mt-0.5 block">
                  {current.metric1.val}
                </span>
              </div>

              <div className="p-3 bg-white rounded border border-[#E5E5E0]">
                <span className="text-[10px] font-mono text-[#737373] uppercase block">
                  {current.metric2.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-700 font-mono mt-0.5 block">
                  {current.metric2.val}
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 bg-white rounded border border-[#E5E5E0] flex sm:flex-col justify-between sm:justify-start">
                <span className="text-[10px] font-mono text-[#737373] uppercase block">
                  Architecture
                </span>
                <span className="text-xs font-semibold text-[#3457E5] font-mono mt-0.5 block">
                  Next.js 15
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Technical Telemetry Strip */}
        <div className="px-5 py-3 bg-[#F2F2EC] border-t border-[#E5E5E0] flex items-center justify-between text-[11px] font-mono text-[#737373]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>RENDER ENGINE: 0.18s LCP</span>
          </span>
          <span className="text-[#171717] font-medium hidden sm:inline">
            SWISS GRID // 12-COL
          </span>
        </div>
      </div>

      {/* Floating Art-Directed Performance Plaque */}
      <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-[#111318] text-white p-3.5 rounded-lg border border-[#262A34] shadow-dark-card items-center gap-3 transition-transform duration-300 hover:-translate-y-1">
        <div className="w-8 h-8 rounded bg-[#1D212B] flex items-center justify-center text-emerald-400 shrink-0">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs font-mono font-semibold text-white block">
            100/100 Core Web Vitals
          </span>
          <span className="text-[10px] text-[#8E8E8A] font-mono">
            Zero Cumulative Layout Shift
          </span>
        </div>
      </div>
    </div>
  );
};
