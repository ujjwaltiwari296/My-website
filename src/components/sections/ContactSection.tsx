import React from "react";
import { siteConfig } from "@/lib/site-config";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Check } from "lucide-react";
import { FadeIn } from "@/components/animations/MotionWrapper";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F7F2] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Context, Direct Channels */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
                  08 // START AN ENGAGEMENT
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#171717] leading-[1.12]">
                Have a project in mind?{" "}
                <span className="font-serif italic font-normal text-[#171717] underline decoration-[#3457E5] decoration-2 underline-offset-8">
                  Let&apos;s make it happen
                </span>
                .
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#737373] leading-relaxed">
                Whether you need a flagship brand website, a complex SaaS web application, or automated workflows, our senior team is ready to scope your solution.
              </p>

              {/* Direct Contact Cards */}
              <div className="mt-8 pt-8 border-t border-[#E5E5E0] space-y-4">
                <div className="flex items-start gap-3.5 text-sm">
                  <div className="w-8 h-8 rounded bg-white border border-[#E5E5E0] flex items-center justify-center text-[#3457E5] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#737373] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-[#171717] hover:text-[#3457E5] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <div className="w-8 h-8 rounded bg-white border border-[#E5E5E0] flex items-center justify-center text-[#3457E5] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#737373] block">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="font-medium text-[#171717] hover:text-[#3457E5] transition-colors"
                    >
                      {siteConfig.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <div className="w-8 h-8 rounded bg-white border border-[#E5E5E0] flex items-center justify-center text-[#3457E5] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#737373] block">
                      Headquarters
                    </span>
                    <span className="font-medium text-[#171717]">
                      {siteConfig.contact.address.display}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <div className="w-8 h-8 rounded bg-white border border-[#E5E5E0] flex items-center justify-center text-[#3457E5] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#737373] block">
                      Response Guarantee
                    </span>
                    <span className="font-medium text-emerald-700">
                      {siteConfig.contact.responseTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Engagement Guarantees */}
              <div className="mt-8 p-4 rounded-xl bg-white border border-[#E5E5E0] space-y-2 text-xs text-[#737373]">
                <div className="flex items-center gap-2 text-[#171717] font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>What happens after submitting:</span>
                </div>
                <p className="pl-6 text-[11px] leading-relaxed">
                  1. Technical feasibility &amp; architecture review by lead engineer.
                </p>
                <p className="pl-6 text-[11px] leading-relaxed">
                  2. Itemized scope estimate with fixed-price deliverable breakdown.
                </p>
                <p className="pl-6 text-[11px] leading-relaxed">
                  3. Video call consultation to align on milestone roadmap.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} direction="left">
              <EnquiryForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
