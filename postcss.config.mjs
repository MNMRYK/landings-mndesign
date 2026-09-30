// Tailwind solo transforma los CSS con directivas @tailwind (src/pages/alcoi/tailwind.css);
// el resto de hojas de estilo del proyecto pasan sin cambios.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
