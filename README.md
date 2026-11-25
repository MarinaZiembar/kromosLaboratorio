# Kromos Laboratorio de Citogenética: sitio web (v2.0)

Next.js 15 (App Router) + React 19 + TypeScript, con export 100% estático para subir a Bluehost.
Rediseño v2.0. Mantiene las 5 páginas del sitio original, los colores de marca (#1B84A1, #07617A, #003841), la tipografía Inter, el logo y el favicon.

## Páginas
| Ruta | Archivo |
|---|---|
| `/` | `app/page.tsx` |
| `/nosotros/` | `app/nosotros/page.tsx` |
| `/estudios/` | `app/estudios/page.tsx` |
| `/servicios-a-terceros/` | `app/servicios-a-terceros/page.tsx` |
| `/contacto/` | `app/contacto/page.tsx` |

Los textos están en `data/content.ts` (copiados del sitio actual) y las fotos en `data/fotos.ts`.

## Favicon e imagen para compartir
`app/favicon.ico`, `app/icon.png` (512×512), `app/apple-icon.png` (180×180) y `app/opengraph-image.jpg` (1200×630). Next.js los publica solos con sus etiquetas.

## Fotos de Pexels
Por defecto se cargan desde el CDN de Pexels. Para alojarlas en tu servidor:
1. `npm run fotos` (las descarga a `public/img/fotos/`)
2. En `data/fotos.ts`, poner `USAR_LOCALES = true`.

## Desarrollo
```bash
npm install
npm run dev
```

## Build y subida a Bluehost
```bash
npm run build
```
Se genera `out/`. En cPanel → Administrador de archivos (o por FTP):
1. Hacer un backup de `public_html`.
2. Borrar el contenido viejo y subir **el contenido** de `out/`: `index.html`, `404.html`, las carpetas `nosotros/`, `estudios/`, `servicios-a-terceros/`, `contacto/`, `_next/`, `img/` y `.htaccess` (archivo oculto: activar "Mostrar archivos ocultos").

El `.htaccess` redirige con 301 las URLs viejas (`Home.html`, `Nosotros.html`, etc.) a las nuevas y activa la caché y la compresión.

## Animaciones
- Entrada suave de cada página (`app/template.tsx`) y aparición al hacer scroll de los elementos con `data-reveal` (`components/Motion.tsx`).
- Home: frases rotativas con barra de progreso, fotos con fundido, contador de estudios y tarjetas flotantes.
- Todo se desactiva si el sistema tiene activado "reducir movimiento".
