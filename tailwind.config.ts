import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: "324px",
      tablet: "768px",
      desktop: "1024px",
      wide: "1280px",
      extraWide: "1536px",
    },
  },
  plugins: [],
};
export default config;
