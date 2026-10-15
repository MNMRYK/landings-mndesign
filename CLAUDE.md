# MN Design Web · Landings

## Qué es MN Design Web
Estudio de diseño web y software a medida en Cocentaina (Alicante), de María Nadal.
Web principal: https://mndesignweb.es/ · Passeig del Comtat, 75, 5º 1º · 03820 Cocentaina · +34 645 854 934 · info@mndesignweb.es

Este repo (Astro) contiene las landings que cuelgan del dominio:
/alcoi/ (diseño web en Alcoy, castellano), /software-a-mida-alcoi/ (software a medida, valenciano: es la "página de software de Cocentaina", antes vivía en /alcoi/; carpeta `src/pages/software-a-mida-alcoi/`), /clinicas/, /nutricionistas/, /psicologos/, /academia-nutricion/, /bodas/, /aprende-shopify/, /enlaces/ (noindex).
La web principal (React) está en `../ReactMNDESIGN` y el blog en `../Blog-mndesignweb`.
El sitemap del dominio lo genera ReactMNDESIGN a partir de `src/seo/rutas.js` (aquí no hay sitemap).

## Publicación (SiteGround, subida manual)
mndesignweb.es se sirve desde **SiteGround**: hay que subir a mano el contenido de `dist/` a `public_html`. Un push a `main` **no publica nada** en el dominio. El workflow `.github/workflows/deploy.yml` despliega en GitHub Pages, que no es donde apunta el dominio.
1. `npm run build` (genera `dist/`).
2. Averigua qué ha cambiado: compara el `dist/` nuevo con el anterior. Los JS y CSS de `dist/_astro/` llevan un hash en el nombre: si cambia el código, cambia el nombre del archivo y el HTML apunta al nuevo.
3. Sube **primero** los archivos nuevos de `dist/_astro/` a `public_html/_astro/`.
4. Sube **después** las páginas (`dist/<landing>/index.html` → `public_html/<landing>/`) y los archivos nuevos o cambiados de `public/`. Por este orden, ninguna página apunta a un script que aún no está subido.
5. Vacía la caché de SiteGround (Site Tools → Speed → Caching) y comprueba la página en una ventana privada.
6. Los `_astro/` antiguos se pueden borrar de SiteGround cuando se haya comprobado que todo va bien (y solo si ninguna otra página los usa).

Pendiente de decidir: el workflow de GitHub Pages publica en https://mnmryk.github.io/landings-mndesign/ una copia de las landings sin estilos, pero indexable (con canonical a mndesignweb.es). Para retirarla hay que borrar el workflow y, además, despublicar Pages en GitHub → Settings → Pages.

Piezas comunes de las landings:
- Cookies y analítica: `src/components/CookiesHead.astro` (Consent Mode v2 por categorías: **Analítica** = GA4 `G-36WYJMYT3Z` + Clarity → `analytics_storage`; **Marketing** = Píxel de Meta + remarketing de Google Ads → `ad_storage`, `ad_user_data`, `ad_personalization`; nada se carga sin aceptar) y `src/components/CookieBanner.astro` (Aceptar / Rechazar + enlace "Configurar" con el panel de casillas; el "Configurar cookies" del footer abre ese panel). El mismo código de consentimiento está en `ReactMNDESIGN/index.html` y su banner en `ReactMNDESIGN/src/Legales/CookieBanner.jsx`: si cambias uno, cambia el otro. Cada banner nuevo de landing necesita `#cookie-banner`, `#btn-accept-cookies`, `#btn-decline-cookies` y un `<button class="cc-link" data-configurar-cookies>`. Eventos con `window.enviarEvento()` para GA4 (`generate_lead`, `book_call`, `click_telefono`, `click_whatsapp`, `click_email`, `click_reserva`) y `window.enviarMeta()` para Meta (`Lead`, `Schedule`, `Contact`). Los clics de teléfono, WhatsApp, email y cal.com se miden **solo** en `CookiesHead.astro` (y su copia en `ReactMNDESIGN/index.html`): ninguna página debe repetir ese código. Formularios: `generate_lead` + `Lead` tras un envío correcto; reservas: Cal.com con el embed oficial y `book_call` + `Schedule` en `bookingSuccessful`.
- Formularios: Web3Forms + webhook de Make (mismo `access_key` y hook en todas las landings).
- Reuniones: cal.com (`mndesignweb/reunion-30-min` en castellano, `mndesignweb/reunio-30-min` en valenciano), cargado de forma diferida.
- /alcoi/ usa Tailwind compilado (`tailwind.config.mjs` solo apunta a `src/pages/alcoi/`) más `iris.css` (efectos iridiscentes solo con CSS). /software-a-mida-alcoi/ tiene su config congelada (`tailwind.software-a-mida-alcoi.config.mjs`); su `content` debe apuntar a la carpeta real de la página: si no coincide, Tailwind no genera ninguna clase y la página sale sin estilos. El resto, CSS propio en `style.css`.
- En /alcoi/ el margen lateral de todas las secciones es `px-gutter` (la clase y la variable `--gutter` se definen solo en `src/pages/alcoi/style.css`, no en Tailwind). No uses `px-4`/`px-6` en contenedores nuevos.
- En /alcoi/ el color del fondo va por secciones (`.veil` en hero y contacto, `.section-dark` en software, `.halo` sutiles en el resto); no hay manchas fijas globales.
- /alcoi/ usa Lenis (scroll suave) solo en escritorio con ratón. Cualquier zona nueva con scroll interno necesita `data-lenis-prevent`. Para desplazar la página por código, usa la instancia de Lenis, no `window.scrollTo`.
- Si `astro dev` ya estaba arrancado, reinícialo al cambiar cualquier `tailwind*.config.mjs` o al crear/renombrar una carpeta de página con Tailwind (no siempre recarga la config).

## Objetivo principal
Llegar a **5 clics orgánicos al día** desde Google.
Punto de partida (Search Console, 3 meses hasta el 14/10/2026): ~0,5 clics/día · 41 clics · 9.120 impresiones · CTR 0,4 % · posición media 19,6.

## Estrategia acordada
- Las landings locales se posicionan por **DISEÑO WEB / TIENDAS ONLINE / SEO LOCAL** (es lo que se busca). El **SOFTWARE a medida es la diferenciación**, no la palabra clave principal.
- La gente busca "Alcoy" con Y (783 impr.) mucho más que "Alcoi" (39). Usar **"Alcoy (Alcoi)"**.
- El software se capta **por nicho** (psicólogos, nutricionistas, clínicas), no por localidad.
- La página de software en valenciano de Cocentaina se mantiene como está.
- Orden de prioridades: 1) landing Alcoy, 2) medir 2-3 semanas, 3) Cocentaina + Muro (una sola landing), 4) Ontinyent (Onteniente), 5) Alicante.

## Reglas fijas para cualquier cambio
- No inventar reseñas, testimonios, logos de clientes, cifras ni proyectos. Usar marcadores `[PENDIENTE: ...]`.
- No usar schema `aggregateRating` ni `Review` sobre la propia empresa.
- URLs siempre con barra final; canonical con barra final.
- Las landings de ciudad deben tener contenido propio (nada de copiar cambiando el nombre del pueblo).
- Mantener el diseño, la tipografía y los colores existentes; nada de librerías pesadas.
- Copy siempre en "nosotros" (es un equipo). Demos (SupplyConnect, Novoteix…) se presentan como demos, nunca como clientes.
- Cualquier cambio que afecte a estilos compartidos (configs de Tailwind, `postcss.config.mjs`, componentes comunes como el banner de cookies, o una carpeta de página que se renombra o traslada) debe comprobarse en TODAS las páginas que los usan, no solo en la que se está editando.

## Tareas técnicas pendientes (fuera de esta carpeta: web principal y blog)
- Redirecciones 301 de URLs sin barra a URLs con barra (/nosotros, /disenoweb, /e-commerce, /posicionamiento-seo, /redes-sociales).
- Fusionar contenido duplicado: /rescate-kit-digital + /blog/rescate-kit-digital/ + /blog/rescate-proyectos-kit-digital/, y /blog/mantenimiento-wordpress/ + /blog/mantenimiento-web-wordpress/.
- Quitar el schema de reseñas de la web y las reseñas de ejemplo de la landing de psicólogos.
- Enlace "Diseño Web Cocentaina" del footer (`ReactMNDESIGN/src/Inicio/Footer.jsx`): ahora apunta a /alcoi/.
- Rediseño del blog para que encaje con la web principal + 1 post cada martes.

Antes de cambiar nada, lee MEMORIA-SEO.md y, al terminar, añade una entrada nueva.
