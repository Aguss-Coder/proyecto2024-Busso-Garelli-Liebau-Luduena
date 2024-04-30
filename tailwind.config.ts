import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'principal': '#385586',
      'principal-1': '#405365',
      'principal-2': '#597BAD',
      'principal-3': '#859FC3',
      'principal-4': '#D1DAE7',
      'principal-light': '#E6F0FF',
      'principal-dark': '#070708',
    },
    extend: {
      fontFamily: {
        'paragraph': ['var(--font-friz-quadrata)'],
        'title': ['var(--font-warsuck)'],
        'buttons': ['var(--font-augusta)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
