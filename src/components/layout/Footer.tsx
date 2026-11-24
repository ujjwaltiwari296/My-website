import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111318] text-[#F7F7F2] border-t border-[#262A34] pt-20 pb-12 relative overflow-hidden">
      {/* Background Editorial Grid Accent */}
      <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Editorial Closing Statement */}
        <div className="pb-16 mb-16 border-b border-[#262A34]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] mb-4 block">
                [ Next Step ]
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                Let&apos;s build something <span className="font-serif italic font-normal text-white underline decoration-[#3457E5] decoration-2 underline-offset-8">meaningful</span>.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#8E8E8A] max-w-xl">
                Ready to elevate your digital presence or engineer a custom platform? Let’s schedule an initial discovery consultation.
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded bg-[#3457E5] hover:bg-[#2743C5] text-white font-medium text-base transition-all duration-200 shadow-lg hover:shadow-cobalt-500/25 group min-h-[48px]"
              >
                <span>Initiate a Project</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Multi-Column Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#262A34]">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded bg-[#3457E5] flex items-center justify-center text-white font-mono font-semibold text-sm">
                V
              </div>
              <span className="font-semibold tracking-tight text-lg text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-[#8E8E8A] leading-relaxed mb-6 max-w-md">
              {siteConfig.shortDescription}
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-[#8E8E8A]">
                Available for Q1/Q2 engagements
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8E8E8A] hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#3457E5]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-5">
              Capabilities
            </h3>
            <ul className="space-y-3">
              {siteConfig.services.map((service) => (
                <li key={service.number}>
                  <Link
                    href={`/services#service-${service.number}`}
                    className="text-sm text-[#8E8E8A] hover:text-white transition-colors duration-200 block truncate"
                    title={service.title}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Operations */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#8E8E8A]">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#3457E5] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#3457E5] shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3457E5] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.display}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#3457E5] shrink-0 mt-0.5" />
                <span className="text-xs">{siteConfig.contact.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E8A]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
            </span>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-[#262A34]">•</span>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="text-[#262A34]">•</span>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
