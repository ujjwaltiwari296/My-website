"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface AccordionItemData {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const shouldReduceMotion = useReducedMotion();

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={cn("divide-y divide-[#E5E5E0] border-y border-[#E5E5E0]", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className="group transition-colors duration-200"
          >
            <button
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              className="w-full py-6 md:py-7 flex items-start justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3457E5]"
            >
              <div className="flex items-start gap-4 md:gap-6 pr-2">
                <span className="font-mono text-xs md:text-sm text-[#737373] mt-1 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base md:text-xl font-medium tracking-tight text-[#171717] group-hover:text-[#3457E5] transition-colors duration-200">
                    {item.question}
                  </h3>
                  {item.category && (
                    <span className="inline-block mt-1 text-[11px] font-mono text-[#737373] uppercase tracking-wider">
                      [{item.category}]
                    </span>
                  )}
                </div>
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "shrink-0 w-8 h-8 rounded-full border border-[#E5E5E0] flex items-center justify-center transition-colors duration-200 mt-0.5",
                  isOpen
                    ? "bg-[#171717] text-white border-[#171717]"
                    : "bg-[#FFFFFF] text-[#171717] group-hover:border-[#171717]"
                )}
              >
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5" />
                )}
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pl-8 md:pl-12 pr-4 md:pr-16 text-sm md:text-base leading-relaxed text-[#737373] pb-7">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
