import React from "react";
import Link from "next/link";
import { MessageSquareQuote, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const TestimonialsPlaceholder: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F7F2] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E5E5E0] bg-white p-8 sm:p-12 lg:p-16 shadow-subtle relative overflow-hidden">
          <div className="max-w-3xl">
            {/* Header Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
                [ Client Perspectives &amp; Testimonials ]
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#171717] leading-tight">
              We value genuine client trust above fabricated reviews.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#737373] leading-relaxed">
              In accordance with our studio’s strict ethical standards, we never invent fake client logos, fabricated five-star ratings, or artificial testimonials. As active client engagements conclude, genuine case-study reviews and verified client feedback will appear here.
            </p>

            {/* Foundational Client Partner Banner */}
            <div className="mt-8 p-6 rounded-xl bg-[#F7F7F2] border border-[#E5E5E0] space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-semibold">
                  Foundational Client Partner Program
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                Partner with Vanguard Studio for your next digital initiative. Selected early client partners receive dedicated direct access to senior design and engineering leadership, preferred milestone scheduling, and extended post-launch warranty support.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#171717] hover:bg-[#3457E5] text-white text-xs sm:text-sm font-medium transition-colors group"
                >
                  <span>Apply to Partner With Us</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="text-xs font-mono text-[#737373]">
                  Direct review within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
