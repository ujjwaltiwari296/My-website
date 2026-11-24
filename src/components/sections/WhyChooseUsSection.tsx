import React from "react";
import { ShieldCheck, Zap, Code2, Users, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/MotionWrapper";

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F2] border-b border-[#E5E5E0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#E5E5E0]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
              05 // ARCHITECTURAL DISTINCTION
            </span>
          </div>
          <span className="font-mono text-xs text-[#737373]">
            ENGINEERING PRINCIPLES
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-[1.08]">
                Built around what{" "}
                <span className="font-serif italic font-normal text-[#171717] underline decoration-[#3457E5] decoration-2 underline-offset-8">
                  matters
                </span>
                .
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#737373] leading-relaxed font-normal">
                We replace agency overhead, opaque hourly billing, and fragile templates with a disciplined software practice dedicated entirely to commercial viability and technical precision.
              </p>

              {/* Architectural Metric Ledger */}
              <div className="pt-6 border-t border-[#E5E5E0] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E5E0]">
                  <span className="text-[#737373]">TYPESCRIPT COMPLIANCE:</span>
                  <span className="text-[#3457E5] font-semibold">100% Strict Type Safety</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E5E0]">
                  <span className="text-[#737373]">PERFORMANCE SCORE:</span>
                  <span className="text-emerald-700 font-semibold">&gt; 95 Core Web Vitals</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E5E0]">
                  <span className="text-[#737373]">CODE OWNERSHIP:</span>
                  <span className="text-[#171717] font-semibold">100% Client Transfer</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#3457E5]"
                >
                  <span>Read our full operating standards</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Asymmetric Editorial Bento Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Bento 1: Business-First (Span 2) */}
            <FadeIn delay={0.15} className="sm:col-span-2">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#D5D5CD] shadow-subtle hover:border-[#BDBDB5] transition-all space-y-3 relative overflow-hidden">
                <span className="font-mono text-xs text-[#3457E5] font-semibold bg-[#EEF2FF] px-2.5 py-1 rounded">
                  PRINCIPLE 01
                </span>
                <h3 className="text-2xl font-light tracking-tight text-[#171717]">
                  Business-First Approach
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Before writing any code or drafting layouts, we dissect your revenue model, conversion bottlenecks, and customer acquisition mechanics. Every design decision is justified by how it moves your business forward.
                </p>
              </div>
            </FadeIn>

            {/* Bento 2: Performance */}
            <FadeIn delay={0.25} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-white border border-[#D5D5CD] shadow-subtle hover:border-[#BDBDB5] transition-all space-y-3 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#171717] font-semibold bg-[#F2F2EC] px-2 py-0.5 rounded">
                    PRINCIPLE 02
                  </span>
                  <h3 className="text-xl font-light tracking-tight text-[#171717] mt-3">
                    Sub-Second Performance
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mt-2">
                    Sub-second paint, zero layout shift, and compressed bundles ensure your site converts higher and ranks on search engines.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F2F2EC] text-[11px] font-mono text-emerald-700">
                  LCP &lt; 0.8s Benchmark
                </div>
              </div>
            </FadeIn>

            {/* Bento 3: Modern Scalable Architecture */}
            <FadeIn delay={0.3} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-white border border-[#D5D5CD] shadow-subtle hover:border-[#BDBDB5] transition-all space-y-3 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#171717] font-semibold bg-[#F2F2EC] px-2 py-0.5 rounded">
                    PRINCIPLE 03
                  </span>
                  <h3 className="text-xl font-light tracking-tight text-[#171717] mt-3">
                    Next.js App Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mt-2">
                    Built on modern Next.js 15 Server Components, Tailwind CSS, and modular React. Never locked into fragile closed themes.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F2F2EC] text-[11px] font-mono text-[#3457E5]">
                  Modular Component System
                </div>
              </div>
            </FadeIn>

            {/* Bento 4: Direct Communication & Warranty (Span 2) */}
            <FadeIn delay={0.35} className="sm:col-span-2">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#111318] text-white border border-[#262A34] shadow-editorial space-y-4">
                <span className="font-mono text-xs text-[#C7D2FE] bg-[#3457E5]/20 border border-[#3457E5]/40 px-2.5 py-1 rounded">
                  PRINCIPLE 04
                </span>
                <h3 className="text-2xl font-light text-white tracking-tight">
                  Direct Senior Engineer Access &amp; 30-Day Launch Warranty
                </h3>
                <p className="text-sm text-[#8E8E8A] leading-relaxed">
                  You work directly with lead engineers. Weekly staging builds, transparent GitHub progress, and an included 30-day post-launch warranty ensure absolute peace of mind.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
