"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      withArrow = false,
      isLoading = false,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();

    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none group rounded";

    const variantStyles = {
      primary:
        "bg-[#3457E5] hover:bg-[#2743C5] text-white shadow-sm hover:shadow-md active:scale-[0.99]",
      dark:
        "bg-[#111318] hover:bg-[#1C2028] text-white shadow-sm hover:shadow active:scale-[0.99]",
      outline:
        "border border-[#D1D1CB] hover:border-[#171717] bg-transparent text-[#171717] hover:bg-[#171717] hover:text-white",
      ghost:
        "text-[#171717] hover:bg-[#EAEAE4] bg-transparent",
      secondary:
        "bg-[#FFFFFF] text-[#171717] border border-[#E5E5E0] hover:border-[#171717] shadow-sm",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
        ) : icon ? (
          <span className="shrink-0">{icon}</span>
        ) : null}
        <span>{children}</span>
        {withArrow && !isLoading && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        )}
      </>
    );

    if (href) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            className={classes}
          >
            {content}
          </motion.a>
        );
      }
      return (
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          className="inline-block"
        >
          <Link href={href} className={classes}>
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={shouldReduceMotion || disabled ? undefined : { scale: 1.015 }}
        whileTap={shouldReduceMotion || disabled ? undefined : { scale: 0.985 }}
        className={classes}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
