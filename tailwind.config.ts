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
        background: "#0d0d0f",
        "background-secondary": "#111113",
        "background-elevated": "#17171a",
        "background-card": "#1a1a1e",
        accent: "#c8f06e",
        "accent-dim": "#a8d04e",
        "accent-glow": "rgba(200, 240, 110, 0.15)",
        "surface-border": "rgba(255, 255, 255, 0.06)",
        "surface-border-hover": "rgba(255, 255, 255, 0.12)",
        "text-primary": "#f0eeea",
        "text-secondary": "#888889",
        "text-muted": "#555558",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-dot": "pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-up": "float-up 0.4s ease-out forwards",
        "typing-dot": "typing-dot 1.4s infinite ease-in-out",
        "grid-fade": "grid-fade 8s ease-in-out infinite alternate",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
        "float-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "typing-dot": {
          "0%, 80%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "40%": { opacity: "1", transform: "scale(1)" },
        },
        "grid-fade": {
          from: { opacity: "0.3" },
          to: { opacity: "0.6" },
        },
      },
      boxShadow: {
        "accent-glow": "0 0 40px rgba(200, 240, 110, 0.08)",
        card: "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
        "card-hover":
          "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,240,110,0.15)",
        modal: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
