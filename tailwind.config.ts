import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#111111",
          charcoal: "#1a1a1a",
          "dark-gray": "#333333",
          "mid-gray": "#666666",
          gray: "#999999",
          "light-gray": "#cccccc",
          "lighter-gray": "#e8e8e8",
          "off-white": "#f5f5f5",
          white: "#fafafa",
          pure: "#ffffff",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "section-label": ["10px", { letterSpacing: "0.3em" }],
      },
      spacing: {
        sidebar: "280px",
      },
    },
  },
  plugins: [],
};

export default config;