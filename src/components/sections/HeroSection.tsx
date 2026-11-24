"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "./HeroVisual";
import { ArrowDown, ArrowUpRight, Compass, Terminal, Shield } from "lucide-react";
import { FadeIn } from "@/components/animations/MotionWrapper";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden border-b border-[#E5E5E0]">
      {/* Background Editorial Architectural Grid */}
      <div className="absolute inset-0 editorial-grid-bg opacity-45 pointer-events-none" />

      {/* Top Editorial Coordinates Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#737373] pb-4 border-b border-[#E5E5E0]">
          <div className="flex items-center gap-3">
            <span className="text-[#171717] font-semibold tracking-wider">
              [ VANGUARD STUDIO ]
            </span>
            <span className="hidden sm:inline text-[#D5D5CD]">/</span>
            <span className="hidden sm:inline">STUDIO REF // 2025.A</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline">12.9716° N, 77.5946° E</span>
            <span className="text-[#D5D5CD] hidden md:inline">/</span>
            <div className="flex items-center gap-1.5 text-[#171717] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Masthead Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Editorial Headline */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <FadeIn delay={0.1} duration={0.6}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#3457E5] tracking-widest uppercase">
                  <span>01 // DIGITAL ARCHITECTURE &amp; SYSTEMS</span>
                </div>

                {/* High-Contrast Editorial Display Headline */}
                <h1 className="text-3xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#171717] leading-[1.12] sm:leading-[1.05]">
                  We build digital experiences that{" "}
                  <span className="font-serif italic font-normal text-[#171717] underline decoration-[#3457E5] decoration-2 underline-offset-8">
                    move businesses forward
                  </span>
                  .
                </h1>
              </div>
            </FadeIn>

            {/* Supporting Editorial Paragraph */}
            <FadeIn delay={0.2} duration={0.6}>
              <p className="text-base sm:text-xl text-[#737373] leading-relaxed max-w-2xl font-normal">
                From high-performing websites to custom digital solutions, we help
                businesses establish their presence, streamline operations and grow
                in an increasingly digital world.
              </p>
            </FadeIn>

            {/* Call to Actions */}
            <FadeIn delay={0.3} duration={0.6}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  withArrow
                  className="text-base px-8 py-4 font-medium w-full sm:w-auto justify-center min-h-[48px]"
                >
                  Start a Project
                </Button>
                <Button
                  href="/work"
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-4 font-medium w-full sm:w-auto justify-center min-h-[48px]"
                >
                  Explore Our Work
                </Button>
              </div>
            </FadeIn>

            {/* Architectural Ledger Strip (Stacked on Mobile, 3-Cols on Tablet/Desktop) */}
            <FadeIn delay={0.4} duration={0.6}>
              <div className="pt-6 border-t border-[#E5E5E0] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl text-xs">
                <div className="flex sm:block items-center justify-between">
                  <span className="block font-mono text-[10px] uppercase text-[#737373]">
                    01 / CRAFTSMANSHIP
                  </span>
                  <span className="font-medium text-[#171717] sm:mt-0.5">
                    Swiss Editorial Design
                  </span>
                </div>
                <div className="flex sm:block items-center justify-between">
                  <span className="block font-mono text-[10px] uppercase text-[#737373]">
                    02 / PERFORMANCE
                  </span>
                  <span className="font-medium text-[#171717] sm:mt-0.5">
                    &gt; 95 Core Web Vitals
                  </span>
                </div>
                <div className="flex sm:block items-center justify-between">
                  <span className="block font-mono text-[10px] uppercase text-[#737373]">
                    03 / GOVERNANCE
                  </span>
                  <span className="font-medium text-[#171717] sm:mt-0.5">
                    100% Client Code IP
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Workbench Showcase */}
          <div className="lg:col-span-5 lg:pl-2">
            <FadeIn delay={0.25} duration={0.7} direction="left">
              <HeroVisual />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Editorial Footer Anchor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="flex items-center justify-between text-xs font-mono text-[#737373] pt-4 border-t border-[#E5E5E0]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
            DISCIPLINED DIGITAL ENGINEERING
          </span>

          <a
            href="#trust"
            className="flex items-center gap-1.5 hover:text-[#171717] transition-colors group"
          >
            <span>SCROLL TO PHILOSOPHY</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
