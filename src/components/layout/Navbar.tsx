"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#F7F7F2]/90 backdrop-blur-md border-b border-[#E5E5E0] py-3.5 shadow-subtle"
            : "bg-transparent py-5 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with micro-hover */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded bg-[#171717] flex items-center justify-center text-white font-mono font-semibold text-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#3457E5]">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-semibold tracking-tighter text-base text-[#171717]">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#737373] -mt-1 hidden sm:inline">
                  Digital Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Animated Active Indicator */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#E5E5E0] bg-[#FFFFFF]/85 backdrop-blur-sm shadow-subtle relative">
              {siteConfig.navigation.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 relative",
                      isActive
                        ? "text-[#171717] font-semibold"
                        : "text-[#737373] hover:text-[#171717]"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-[#EAEAE4] rounded-full -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Availability & Start Project */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2 text-xs text-[#737373] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for projects</span>
              </div>
              <Button
                href="/contact"
                variant="dark"
                size="sm"
                withArrow
                className="font-medium text-xs lg:text-sm px-4 py-2"
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                href="/contact"
                variant="dark"
                size="sm"
                className="text-xs px-3 py-1.5"
              >
                Contact
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2.5 rounded border border-[#E5E5E0] bg-white text-[#171717] hover:bg-[#F2F2EC] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[#111318]/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-[#F7F7F2] border-l border-[#E5E5E0] p-6 flex flex-col justify-between md:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E0]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-[#171717] text-white flex items-center justify-center font-mono font-bold text-xs">
                      V
                    </div>
                    <span className="font-semibold tracking-tight text-sm text-[#171717]">
                      {siteConfig.name}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded border border-[#E5E5E0] hover:bg-[#EAEAE4]"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4 text-[#171717]" />
                  </button>
                </div>

                <div className="pt-6 flex flex-col gap-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#737373] mb-2">
                    Navigation
                  </p>
                  {siteConfig.navigation.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between py-3 px-3 rounded text-base font-medium transition-colors",
                          isActive
                            ? "bg-[#171717] text-white font-semibold"
                            : "text-[#171717] hover:bg-[#EAEAE4]"
                        )}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight
                          className={cn(
                            "w-4 h-4",
                            isActive ? "text-white" : "text-[#737373]"
                          )}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E5E0] flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for new projects</span>
                </div>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  withArrow
                  className="w-full justify-center min-h-[48px] text-sm"
                >
                  Start a Project
                </Button>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <div className="text-xs text-[#737373] text-center pt-2">
                  <span>{siteConfig.contact.phoneFormatted}</span> • <span>{siteConfig.contact.email}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
