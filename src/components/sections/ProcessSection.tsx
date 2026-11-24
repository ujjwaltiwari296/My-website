import React from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#F7F7F2] border-b border-[#E5E5E0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#E5E5E0]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
              06 // DELIVERY FRAMEWORK &amp; MILESTONES
            </span>
          </div>
          <span className="font-mono text-xs text-[#737373]">
            TIMELINE: 2 TO 6 WEEKS
          </span>
        </div>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-[1.08]">
              From first conversation to{" "}
              <span className="font-serif italic font-normal text-[#171717] underline decoration-[#3457E5] decoration-2 underline-offset-8">
                final launch
              </span>
              .
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737373] leading-relaxed font-normal">
              A disciplined four-stage delivery framework designed for predictability, zero scope creep, and rapid deployment.
            </p>
          </div>
        </FadeIn>

        {/* 4-Stage Connected Architectural Ledger: Vertical Timeline on Mobile, Horizontal on Desktop */}
        <StaggerContainer className="relative ml-2 sm:ml-4 md:ml-0 pl-6 sm:pl-8 md:pl-0 border-l-2 md:border-l-0 border-[#3457E5]/30 md:border-transparent space-y-6 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          {siteConfig.processStages.map((stage) => (
            <StaggerItem key={stage.step} className="h-full relative">
              {/* Mobile Timeline Node Indicator */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-[#3457E5] border-2 border-white shadow-sm md:hidden z-10" />

              <div
                className="h-full rounded-2xl border border-[#D5D5CD] bg-white p-6 sm:p-7 shadow-subtle hover:border-[#BDBDB5] transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Stage Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F2F2EC]">
                    <span className="font-mono text-xs font-semibold text-[#3457E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded">
                      STAGE {stage.step}
                    </span>
                    <span className="font-mono text-[11px] text-[#737373]">
                      {stage.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light tracking-tight text-[#171717] group-hover:text-[#3457E5] transition-colors">
                    {stage.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-[#737373] uppercase tracking-wider">
                    {stage.tagline}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Key Activities */}
                  <div className="mt-6 pt-4 border-t border-[#F2F2EC] space-y-2">
                    <span className="font-mono text-[10px] uppercase text-[#737373] block font-semibold">
                      Core Activities:
                    </span>
                    {stage.activities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-[#171717]">
                        <Check className="w-3.5 h-3.5 text-[#3457E5] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Output Deliverable Plaque */}
                <div className="mt-6 pt-4 border-t border-[#F2F2EC] bg-[#FAFAFA] -mx-2 -mb-2 p-3 rounded-lg border border-[#EBEBE6]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block mb-0.5 font-semibold">
                    Phase Output:
                  </span>
                  <span className="text-xs font-medium text-[#171717] block">
                    {stage.deliverable}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
