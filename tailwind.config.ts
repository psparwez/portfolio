import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        "darkest-gray": "var(--darkest-gray)",
        "very-dark-gray": "var(--very-dark-gray)",
        "dark-gray-1": "var(--dark-gray-1)",
        "dark-gray-2": "var(--dark-gray-2)",
        "almost-black": "var(--almost-black)",
        "dark-gray-3": "var(--dark-gray-3)",
        "dark-gray-4": "var(--dark-gray-4)",
        "border-color": "var(--border-color)",
        "dark-gray-6": "var(--dark-gray-6)",
        "dark-gray-7": "var(--dark-gray-7)",
        "dark-gray-8": "var(--dark-gray-8)",
        "medium-dark-gray": "var(--medium-dark-gray)",
        "medium-gray": "var(--medium-gray)",
        "light-gray-1": "var(--light-gray-1)",
        "light-gray-2": "var(--light-gray-2)",
        "light-gray-3": "var(--light-gray-3)",
        "light-gray-4": "var(--light-gray-4)",
        "very-light-gray": "var(--very-light-gray)",
        "near-white": "var(--near-white)",
        "almost-white": "var(--almost-white)",
        "image-bg": "var(--image-bg)",
      },
      fontFamily: {
        "space-grotesk": "var(--font-Space_Grotesk)",
        IBM_Plex_Mono: "var(--font-IBM_Plex_Mono)",
      },
    },
  },
  plugins: [],
} satisfies Config;
