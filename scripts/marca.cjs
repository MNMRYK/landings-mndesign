// Genera los logos e iconos de las landings en public/marca/ a partir de brand/ (originales, fuera de public/ para que no se publiquen).
// Uso: node scripts/marca.cjs (desde la raíz del repo). Solo genera lo que usan las landings:
// pajaro-blanco.svg, pajaro-azul.svg, logo-azul.svg, logo-indigo.svg y logo-circulo-blanco.svg no se usan ahora; añádelos a la lista si hace falta.
// - SVG limpios: sin width/height fijos, trazo común en un <g>, coordenadas sin ceros sobrantes.
// - favicon.ico (16 y 32 px), apple-touch-icon (180), icon-192, icon-512 y site.webmanifest.
const fs = require('fs'), path = require('path');
const sharp = require(require.resolve('sharp', { paths: [process.cwd()] }));
const SRC = 'brand', OUT = 'public/marca';
fs.mkdirSync(OUT, { recursive: true });
const num = v => String(+(+v).toFixed(2)).replace(/^0\./, '.').replace(/^-0\./, '-.');
function limpiar(svg) {
  const vb = svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(num).join(' ');
  const circulo = (svg.match(/<circle[^>]*\/>/) || [''])[0].replace(/\s+/g, ' ').replace(/ \/>/, '/>');
  const polys = [...svg.matchAll(/<polygon points="([^"]+)" fill="([^"]+)"/g)].map(([, pts, fill]) => {
    const p = pts.trim().split(/\s+/).map(par => par.split(',').map(num).join(',')).join(' ');
    const c = fill.toLowerCase().replace(/^#(.)\1(.)\2(.)\3$/, '#$1$2$3');
    return `<polygon points="${p}" fill="${c}" stroke="${c}"/>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">${circulo}<g stroke-width=".4" stroke-linejoin="round">${polys.join('')}</g></svg>`;
}
(async () => {
  const salida = {};
  for (const [origen, destino] of [['pajaro-morado', 'pajaro-morado'], ['pajaro-indigo', 'pajaro-indigo'], ['pajaro-blanco-puro', 'pajaro-blanco-puro'], ['logo-blanco', 'logo-blanco'], ['logo-blanco-puro', 'logo-blanco-puro'], ['logo-morado', 'favicon']]) {
    const svg = limpiar(fs.readFileSync(path.join(SRC, origen + '.svg'), 'utf8'));
    fs.writeFileSync(path.join(OUT, destino + '.svg'), svg);
    salida[destino + '.svg'] = svg.length;
  }
  const fav = fs.readFileSync(path.join(OUT, 'favicon.svg'));
  // PNG: los iconos de app llevan el círculo; el de Apple con un margen (iOS recorta las esquinas)
  for (const [nombre, t] of [['icon-192.png', 192], ['icon-512.png', 512]]) {
    await sharp(fav, { density: 512 }).resize(t, t).png({ compressionLevel: 9, palette: true }).toFile(path.join(OUT, nombre));
  }
  const apple = await sharp(fav, { density: 512 }).resize(150, 150).png().toBuffer();
  await sharp({ create: { width: 180, height: 180, channels: 4, background: '#e3d6ff' } }).composite([{ input: apple, gravity: 'center' }]).png({ compressionLevel: 9, palette: true }).toFile(path.join(OUT, 'apple-touch-icon.png'));
  // favicon.ico con 16 y 32 px (PNG dentro de ICO)
  const pngs = await Promise.all([16, 32].map(t => sharp(fav, { density: 512 }).resize(t, t).png().toBuffer()));
  const cab = Buffer.alloc(6); cab.writeUInt16LE(0, 0); cab.writeUInt16LE(1, 2); cab.writeUInt16LE(pngs.length, 4);
  let off = 6 + 16 * pngs.length; const dir = [];
  pngs.forEach((b, i) => { const t = [16, 32][i]; const e = Buffer.alloc(16); e.writeUInt8(t, 0); e.writeUInt8(t, 1); e.writeUInt8(0, 2); e.writeUInt8(0, 3); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(b.length, 8); e.writeUInt32LE(off, 12); off += b.length; dir.push(e); });
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), Buffer.concat([cab, ...dir, ...pngs]));
  fs.writeFileSync(path.join(OUT, 'site.webmanifest'), JSON.stringify({ name: 'MN Design Web', short_name: 'MN Design Web', icons: [{ src: '/marca/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/marca/icon-512.png', sizes: '512x512', type: 'image/png' }], theme_color: '#8a3fd8', background_color: '#f4efff', display: 'browser' }));
  for (const f of fs.readdirSync(OUT)) console.log(f.padEnd(22), fs.statSync(path.join(OUT, f)).size + ' B');
})();
