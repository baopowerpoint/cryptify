/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "1": "var(--primary-1)",
          "2": "var(--primary-2)",
          "3": "var(--primary-3)",
          "4": "var(--primary-4)",
        },
        secondary: {
          "1": "var(--secondary-1)",
          "2": "var(--secondary-2)",
          "3": "var(--secondary-3)",
          "4": "var(--secondary-4)",
        },
        neutrals: {
          "1": "var(--neutrals-1)",
          "2": "var(--neutrals-2)",
          "3": "var(--neutrals-3)",
          "4": "var(--neutrals-4)",
          "5": "var(--neutrals-5)",
          "6": "var(--neutrals-6)",
          "7": "var(--neutrals-7)",
          "8": "var(--neutrals-8)",
        },
        fontFamily: {
          jetbrains: ["var(--font-inter)"],
          "space-grotesk": ["var(--font-space-grotesk)"],
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
