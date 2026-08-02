import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050816",
          secondary: "#0B1020",
        },
        glass: "rgba(255,255,255,0.06)",
        border: {
          glass: "rgba(255,255,255,0.12)",
        },
        accent: {
          violet: "#7C3AED",
          purple: "#8B5CF6",
          blue: "#2563EB",
          cyan: "#06B6D4",
          sky: "#38BDF8",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B5C2D8",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      borderRadius: {
        card: "24px",
        btn: "16px",
        image: "24px",
        input: "18px",
      },
      spacing: {
        section: "140px",
        "section-mobile": "80px",
        card: "32px",
        "card-internal": "24px",
      },
      maxWidth: {
        content: "1400px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124,58,237,0.45)",
        "glow-cyan": "0 0 40px -10px rgba(6,182,212,0.45)",
        luxury:
          "0 8px 32px rgba(0,0,0,0.4), 0 1.5px 0 rgba(255,255,255,0.06) inset",
      },
      backdropBlur: {
        glass: "25px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "gradient-move": "gradient-move 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
