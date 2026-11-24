import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  label,
  title,
  description,
  backHref,
  backLabel = "Back to home",
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-24 border-b border-[#E5E5E0] bg-[#F7F7F2] overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {backHref && (
          <div className="mb-6">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#737373] hover:text-[#171717] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{backLabel}</span>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#3457E5] font-semibold">
            {label}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#171717] max-w-4xl leading-[1.12] sm:leading-[1.1]">
          {title}
        </h1>

        {description && (
          <p className="mt-6 text-lg sm:text-xl text-[#737373] max-w-2xl font-normal leading-relaxed">
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
};
