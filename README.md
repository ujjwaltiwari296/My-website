# Vanguard Studio — Web Development & Digital Solutions Platform

A world-class, premium corporate website engineered for a modern digital solutions studio. Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Mongoose**.

Designed with the sophistication of international creative agencies and Swiss editorial design principles: warm off-white tones, deep charcoal typography, electric cobalt accents, asymmetric layouts, and zero generic AI clichés.

---

## ✦ Key Architectural Highlights

- **Next.js 15 App Router**: Modern Server-First Component architecture with minimal client hydration.
- **Strict TypeScript**: 100% typed with zero compilation warnings or loose types.
- **Swiss Editorial Aesthetic**: Warm palette (`#F7F7F2`, `#171717`, `#737373`, `#3457E5`, `#111318`), distinct monospace accents, editorial grids, and balanced whitespace.
- **Multi-Page Experience**:
  - `/` — Homepage with all 10 curated sections.
  - `/about` — Studio philosophy, operating principles, and engineering manifesto.
  - `/services` — Detailed specification of all 6 services with deliverable breakdowns and investment tiers (₹).
  - `/work` — Selected portfolio showcases with interactive browser mockups and architectural blueprints.
  - `/contact` — Comprehensive project inquiry interface with validation, honeypot protection, budget selector, and direct WhatsApp routing.
  - `/privacy-policy` — Legally structured privacy policy.
  - `/terms` — Commercial terms and 30-day post-launch warranty specification.
  - `/api/contact` — Secure API route with Zod validation, honeypot bot trap, and MongoDB persistence.
- **Production SEO & Structured Data**: Dynamic sitemap (`/sitemap.xml`), `robots.txt`, Open Graph metadata, Twitter Cards, and schema.org `ProfessionalService` JSON-LD.
- **Editable Configuration**: All company details, contacts, branding, services, and portfolio items are managed in [`src/lib/site-config.ts`](file:///c:/My%20main%20website/src/lib/site-config.ts).

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15.1 (App Router) |
| **Language** | TypeScript 5.7+ |
| **Styling** | Tailwind CSS 3.4 |
| **Icons** | Lucide React |
| **Form Handling** | React Hook Form |
| **Schema Validation** | Zod |
| **Database** | MongoDB with Mongoose (with in-memory development fallback) |
| **Typography** | Manrope, Space Grotesk, Inter |

---

## ✦ Project Structure

```text
src/
├── app/
│   ├── layout.tsx             # Root layout with fonts, JSON-LD, navbar, and footer
│   ├── page.tsx               # Homepage assembling all editorial sections
│   ├── globals.css            # Custom CSS variables, grid lines, and selection styling
│   ├── icon.svg               # Vector brand favicon
│   ├── sitemap.ts             # Dynamic XML sitemap generator
│   ├── robots.ts              # Robots.txt configuration
│   ├── about/page.tsx         # Studio genesis & operating principles
│   ├── services/page.tsx      # In-depth service blueprints & pricing tiers
│   ├── work/page.tsx          # Portfolio case studies & mockups
│   ├── contact/page.tsx       # Consultation enquiry page
│   ├── privacy-policy/page.tsx# Privacy policy & data governance
│   ├── terms/page.tsx         # Commercial terms of service
│   └── api/
│       └── contact/route.ts   # Backend API endpoint with Zod validation & anti-spam
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky navigation with scroll blur & mobile drawer
│   │   ├── Footer.tsx         # Multi-column footer in deep navy with closing statement
│   │   └── PageHeader.tsx     # Reusable editorial page header with breadcrumb
│   ├── sections/
│   │   ├── HeroSection.tsx    # Editorial headline, availability tag & scroll indicator
│   │   ├── HeroVisual.tsx     # Custom browser mockup & floating metric cards
│   │   ├── TrustSection.tsx   # "Technology should make business simpler"
│   │   ├── ServicesSection.tsx# Asymmetric bento cards for all 6 capabilities
│   │   ├── PortfolioSection.tsx# Demonstration project showcases
│   │   ├── WhyChooseUsSection.tsx # Asymmetric bento grid of core values
│   │   ├── ProcessSection.tsx # 4-stage horizontal/vertical timeline
│   │   ├── IndustriesSection.tsx # Sector specialization grid
│   │   ├── TestimonialsPlaceholder.tsx # Ethical client partner invitation
│   │   ├── FAQSection.tsx     # Interactive category-filtered accordion
│   │   └── ContactSection.tsx # Split layout with direct channels & form
│   ├── portfolio/
│   │   ├── ProjectCard.tsx    # Comprehensive case architecture showcase
│   │   └── ProjectMockup.tsx  # CSS/HTML browser mockups (LegalEdge, EstateFlow, etc.)
│   ├── forms/
│   │   └── EnquiryForm.tsx    # React Hook Form + Zod, INR budget, WhatsApp CTA
│   └── ui/
│       ├── Button.tsx         # Micro-animated tactile button with variants
│       ├── Badge.tsx          # Status & indicator badges
│       └── Accordion.tsx      # Accessible smooth expanding accordion
├── lib/
│   ├── mongodb.ts             # Cached Mongoose connection with graceful fallback
│   ├── site-config.ts         # Central editable configuration for studio data
│   ├── utils.ts               # Tailwind class merge helper
│   └── validations.ts         # Zod schemas for project inquiries
├── models/
│   └── Enquiry.ts             # Mongoose schema for inquiries
└── types/
    └── index.ts               # Strict TypeScript definitions
```

---

## ✦ Getting Started

### 1. Development Server

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Environment Variables (Optional)

Create a `.env.local` file in the root directory:

```env
# Optional: MongoDB connection string for persistent inquiry storage
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/vanguard_studio?retryWrites=true&w=majority

# Optional: Resend API Key for automatic email notifications
RESEND_API_KEY=re_your_api_key_here
```

*Note: If `MONGODB_URI` is not provided, the inquiry endpoint operates safely in memory mode without throwing errors.*

### 3. Automated Verification Tests

To verify that all 7 pages and the `/api/contact` endpoint compile and respond with HTTP 200:

```bash
npm run test:routes
```

### 4. Production Build

```bash
pnpm run build
pnpm run start
```

---

## ✦ Customization Guide

- **Studio Name & Branding**: Edit `name`, `tagline`, and `shortDescription` in [`src/lib/site-config.ts`](file:///c:/My%20main%20website/src/lib/site-config.ts).
- **Contact Details & WhatsApp**: Update `contact.phone`, `contact.email`, and `contact.whatsappNumber` in [`src/lib/site-config.ts`](file:///c:/My%20main%20website/src/lib/site-config.ts).
- **Services & Deliverables**: Customize `services` array in [`src/lib/site-config.ts`](file:///c:/My%20main%20website/src/lib/site-config.ts).
- **Portfolio Blueprints**: Add or modify case studies in the `portfolioProjects` array.
- **Color Palette & Theme**: Modify color tokens in [`tailwind.config.ts`](file:///c:/My%20main%20website/tailwind.config.ts) and [`src/app/globals.css`](file:///c:/My%20main%20website/src/app/globals.css).

---

## ✦ License

Proprietary — Created for Vanguard Studio.
