import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#141416",
          secondary: "#222529",
        },
        white: {
          DEFAULT: "#E7ECF3",
          secondary: "#B1B5C3",
        },
        green: {
          DEFAULT: "#58C27D",
        },
        yellow: {
          DEFAULT: "#FFAF4E",
        },
        purple: {
          DEFAULT: "#878CFF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
