# TechToJob — Landing

Landing de TechToJob para el **Torneo #2**: la puerta de entrada de la
comunidad de desarrolladores y empresas tech en español. Diseño
_Energía eléctrica_: fondo oscuro con acentos teal, rejilla y detalles
luminosos, todo con CSS nativo.

## Stack

- **Next.js 16** (App Router) con **TypeScript** y **React 19**
- **Tailwind CSS v4** (obligatorio en las bases del torneo), tokens vía `@theme`
- **Tipografía** (autoalojada con `next/font/google`, variable + `display: swap`):
  - **Sora** → display/titulares (`--font-display`); la imagen OG usa además los
    TTFs locales `src/fonts/Sora-400.ttf` y `Sora-700.ttf` porque satori no
    acepta woff2
  - **Inter** → cuerpo (`--font-sans`), aplicada globalmente en `body`
  - **JetBrains Mono** → acentos técnicos (`--font-mono`): terminal del hero,
    eyebrows, ticker y etiquetas
- **next-intl** para i18n (español en `/`, inglés en `/en`)
- Iconos: **Lucide** (`lucide-react`)

## Empezar

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev      # desarrollo (http://localhost:3000)
npm run build    # build de producción
npm run lint     # eslint
npm run start    # servir el build
```

## Configuración

Copia `.env.example` a `.env` y ajusta `NEXT_PUBLIC_SITE_URL` a la URL real del
deploy. Sin la variable, el layout usa `https://techtojob-landing.vercel.app`
como fallback (canonical, Open Graph y JSON-LD).

## Paleta

Los tres colores base son fijos y dominan el diseño:

| Token | Color | Uso |
| --- | --- | --- |
| `ink` | `#2f3436` | Fondo oscuro del hero, texto principal, botones |
| `teal` | `#84c0bf` | Franjas, botones, detalles y glow |
| `paper` | `#ffffff` | Fondos claros |

Acompañan grises intermedios y variantes (permitidos por el brief):

`ink-soft` `#3d4346`, `ink-muted` `#565d60`, `teal-dark` `#5f9c9b`,
`mist` `#f4f6f6`, `line` `#e4e9e9`, y los tokens `--shadow-glow` /
`--shadow-glow-sm` (halo teal derivado con `color-mix`).

El teal nunca se usa como texto de párrafo: sobre blanco no alcanza el
contraste AA, por eso va solo en fondos, botones y detalles (mismas
indicaciones del brief).

## Secciones

Orden de la landing (el brief lo marca como orientativo salvo hero y footer):

`Hero` → `Ticker` (cinta marquee localizada) → `HowItWorks` → `Talent` →
`Companies` → `Tournaments` → `Networking` → `News` → `Newsletter` → `Closing`.

Cambios respecto al brief:

- **Newsletter** va en una franja teal entre Noticias y el Cierre, antes del
  footer (no compite con el CTA del hero).
- El **Cierre** replica el CTA de Discord como empujón visual final sobre fondo
  oscuro, antes del footer.
- **Hero y Footer** se mantienen fijos en su lugar.

## Internacionalización

Cada locale es un segmento dinámico `[locale]` con prerender estático
(`generateStaticParams` → `['es', 'en']`). El texto del sitio vive en
`messages/{locale}.json`, nunca en los componentes, y el tipo
`src/i18n/messages.d.ts` se deriva automáticamente de `es.json`.

- **`src/i18n/routing.ts`** — define `['es', 'en']`, default `es` y
  `localePrefix: 'as-needed'` (español en `/` sin prefijo, inglés en `/en`).
- **`src/i18n/navigation.ts`** — wrappers tipados de `Link`/`useRouter`/
  `usePathname` que manejan el locale.
- **`src/i18n/request.ts`** — carga `messages/{locale}.json` por request.
- **`src/proxy.ts`** — detección de idioma del navegador (`Accept-Language`,
  cookie `NEXT_LOCALE`) y redirección a la ruta correcta. Es la convención
  `proxy` de Next 16 (reemplaza al `middleware` deprecado).
- Selector **ES | EN** en el header para cambiar de idioma sin perder la ruta.

### Navegación y anchors

Los enlaces de sección usan el `Link` de **next-intl** con
`{ pathname: "/", hash }`: funcionan desde cualquier página (incluidas las
legales) y preservan el locale. Los logos del header y footer llevan a `/`.

Anchors canónicos (en inglés, con `scroll-mt` para el header fijo):
`#home`, `#how-it-works`, `#talent`, `#companies`, `#tournaments`,
`#networking`, `#news`, `#newsletter`.

## Animaciones

Sin JavaScript ni dependencias externas: todo es CSS nativo sobre Tailwind v4.

- **Hero**: entrada con fade-up escalonado al cargar (badge, título, párrafo,
  CTA).
- **Cards**: reveal al scroll con scroll-driven animations
  (`animation-timeline: view()`), sin IntersectionObserver.
- **Ticker**: cinta marquee continua con `@keyframes marquee` (45s; en mobile
  baja a 60s para lectura cómoda).
- **Micro-interacciones**: cards con elevación y sombra al hover, botones con
  `active:scale`, cursor del terminal y puntos de estado con `animate-blink`,
  símbolo flotante con `animate-float`.
- **Accesibilidad**: reset global con `prefers-reduced-motion` que anula
  animaciones, transiciones y scroll suave de un tiro.

## SEO

- `<html lang>` dinámico por locale, un solo `<h1>`, jerarquía h2/h3 sin
  saltos.
- Metadata API de Next con `title.template` (`%s | TechToJob`), `metadataBase`
  y descripción por idioma en el layout.
- Open Graph y Twitter Card completos y localizados.
- **Imagen OG por locale** (1200×630 PNG): `src/app/[locale]/opengraph-image.tsx`
  con `next/og` (ImageResponse), traducciones del namespace `ogImage` y el
  símbolo de la marca (versión teal sobre oscuro). El `alt` es estático por
  convención de Next.
- JSON-LD `Organization` con nombre, URL, logo y redes en el layout.
- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`;
  todo lo que navega es un enlace real.
- Páginas legales reales (`/privacy`, `/legal`, `/cookies` y sus versiones en
  `/en/…`) para que los enlaces del footer no queden en 404.

## Estructura de rutas

El segmento `[locale]` es la raíz efectiva: su layout aplica
`Header` + `Footer` y el `html lang` por idioma. Las páginas legales viven en
el mismo segmento para heredar el marco:

```
src/
  app/
    globals.css             # tokens de Tailwind v4, utilities y keyframes
    icon.svg                # favicon compartido entre locales
    [locale]/
      layout.tsx            # raíz: metadata, JSON-LD, fuentes, Header/Footer
      page.tsx              # home (hero…cierre)
      privacy/page.tsx      # política de privacidad
      legal/page.tsx        # aviso legal
      cookies/page.tsx      # política de cookies
      opengraph-image.tsx   # imagen OG por locale 1200×630 (next/og)
  components/               # secciones + Header, Footer y piezas compartidas
    DiscordCtaLink.tsx      # CTA de Discord reutilizable (con glow)
    Eyebrow.tsx             # eyebrow + SECTION_TITLE_CLASS compartidos
  fonts/                    # Sora en TTF (400/700) solo para la imagen OG
  i18n/                     # routing, navigation, request, tipos de mensajes
  proxy.ts                  # detección/redirección de locale (Next 16)
messages/
  es.json                   # textos en español (default)
  en.json                   # textos en inglés
```

## Origen de los recursos visuales

- **Logos**: `public/logo-positive.svg` (marca sobre fondos claros: header,
  footer y JSON-LD) y `public/logo-negative.svg` (versión teal sobre oscuro:
  imagen OG). SVG propios de la organización.
- **Iconos**: [Lucide](https://lucide.dev) — licencia ISC, uso libre comercial.
- **Imágenes ilustrativas**: ninguna de banco; los mockups de UI (perfil,
  vacante, canal de Discord) son puro HTML/CSS, sin assets externos.

## Verificación

- `npm run build` sin errores y `npm run lint` limpio.
- Lighthouse en móvil: objetivo SEO 100 y Accesibilidad/Rendimiento ≥ 90
  (se adjunta captura en la entrega).