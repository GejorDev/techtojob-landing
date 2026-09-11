# TechToJob — Landing

Landing de TechToJob para el Torneo #2: la puerta de entrada de la comunidad
de desarrolladores y empresas tech en español.

## Stack

- **Next.js 16** (App Router) con TypeScript
- **Tailwind CSS v4** (obligatorio en las bases del torneo)
- **Sora** vía `next/font/google` (única fuente, autoalojada, tres pesos: 400/600/700)
- Iconos: **Lucide** (`lucide-react`)
- **next-intl** para i18n (español en `/`, inglés en `/en`)

## Paleta

Los tres colores base son fijos y dominan el diseño:

| Token | Color | Uso |
| --- | --- | --- |
| `ink` | `#2f3436` | Fondos oscuros, texto principal, botones |
| `teal` | `#84c0bf` | Fondo de franjas, botones, detalles |
| `paper` | `#ffffff` | Fondos claros |

Grises intermedios (`ink-muted`, `line`, `mist`) para textos secundarios y
bordes, como permite el brief. El teal nunca se usa como texto de párrafo:
sobre blanco no alcanza el contraste AA, por eso va solo en fondos, botones y
detalles (mismas indicaciones del brief).

## Animaciones

Sin JavaScript ni dependencias externas: todo es CSS nativo sobre Tailwind v4.

- **Hero**: entrada con fade-up escalonado al cargar (badge, título, párrafo, CTA).
- **Cards**: reveal al scroll con scroll-driven animations
  (`animation-timeline: view()`), sin IntersectionObserver.
- **Micro-interacciones**: cards con elevación y sombra al hover, subrayado
  animado en los números de pasos (`group-hover`), botones con `active:scale`.
- **Accesibilidad**: reset global con `prefers-reduced-motion` que anula
  animaciones y transiciones de un tiro.

## Orden de secciones

El brief marca el orden como orientativo salvo hero y footer. Mantengo el orden
canónico porque el recorrido narrativo es bueno: hero → cómo funciona →
talento/empresas (los dos lados del match) → torneos (prueba de valor) →
networking → noticias → newsletter → cierre.

Cambios respecto al brief:

- **Newsletter** va en una franja teal entre Noticias y el Cierre, antes del
  footer (el brief lo sugiere explícitamente: no compite con el CTA del hero).
- El **Cierre** replica el CTA del Discord como último empujón visual sobre
  fondo oscuro, antes del footer.
- **Hero y Footer** se mantienen fijos en su lugar.

## Origen de los recursos visuales

- **Logos**: `public/` (SVG facilitados por la organización).
  Se usa `v1Positivo.svg` en fondos claros (header y footer) y
  `SímboloNegativo.svg` (versión teal) sobre el fondo oscuro del hero.
- **Iconos**: [Lucide](https://lucide.dev) — licencia ISC, uso libre comercial.
- **Imágenes ilustrativas**: ninguna de banco; los mockups de UI (perfil,
  vacante, canal de Discord) son puro HTML/CSS, sin assets externos.

## SEO

- `<html lang>` dinámico por locale, un solo `<h1>`, jerarquía h2/h3 sin saltos.
- Metadata API de Next con `title.template` (`%s | TechToJob`), `metadataBase`
  y `description` en el layout.
- Open Graph y Twitter Card completos. La imagen OG (1200×630) se genera con
  `next/og` (ImageResponse) en `src/app/[locale]/opengraph-image.tsx`.
- JSON-LD `Organization` con nombre, URL, logo y redes en el layout.
- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`;
  todo lo que navega es `<a>`, nada de div clicables.
- URLs de anclas legibles: `#como-funciona`, `#talento`, `#empresas`,
  `#torneos`, `#networking`, `#noticias`, `#newsletter`.
- Páginas legales reales (`/privacy`, `/legal`, `/cookies`, y sus versiones en
  `/en/…`) para que los enlaces del footer no queden en 404 en la publicación.

## Internacionalización

Cada locale es un segmento dinámico `[locale]` con prerender estático
(`generateStaticParams` → `['es', 'en']`). El texto del sitio vive en
`messages/{locale}.json`, nunca en los componentes.

- **`src/i18n/routing.ts`** — define `['es', 'en']`, default `es` y
  `localePrefix: 'as-needed'` (español en `/` sin prefijo, inglés en `/en`).
- **`src/i18n/navigation.ts`** — wrappers tipados de `Link`/`useRouter`/
  `usePathname` que ya manejan el locale.
- **`src/i18n/request.ts`** — carga `messages/{locale}.json` por request.
- **`src/proxy.ts`** — detección de idioma del navegador (`Accept-Language`,
  cookie `NEXT_LOCALE`) y redirección a la ruta correcta. Es la convención
  `proxy` de Next 16 (reemplaza al `middleware` deprecado).
- Selector **ES | EN** en el header para cambiar de idioma sin perder la ruta.

## Estructura de rutas

El segmento `[locale]` es la raíz efectiva: su layout aplica
`Header` + `Footer` y el `html lang` por idioma. Las páginas legales viven en
el mismo segmento para heredar el marco:

```
src/
  app/
    globals.css             # tokens de Tailwind v4
    icon.svg                # favicon compartido entre locales
    [locale]/
      layout.tsx            # raíz: metadata, JSON-LD, fuentes, Header/Footer
      page.tsx              # home (hero…cierre)
      privacy/page.tsx      # política de privacidad
      legal/page.tsx        # aviso legal
      cookies/page.tsx      # política de cookies
      opengraph-image.tsx   # imagen OG 1200×630 (next/og)
  components/               # secciones + Header con nav y selector de idioma
  i18n/                     # routing, navigation, request, tipos de mensajes
  proxy.ts                  # detección/redirección de locale (Next 16)
messages/
  es.json                   # textos en español (default)
  en.json                   # textos en inglés
```

## Configuración

Copia `.env.example` a `.env` y ajusta `NEXT_PUBLIC_SITE_URL` a la URL real del
deploy. Sin variable, se usa `https://techtojob-landing.vercel.app` como fallback
(hasta conectar el dominio propio en Vercel).

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción
npm run lint     # eslint
```

## Verificación

- `npm run build` sin errores y `npm run lint` limpio.
- Lighthouse en móvil: objetivo SEO 100 y Accesibilidad/Rendimiento ≥ 90
  (se adjunta captura en la entrega).