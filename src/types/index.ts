export type ServiceCategory =
  | "Website Design & Development"
  | "Custom Web Applications"
  | "E-commerce Development"
  | "UI/UX Design"
  | "Business Automation"
  | "AI-Powered Solutions";

export type BudgetTier =
  | "Below ₹10,000"
  | "₹10,000–₹25,000"
  | "₹25,000–₹50,000"
  | "₹50,000–₹1,00,000"
  | "Above ₹1,00,000";

export interface ProjectEnquiry {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  serviceType: string;
  estimatedBudget: BudgetTier;
  projectDescription: string;
  createdAt?: Date;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  techStack: string[];
  livePreviewUrl?: string;
  accentColor: string;
  mockupType: "browser" | "dashboard" | "mobile" | "split";
  stats?: { label: string; value: string }[];
  featured?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techOrMethod: string[];
  timeline: string;
  iconName: string;
  badge?: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverable: string;
  duration: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  keySolutions: string[];
  impactMetric: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Process" | "Pricing" | "Technical";
}
