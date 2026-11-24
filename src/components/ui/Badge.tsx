import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cobalt" | "dark" | "outline" | "success";
  className?: string;
  withDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  withDot = false,
}) => {
  const variantStyles = {
    default: "bg-[#EAEAE4] text-[#171717] border border-[#E0E0DA]",
    cobalt: "bg-[#EEF2FF] text-[#3457E5] border border-[#C7D2FE]",
    dark: "bg-[#161920] text-[#E5E5E0] border border-[#272C3A]",
    outline: "bg-transparent text-[#737373] border border-[#E5E5E0]",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  const dotColors = {
    default: "bg-[#737373]",
    cobalt: "bg-[#3457E5]",
    dark: "bg-emerald-400",
    outline: "bg-[#737373]",
    success: "bg-emerald-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium tracking-tight rounded-full select-none",
        variantStyles[variant],
        className
      )}
    >
      {withDot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0 animate-pulse",
            dotColors[variant]
          )}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
