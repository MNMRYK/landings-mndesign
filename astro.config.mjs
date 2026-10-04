import { defineConfig } from 'astro/config';

// Sin @astrojs/sitemap: el sitemap oficial del dominio (/sitemap.xml) lo genera
// el build del repo ReactMNDESIGN a partir de src/seo/rutas.js, e incluye
// estas landings. El de Astro listaba también páginas con noindex.
export default defineConfig({
  site: 'https://mndesignweb.es',
});
