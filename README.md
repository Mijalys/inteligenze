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
| `src/data/site.ts` | Datos de la empresa, menú, propuesta, método y preguntas frecuentes (se muestran en Contacto) |
| `src/data/services.ts` | Las 4 familias de servicio (Desarrollo de Software, Automatizaciones, Ciberseguridad, Staffing) y sus 14 servicios |
| `src/data/glossary.ts` | Términos del glosario de IA |
| `src/content/blog/` | Artículos del blog en Markdown. Copia `_plantilla.md`; el blog y su enlace en el menú aparecen solos con el primer artículo publicado |
| `src/data/sectors.ts` | Finanzas, Automotriz y Logística |
| `src/data/cases.ts` | Los casos: `kind: 'ia'` aparece como caso de IA y `'producto'` como trayectoria |

Los campos de `site.ts` que valen `null` (correo, WhatsApp, calendario, LinkedIn de la empresa, razón social y RUC) no se publican. Al completarlos aparecen solos en Contacto, el pie de página y los datos estructurados.

`npm run build` falla si una página contiene un dato por confirmar del documento de copy, como `[confirmar …]`, `[Nº]` o `[correo]`.

Para mostrar la foto de Mijalys Silva en el Inicio y en Nosotros, guárdala como `src/assets/founder.jpg` (cuadrada, de al menos 800 px). Sin ese archivo no se muestra nada.

## Animaciones

Los bloques marcados con `data-reveal` aparecen con un desvanecido suave al entrar en pantalla (`src/layouts/Base.astro` y `src/styles/global.css`). Nada se anima si la persona pidió menos movimiento en su sistema.

## SEO y GEO

- Título, descripción, URL canónica, Open Graph y Twitter en cada página (`src/layouts/Base.astro`).
- Datos estructurados JSON-LD (`src/lib/schema.ts`): ProfessionalService, Person, WebSite, WebPage, BreadcrumbList, Service, FAQPage, ItemList, CreativeWork, BlogPosting y DefinedTermSet.
- `sitemap-index.xml` automático y `robots.txt` abierto a buscadores y a los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended y otros).
- `/llms.txt` y `/llms-full.txt`: resumen de la empresa en Markdown para asistentes de IA, generado con los mismos datos del sitio (`src/lib/llms.ts`).
- Sitio estático: solo cargan JavaScript los diagnósticos, el formulario, el menú y las animaciones.

## Formulario y diagnósticos

El formulario de contacto y los tres diagnósticos envían los datos a `/api/contact/`, que manda un correo con [Resend](https://resend.com). En Vercel, en Settings → Environment Variables, agrega:

- `RESEND_API_KEY`: la clave de Resend.
- `CONTACT_TO_EMAIL`: el correo que recibe los mensajes.
- `CONTACT_FROM_EMAIL`: un remitente de un dominio verificado en Resend, por ejemplo `Inteligenze <web@inteligenze.com>`.

Sin estas variables el formulario responde con un error y la persona ve el mensaje de error. Los diagnósticos muestran su resultado igual.

## Marca

- Estilo corporativo claro. Colores del design system "inteligenze": navy `#050b1c` para texto y bandas, cian `#74fff6` solo sobre navy, y teal `#0e6f6b` para acentos sobre blanco. Están en `src/styles/global.css`.
- Logo en `src/assets/`: `logo-on-light.png` en la cabecera y `logo-on-dark.png` en el pie.
- Tipografía: Hanken Grotesk, como alternativa libre a PP Neue Montreal. Si compras la licencia de Neue Montreal, cambia `--font-sans` en `global.css`.
