import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "brand-marine-blue": "hsl(213, 96%, 18%)",
        "brand-purplish-blue": "hsl(243, 100%, 62%)",
        "brand-pastel-blue": "hsl(228, 100%, 84%)",
        "brand-light-blue": "hsl(206, 94%, 87%)",
        "brand-strawberry-red": "hsl(354, 84%, 57%)",

        // Neutral
        "brand-cool-gray": "hsl(231, 11%, 63%)",
        "brand-light-gray": "hsl(229, 24%, 87%)",
        "brand-magnolia": "hsl(217, 100%, 97%)",
        "brand-alabaster": "hsl(231, 100%, 99%)",
        "brand-white": "hsl(0, 0%, 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    backgroundImage: {
      "sidebar-desktop": 'url("/bg-sidebar-desktop.svg")',
      "sidebar-mobile": 'url("/bg-sidebar-mobile.svg")',
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
