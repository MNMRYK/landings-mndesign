/** @type {import('tailwindcss').Config} */
export default {
  // Solo la landing de Alcoy (/alcoi/) usa esta config. La página de software en valenciano
  // (/software-a-mida-alcoi/) tiene la suya congelada: tailwind.software-a-mida-alcoi.config.mjs
  content: ['./src/pages/alcoi/**/*.{astro,html,js,ts}'],
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
          // Paleta "iridescent glass" de /alcoi/
          lilac: "#E9E3FF",
          pink: "#FBE3F3",
          sky: "#DCE8FF",
          cream: "#F8F6FF",
          iris: "#7C5CFF", // acento decorativo (no para texto pequeño)
          magenta: "#E25FD0", // acento decorativo
          cyan: "#6EE7F0", // acento decorativo
          ink: "#1E1446", // texto principal
          "iris-ink": "#5B3FD9", // violeta para texto y enlaces (AA)
          muted: "#4B4468", // texto secundario (AA)
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