import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F7F2",
        foreground: "#171717",
        cobalt: {
          DEFAULT: "#3457E5",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          500: "#3457E5",
          600: "#2743C5",
          700: "#1E339A",
        },
        navy: {
          950: "#111318",
          900: "#161920",
          850: "#1D212B",
          800: "#272C3A",
          700: "#383E50",
        },
        subtle: {
          border: "#E5E5E0",
          borderStrong: "#D5D5CD",
          surface: "#F2F2EC",
          card: "#FFFFFF",
          muted: "#737373",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        editorial: ["var(--font-space-grotesk)", "var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        tight: "-0.015em",
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'editorial': '0 20px 40px -15px rgba(17, 19, 24, 0.07)',
        'elevated': '0 30px 60px -20px rgba(17, 19, 24, 0.12)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
};

export default config;
