"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, EnquiryFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const budgetTiers = [
  "Below ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "Above ₹1,00,000",
] as const;

const validServiceTypes = [
  "Website Development",
  "E-commerce Development",
  "Web Application",
  "UI/UX Design",
  "Business Automation",
  "AI Solutions",
  "Other",
] as const;

function EnquiryFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const industryParam = searchParams.get("industry");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      serviceType: "Website Development",
      estimatedBudget: "₹25,000–₹50,000",
      projectDescription: "",
      companyWebsiteVerify: "", // honeypot
    },
  });

  // Pre-populate fields from query params if navigated from specific service or industry
  useEffect(() => {
    if (serviceParam) {
      const match = validServiceTypes.find(
        (s) =>
          s.toLowerCase().includes(serviceParam.toLowerCase()) ||
          serviceParam.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setValue("serviceType", match, { shouldValidate: true });
      }
    }

    if (industryParam) {
      setValue(
        "projectDescription",
        `We are inquiring about custom digital architecture and web solutions tailored for the ${industryParam} sector.`
      );
    }
  }, [serviceParam, industryParam, setValue]);

  const selectedBudget = watch("estimatedBudget");

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.message || "Failed to submit enquiry. Please try again."
        );
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        "Network communication error. Please try again or reach out directly via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="rounded-2xl border border-[#D5D5CD] bg-white p-6 sm:p-10 lg:p-12 shadow-editorial relative">
      {/* Top Editorial Form Strip */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E5E5E0]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-semibold">
            EXECUTIVE INTAKE DESK
          </span>
        </div>
        <span className="font-mono text-xs text-[#737373]">
          24H SLA GUARANTEE
        </span>
      </div>

      {/* WhatsApp Immediate Action Banner */}
      <div className="mb-8 p-4 rounded-xl bg-[#F7F7F2] border border-[#E5E5E0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-[#171717] block">
              Prefer direct messaging via WhatsApp?
            </span>
            <span className="text-[11px] text-[#737373]">
              Direct conversation with our technical directors
            </span>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors shrink-0"
        >
          <span>Chat on WhatsApp</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {submitStatus === "success" ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-light text-[#171717] tracking-tight">
            Consultation Parameters Received
          </h3>
          <p className="text-sm text-[#737373] max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to {siteConfig.name}. Our lead technical architect has received your parameters and will respond within 24 business hours with an initial scope assessment.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmitStatus("idle")}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot anti-spam field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("companyWebsiteVerify")}
            />
          </div>

          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Full Name & Business Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label
                htmlFor="fullName"
                className="block text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold"
              >
                Full Name <span className="text-[#3457E5]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rahul Sharma"
                {...register("fullName")}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E5E0] bg-[#FAFAFA] text-base sm:text-sm text-[#171717] placeholder-[#A0A09C] focus:bg-white focus:border-[#171717] focus:outline-none transition-colors"
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 font-mono">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="businessName"
                className="block text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold"
              >
                Business / Enterprise <span className="text-[#3457E5]">*</span>
              </label>
              <input
                id="businessName"
                type="text"
                placeholder="e.g. Apex Global Ventures"
                {...register("businessName")}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E5E0] bg-[#FAFAFA] text-base sm:text-sm text-[#171717] placeholder-[#A0A09C] focus:bg-white focus:border-[#171717] focus:outline-none transition-colors"
              />
              {errors.businessName && (
                <p className="text-xs text-red-600 font-mono">
                  {errors.businessName.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold"
              >
                Corporate Email <span className="text-[#3457E5]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                {...register("email")}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E5E0] bg-[#FAFAFA] text-base sm:text-sm text-[#171717] placeholder-[#A0A09C] focus:bg-white focus:border-[#171717] focus:outline-none transition-colors"
              />
              {errors.email && (
                <p className="text-xs text-red-600 font-mono">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold"
              >
                Phone Number <span className="text-[#3457E5]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E5E0] bg-[#FAFAFA] text-base sm:text-sm text-[#171717] placeholder-[#A0A09C] focus:bg-white focus:border-[#171717] focus:outline-none transition-colors"
              />
              {errors.phone && (
                <p className="text-xs text-red-600 font-mono">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Service Type Dropdown */}
          <div className="space-y-1.5">
            <label
              htmlFor="serviceType"
              className="block text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold"
            >
              Primary Service Requirement <span className="text-[#3457E5]">*</span>
            </label>
            <select
              id="serviceType"
              {...register("serviceType")}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E0] bg-[#FAFAFA] text-base sm:text-sm text-[#171717] focus:bg-white focus:border-[#171717] focus:outline-none transition-colors"
            >
              <option value="Website Development">Website Development</option>
              <option value="E-commerce Development">E-commerce Development</option>
              <option value="Web Application">Web Application</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Business Automation">Business Automation</option>
              <option value="AI Solutions">AI Solutions</option>
              <option value="Other">Other</option>
            </select>
            {errors.serviceType && (
              <p className="text-xs text-red-600 font-mono">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          {/* Row 4: Interactive Estimated Budget Pill Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
              Estimated Budget Parameters <span className="text-[#3457E5]">*</span>
            </label>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {budgetTiers.map((tier) => (
                <button
                  type="button"
                  key={tier}
                  onClick={() => setValue("estimatedBudget", tier, { shouldValidate: true })}
                  className={cn(
                    "text-xs font-mono px-3.5 py-2.5 min-h-[44px] flex items-center justify-center text-center rounded-lg border transition-all",
                    selectedBudget === tier
                      ? "bg-[#171717] text-white border-[#171717] font-semibold shadow-xs"
                      : "bg-[#FAFAFA] text-[#737373] border-[#E5E5E0] hover:border-[#171717] hover:text-[#171717]"
                  )}
                >
                  {tier}
                </button>
              ))}
            </div>
            {errors.estimatedBudget && (
              <p className="text-xs text-red-600 font-mono">
                {errors.estimatedBudget.message}
              </p>
            )}
          </div>

          {/* Row 5: Project Description */}
          <div className="space-y-1.5">
            <label
              htmlFor="projectDescription"
              className="block text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold"
            >
              Project Scope, Objectives &amp; Desired Timeline <span className="text-[#3457E5]">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              placeholder="Outline your commercial objectives, target audience, integration requirements, or desired milestone dates..."
              {...register("projectDescription")}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E0] bg-[#FAFAFA] text-base sm:text-sm text-[#171717] placeholder-[#A0A09C] focus:bg-white focus:border-[#171717] focus:outline-none transition-colors"
            />
            {errors.projectDescription && (
              <p className="text-xs text-red-600 font-mono">
                {errors.projectDescription.message}
              </p>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#E5E5E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>CONFIDENTIAL // STRICT NDA APPLIED</span>
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              withArrow
              className="w-full sm:w-auto px-8 py-3.5 min-h-[48px] justify-center"
            >
              Submit Consultation Scope
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export const EnquiryForm: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-[#D5D5CD] bg-white p-12 text-center">
          <span className="text-xs font-mono text-[#737373]">Loading Consultation Intake Desk...</span>
        </div>
      }
    >
      <EnquiryFormContent />
    </Suspense>
  );
};
