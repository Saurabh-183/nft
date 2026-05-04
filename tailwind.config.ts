import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["'Clash Display'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        purple: {
          primary: "#7B2FFF",
          secondary: "#9D4EDD",
          light: "#B06EFF",
          dark: "#4A0E8F",
          glow: "#6B21A8",
        },
        nft: {
          bg: "#0A0A0F",
          card: "#111118",
          border: "#1E1E2E",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(123,47,255,0.35) 0%, rgba(10,10,15,0) 70%)",
        "purple-glow":
          "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(123,47,255,0.4) 0%, transparent 70%)",
        "section-gradient":
          "linear-gradient(180deg, #0A0A0F 0%, #0D0A1A 50%, #0A0A0F 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        countdown: "countdown 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
