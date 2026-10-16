# Memoria SEO · MN Design Web

Registro de lo que se cambia, por qué y cómo medirlo. Léelo antes de tocar nada y añade una entrada al terminar.

## Situación de partida (14/10/2026)

Search Console, últimos 3 meses, todo el dominio:

| Métrica | Valor |
| --- | --- |
| Clics | 41 (~0,5 clics/día) |
| Impresiones | 9.120 |
| CTR medio | 0,4 % |
| Posición media | 19,6 |
| Objetivo | 5 clics orgánicos/día |

Búsquedas objetivo de Alcoy (mismo periodo):

| Búsqueda | Impresiones | Posición |
| --- | --- | --- |
| diseño web alcoy | 783 | 17 |
| diseño paginas web alcoy | 329 | — |
| agencia de diseño web alcoy | 326 | — |
| seo alcoy | 317 | — |
| diseño de paginas web alcoy | 315 | — |
| posicionamiento web alcoy | 291 | — |
| agencia seo alcoy | 259 | — |
| diseño web alcoi | 39 | — |

- "—": posición no anotada; rellenarla en la próxima consulta a Search Console.
- La URL /alcoi/ está en la posición 56 para estas búsquedas; Google muestra la home en su lugar.

## Palabra clave por página (desde el 15/10/2026, para evitar la canibalización)

Cada búsqueda se mide en una sola página. En Search Console: Rendimiento → filtro de página → consultas.

| Página | Repo | Búsquedas que mide |
| --- | --- | --- |
| /alcoi/ | Landings | diseño web alcoy, páginas web alcoy, diseño páginas web alcoy, agencia de diseño web alcoy, diseño web alcoi |
| /posicionamiento-seo/ | ReactMNDESIGN | posicionamiento seo alcoy, seo alcoy, posicionamiento web alcoy, agencia seo alcoy |
| /e-commerce/ | ReactMNDESIGN | tienda online alcoy, diseño de tiendas online |
| /redes-sociales/ | ReactMNDESIGN | gestión de redes sociales alcoy (y marketing en redes sociales alcoy) |
| /psicologos/ | Landings | páginas web para psicólogos, diseño web para psicólogos |
| /nutricionistas/ | Landings | diseño web para nutricionistas |
| /clinicas/ | Landings | software para clínicas, software gestión de pacientes |
| /academia-nutricion/ | Landings | plataforma de cursos online para nutricionistas, academia online |
| /aprende-shopify/ | Landings | mentoría shopify |
| /software-a-mida-alcoi/ | Landings | software a mida alcoi |
| /bodas/ (inactiva) | Landings | invitaciones de boda digitales |

## Registro de cambios
Orden cronológico inverso (lo más reciente arriba). Formato de cada entrada:
fecha · qué se ha cambiado (archivos y URLs) · intención / por qué · objetivo · cómo medirlo · estado (hecho / publicado / pendiente de indexar).

### 16/10/2026 · El color del logo se adapta a cada landing
- **Qué** (indicaciones de María; el favicon sigue siendo siempre el morado):
  - **/alcoi/:** `logo-blanco.svg` (pájaro claro sobre círculo morado oscuro; al principio era el pájaro morado, y María pidió cambiarlo). "MN" en #1E1446 y "Design Web" fino (400) en #7330CC, en la cabecera y el pie. El pájaro morado sin círculo queda solo en /bodas/.
  - **/software-a-mida-alcoi/:** `logo-blanco.svg` (pájaro claro sobre círculo morado oscuro, a juego con su botón oscuro), con los mismos colores de texto que /alcoi/.
  - **/enlaces/:** `logo-blanco.svg` dentro del anillo iridiscente, que sigue girando. En el nombre de debajo, "MN" en #1E1446 y "Design Web" en #7330CC (peso 500, el más ligero de la fuente propia).
  - **/academia-nutricion/:** pájaro índigo (`pajaro-indigo.svg`). "MN" en negro y "Design Web" fino en el azul de la landing (#1648d3), los dos al mismo tamaño y sobre la misma línea base. El pájaro baja a 28 px, del alto del texto. El pie (oscuro) sigue con el pájaro blanco puro.
  - **/clinicas/** y **/psicologos/** (con su checklist): `logo-blanco-puro.svg` (pájaro blanco sobre círculo negro, a juego con sus botones negros). "MN" en negro y "Design Web" fino en gris pizarra (#475569). En /psicologos/ el texto fino va en Inter 400, porque Inter Tight solo se carga desde 600. Con modo oscuro, el texto pasa a claro (#eef3fa / #9aabc2).
  - **Sin tocar:** /nutricionistas/ y /aprende-shopify/ (son la referencia: pájaro blanco puro sobre fondo oscuro) y /bodas/.
  - **Tamaños:** los logos con círculo miden 38 px en escritorio (36 en el checklist) y 32 px en móvil. Los pájaros blancos sin círculo solo van sobre fondos oscuros.
  - **`public/marca/`** solo lleva los SVG que se usan: `pajaro-morado`, `pajaro-indigo`, `pajaro-blanco-puro`, `logo-blanco`, `logo-blanco-puro` y `favicon`. Los originales nuevos (`pajaro-indigo`, `pajaro-azul`, `logo-azul`) están en `brand/`, fuera de `public/`.
- **Comprobado:** servidor de desarrollo a 1440 y 390 px, en cabeceras y pies, y /psicologos/ también en modo oscuro. Ningún 404. Lighthouse móvil de /enlaces/ sobre el build: 100 · 100 · 100 en tres pasadas (LCP 1,1-1,2 s, CLS 0).
- **Estado:** hecho en local y con commit, pendiente de subir con la tanda.

### 16/10/2026 · Logo nuevo (pájaro) en todas las landings, favicon e iconos de app
- **Qué:**
  - **Originales** en `brand/` (raíz del repo, fuera de `public/` para que no se publiquen). `scripts/marca.cjs` genera desde ahí `public/marca/`, con los SVG limpios y solo lo que se usa: `pajaro-morado.svg` (594 B), `pajaro-blanco-puro.svg` (582 B), `favicon.svg` (de `logo-morado.svg`, pájaro sobre círculo lila, 681 B), `favicon.ico` (16 + 32 px, 1,5 KB), `apple-touch-icon.png` (180 px, 2,6 KB), `icon-192.png`, `icon-512.png` y `site.webmanifest`. `pajaro-blanco.svg` (para fondos morados oscuros) no se genera porque ahora no hay ningún logo sobre morado oscuro. `logo-blanco*`, `logo-circulo-blanco` y `logo-indigo` son de reserva y no se usan.
  - **Cabeceras y pies:** el cuadrado "MN" + "Design Web" pasa a ser el pájaro + "MN Design Web", con la tipografía de cada landing. Pájaro morado en fondos claros: /alcoi/, /software-a-mida-alcoi/, /clinicas/, /psicologos/ y su checklist, la cabecera de /academia-nutricion/ y /bodas/. Blanco puro en fondos oscuros neutros: /nutricionistas/ (oliva), /aprende-shopify/ (verde oscuro) y el pie de /academia-nutricion/ (azul casi negro). /psicologos/ y su checklist tienen modo oscuro: ahí el pájaro cambia a blanco puro con `<picture>` y `prefers-color-scheme`.
  - **/clinicas/:** el logo dice "MN Design Web". "Portal Salud" sigue como nombre del producto en el title, el schema y los textos.
  - **Favicon** en las 10 páginas: `/marca/favicon.ico` + `/marca/favicon.svg` + apple-touch-icon + manifest, en lugar de `/favicon_v2.webp`. Se distingue a 16 px en pestañas claras y oscuras gracias al círculo lila; los detalles de las facetas se pierden a ese tamaño, como es normal.
  - **/enlaces/:** el logo del anillo iridiscente es `/marca/favicon.svg`, y el anillo sigue girando. Fuera `public/enlaces/logo-192.webp`.
  - **Compartido con la web principal:** `/favicon_v2.webp` y `/logo.webp` están en la raíz de `public_html` y los usa ReactMNDESIGN (favicon, apple-touch-icon y schema). Por eso los iconos de las landings van en `/marca/` y la raíz no se toca. El schema `logo` de las landings sigue apuntando a `/logo.webp`.
- **Comprobado:** servidor de desarrollo, cabecera y pie de las 10 páginas a 1440 y 390 px (y /psicologos/ en modo oscuro). Ningún 404. En /aprende-shopify/, a 390 px, el logo y el distintivo de Shopify se han compactado para que no se toquen. Lighthouse móvil de /enlaces/ sobre el build: 100 · 100 · 100 en tres pasadas (LCP 1,1-1,2 s, CLS 0); el SEO sigue en 66 por el `noindex`.
- **Visto de paso, sin tocar:** en /psicologos/ con modo oscuro, los títulos de las columnas del pie (Servicios, Recursos, Compañía) casi no se ven, y en la línea del copyright sale una "F" suelta.
- **Estado:** hecho en local y con commit, pendiente de subir con la tanda.

### 16/10/2026 · Rediseño de /enlaces/ (enlace de la bio de Instagram)
- **Qué** (`src/pages/enlaces/index.astro`; sigue con `noindex, nofollow`):
  - Estética "glass" de /alcoi/ con el morado del logo (#8A3FD8) como protagonista. Velo lila con una aurora que gira despacio, sin la caja blanca: pantalla completa en móvil y 440 px centrado en escritorio.
  - **Cabecera:** logo en un anillo iridiscente que gira y las píldoras "📍 Cocentaina · Alcoy" y "🟢 Respuesta en menos de 24 h".
  - **Botones:** "Escríbenos por WhatsApp" (logo oficial, oscuro con borde iridiscente y brillo) y, debajo, "Llamada gratis" y "Ver la web".
  - **Tarjetas:** "Para negocios de la zona" (/alcoi/ y /software-a-mida-alcoi/, con la píldora "en valencià"), "Para profesionales de la salud" (nutricionistas, psicólogos, clínicas y academias online) y "Mentorías Shopify" destacada.
  - **Pie:** redes y un pie con "Configurar cookies".
  - **Técnico:** Plus Jakarta Sans servida desde el propio dominio (`public/fonts/plus-jakarta-sans-latin.woff2`: variable 500-800, solo latín, 27 KB, licencia OFL) en lugar de Google Fonts. Estilos incrustados en el `<head>`. Logo optimizado propio (`public/enlaces/logo-192.webp`, 3 KB). El brillo y el anillo se animan solo con transform; con "reducir movimiento", ninguna animación.
- **Medición:** `click_enlace` (parámetro `destino`) en cada enlace. `click_whatsapp` + Contact y `click_reserva` desde CookiesHead. "Llamada gratis" abre Cal.com en una ventana emergente: `book_call` + Schedule **solo al completar la reserva**, no al pulsar (para no inflar la conversión de Ads; acordado con María).
- **Comprobado** (build de producción, todo interceptado): Lighthouse móvil 100 · 100 · 100 en tres pasadas (FCP 0,8 s · LCP 1,2 s · CLS 0 · TBT 0). El SEO sale en 66 por el `noindex`, que es intencionado. A 360, 390 y 1440 px: contraste AA en todos los textos, zonas táctiles de 44 px o más y sin scroll horizontal. Eventos y ventana de Cal.com comprobados.
  - Antes de servir la fuente desde el dominio, el rendimiento se quedaba en 94: la conexión a Google Fonts retrasaba el primer pintado en móvil (2,5 s).
- **Cómo medirlo:** GA4 → `click_enlace` por `destino` (qué buscan quienes llegan desde Instagram) y `book_call` con `calendario=enlaces`.
- **Estado:** hecho en local y con commit, pendiente de subir.

### 16/10/2026 · Foto de Lara S. en sus reseñas y og:image en castellano de /alcoi/
- **Qué:**
  - Foto de Lara S. (`public/resenas/lara.webp` de 96×96 y `lara@2x.webp` de 192×192, carpeta compartida por todas las landings) como avatar de su reseña de Google en /alcoi/, /clinicas/, /psicologos/, /nutricionistas/ y /software-a-mida-alcoi/. Sale de la imagen que pasó María (90×90): recortada en círculo centrado en la cara y sin la insignia amarilla de la esquina (la zona que tapaba se ha rellenado a partir de los píxeles de alrededor). La versión @2x está ampliada desde un recorte de 72 px: con una foto más grande se vería más nítida en retina. El PNG original sale de `public/` para no publicarlo por duplicado.
  - Las demás reseñas de Google, con iniciales. En /nutricionistas/ y /software-a-mida-alcoi/ las tarjetas no tenían avatar: se añade uno a las tres (la foto de Lara; "MA" y "DL") para que la rejilla quede igualada.
  - /alcoi/: og:image y twitter:image pasan a `alcoi/og-diseno-web-alcoy.webp` (en castellano, 1200×630, 47 KB). La valenciana (`imagen-miniatura-alcoi.webp`) queda solo para /software-a-mida-alcoi/.
- **Comprobado** en el servidor de desarrollo a 1440 y 390 px: en las 5 landings la foto carga (en pantallas 2x, la versión @2x), redonda y del tamaño del avatar de cada diseño (36, 56, 46, 48 y 44 px). Capturas de las tarjetas y de las rejillas.
- **Estado:** hecho en local y con commit, pendiente de subir con la tanda.

### 15/10/2026 · SEO on-page: una palabra clave por página
- **Qué** (textos aprobados por María; tabla "Palabra clave por página" arriba):
  - **Titles** (todos de 50 a 60 caracteres, sin "2026"):
    - /alcoi/: "Diseño Web en Alcoy (Alcoi) · Páginas Web | MN Design Web" (fuera "Tiendas Online").
    - /posicionamiento-seo/: "Posicionamiento SEO en Alcoy (Alcoi) | MN Design Web".
    - /e-commerce/: "Diseño de Tiendas Online en Alcoy (Alcoi) | MN Design Web".
    - /redes-sociales/: "Gestión de Redes Sociales en Alcoy (Alcoi) | MN Design Web".
    - /psicologos/: "Páginas Web para Psicólogos y Agenda Online | MN Design Web".
    - /clinicas/: "Software para Clínicas y Gestión de Pacientes | Portal Salud".
    - /bodas/: "Invitaciones de Boda Digitales Interactivas | MN Design Web".
    - /academia-nutricion/: "Plataforma de Cursos Online para Nutricionistas | MN Design" (también og:title y twitter:title).
    - /aprende-shopify/: "Mentoría y Desarrollo de Tiendas Shopify | MN Design Web".
    - /software-a-mida-alcoi/: "Software a Mida i Automatització a Alcoi | MN Design Web".
    - /nutricionistas/ no cambia.
  - **Descriptions:** de 120 a 155 caracteres en todas, con la palabra clave.
  - **H1, primer párrafo y un H2 con la palabra clave** en /alcoi/, /posicionamiento-seo/, /e-commerce/, /redes-sociales/, /psicologos/, /nutricionistas/, /clinicas/ ("gestión de pacientes" también en el contenido), /bodas/ y /academia-nutricion/.
  - **/alcoi/:** el H2 "…diseño web y SEO local en Alcoy" pasa a "Preguntas frecuentes sobre diseño web en Alcoy". Las tarjetas de tienda online y SEO siguen enlazando a sus páginas.
  - **/e-commerce/:** el H2 copiado de /aprende-shopify/ ("Toma el control operativo de tu Shopify…") y su párrafo pasan a un texto propio ("¿Ya tienes tu tienda en Shopify? Te enseñamos a gestionarla") con un enlace a /aprende-shopify/.
  - **/bodas/:** og:url corregido (apuntaba a la home) y twitter:title igualado.
  - **/nutricionistas/:** voz "nosotros" en el bloque "Sobre nosotros" ("Somos MN Design Web y entendemos los números de tu consulta"…) y en las preguntas frecuentes (visible y schema). Fuera "a la mitad" ("Reduce el trabajo administrativo.").
  - **/academia-nutricion/:** "+40h ahorradas al mes" pasa a "Menos horas de gestión", y fuera "definitiva".
  - **Archivos de ReactMNDESIGN:** `PosicionamientoSeo.jsx`, `PosicionamientoSeo/PosicionamientoSeoSiguiente.jsx`, `PosicionamientoSeo/PlanesSeo.jsx`, `Ecommerce.jsx`, `Ecommerce/EcommerceSiguiente.jsx`, `Ecommerce/EcommercePlanes.jsx`, `RedesSociales.jsx`, `RedesSociales/RedesSocialesSiguiente.jsx` y `RedesSociales/PlanesRedes.jsx`.
- **Intención:** que cada búsqueda tenga una sola página candidata. En concreto, que "seo alcoy" y "posicionamiento web alcoy" dejen de repartirse entre /alcoi/ y /posicionamiento-seo/, y "tienda online alcoy" entre /alcoi/ y /e-commerce/.
- **Comprobado en los servidores de desarrollo:** las 9 páginas con palabra clave nueva la tienen en title, H1, primer párrafo y algún H2. Un solo H1, og:title igual al title, og:url correcto, sin errores y sin scroll horizontal a 390 px. Capturas de las cabeceras a 1440 y 390 px.
- **Cómo medirlo:** Search Console, con las búsquedas de la tabla de arriba en su página. Revisar a las 2, 4 y 6 semanas de publicar: impresiones, posición y que la URL que sale es la esperada.
- **Estado:** hecho en local y con commit. Se publica con el resto de la tanda.

### 15/10/2026 · Reseñas: solo reales, con su origen, en todas las landings
- **Qué** (reales confirmadas por María; reglas añadidas a CLAUDE.md):
  - **/clinicas/** (`index.astro`, `style.css`): se mantienen el Dr. Carlos Mendoza, la Dra. Laura Jiménez y las cifras, con la etiqueta "Cliente". Se añaden las 3 reseñas de Google (Lara S., Miriam A., Damaris López) con estrellas, iniciales y "Reseña de Google", y el botón "Ver todas las reseñas en Google". Rejilla: 2 clientes arriba y 3 de Google debajo.
  - **/psicologos/** (`index.astro`, `style.css`):
    - Fuera la reseña inventada de "Dra. Elena M.", la tarjeta "5,0 / 5 · Media de 32 valoraciones" (con sus tres puntos de confianza), el bloque "Reseñas verificadas · Publicadas en Google", la frase "Valoraciones reales en Google…" y la píldora "5,0 en Google".
    - Sonia O. y Centro Kinetix pasan a "Cliente", sin estrellas.
    - Se añaden las 3 de Google (Lara S. en la tarjeta destacada) y el botón.
    - "Webs reales de psicología…" pasa a "Demos de webs de psicología…".
    - Rejilla nueva: la destacada a la izquierda y las otras 4 en 2×2. Fuera el CSS que ya no se usaba (`.rating`, `.g-badge`, `.trust-list`).
  - **/nutricionistas/** (`index.astro`, `style.css`): fuera las 3 reseñas inventadas (Laura M., Carlos G. con "He triplicado mis primeras visitas", Elena R.). H2 "Lo que dicen quienes ya han trabajado con nosotros" y subtítulo "Reseñas publicadas en nuestra ficha de Google.". Las 3 de Google con su etiqueta y el botón.
  - **/software-a-mida-alcoi/**: Nutrimente con la etiqueta "Client". Las 3 de Google, literales en castellano, con "Ressenya de Google" y el botón "Veure totes les ressenyes a Google".
  - **/alcoi/**: ya cumplía (estrellas solo en las de Google; Nutrimente con un icono de comillas). Sin cambios.
- **Intención:** ninguna prueba social inventada, y que se vea de dónde viene cada opinión (LSSI, Directiva Ómnibus y reglas de Google sobre reseñas).
- **Comprobado** en el servidor de desarrollo a 1440 y 390 px: capturas de los 5 bloques, sin restos ("5,0", "32 valoraciones", "verificadas", Elena M./R., "triplicado"), botón presente y sin scroll horizontal.
- **Cómo medirlo:** Clarity (clics en "Ver todas las reseñas en Google") y conversión de /psicologos/, /nutricionistas/ y /clinicas/ en GA4.
- **Estado:** hecho en local y con commit, sin publicar.

### 15/10/2026 · Política de cookies al día y revisión de la de privacidad
- **Qué:** `ReactMNDESIGN/src/Legales/PoliticaCookies.jsx` (https://mndesignweb.es/cookies/), con el texto aprobado por María:
  - Categorías con los mismos nombres que el banner (Técnicas / Analítica / Marketing).
  - `cookieConsent` y `cookieConsentVersion` como técnicas.
  - Fuera "Cookies de Personalización", que la web no usa.
  - Retirada desde «Configurar cookies» también en Clarity.
  - El caso "solo Marketing" (GA4 sin cookies).
  - El envío por la API de Conversiones de Meta.
  - Cal.com, con su cookie `__cf_bm` y los informes de errores a Sentry.
  - La política no tiene fecha de "última actualización", así que no se ha añadido ninguna.
- **Cal.com:** se deja como está: carga al acercarse a la sección de contacto y se trata como servicio técnico (decisión de María).
- **Comprobado:** /cookies/ en el servidor de desarrollo, sin errores. Medido el 15/10 con un formulario de /alcoi/: ni el Píxel ni la pasarela de la API de Conversiones envían email, teléfono ni nombre, tampoco cifrados (no hay coincidencia avanzada); solo el evento, la URL y datos técnicos.
- **Política de privacidad (`ReactMNDESIGN/src/Legales/PoliticaPrivacidad.jsx`), sin cambios; le falta:** ver la entrada de Pendientes.
- **Estado:** hecho en local y con commit, sin publicar.

### 15/10/2026 · Conversiones completas: email, Meta Contact/Lead, reservas de Shopify, /enlaces/ y checklist
- **Qué:**
  - `src/components/CookiesHead.astro` (y su copia en `ReactMNDESIGN/index.html`): un único detector de clics para teléfono, WhatsApp, email y cal.com → GA4 `click_telefono`, `click_whatsapp`, **`click_email`** (nuevo) y `click_reserva`, y `Contact` en Meta (`phone` / `whatsapp` / `email`). Nueva función `window.enviarMeta()`.
  - Quitados los detectores de `Contact` propios de /alcoi/, /software-a-mida-alcoi/, /nutricionistas/ y /psicologos/, para que no se dupliquen. Ahora /clinicas/, /academia-nutricion/, /aprende-shopify/ y las páginas de React también envían `Contact`.
  - `ReactMNDESIGN/src/utils/analitica.js`: `registrarLead()` envía también `Lead` a Meta. Afecta a los 7 formularios de la web principal (/posicionamiento-seo/, /redes-sociales/, /e-commerce/, contacto, diseño web, demos y kit digital).
  - /aprende-shopify/: el iframe de Cal.com pasa a ser el embed oficial (`mndesignweb/mentorias-shopify`, namespace `mentoria`), con `book_call` (`calendario=mentorias_shopify`) y `Schedule` al reservar, y scroll interno.
  - /enlaces/ y /psicologos/checklist-rgpd/: con `CookiesHead`, banner propio con su estilo (el del checklist en modo claro y oscuro, y oculto al imprimir) y enlace "Configurar cookies".
  - /bodas/ queda fuera (landing inactiva).
- **Comprobado con Playwright en los servidores de desarrollo** (todo interceptado, nada real enviado), en 12 páginas y en los 4 estados (aceptadas, solo Analítica, solo Marketing, rechazadas):
  - Teléfono, WhatsApp, email, enlace a cal.com, formularios y reservas: GA4 en los 3 estados con consentimiento y Meta solo con Marketing. Rechazadas: no sale nada, aunque los formularios se envían igual.
  - `gcs`: G111 / G101 / G110.
  - Comprobación aparte, porque la prueba genérica no los cubría bien: los formularios de React (exigen marcar un servicio), el checklist de /psicologos/, el enlace a cal.com de /enlaces/ y la reserva de /alcoi/ con solo Marketing.
  - Desde el 15/10, el calendario `mentorias-shopify` ya no dispara Meta al rechazar (comprobado en producción).
- **Cómo medirlo:** GA4 → eventos `click_email` y `book_call` con `calendario=mentorias_shopify`. Meta Events Manager → `Contact` y `Lead` desde las landings que antes no los enviaban.
- **Estado:** hecho en local y con commit, sin publicar (se publica todo junto). Pendiente de aprobación: el nuevo texto de la política de cookies.

### 15/10/2026 · Banner de cookies por categorías (landings y web principal)
- **Qué:**
  - `src/components/CookiesHead.astro` y `ReactMNDESIGN/index.html` (mismo código): dos categorías desmarcadas por defecto. **Analítica** (GA4 + Clarity → `analytics_storage`) y **Marketing** (Píxel de Meta + remarketing de Google Ads → `ad_storage`, `ad_user_data`, `ad_personalization`). La etiqueta de Google se carga si hay alguna de las dos (Consent Mode limita lo que hace), Clarity solo con Analítica y Meta solo con Marketing. `localStorage.cookieConsent` = `accepted` / `declined` / `analytics` / `marketing`, y `cookieConsentVersion` = `2`.
  - Las aceptaciones guardadas antes de este cambio (cuyo texto no informaba de la publicidad) dejan de valer: el banner vuelve a salir y no se carga nada hasta que se decida de nuevo. Los rechazos antiguos se respetan.
  - Al retirar una categoría ya cargada, se borran sus cookies y se recarga la página. Al entrar, se borran las de las categorías no aceptadas.
  - `src/components/CookieBanner.astro`: botones Aceptar / Rechazar como antes, más un enlace "Configurar" que abre, dentro del mismo banner, el panel con las dos casillas y "Guardar preferencias" (copia el estilo del botón Aceptar de cada landing; textos en valenciano en /software-a-mida-alcoi/). El "Configurar cookies" del footer abre ese panel con la elección actual.
  - Texto de los 8 banners de landings y del de React: "Usamos cookies propias y de terceros para medir las visitas y mostrarte publicidad personalizada. Puedes aceptarlas, rechazarlas o configurarlas." El botón "Permitir" pasa a "Aceptar".
  - `ReactMNDESIGN/src/Legales/CookieBanner.jsx` y `CookieBanner.css`: la misma lógica y el mismo panel.
- **Intención:** consentimiento informado y por finalidades (LSSI / guía de cookies de la AEPD). Antes, aceptar activaba publicidad sin decirlo.
- **Comprobado con Playwright (builds locales, envíos interceptados):** en las 8 landings y en `/` y `/posicionamiento-seo/` de React, nada se carga antes de decidir. Solo Analítica → gtag + Clarity, `gcs=G101`. Solo Marketing → gtag + Meta, `gcs=G110`. Aceptar → todo, `gcs=G111`. Guardar sin marcar = rechazar. El footer abre el panel con la elección actual, y quitar Marketing borra `_fbp` y `_gcl_au` y deja de cargar Meta. Aceptación antigua → vuelve a salir el banner. "Aceptar" y "Rechazar" tienen el mismo tamaño y están en la misma fila en todos los banners.
- **Efecto esperado en la medición:** baja temporal de usuarios medidos en GA4 y Clarity (las aceptaciones antiguas se piden de nuevo) y algo menos de Meta y Ads, porque ahora se puede aceptar solo la analítica.
- **Cómo medirlo:** GA4 → usuarios y `generate_lead` por semana, comparando las 2 semanas antes y después de publicar.
- **Estado:** hecho en local y con commit, sin publicar. Volver a pedir el consentimiento a quien aceptó antes del 15/10: confirmado por María.
- **Detectado y fuera de este cambio:** en /bodas/ (landing inactiva) el contenido desborda en móvil y el banner queda fuera de la pantalla. En /aprende-shopify/ el calendario de Cal.com (`mentorias-shopify`) sigue cargando Meta sin consentimiento.

### 15/10/2026 · URGENTE: formulario de contacto de /alcoi/ reparado
- **Qué:** `src/pages/alcoi/index.astro` (handler del formulario): se quita `tipo: valor("tipo")`, que leía un campo que ya no existe, y `valor()` devuelve "" si falta un campo en vez de lanzar un error. Misma URL /alcoi/.
- **Causa:** desde la publicación del 14/10 (commit 6d472ea), al enviar el formulario saltaba `Cannot read properties of null (reading 'value')`: no se enviaba nada a Web3Forms ni a Make, no había conversión y el botón se quedaba en "Enviando…". Los leads por formulario de /alcoi/ de ese periodo se perdieron (las reservas de Cal.com, WhatsApp y teléfono sí funcionaban).
- **Comprobado con Playwright (build de producción, todo interceptado, sin leads reales):** éxito → POST a Web3Forms y Make con los mismos datos (nombre, email, teléfono, negocio, mensaje), GA4 `generate_lead` (`formulario=alcoy`) y Meta `Lead`, aviso "¡Mensaje enviado!…", botón de vuelta a "Enviar mensaje" y formulario vaciado. Error de Web3Forms → aviso de error, botón restaurado y sin conversiones. Ningún otro formulario de las landings lee campos inexistentes.
- **Cómo medirlo:** GA4 → `generate_lead` con `pagina=/alcoi/` y `formulario=alcoy` a partir de la subida; leads en Web3Forms/Make.
- **Estado:** **publicado el 15/10/2026** en SiteGround (`dist/_astro/index.astro_astro_type_script_index_0_lang.Di2_FgYP.js` y `dist/alcoi/index.html`) y probado por María con un envío real. Pendiente: borrar de SiteGround el script antiguo (ver Pendientes).

### 15/10/2026 · Píxel de Meta fuera de Cal.com (calendario sin Meta sin consentimiento)
- **Qué:** María quita el píxel de Meta de la configuración de Cal.com. Sin cambios en el repo.
- **Motivo:** la auditoría del 15/10 vio que el iframe de Cal.com disparaba el píxel `1627135808585120` (`PageView` y `CalcomView`) sin consentimiento: en /bodas/ nada más cargar, y en /alcoi/, /nutricionistas/, /psicologos/ y /aprende-shopify/ al rechazar las cookies y bajar hasta el calendario. El banner no puede controlar lo que hace un iframe de otro dominio.
- **Comprobado con Playwright en producción (15/10, cookies rechazadas, bajando hasta el calendario):** el calendario carga y no hay `fbevents.js` ni envíos a Meta en /alcoi/, /software-a-mida-alcoi/, /nutricionistas/, /psicologos/ y /bodas/ (en esta, tampoco antes de decidir). **Falla en /aprende-shopify/:** su tipo de evento (`mndesignweb/mentorias-shopify`) sigue con el píxel y dispara `PageView` y `CalcomView` al rechazar.
- **Cómo medirlo:** repetir la prueba tras cada cambio en Cal.com. En Meta Events Manager, los eventos `CalcomView` deberían dejar de llegar (salvo desde /aprende-shopify/ hasta que se corrija).
- **Estado:** hecho en Cal.com, salvo el tipo de evento `mentorias-shopify` (ver Pendientes).

### 14/10/2026 · Demo "Norvia Suministros" en el hero y el carrusel de /alcoi/
- **Qué** (`src/pages/alcoi/index.astro`, `src/pages/alcoi/iris.css`, `public/alcoi/demos/`; misma URL /alcoi/):
  - Hero: la captura de micropigmentación se sustituye por la primera pantalla de la demo Norvia Suministros (ficticia: almacén de material eléctrico, fontanería y suministro industrial en Alcoy). Imágenes optimizadas con sharp a partir de la @2x: `suministros-hero-720.webp` (31 KB), `-1440` (80 KB) y `-2880` (154 KB) con srcset (antes 106 y 261 KB). Barra de direcciones: mnmryk.github.io/demo-suministros. La captura ya es 16:10 como el marco, así que deja de desplazarse (fuera la animación `.hero-shot`/`hero-scroll` de iris.css).
  - Tarjetas flotantes: "Reserva online" y "Pago recibido" pasan a "Pedido repetido · En 1 clic" (icono Repeat) y "Tarifa profesional · Aplicada" (icono Tag). Recolocadas para no tapar el titular de la demo (abajo a la izquierda y arriba a la derecha) y visibles solo desde 1280 px (entre 1024 y 1279 se cortaban contra el borde).
  - Carrusel de proyectos: Norvia Suministros entra la primera, con la etiqueta "Demo · Distribuidor industrial". Captura de página completa provisional (`suministros.webp` 1280 px y `suministros-640.webp`).
  - Los originales que se dejaron en `public/alcoi/` (`portada-hero-1440x900*.webp`, `portada-completa-1280.webp`, `muestra-ilustraciones.png`) no se usan en la página, pero se publican con el despliegue.
- **Comprobado con Playwright (build de producción):** imagen que elige cada pantalla (412 px a 1,75x → 720; 390 px a 3x y 1440 px a 1x → 1440; 1440 px a 2x → 2880), tarjetas flotantes enteras de 1280 a 1920 px, sin scroll horizontal y capturas del hero a 390 y 1440 px.
- **Intención:** que la primera imagen de la landing de Alcoy hable al tipo de empresa de la zona (industria y suministros), en vez de un estudio de estética.
- **Objetivo / cómo medirlo:** más contactos desde /alcoi/: `generate_lead` y `book_call` con `pagina=/alcoi/` en GA4 y clics en el carrusel en Clarity, 2 semanas después de publicar.
- **Estado:** hecho en local, sin publicar. Pendiente: captura completa definitiva y publicar la demo (ver Pendientes).

### 14/10/2026 · Página de software en valenciano: carpeta renombrada a /software-a-mida-alcoi/ y estilos recuperados
- **Qué:**
  - La página se mueve a `src/pages/software-a-mida-alcoi/` → https://mndesignweb.es/software-a-mida-alcoi/. Actualizados canonical, og:url, twitter:url y `pageUrl` (schema WebPage, servicio, FAQ y BreadcrumbList), y las etiquetas de medición (`formulario: "software-a-mida-alcoi"`, Clarity `reunio_software_a_mida_alcoi`).
  - Config congelada renombrada a `tailwind.software-a-mida-alcoi.config.mjs`, con su `content` apuntando a la carpeta nueva; `tailwind.css` de la página la carga con `@config`. Comentarios de `tailwind.config.mjs` y `postcss.config.mjs` al día.
  - Enlaces de /alcoi/ a la página de software (tarjeta de servicios, botón de la sección oscura y pie) ya apuntaban a /software-a-mida-alcoi/.
  - `ReactMNDESIGN/src/seo/rutas.js`: añadida /software-a-mida-alcoi/ a `RUTAS_EXTERNAS_INDEXABLES` (sitemap).
- **Causa de que saliera sin estilos:** el `content` de su config de Tailwind seguía apuntando a `src/pages/software-a-mida/`. Tailwind no encontraba ninguna clase y el CSS solo traía la base (38 reglas en dev, 62 en build; ni `fixed`, ni `max-w-7xl`, ni `px-6`...). Las hojas respondían 200. Con el nombre anterior, un build limpio salía bien; lo que se veía roto antes de renombrar era casi seguro el `astro dev` arrancado antes de crear la config congelada.
- **Comprobado:** captura de página completa a 1440 y 390 px frente a la antigua /alcoi/ en valenciano generada desde git (commit eb7e65d): 0 píxeles distintos y misma altura (11.516 y 17.021 px). En dev, 491 reglas y header fijo sin reiniciar. /alcoi/ sin cambios (20 px de margen, sin scroll horizontal) y el resto de landings responden 200.
- **Objetivo / cómo medirlo:** que la página se indexe con su URL nueva: Search Console → Inspección de URL de https://mndesignweb.es/software-a-mida-alcoi/ tras publicar.
- **Estado:** hecho en local, sin publicar. Falta desplegar ReactMNDESIGN para que el sitemap incluya la URL.

### 14/10/2026 · Margen lateral de /alcoi/: la clase sale de Tailwind
- **Causa de que en móvil todo tocara el borde:** el `astro dev` que estaba arrancado (desde las 15:51) era anterior al cambio de `tailwind.config.mjs` (17:37) que creaba `px-gutter`. La regla no existía en el CSS servido y todos los contenedores quedaban con padding 0. No había márgenes negativos ni `100vw` fuera de los carruseles.
- **Qué:** la clase `.px-gutter` se define ahora en `src/pages/alcoi/style.css`, junto a `--gutter` (único sitio), y se quita `spacing.gutter` de `tailwind.config.mjs`. Así ya no depende de reiniciar el servidor. En `iris.css`, el carrusel de proyectos calcula su sangrado con `100%` en vez de `100vw` (con barra de scroll en escritorio descuadraba la primera tarjeta unos px).
- **Comprobado con Playwright (build limpio):** a 360 y 390 px, cabecera, todas las secciones, tarjetas y pie a 20 px exactos de cada borde; a 640, 800 y 1023 px a 32 px; primera tarjeta de proyectos y de reseñas a 20 px (32 px en tablet); sin scroll horizontal en ningún ancho; a 1440 px, título y primera tarjeta del carrusel alineados.
- **Objetivo / cómo medirlo:** sin efecto SEO directo; legibilidad en móvil (Clarity).
- **Estado:** hecho en local, sin publicar.

### 14/10/2026 · Margen lateral global en /alcoi/ (móvil y tablet)
- **Qué:**
  - Variable `--gutter` en `src/pages/alcoi/style.css` (20 px hasta 640 px y 32 px a partir de ahí), expuesta en Tailwind como `px-gutter` (`spacing.gutter` en `tailwind.config.mjs`). Todos los contenedores de sección, la cabecera, el contacto y el pie usan `px-gutter`; ya no queda ningún `px-4 sm:px-6` suelto.
  - Los carruseles (proyectos y reseñas) alinean la primera tarjeta con `--gutter` y sangran hasta el borde derecho.
  - Relleno interior de 20 px en móvil para las tarjetas de servicios, "Por qué elegirnos", precios, reseñas y la tarjeta de contacto.
  - En precios, "Desde", "IVA no incluido" y la etiqueta "Para empezar" pasan a 14 px (antes 12).
- **Comprobado con Playwright a 360 y 390 px:** 0 textos a menos de 20 px del borde, ninguna tarjeta fuera del margen, sin scroll horizontal, primera tarjeta de los carruseles a 20 px y la segunda asomando. Todo el texto de precios a 14 px como mínimo.
- **Lighthouse móvil (local):** 94 · 100 · 100 · 100.
- **Estado:** hecho en local, sin publicar.

### 14/10/2026 · Reseñas de /alcoi/ más compactas
- **Qué:** `src/pages/alcoi/index.astro` e `iris.css`.
  - Una fila de 4 tarjetas a partir de 1200 px, 2×2 en tablet (`grid-auto-rows: 1fr`) y carrusel táctil en móvil. Todas con el mismo alto.
  - Tarjetas con 24 px de padding y texto a 15 px / 1,55. Estrellas y píldora más pequeñas en la misma línea; avatar de 36 px pegado al texto (16 px de separación). Menos espacio entre el título y las tarjetas (40 px) y entre las tarjetas y el botón (24 px).
  - Recortes nuevos, literales y solo con "[…]": Lara S. («[…] me ayudó a crear… un paso más allá.») y Miriam A. («Excelente servicio! … […] un resultado final súper visual, moderno y fácil de navegar.»). Damaris López y Nutrimente sin cambios.
  - "Cliente" usa la misma píldora que "Reseña de Google" (`.pill-resena`: fondo blanco al 85 %, texto #1E1446).
- **Comprobado con Playwright a 1440, 900 y 390 px:** nada se sale ni se solapa, las alturas son iguales, no hay scroll horizontal y los 4 textos coinciden literalmente.
- **Estado:** hecho en local, sin publicar.

### 14/10/2026 · Sección de reseñas reales en /alcoi/
- **Qué:** en `src/pages/alcoi/index.astro`, el testimonio suelto que iba debajo de los proyectos pasa a una sección propia, `#resenas`, situada entre Proyectos y Precios. Los datos están en el array `resenas` del frontmatter y los estilos en `iris.css` (`.resenas`, `.stars`, `.halo-resenas`).
  - 3 reseñas de Google (Lara S. · Directora de arte, Miriam A., Damaris López) con 5 estrellas visuales (`role="img"`, "5 de 5 estrellas") y el distintivo "Reseña de Google". Los textos están copiados literalmente, sin corregir, y solo se recortan con "[…]".
  - 1 testimonio de cliente que no es de Google (Nutrimente · Nutrición integrativa · Jaén), con su logo y la etiqueta "Cliente", sin estrellas ni distintivo.
  - Tarjetas de cristal: rejilla de 2×2 en escritorio y carrusel táctil con scroll-snap en móvil (`data-lenis-prevent-horizontal`). Sin enlace por tarjeta y sin fechas.
  - Un único botón, "Ver todas las reseñas en Google", que abre https://share.google/H7PZUbk3sAkb31aDe en una pestaña nueva.
  - **Sin schema Review ni aggregateRating.** Comprobado en el HTML compilado.
- **Intención:** confianza con reseñas reales y verificables (las de Google) en lugar de un único testimonio.
- **Objetivo:** mejorar la conversión de /alcoi/ (llamadas, formularios y WhatsApp). No se espera efecto directo en posiciones.
- **Cómo medirlo:** en GA4, `generate_lead`, `book_call` y `click_whatsapp` con `pagina=/alcoi/`, más los clics en el botón de reseñas (salientes a share.google) a partir de 2 semanas después de publicar; en Clarity, si se llega a la sección.
- **Lighthouse móvil (local, 2 pasadas):** 94 · 100 · 100 · 100 · LCP 2,5 s · CLS 0,021 · TBT 0 ms.
- **Estado:** hecho en local, sin publicar.

### 14/10/2026 · Scroll suave con Lenis en /alcoi/ (solo escritorio con ratón)
- **Qué:** dependencia `lenis` fijada a la 1.3.26 (`package.json`, `--save-exact`). En `src/pages/alcoi/index.astro` se importa de forma dinámica solo si hay `(hover: hover) and (pointer: fine)` y no hay "reducir movimiento"; en móvil ni se descarga (chunk aparte de 5,4 KB gzip). Reglas de `lenis.css` adaptadas en `src/pages/alcoi/style.css`.
  - Los enlaces internos con Lenis calculan el destino con el `scroll-padding-top` del `<html>` (cabecera fija), resincronizan Lenis antes de animar, actualizan la URL (#ancla) y pasan el foco a la sección. Sin Lenis: `scroll-behavior: smooth` + `scroll-padding-top`. Con "reducir movimiento": salto directo.
  - Teclado: al pulsar flechas, espacio, AvPág/RePág o Inicio/Fin se corta la animación de Lenis y el desplazamiento nativo manda.
  - Menú abierto: `lenis.stop()` (además del `overflow: hidden`); al cerrar, `lenis.start()`.
  - `data-lenis-prevent` en el calendario de Cal.com y en el panel del menú. `data-lenis-prevent-horizontal` en el carrusel (el gesto horizontal lo mueve por dentro y la rueda vertical sigue moviendo la página).
  - Los iframes solo pierden el puntero mientras hay scroll (`.lenis-scrolling`). `lenis.css` lo hacía siempre y dejaba Cal.com sin poder usarse.
- **Comprobado con Playwright (29 pruebas):** rueda progresiva; barra de lectura, animaciones de entrada y línea del proceso sincronizadas; sticky de "Por qué elegirnos" a 128 px; anclas a 88 px aunque se interrumpa una animación; teclado completo; carrusel y Cal.com; menú bloqueado; móvil sin Lenis; "reducir movimiento" sin Lenis y con salto directo.
- **Intención / objetivo:** sensación de estudio de diseño al hacer scroll, sin perder accesibilidad ni rendimiento.
- **Cómo medirlo:** en Clarity, profundidad de scroll de /alcoi/ en escritorio antes y después.
- **Lighthouse (local):** móvil 94 · 100 · 100 · 100 (sin cambios: Lenis no se carga); escritorio 99 · 100 · 100 · 100.
- **Estado:** hecho en local, sin publicar.

### 14/10/2026 · Correcciones de diseño en /alcoi/ tras la revisión en local
- **Qué** (`src/pages/alcoi/index.astro`, `src/pages/alcoi/iris.css`; misma URL /alcoi/):
  - **Menú móvil:** el panel sale del header y pasa a ser un `<nav>` hermano con `position: fixed` y su propio `backdrop-filter` (anidado dentro del header no desenfocaba la página). Fondo blanco al 88 % y blanco opaco si no hay soporte de blur. Mientras está abierto se bloquea el scroll. Se cierra con Escape (el foco vuelve al botón), con clic fuera, al pulsar un enlace o si el foco de teclado sale del panel. `aria-expanded` y el icono menú/cerrar se actualizan, y al abrir el foco va al primer enlace.
  - **Sección de software:** el fondo #1E1446 va en una clase propia (`.section-dark`), no en Tailwind. Se funde con la página arriba y abajo pasando por lilas. Aurora detrás (z-index 0) y contenido encima (z-10). Tarjetas en cristal oscuro (blanco al 8 %, borde al 15 %). La nota "está en valenciano" sube a 14 px en #D9D3F7.
    - Causa de lo que se veía en local: el `astro dev` del puerto 4321 llevaba arrancado desde antes de añadir los colores a `tailwind.config.mjs`, así que `bg-saas-ink` no existía y la sección quedaba transparente, con el texto blanco sobre fondo claro.
    - Además, la animación de entrada tiene ahora un temporizador de respaldo, por si `transitionend` no llega, y un threshold de 0. Comprobado con Playwright: ningún elemento de software ni de contacto se queda por debajo de opacidad 1.
  - **Contacto:** "Nuestro estudio" pasa a la columna izquierda, debajo del texto legal; WhatsApp, teléfono y email quedan a la derecha, bajo el calendario (600 px de alto con scroll interno). En móvil no cambia el orden.
  - **Color del fondo:** fuera las manchas fijas globales. La base es #F8F6FF con grano y el color se concentra en tres momentos, cada uno con sus manchas dentro de la sección y los bordes fundidos con `mask-image`: el velo del hero (igual que antes, con parallax suave en escritorio), la sección oscura de software y un velo suave detrás de la tarjeta de contacto. En el resto, toques muy sutiles: detrás de la tarjeta de software (servicios), del título de "Por qué elegirnos", del testimonio y de la tarjeta de precio destacada.
- **Intención:** legibilidad (menú y sección oscura), equilibrio visual del contacto y un ritmo de color pensado para el diseño, no dependiente de dónde caían las manchas fijas.
- **Objetivo:** que la página se lea bien en móvil y retenga a la visita hasta el contacto (sin efecto directo en posiciones).
- **Cómo medirlo:** Microsoft Clarity (grabaciones y mapas de scroll de /alcoi/) y la conversión `generate_lead` / `book_call` con `pagina=/alcoi/` en GA4, a partir de 2 semanas después de publicar.
- **Lighthouse móvil (local, build de producción, 2 pasadas):** rendimiento 94 · accesibilidad 100 · buenas prácticas 100 · SEO 100 · LCP 2,5 s · CLS 0,021 · TBT 0 ms.
- **Estado:** hecho en local, sin publicar.

### 14/10/2026 · Nueva landing de diseño web en Alcoy (/alcoi/) y traslado de la página de software a /software-a-mida-alcoi/
- **Qué:**
  - `src/pages/alcoi/index.astro` reescrita entera, en castellano: diseño web, tiendas online y SEO local en Alcoy, con el software como diferenciación. Estética "iridescent glass" solo con CSS (`src/pages/alcoi/iris.css`, `style.css`) y paleta ampliada en `tailwind.config.mjs` (sin cambiar los colores existentes).
  - Title: "Diseño Web en Alcoy (Alcoi) · Páginas Web y Tiendas Online | MN Design Web". H1: "Diseño web en Alcoy (Alcoi): páginas web y tiendas online que trabajan por tu negocio". Canonical https://mndesignweb.es/alcoi/.
  - Schema: ProfessionalService (areaServed Alcoy, Cocentaina, Ibi, l'Alcoià, El Comtat + catálogo con precios "desde", IVA no incluido), FAQPage (8 preguntas), BreadcrumbList. Sin aggregateRating ni Review.
  - Enlaces internos a /disenoweb/, /e-commerce/, /posicionamiento-seo/, /contacto/ y /software-a-mida-alcoi/.
  - Capturas de página completa de las 8 demos en `public/alcoi/demos/` (1280 y 640 px, webp).
  - La antigua página de software en valenciano (que estaba en /alcoi/) pasa tal cual a `src/pages/software-a-mida-alcoi/` → https://mndesignweb.es/software-a-mida-alcoi/ (solo cambian canonical, og:url y etiquetas de medición). Su Tailwind va con config congelada: `tailwind.software-a-mida-alcoi.config.mjs`.
- **Intención:** /alcoi/ estaba en valenciano y hablaba de software industrial, mientras que la gente busca "diseño web alcoy" en castellano (783 impr./3 meses) y Google mostraba la home en la posición 17 y /alcoi/ en la 56. Ahora la URL local responde a lo que se busca.
- **Objetivo:** que /alcoi/ (y no la home) sea la URL que posiciona para "diseño web alcoy" y sus variantes, primero en el top 10 y después en el top 5.
- **Cómo medirlo:** Search Console → Rendimiento → filtro de página `https://mndesignweb.es/alcoi/`; mirar las consultas "diseño web alcoy", "diseño paginas web alcoy", "agencia de diseño web alcoy", "seo alcoy", "posicionamiento web alcoy" y "agencia seo alcoy" (posición, impresiones y clics) y comprobar que la URL que sale para ellas es /alcoi/ y no la home. Revisar el 28/10/2026 y el 04/11/2026 (2-3 semanas después de publicar). Comprobar también que /software-a-mida-alcoi/ se indexa. **Desde el 15/10/2026, "seo alcoy", "posicionamiento web alcoy" y "agencia seo alcoy" se miden en /posicionamiento-seo/ (ver la tabla "Palabra clave por página").**
- **Estado:** hecho en local, **sin publicar** (no hay push a main). Al publicar: pedir la indexación de /alcoi/ y /software-a-mida-alcoi/ en Search Console, y añadir /software-a-mida-alcoi/ a `ReactMNDESIGN/src/seo/rutas.js` (sitemap) y a `ReactMNDESIGN/public/llms.txt`.
- **Lighthouse móvil (local, build de producción):** rendimiento 94 · accesibilidad 100 · buenas prácticas 100 · SEO 100 · LCP 2,5 s · CLS 0,021 · TBT 0 ms.

### 14/10/2026 · Memoria del proyecto
- **Qué:** creados `CLAUDE.md` y `MEMORIA-SEO.md` en la raíz del repo. Ninguna URL publicada cambia.
- **Intención:** la carpeta se trabaja desde varias cuentas de Claude; el contexto, la estrategia y las reglas quedan guardados en archivos.
- **Objetivo:** que cada cambio SEO quede registrado y se pueda medir.
- **Cómo medirlo:** no aplica.
- **Estado:** hecho.

## Pendientes
- [PENDIENTE: og:image propia para /posicionamiento-seo/, /redes-sociales/ y /e-commerce/ (ReactMNDESIGN)] Ahora las tres usan la genérica `logo-card.webp`.
- [PENDIENTE CON CONDICIÓN: home y /disenoweb/ (ReactMNDESIGN) frente a /alcoi/] Revisar en Search Console 3-4 semanas después de publicar la tanda del 15/10. **Si para "diseño web alcoy" ya sale /alcoi/**, aplicar:
  - Home: title de marca y diferenciación ("MN Design Web · Estudio de Diseño Web y Software a Medida"), sin "Alcoi" en el title ni en la description, y un enlace visible "Diseño web en Alcoy" a /alcoi/.
  - /disenoweb/: página general del servicio ("diseño web profesional a medida"), sin ciudad en el title, la description ni el H1, y un enlace "¿Eres de Alcoy o la comarca?" a /alcoi/.
  - En las dos, enlazar a /alcoi/ con el texto "diseño web en Alcoy". Sin canonical entre ellas, porque el contenido es distinto.
  - Hasta entonces no se tocan: son las páginas que hoy traen más clics.
- [PENDIENTE: maqueta del panel de /redes-sociales/] Muestra cifras ("124.5K cuentas alcanzadas", "↑34.2%") que pueden leerse como resultados reales. Valorar marcarlas como ejemplo o quitarlas.
- [PENDIENTE: completar la política de privacidad (/privacidad/)] Ahora solo cubre el formulario de contacto. Le falta: destinatarios y encargados (Web3Forms, Make, SiteGround, Cal.com, Google, Microsoft, Meta); que, si se aceptan las cookies de Marketing, Meta y Google Ads reciben los eventos de conversión (envío de formulario, reserva, clics de contacto), Meta también por la API de Conversiones; transferencias internacionales a EE. UU. y su garantía; las reservas de Cal.com (qué datos se piden y para qué); la finalidad publicitaria y su base legal (consentimiento de cookies) separada de la del formulario; plazos de conservación concretos; el derecho a la portabilidad y a retirar el consentimiento; y enlace a la política de cookies. Si algún día se activa la coincidencia avanzada de Meta (email/teléfono cifrados), habría que decirlo expresamente.
- [PENDIENTE: limpiar archivos antiguos de SiteGround] Tras subir la tanda del 15/10 y comprobar que todo va bien, borrar de `public_html/_astro/` y `public_html/assets/` los que ya no usa ninguna página (lista del 16/10: 8 de `_astro/` y 25 de `assets/`, más sus `.gz`), y también `_astro/index.astro_astro_type_script_index_0_lang.B3rb_G58.js`. Con el logo nuevo (16/10) se suman `_astro/index.BKy5Dupe.css` y `_astro/index.y-wfShZ5.css`. No borrar nada que no esté en esa lista. **No borrar** `/favicon_v2.webp` ni `/logo.webp`: los usa la web principal.
- [PENDIENTE: quitar el píxel de Meta del tipo de evento `mentorias-shopify` en Cal.com] Sigue disparando Meta sin consentimiento desde el calendario de /aprende-shopify/ (comprobado el 15/10/2026).
- [PENDIENTE: decidir si se elimina el workflow de GitHub Pages] Publica en https://mnmryk.github.io/landings-mndesign/ una copia sin estilos e indexable (con canonical a mndesignweb.es). Ver CLAUDE.md → Publicación.
- [PENDIENTE: posiciones actuales de las búsquedas de Alcoy marcadas con "—" en la tabla de partida]
- [PENDIENTE: proyecto o cliente real de Alcoy] Cuando lo haya, va el primero del carrusel de /alcoi/.
- [PENDIENTE: texto original en castellano del testimonio de Nutrimente] En /alcoi/ va traducido del valenciano.
- [PENDIENTE: captura de página completa definitiva de Norvia Suministros] Cuando estén todas las ilustraciones de producto: sustituir `public/alcoi/demos/suministros.webp` (1280 px) y `suministros-640.webp` y ajustar `alto` en `demos` de `src/pages/alcoi/index.astro`. La actual es provisional (dos productos con icono de caja).
- [PENDIENTE: publicar la demo en https://mnmryk.github.io/demo-suministros/] El 14/10/2026 daba 404: el enlace del carrusel de /alcoi/ está roto hasta que se publique.
- [PENDIENTE: revisar el carrusel de demos] Más adelante, ver cómo conviven las capturas oscuras (UMAMI, NEXUS X) con las claras.
- Enlaces que apuntan a /alcoi/ pensando en la página de software (sin cambiar, a la espera de decisión): `ReactMNDESIGN/src/Inicio/Footer.jsx` ("Diseño Web Alcoi" y "Diseño Web Cocentaina") y `ReactMNDESIGN/public/llms.txt` ("Software a medida en Alcoi / Cocentaina").

## Resultados
<!-- Anotar aquí la evolución: fecha · búsqueda o página · impresiones · clics · posición -->
