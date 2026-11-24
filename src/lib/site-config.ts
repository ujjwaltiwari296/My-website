import { PortfolioProject } from "@/types";

export const siteConfig = {
  name: "Vanguard Studio",
  legalName: "Vanguard Digital Solutions",
  tagline: "We build digital experiences that move businesses forward.",
  shortDescription:
    "From high-performing websites to custom digital solutions, we help businesses establish their presence, streamline operations and grow in an increasingly digital world.",
  url: "https://vanguardstudio.example",
  author: "Vanguard Studio",
  contact: {
    email: "contact@vanguardstudio.example",
    phone: "+91 98765 43210",
    phoneFormatted: "+91 98765 43210",
    whatsappNumber: "919876543210",
    whatsappDefaultMessage:
      "Hello Vanguard Studio, I am interested in discussing a new digital project for my business.",
    address: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      display: "Indiranagar, Bengaluru, Karnataka, India",
    },
    businessHours: "Monday – Friday: 9:30 AM – 6:30 PM IST",
    responseTime: "Guaranteed response within 24 business hours",
  },
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
    dribbble: "https://dribbble.com",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    {
      number: "01",
      title: "Website Design & Development",
      shortDesc:
        "Professional, responsive websites designed to establish credibility and convert visitors into customers.",
      fullDesc:
        "We build bespoke corporate and marketing websites with impeccable typography, lightning-fast performance, and strategic conversion pathways. Built on modern web architecture with robust CMS capabilities.",
      deliverables: [
        "Editorial UI/UX Design System",
        "Custom Next.js & React Frontend",
        "Content Architecture & CMS Setup",
        "Mobile-First Responsive Layouts",
        "Technical SEO & Core Web Vitals Optimization",
      ],
      techOrMethod: ["Next.js", "TypeScript", "Tailwind CSS", "Semantic HTML"],
      timeline: "2 to 4 weeks",
      iconName: "Globe",
      badge: "Core Service",
    },
    {
      number: "02",
      title: "Custom Web Applications",
      shortDesc:
        "Scalable web applications and customised digital platforms built around business requirements.",
      fullDesc:
        "When off-the-shelf software falls short, we architect tailored internal portals, SaaS platforms, client dashboards, and interactive business systems engineered for resilience and maintainability.",
      deliverables: [
        "Custom Database & API Architecture",
        "Role-Based Access Control (RBAC)",
        "Real-time Dashboards & Reporting",
        "Scalable Cloud Backend Architecture",
        "Security Auditing & Hardening",
      ],
      techOrMethod: ["React / Next.js", "Node.js", "MongoDB / PostgreSQL", "REST / GraphQL"],
      timeline: "4 to 10 weeks",
      iconName: "Layers",
      badge: "Tailored Architecture",
    },
    {
      number: "03",
      title: "E-commerce Development",
      shortDesc:
        "Online stores designed to simplify shopping experiences and help businesses sell online.",
      fullDesc:
        "Turn casual visitors into loyal repeat customers with frictionless checkout funnels, lightning-fast catalog search, secure payment integrations, and unified order management.",
      deliverables: [
        "Conversion-Optimized Catalog Layouts",
        "Secure Payment Gateways (Razorpay, Stripe, UPI)",
        "Inventory & Order Management Workflows",
        "Mobile Checkout Optimization",
        "Analytics & Customer Abandonment Tracking",
      ],
      techOrMethod: ["Next.js Commerce", "Headless Shopify", "Stripe / Razorpay", "Tailwind CSS"],
      timeline: "3 to 6 weeks",
      iconName: "ShoppingBag",
    },
    {
      number: "04",
      title: "UI/UX Design",
      shortDesc:
        "Intuitive, visually appealing interfaces focused on usability and customer experience.",
      fullDesc:
        "Rooted in modern Swiss editorial aesthetics and rigorous user testing, our design systems eliminate friction and give your brand a commanding, memorable visual identity.",
      deliverables: [
        "User Journey Mapping & Wireframing",
        "High-Fidelity Interactive Prototypes",
        "Comprehensive Design Systems & Tokens",
        "Component Library Specifications",
        "Accessibility & Usability Audits",
      ],
      techOrMethod: ["Figma", "Design Tokens", "Design Sprint", "WCAG 2.1 AA"],
      timeline: "2 to 4 weeks",
      iconName: "Figma",
    },
    {
      number: "05",
      title: "Business Automation",
      shortDesc:
        "Workflow automation and integrations that reduce repetitive tasks and improve efficiency.",
      fullDesc:
        "Connect disjointed tools, automate routine operations, and free your team to focus on strategic growth through reliable API integrations and webhook workflows.",
      deliverables: [
        "CRM & Lead Pipeline Automation",
        "Automated Invoicing & Notification Systems",
        "Multi-Platform Data Synchronization",
        "Custom Webhook & API Connectors",
        "Error Logging & Alert Monitoring",
      ],
      techOrMethod: ["Make / n8n", "REST APIs", "Node.js Workers", "Webhooks"],
      timeline: "1 to 3 weeks",
      iconName: "Cpu",
    },
    {
      number: "06",
      title: "AI-Powered Solutions",
      shortDesc:
        "Practical AI integrations and intelligent tools that help businesses work smarter.",
      fullDesc:
        "Cut through the hype with grounded, high-utility AI implementations: intelligent customer assistants, automated document analysis, and tailored semantic search systems.",
      deliverables: [
        "Internal Knowledge Base Assistants",
        "Automated Document & Form Processing",
        "Semantic Search & Smart Recommendations",
        "Prompt Engineering & Model Guardrails",
        "Usage Telemetry & Cost Controls",
      ],
      techOrMethod: ["OpenAI / Gemini APIs", "Vector Databases", "LangChain", "Next.js"],
      timeline: "2 to 5 weeks",
      iconName: "Sparkles",
    },
  ],
  portfolioProjects: [
    {
      id: "legaledge",
      title: "LegalEdge",
      tagline: "High-Authority Corporate Legal Practice Web Experience",
      industry: "Legal & Professional Services",
      description:
        "A sophisticated editorial website designed for a corporate law practice, featuring practice area deep-dives, attorney dossiers, and structured consultation booking.",
      challenge:
        "Corporate legal clients need immediate reassurance of authority, discretion, and domain expertise without wading through cluttered legal jargon.",
      solution:
        "Engineered an asymmetric Swiss-style layout with strong serif typography, distinct practice taxonomy, and encrypted client intake routing.",
      results: [
        "Demonstration architectural blueprint for legal firms",
        "Structured case-study & practice area taxonomy",
        "Frictionless private consultation scheduling flow",
      ],
      services: ["Brand Expression", "Web Architecture", "Content Strategy"],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Editorial Grid"],
      accentColor: "#1E2A38",
      mockupType: "browser" as const,
      featured: true,
    },
    {
      id: "estateflow",
      title: "EstateFlow",
      tagline: "Architectural Real Estate Portfolio & Inquiry Engine",
      industry: "Real Estate & Architecture",
      description:
        "An immersive property discovery platform for premium developments, combining interactive floorplan exploration, unit availability tracking, and high-resolution visual storytelling.",
      challenge:
        "High-value real estate buyers require tactile visual immersion, transparent specification access, and direct private tour scheduling.",
      solution:
        "Created a split-screen interactive showcase with interactive map anchors, filtered asset galleries, and real-time viewing booking.",
      results: [
        "Interactive architectural unit showcase layout",
        "Integrated inquiry funnel with budget qualification",
        "Optimized mobile browsing for on-the-go investors",
      ],
      services: ["Platform Engineering", "Interactive UI", "Mobile Optimization"],
      techStack: ["Next.js", "React", "Tailwind CSS", "Motion"],
      accentColor: "#2A362D",
      mockupType: "dashboard" as const,
      featured: true,
    },
    {
      id: "medivista",
      title: "Medivista",
      tagline: "Patient-Centered Clinical & Specialty Healthcare Portal",
      industry: "Healthcare & Life Sciences",
      description:
        "A clean, empathetic digital presence for a multi-specialty healthcare centre, focusing on clear doctor credentialing, department navigation, and rapid appointment booking.",
      challenge:
        "Patients often experience stress when navigating medical services. Interface clarity, calm color hierarchy, and simple booking are paramount.",
      solution:
        "Crafted a calming, accessible visual language with WCAG AAA contrast, clear physician specialties, and streamlined telehealth appointment request pathways.",
      results: [
        "Demonstration healthcare interface with intuitive appointment triage",
        "Physician roster with credentials and department filtering",
        "Accessible, high-contrast readable medical typography",
      ],
      services: ["UI/UX Design", "Accessibility Auditing", "Frontend Engineering"],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "ARIA Compliant"],
      accentColor: "#0D3B36",
      mockupType: "browser" as const,
      featured: true,
    },
    {
      id: "buildcore",
      title: "BuildCore",
      tagline: "Industrial Construction & Infrastructure Capability Portal",
      industry: "Construction & Engineering",
      description:
        "A robust, muscular digital showcase for an engineering and commercial construction firm, highlighting safety compliance, major project archives, and tender inquiries.",
      challenge:
        "Institutional clients and government tenders demand evidence of safety standards, heavy equipment capacity, and previous project scale.",
      solution:
        "Constructed a high-contrast industrial grid showcasing project milestones, machinery capabilities, and direct tender document request pipelines.",
      results: [
        "Demonstration industrial capability showcase",
        "Structured tender & project estimation pipeline",
        "Interactive past-projects archive with timeline metrics",
      ],
      services: ["Web Development", "Performance Architecture", "SEO Engineering"],
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Performance Tuned"],
      accentColor: "#332E27",
      mockupType: "split" as const,
      featured: true,
    },
  ] as PortfolioProject[],
  processStages: [
    {
      step: "01",
      title: "Discover",
      tagline: "Understanding what moves your business",
      description:
        "We begin with a thorough technical and strategic consultation to examine your business model, customer journey, competitive landscape, and exact technical requirements.",
      activities: [
        "Stakeholder discovery session",
        "Customer journey & audience profiling",
        "Technical stack & scope definition",
        "Project roadmap & clear milestone sign-off",
      ],
      deliverable: "Project Blueprint & Scope Specification",
      duration: "Week 1",
    },
    {
      step: "02",
      title: "Design",
      tagline: "Editorial aesthetics meet user psychology",
      description:
        "We craft bespoke wireframes, design systems, and responsive layouts that balance distinct visual sophistication with high-converting user experience.",
      activities: [
        "Information architecture & site hierarchy",
        "Bespoke typography & color system definition",
        "Interactive desktop & mobile prototypes",
        "Design review & collaborative refinements",
      ],
      deliverable: "Complete Interactive Design System & Prototypes",
      duration: "Week 2",
    },
    {
      step: "03",
      title: "Develop",
      tagline: "Clean code engineered for speed and scale",
      description:
        "Our engineers build your digital solution using modern Next.js and TypeScript, ensuring clean modular code, responsive fidelity, and optimal Core Web Vitals.",
      activities: [
        "Component-driven frontend development",
        "API integrations & database configuration",
        "Cross-browser and mobile device testing",
        "Performance auditing & SEO implementation",
      ],
      deliverable: "Functional Staging Environment for Review",
      duration: "Weeks 3–4",
    },
    {
      step: "04",
      title: "Launch & Support",
      tagline: "Zero-downtime deployment and ongoing assurance",
      description:
        "We coordinate smooth DNS propagation, production server provisioning, SSL certification, and provide documentation alongside post-launch warranty support.",
      activities: [
        "Production deployment & DNS cutover",
        "Analytics & error monitoring setup",
        "Client handoff walk-through & documentation",
        "30-day post-launch warranty & optimization",
      ],
      deliverable: "Live Production Platform & Documentation",
      duration: "Week 5 & Ongoing",
    },
  ],
  industries: [
    {
      id: "legal",
      name: "Legal & Professional Services",
      headline: "Authoritative digital presence for partners and practices.",
      description:
        "Clean, confidential websites that project credibility, clearly articulate practice areas, and streamline consultation requests.",
      keySolutions: [
        "Practice Area Taxonomies",
        "Partner Credentials & Dossiers",
        "Confidential Intake Gateways",
      ],
      impactMetric: "Built for trust & client conversion",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      headline: "Accessible, patient-first clinical platforms.",
      description:
        "Calm, high-trust healthcare experiences designed for easy specialty discovery, clear physician rosters, and rapid appointment scheduling.",
      keySolutions: [
        "Doctor Directory & Scheduling",
        "WCAG Accessibility Compliance",
        "Patient Information Hubs",
      ],
      impactMetric: "Accessible & patient-centric",
    },
    {
      id: "realestate",
      name: "Real Estate & Architecture",
      headline: "High-impact visual showcases for developments & portfolios.",
      description:
        "Immersive property portals featuring floorplan viewers, neighborhood guides, and qualified investor inquiry workflows.",
      keySolutions: [
        "Interactive Property Showcases",
        "Floorplan & Amenity Viewers",
        "Buyer Qualification Forms",
      ],
      impactMetric: "Visual immersion & lead capture",
    },
    {
      id: "construction",
      name: "Construction & Engineering",
      headline: "Heavy-duty capability portals for industrial tenders.",
      description:
        "Robust industrial platforms highlighting past project milestones, safety compliance records, and tender estimation requests.",
      keySolutions: [
        "Project Portfolio & Timeline Milestones",
        "Tender & Estimation Pipelines",
        "Safety & Certification Showcases",
      ],
      impactMetric: "Demonstrable industrial authority",
    },
    {
      id: "education",
      name: "Education & Academy",
      headline: "Clear course exploration and prospective student enrollment.",
      description:
        "Organized course catalogs, faculty profiles, and friction-free admission inquiry pathways designed to drive enrollment.",
      keySolutions: [
        "Curriculum & Syllabus Catalog",
        "Student Enrollment Pathways",
        "Event & Webinar Schedules",
      ],
      impactMetric: "Higher prospect conversion",
    },
    {
      id: "retail",
      name: "Retail & E-commerce",
      headline: "High-speed storefronts built for higher average order value.",
      description:
        "Custom commerce experiences with fast catalog search, streamlined one-page checkouts, and seamless payment gateway integrations.",
      keySolutions: [
        "Sub-second Catalog Navigation",
        "Frictionless Payment Gateways",
        "Automated Order & Shipping Tracking",
      ],
      impactMetric: "Engineered for repeat sales",
    },
    {
      id: "startups",
      name: "Startups & Emerging Tech",
      headline: "High-velocity product launchpads and conversion funnels.",
      description:
        "Bold, product-first marketing websites and MVP platforms that clearly explain complex value propositions to early adopters and investors.",
      keySolutions: [
        "Interactive Product Feature Tours",
        "Waitlist & Early Access Funnels",
        "Investor & Pitch Decks Online",
      ],
      impactMetric: "Clear value & rapid go-to-market",
    },
  ],
  faqs: [
    {
      question: "What types of websites do you develop?",
      answer:
        "We build bespoke corporate websites, marketing platforms, custom web applications, e-commerce storefronts, and client portals. Every project is crafted from the ground up using modern architectures like Next.js, tailored specifically to your operational goals rather than forcing your business into a restrictive off-the-shelf template.",
      category: "General",
    },
    {
      question: "How long does website development take?",
      answer:
        "A typical professional corporate website takes between 2 to 4 weeks from discovery to final deployment. More intricate custom web applications or multi-vendor platforms generally take 4 to 10 weeks depending on custom integrations, backend requirements, and scope complexity.",
      category: "Process",
    },
    {
      question: "How much does a website cost?",
      answer:
        "Our project engagements typically range from ₹10,000 for focused foundational business websites up to ₹1,00,000+ for comprehensive custom web platforms and automation suites. We provide transparent, itemized fixed-price quotes before any work begins, ensuring zero hidden surprises.",
      category: "Pricing",
    },
    {
      question: "Will my website work seamlessly across mobile devices?",
      answer:
        "Yes, absolutely. We design mobile-first with dedicated responsive layouts, touch-friendly interactions, optimized font scaling, and adaptive media sizing. Your website is verified across real iOS, Android, tablet, and desktop viewports to ensure uniform visual excellence.",
      category: "Technical",
    },
    {
      question: "Can you redesign and modernize an existing website?",
      answer:
        "Yes. We frequently modernize legacy websites that feel outdated or suffer from slow load times. We can preserve your existing SEO rankings through proper 301 redirect mapping while elevating your visual design, mobile responsiveness, and conversion performance.",
      category: "General",
    },
    {
      question: "Do you provide ongoing website maintenance and security updates?",
      answer:
        "Yes. We offer reliable monthly maintenance plans covering core updates, security patches, regular backups, uptime monitoring, and ongoing technical tweaks so your team can focus exclusively on running your business.",
      category: "Process",
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer:
        "Yes. We routinely integrate CRMs (HubSpot, Salesforce, Zoho), payment gateways (Razorpay, Stripe, UPI, PayU), marketing automation tools, booking calendars (Calendly, Cal.com), enterprise ERPs, and custom REST/GraphQL APIs.",
      category: "Technical",
    },
    {
      question: "Do you provide ongoing technical support after launch?",
      answer:
        "Every project includes a 30-day post-launch warranty period where any bugs or technical discrepancies are resolved immediately at no additional cost. Following this period, we provide flexible support arrangements tailored to your ongoing operational needs.",
      category: "General",
    },
  ],
};
