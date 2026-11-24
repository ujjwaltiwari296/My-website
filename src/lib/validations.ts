import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name must not exceed 80 characters"),
  businessName: z
    .string()
    .min(2, "Business or company name is required")
    .max(100, "Business name must not exceed 100 characters"),
  email: z
    .string()
    .email("Please provide a valid business email address")
    .max(120, "Email must not exceed 120 characters"),
  phone: z
    .string()
    .min(7, "Please provide a valid phone number")
    .max(20, "Phone number must not exceed 20 characters")
    .regex(/^[+0-9\s\-()]{7,20}$/, "Invalid phone format"),
  serviceType: z.enum(
    [
      "Website Development",
      "E-commerce Development",
      "Web Application",
      "UI/UX Design",
      "Business Automation",
      "AI Solutions",
      "Other",
    ],
    {
      required_error: "Please select a service type",
    }
  ),
  estimatedBudget: z.enum(
    [
      "Below ₹10,000",
      "₹10,000–₹25,000",
      "₹25,000–₹50,000",
      "₹50,000–₹1,00,000",
      "Above ₹1,00,000",
    ],
    {
      required_error: "Please select an estimated budget tier",
    }
  ),
  projectDescription: z
    .string()
    .min(20, "Please provide at least a brief description (min 20 characters)")
    .max(2500, "Description must not exceed 2500 characters"),
  // Honeypot field for spam prevention
  companyWebsiteVerify: z.string().optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
