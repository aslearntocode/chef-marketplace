import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'nunito': ['var(--font-nunito)'],
        'YWFT_Hannah_Narrow': ['YWFT Hannah Narrow', 'sans-serif'],
        'itc-souvenir': ['ITC Souvenir', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
