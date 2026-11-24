import React from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/MotionWrapper";

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-24 md:py-32 bg-[#F7F7F2] border-b border-[#E5E5E0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#E5E5E0]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
              02 // PHILOSOPHY &amp; ARCHITECTURAL THESIS
            </span>
          </div>
          <span className="font-mono text-xs text-[#737373]">
            PARADIGM SHIFT
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#171717] leading-[1.08]">
              Technology should make business{" "}
              <span className="font-serif italic font-normal text-[#171717] underline decoration-[#3457E5] decoration-2 underline-offset-8">
                simpler
              </span>
              .
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-[#737373] leading-relaxed font-normal">
              Too many digital products are weighed down by bloated templates, unnecessary complexity, and visual noise that distracts from the core goal: converting visitors, serving customers, and driving measurable revenue.
            </p>
          </div>
        </FadeIn>

        {/* Side-by-Side Model Comparison Ledger (Eliminating Generic 3-Card Template) */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-[#D5D5CD] bg-white shadow-subtle overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E0]">
            {/* Left: Conventional Agency Pitfalls */}
            <div className="p-8 sm:p-10 bg-[#FAFAFA]/70 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EBEBE6]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#737373]">
                  [ THE LEGACY AGENCY TRAP ]
                </span>
                <span className="font-mono text-xs text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  Friction Prone
                </span>
              </div>

              <h3 className="text-xl font-light tracking-tight text-[#171717]">
                Superficial glitter, inflated hours &amp; fragile templates.
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#737373]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#171717] font-medium block">Layers of Account Managers</strong>
                    <span>Your technical feedback is filtered through non-technical intermediaries, causing delays and miscommunication.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#171717] font-medium block">Recycled WordPress / Theme Bloat</strong>
                    <span>Sluggish load times, 30+ fragile third-party plugins, and poor Core Web Vitals that tank search ranking.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#171717] font-medium block">Unpredictable Hourly Billing</strong>
                    <span>Opaque estimates that inflate scope and surprise clients with unexpected invoices.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Vanguard Disciplined Model */}
            <div className="p-8 sm:p-10 bg-white space-y-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#EBEBE6]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#3457E5] font-semibold">
                  [ THE VANGUARD STANDARD ]
                </span>
                <span className="font-mono text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  Disciplined Engineering
                </span>
              </div>

              <h3 className="text-xl font-light tracking-tight text-[#171717]">
                Bespoke architecture, direct engineer access &amp; fixed scope.
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#737373]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#171717] font-medium block">Direct Senior Architect Access</strong>
                    <span>You communicate directly with the engineers authoring your platform. Decisions take minutes, not weeks.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#171717] font-medium block">Zero-Bloat Next.js Architecture</strong>
                    <span>Handcrafted TypeScript, server components, and Tailwind styling delivering &gt;95 PageSpeed and sub-second navigation.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#171717] font-medium block">Fixed-Price Milestones &amp; 30-Day Warranty</strong>
                    <span>Transparent itemized scopes with signed deliverables and complete IP code ownership transfer upon handoff.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pull-Quote Strip */}
          <div className="px-8 py-5 bg-[#F2F2EC] border-t border-[#E5E5E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-serif italic text-base text-[#171717]">
              &ldquo;Thoughtful design, reliable development and practical technology—built around real business needs.&rdquo;
            </span>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#3457E5] transition-colors shrink-0"
            >
              <span>Explore Studio Manifesto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
    </section>
  );
};
