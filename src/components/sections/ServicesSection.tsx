"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Plus, Minus, Check, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const ServicesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F7F7F2] border-b border-[#E5E5E0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E0]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
                03 // CAPABILITIES &amp; ARCHITECTURAL SCOPE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717]">
              What we do
            </h2>
            <p className="mt-3 text-lg text-[#737373] max-w-xl font-normal">
              Digital solutions designed around real business needs.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#737373] hidden sm:inline">
              SIX CORE COMPETENCIES
            </span>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#3457E5] transition-colors group shrink-0"
            >
              <span>View Full Technical Specs</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Capabilities Ledger */}
        <div className="mt-12 divide-y divide-[#E5E5E0] border-y border-[#E5E5E0]">
          {siteConfig.services.map((service, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={service.number}
                className={cn(
                  "transition-colors duration-200 group",
                  isExpanded ? "bg-white/80" : "hover:bg-[#F2F2EC]/60"
                )}
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full py-8 md:py-10 px-4 sm:px-6 flex items-start sm:items-center justify-between text-left gap-6 focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 lg:gap-16">
                    <span className="font-mono text-sm md:text-base text-[#3457E5] font-semibold shrink-0">
                      {service.number} //
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#171717] group-hover:text-[#3457E5] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#737373] max-w-2xl font-normal">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 mt-2 sm:mt-0">
                    <span className="font-mono text-xs text-[#737373] hidden md:inline">
                      {service.timeline}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full border border-[#D5D5CD] flex items-center justify-center transition-all duration-300",
                        isExpanded
                          ? "bg-[#171717] text-white border-[#171717] rotate-180"
                          : "bg-white text-[#171717]"
                      )}
                    >
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Architectural Dossier */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="dossier"
                      initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden px-4 sm:px-6"
                    >
                      <div className="pt-6 border-t border-[#E5E5E0] sm:pl-16 lg:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
                        {/* Left: Deep Specification */}
                        <div className="lg:col-span-7 space-y-4">
                          <span className="font-mono text-xs uppercase tracking-wider text-[#737373] block">
                            Architectural Overview
                          </span>
                          <p className="text-sm text-[#171717] leading-relaxed">
                            {service.fullDesc}
                          </p>

                          <div className="pt-3">
                            <span className="font-mono text-xs uppercase tracking-wider text-[#737373] block mb-2">
                              Core Deliverables:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.deliverables.map((deliv, dIdx) => (
                                <div key={dIdx} className="flex items-center gap-2 text-xs text-[#171717]">
                                  <Check className="w-3.5 h-3.5 text-[#3457E5] shrink-0" />
                                  <span>{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Technical Frameworks & Fast Action */}
                        <div className="lg:col-span-5 bg-[#F2F2EC] p-6 rounded-xl border border-[#E5E5E0] flex flex-col justify-between">
                          <div>
                            <span className="font-mono text-xs uppercase tracking-wider text-[#737373] block mb-2">
                              Stack &amp; Frameworks
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {service.techOrMethod.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs font-mono bg-white text-[#171717] px-2.5 py-0.5 rounded border border-[#E5E5E0]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-6 mt-6 border-t border-[#E0E0DA] flex items-center justify-between">
                            <span className="font-mono text-xs text-[#737373]">
                              Delivery: {service.timeline}
                            </span>
                            <Link
                              href={`/contact?service=${encodeURIComponent(service.title)}`}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#3457E5]"
                            >
                              <span>Commission Scope</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: Bespoke AI & High-Performance Automation */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#111318] text-white border border-[#262A34] shadow-editorial relative overflow-hidden">
          <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#3457E5]/15 border border-[#3457E5]/30 text-xs font-mono text-[#C7D2FE]">
                <Sparkles className="w-3.5 h-3.5 text-[#3457E5]" />
                <span>SPECIALIZED INTEGRATION SUITE</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                Practical AI tools and automated pipelines that cut operational overhead.
              </h3>
              <p className="text-sm sm:text-base text-[#8E8E8A] leading-relaxed max-w-2xl">
                We design custom AI document analyzers, intelligent triage chatbots, and multi-platform webhook synchronizers engineered around real enterprise data.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact?service=AI+Solutions"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-[#3457E5] hover:bg-[#2743C5] text-white font-medium text-sm transition-all shadow-md group"
              >
                <span>Inquire About AI Scope</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
