# Inteligenze · web

Sitio de [inteligenze.com](https://inteligenze.com), hecho con Astro 7, Tailwind CSS 4 y React (solo para el orbe animado). Se publica en Vercel.

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
| `src/data/cases.ts` | Los casos, tomados del portafolio de Mijalys Silva |

Los campos de `site.ts` que valen `null` (correo, WhatsApp, calendario, LinkedIn de la empresa, razón social y RUC) no se publican. Al completarlos aparecen solos en Contacto, el pie de página y los datos estructurados.

`npm run build` falla si una página contiene un dato por confirmar del documento de copy, como `[confirmar …]`, `[Nº]` o `[correo]`.

## SEO y GEO

- Título, descripción, URL canónica, Open Graph y Twitter en cada página (`src/layouts/Base.astro`).
- Datos estructurados JSON-LD (`src/lib/schema.ts`): ProfessionalService, Person, WebSite, WebPage, BreadcrumbList, Service, FAQPage, ItemList y CreativeWork.
- `sitemap-index.xml` automático y `robots.txt` abierto a buscadores y a los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended y otros).
- `/llms.txt` y `/llms-full.txt`: resumen de la empresa en Markdown para asistentes de IA, generado con los mismos datos del sitio (`src/lib/llms.ts`).
- Sitio estático: solo cargan JavaScript los diagnósticos, el formulario, los filtros de casos y el orbe.

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

El orbe animado es [Fluid Orb de Rare UI](https://rareui.com), instalado con `npx shadcn@latest add swamimalode07/rare-ui/fluid-orb`. Su licencia exige mantener el aviso de copyright en `src/components/ui/fluid-orb.tsx` y el enlace a rareui.com en el pie de página.
