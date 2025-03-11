import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["var(--font-space)"],
        shoulders: ["var(--font-shoulders-text)", "sans-serif"],
        shouldersdisplay: ["var(--font-shoulders-display)", "sans-serif"],
        shouldersstencil: ["var(--font-shoulders-stencil)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
      },
      screens: {
        // xs: "480px",
        // ss: "620px",
        // sm: "768px",
        // md: "1060px",
        // lg: "1280px",
        // xl: "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
