import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#185FA5",
          light: "#E6F1FB",
          dark: "#0C447C",
        },
        success: {
          DEFAULT: "#3B6D11",
          light: "#EAF3DE",
        },
        warning: {
          DEFAULT: "#633806",
          light: "#FAEEDA",
        },
        danger: {
          DEFAULT: "#A32D2D",
          light: "#FCEBEB",
        },
        "bg-white":   "#FFFFFF",
        "bg-surface": "#FAFAFA",
        border: "#E8E8E8",
        "text-primary": "#0D0D0D",
        "text-secondary": "#7A7A7A",
        "text-muted": "#B0B0B0",
      },
      boxShadow: {
        card:        "0 1px 4px 0 rgba(0,0,0,0.08)",
        "card-hover":"0 4px 16px 0 rgba(0,0,0,0.12)",
        modal:       "0 8px 32px 0 rgba(0,0,0,0.16)",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "13":  "3.25rem",
        "15":  "3.75rem",
        "18":  "4.5rem",
        "22":  "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
