# MN Design Web · Landings

## Qué es MN Design Web
Estudio de diseño web y software a medida en Cocentaina (Alicante), de María Nadal.
Web principal: https://mndesignweb.es/ · Passeig del Comtat, 75, 5º 1º · 03820 Cocentaina · +34 645 854 934 · info@mndesignweb.es

Este repo (Astro, desplegado en GitHub Pages con cada push a `main`) contiene las landings que cuelgan del dominio:
/alcoi/ (diseño web en Alcoy, castellano), /software-a-mida-alcoi/ (software a medida, valenciano: es la "página de software de Cocentaina", antes vivía en /alcoi/; carpeta `src/pages/software-a-mida-alcoi/`), /clinicas/, /nutricionistas/, /psicologos/, /academia-nutricion/, /bodas/, /aprende-shopify/, /enlaces/ (noindex).
La web principal (React) está en `../ReactMNDESIGN` y el blog en `../Blog-mndesignweb`.
El sitemap del dominio lo genera ReactMNDESIGN a partir de `src/seo/rutas.js` (aquí no hay sitemap).

Piezas comunes de las landings:
- Cookies y analítica: `src/components/CookiesHead.astro` (Consent Mode v2, GA4 `G-36WYJMYT3Z`, Clarity, Píxel de Meta; nada se carga sin aceptar) y `src/components/CookieBanner.astro`. Eventos con `window.enviarEvento()` (`generate_lead`, `book_call`, `click_telefono`, `click_whatsapp`, `click_reserva`).
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
