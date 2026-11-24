import React from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Scale, Stethoscope, Building2, HardHat, GraduationCap, ShoppingBag, Rocket } from "lucide-react";
import Link from "next/link";

const industryIcons: Record<string, React.ReactNode> = {
  legal: <Scale className="w-5 h-5" />,
  healthcare: <Stethoscope className="w-5 h-5" />,
  realestate: <Building2 className="w-5 h-5" />,
  construction: <HardHat className="w-5 h-5" />,
  education: <GraduationCap className="w-5 h-5" />,
  retail: <ShoppingBag className="w-5 h-5" />,
  startups: <Rocket className="w-5 h-5" />,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F2] border-b border-[#E5E5E0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E0]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
                07 // DOMAIN SPECIALIZATION &amp; SECTOR DIRECTORY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717]">
              Industries we serve
            </h2>
            <p className="mt-3 text-lg text-[#737373] max-w-xl font-normal">
              Tailored digital infrastructure built to reflect the nuances, regulatory standards, and commercial drivers of your sector.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#3457E5] transition-colors group shrink-0"
          >
            <span>Discuss Sector Requirements</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial Sector Ledger / Index Table */}
        <div className="mt-12 divide-y divide-[#E5E5E0] border-y border-[#E5E5E0]">
          {siteConfig.industries.map((ind, idx) => (
            <div
              key={ind.id}
              className="py-8 sm:py-10 px-4 sm:px-6 hover:bg-white/80 transition-all duration-200 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start sm:items-center">
                {/* Sector Name & Headline */}
                <div className="lg:col-span-5 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#3457E5] font-semibold">
                      0{idx + 1} //
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[#171717] group-hover:text-[#3457E5] transition-colors">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-[#737373] pl-9">
                    {ind.headline}
                  </p>
                </div>

                {/* Sector Description */}
                <div className="lg:col-span-4 text-xs sm:text-sm text-[#737373] leading-relaxed">
                  {ind.description}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {ind.keySolutions.map((sol) => (
                      <span
                        key={sol}
                        className="text-[10px] font-mono text-[#171717] bg-[#F2F2EC] px-2 py-0.5 rounded border border-[#E5E5E0]"
                      >
                        {sol}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action & Metric */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 text-right">
                  <span className="font-mono text-xs text-[#737373] hidden sm:inline">
                    {ind.impactMetric}
                  </span>
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-white group-hover:bg-[#171717] text-[#171717] group-hover:text-white border border-[#D5D5CD] group-hover:border-[#171717] text-xs font-medium transition-all shrink-0"
                  >
                    <span>Inquire Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
