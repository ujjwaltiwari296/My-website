import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Check, Clock, Code2, Layers, Cpu, Globe, ShoppingBag, Figma, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Capabilities — Full Technical Specifications",
  description:
    "Explore our complete range of digital services: bespoke website development, custom web applications, e-commerce platforms, UI/UX design systems, business automation, and AI integrations.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  "01": <Globe className="w-6 h-6 text-[#3457E5]" />,
  "02": <Layers className="w-6 h-6 text-[#3457E5]" />,
  "03": <ShoppingBag className="w-6 h-6 text-[#3457E5]" />,
  "04": <Figma className="w-6 h-6 text-[#3457E5]" />,
  "05": <Cpu className="w-6 h-6 text-[#3457E5]" />,
  "06": <Sparkles className="w-6 h-6 text-[#3457E5]" />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services & Capabilities"
        title="Digital solutions designed around real business needs."
        description="Every service we offer is engineered to solve a concrete business problem: establishing brand authority, driving qualified conversions, and eliminating operational friction."
      />

      {/* Services Deep Dive List */}
      <section className="py-20 md:py-28 bg-[#F7F7F2] border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {siteConfig.services.map((service) => (
            <div
              key={service.number}
              id={`service-${service.number}`}
              className="scroll-mt-32 rounded-2xl bg-white border border-[#E5E5E0] p-8 sm:p-12 shadow-subtle hover:border-[#D1D1CB] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column: Number, Title, Overview */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-[#3457E5] bg-[#EEF2FF] px-3 py-1 rounded">
                      SERVICE {service.number}
                    </span>
                    {service.badge && (
                      <span className="font-mono text-xs text-[#737373] bg-[#F2F2EC] px-2.5 py-1 rounded">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F7F2] border border-[#E5E5E0] flex items-center justify-center shrink-0">
                      {serviceIcons[service.number]}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#171717]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base text-[#737373] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <p className="text-sm text-[#737373] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#171717]">
                    <Clock className="w-4 h-4 text-[#3457E5]" />
                    <span>Typical Delivery: <strong>{service.timeline}</strong></span>
                  </div>

                  <div className="pt-4">
                    <Button
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="primary"
                      size="sm"
                      withArrow
                    >
                      Inquire About This Service
                    </Button>
                  </div>
                </div>

                {/* Right Column: Deliverables & Stack */}
                <div className="lg:col-span-7 bg-[#FBFBFA] rounded-xl border border-[#EBEBE6] p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold mb-4 block">
                      Scope &amp; Included Deliverables
                    </h3>
                    <div className="space-y-3">
                      {service.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-[#171717]">
                          <Check className="w-4 h-4 text-[#3457E5] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EBEBE6]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] mb-2.5 block">
                      Technologies &amp; Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techOrMethod.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono bg-white text-[#171717] px-3 py-1 rounded border border-[#E5E5E0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Tiers Guide */}
      <section className="py-20 bg-white border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12 border-b border-[#E5E5E0] max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold block mb-2">
              [ Investment Architecture ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#171717]">
              Transparent, itemized pricing tiers.
            </h2>
            <p className="mt-3 text-base text-[#737373] leading-relaxed">
              We operate strictly on fixed-price project estimates. You receive a clear, milestone-driven scope with zero hidden costs or surprises.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#F7F7F2] border border-[#E5E5E0] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#737373] uppercase tracking-wider block mb-1">
                  Foundational Tier
                </span>
                <h3 className="text-2xl font-semibold text-[#171717]">
                  ₹10,000 – ₹25,000
                </h3>
                <p className="mt-3 text-xs text-[#737373] leading-relaxed">
                  Ideal for emerging businesses and professionals requiring a clean, authoritative 3 to 5 page marketing website with high conversion fundamentals.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-[#171717]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> Next.js responsive frontend
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> Contact &amp; lead capture forms
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> Core Web Vitals optimization
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E5E0]">
                <Button href="/contact" variant="outline" size="sm" className="w-full justify-center">
                  Select This Scope
                </Button>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border-2 border-[#171717] shadow-elevated flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 font-mono text-[10px] bg-[#3457E5] text-white px-2.5 py-0.5 rounded uppercase font-semibold">
                Most Popular
              </span>
              <div>
                <span className="font-mono text-xs text-[#3457E5] uppercase tracking-wider block mb-1 font-semibold">
                  Commercial Tier
                </span>
                <h3 className="text-2xl font-semibold text-[#171717]">
                  ₹25,000 – ₹50,000
                </h3>
                <p className="mt-3 text-xs text-[#737373] leading-relaxed">
                  For growing businesses requiring custom editorial design, CMS integrations, custom service catalogs, and advanced CRM pipelines.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-[#171717]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> Full custom editorial design system
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> Headless CMS / dynamic catalog
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> CRM &amp; email automation pipeline
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> 30-day extended launch warranty
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E5E0]">
                <Button href="/contact" variant="primary" size="sm" className="w-full justify-center">
                  Select This Scope
                </Button>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F7F2] border border-[#E5E5E0] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#737373] uppercase tracking-wider block mb-1">
                  Enterprise &amp; Platform Tier
                </span>
                <h3 className="text-2xl font-semibold text-[#171717]">
                  ₹50,000 – ₹1,00,000+
                </h3>
                <p className="mt-3 text-xs text-[#737373] leading-relaxed">
                  Tailored web applications, authenticated client portals, e-commerce storefronts with payment gateways, and custom AI assistant integrations.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-[#171717]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> Role-based authentication &amp; database
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> Payment gateway &amp; billing engines
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> AI assistant or workflow automation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3457E5]" /> Dedicated senior architect support
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E5E0]">
                <Button href="/contact" variant="outline" size="sm" className="w-full justify-center">
                  Select This Scope
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
