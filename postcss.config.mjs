// Tailwind solo transforma los CSS con directivas @tailwind (alcoi/tailwind.css y software-a-mida-alcoi/tailwind.css);
// el resto de hojas de estilo del proyecto pasan sin cambios.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
