import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        mobile: "490px",
        tablet: "1040px",
        desktop: "1620px",
      },
      boxShadow: {
        custom: "10px 10px 30px -15px rgba(23, 23, 23, 0.4)",
      },
      colors: {
        zinc: {
          200: "#C0C0C0",
          300: "#C0C0C0",
          600: "#2B2B2B",
          900: "#101010",
        },
      },
    },
  },
  plugins: [],
};
export default config;
