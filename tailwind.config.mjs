/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        saas: {
          violet: "#8B5CF6",
          fuchsia: "#D946EF",
          mint: "#34D399",
          dark: "#0F172A",
          bg: "#FAFAFC",
        },
      },
      boxShadow: {
        card: "0 4px 24px -6px rgba(0, 0, 0, 0.03), 0 12px 32px -4px rgba(0, 0, 0, 0.04)",
        float: "0 20px 40px -10px rgba(139, 92, 246, 0.15)",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
}