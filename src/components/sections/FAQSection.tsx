"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Accordion } from "@/components/ui/Accordion";
import { HelpCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Process", "Pricing", "Technical"];

  const filteredFaqs =
    activeCategory === "All"
      ? siteConfig.faqs
      : siteConfig.faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F7F7F2] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Prompt */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
                [ Frequently Asked Questions ]
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-tight">
              Common questions answered.
            </h2>

            <p className="mt-4 text-base text-[#737373] leading-relaxed">
              Transparent answers regarding timelines, budgets, technical specifications, and post-launch maintenance.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-white border border-[#E5E5E0] space-y-3">
              <span className="text-xs font-mono uppercase text-[#737373] block">
                Have an unlisted question?
              </span>
              <p className="text-xs text-[#737373] leading-relaxed">
                We are always available to clarify project scope, security compliance, or custom architectural requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#3457E5] transition-colors pt-1"
              >
                <span>Ask our team directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion with Category Filter */}
          <div className="lg:col-span-8">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
                    activeCategory === cat
                      ? "bg-[#171717] text-white border-[#171717]"
                      : "bg-white text-[#737373] border-[#E5E5E0] hover:border-[#171717] hover:text-[#171717]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <Accordion items={filteredFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
};
