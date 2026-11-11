# Inteligenze · web

Sitio de [inteligenze.com](https://inteligenze.com), hecho con Astro 7 y Tailwind CSS 4, sin frameworks de JavaScript. Se publica en Vercel.

## Empezar

Con Node 20.19 o posterior:

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/ y revisa que no queden datos por confirmar
npm run typecheck
```

## Dónde se edita el contenido

Todo el texto vive en `src/data/`, separado del diseño:

| Archivo | Qué contiene |
| --- | --- |
| `src/data/site.ts` | Datos de la empresa, menú, propuesta, método y preguntas frecuentes del Inicio |
| `src/data/services.ts` | Las tres páginas de servicio |
| `src/data/sectors.ts` | Finanzas, Automotriz y Logística |
| `src/data/cases.ts` | Los casos: `kind: 'ia'` aparece como caso de IA y `'producto'` como trayectoria |

Los campos de `site.ts` que valen `null` (correo, WhatsApp, calendario, LinkedIn de la empresa, razón social y RUC) no se publican. Al completarlos aparecen solos en Contacto, el pie de página y los datos estructurados.

`npm run build` falla si una página contiene un dato por confirmar del documento de copy, como `[confirmar …]`, `[Nº]` o `[correo]`.

Para mostrar la foto de Mijalys Silva en el Inicio y en Nosotros, guárdala como `src/assets/founder.jpg` (cuadrada, de al menos 800 px). Sin ese archivo no se muestra nada.

## Animaciones

Los bloques entran al aparecer en pantalla (`src/layouts/Base.astro` y `src/styles/global.css`). Las páginas de Ciberseguridad y Finanzas usan un modo sobrio (`<Base calm>`). Nada se anima si la persona pidió menos movimiento en su sistema.

## SEO y GEO

- Título, descripción, URL canónica, Open Graph y Twitter en cada página (`src/layouts/Base.astro`).
- Datos estructurados JSON-LD (`src/lib/schema.ts`): ProfessionalService, Person, WebSite, WebPage, BreadcrumbList, Service, FAQPage, ItemList y CreativeWork.
- `sitemap-index.xml` automático y `robots.txt` abierto a buscadores y a los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended y otros).
- `/llms.txt` y `/llms-full.txt`: resumen de la empresa en Markdown para asistentes de IA, generado con los mismos datos del sitio (`src/lib/llms.ts`).
- Sitio estático: solo cargan JavaScript los diagnósticos, el formulario, el menú, las animaciones y el orbe.

## Formulario y diagnósticos

El formulario de contacto y los tres diagnósticos envían los datos a `/api/contact/`, que manda un correo con [Resend](https://resend.com). En Vercel, en Settings → Environment Variables, agrega:

- `RESEND_API_KEY`: la clave de Resend.
- `CONTACT_TO_EMAIL`: el correo que recibe los mensajes.
- `CONTACT_FROM_EMAIL`: un remitente de un dominio verificado en Resend, por ejemplo `Inteligenze <web@inteligenze.com>`.

Sin estas variables el formulario responde con un error y la persona ve el mensaje de error. Los diagnósticos muestran su resultado igual.

## Marca

- Colores del design system "inteligenze": `ink #050b1c` y `brand-cyan #74fff6`, más `cyan-deep #107d78` para textos y foco sobre fondos claros. Están en `src/styles/global.css`.
- Logo en `src/assets/`: `logo-on-dark.png` (el que usa el sitio) y `logo-on-light.png`.
- Tipografía: Hanken Grotesk, como alternativa libre a PP Neue Montreal, la fuente de la referencia visual. Si compras la licencia de Neue Montreal, cambia `--font-sans` en `global.css`.

## Créditos

El orbe animado es [Fluid Orb de Rare UI](https://rareui.com), adaptado a un componente de Astro sin React (`src/components/FluidOrb.astro`). Solo se dibuja cuando está en pantalla. Su licencia exige mantener el aviso de copyright en ese archivo y el enlace a rareui.com en el pie de página.
