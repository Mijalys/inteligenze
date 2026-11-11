// Casos del equipo fundador. Son proyectos que Mijalys Silva lideró o diseñó, en el rol
// de cada momento; no se presentan como clientes de Inteligenze. Los textos están escritos
// para esta web (no copian el portafolio) y cada caso enlaza a su versión original.

export type Metric = { value: string; label: string }
// Imágenes en src/assets/cases/ (nombre de archivo + texto alternativo)
export type CaseImage = { file: string; alt: string }

export type Case = {
  slug: string
  /** ia: agentes y automatización con IA. producto: trayectoria en producto digital. */
  kind: 'ia' | 'producto'
  client: string
  title: string
  summary: string
  role: string
  period?: string
  industry: string
  location?: string
  services: ('fabrica' | 'automatizacion' | 'producto')[]
  sectors: string[]
  metrics: Metric[]
  context: string
  did: string[]
  results?: string[]
  howItWorks?: string[]
  deliverables: string[]
  tech: string[]
  source: string
  cover?: CaseImage
  gallery?: CaseImage[]
}

export const serviceLabels: Record<Case['services'][number], string> = {
  fabrica: 'Fábrica con IA',
  automatizacion: 'Automatización con IA',
  producto: 'Producto digital',
}

const portfolio = 'https://mijalys-silva.vercel.app/casos'

export const cases: Case[] = [
  {
    slug: 'ventabot',
    kind: 'ia',
    client: 'Ventabot',
    title: 'Un vendedor con IA que atiende WhatsApp y entrega clientes listos para comprar',
    summary:
      'SaaS de ventas conversacionales: el agente responde, resuelve objeciones y pasa a una persona solo a quien ya quiere comprar.',
    role: 'Co-Founder y CPO',
    period: 'ene 2024 – dic 2025',
    industry: 'SaaS · IA conversacional',
    location: 'Lima, Perú',
    services: ['fabrica'],
    sectors: ['Ventas', 'SaaS'],
    metrics: [
      { value: 'Tier 2', label: 'Google for Startups Program' },
      { value: 'WhatsApp', label: 'Canal de venta y atención' },
      { value: '3 pasos', label: 'Del anuncio a la venta cerrada' },
    ],
    context:
      'Las empresas que venden con publicidad digital reciben más conversaciones de las que su equipo puede atender, y la mayoría no está lista para comprar. El objetivo: que nadie quede sin respuesta y que el equipo de ventas solo hable con clientes calificados.',
    howItWorks: [
      'Un anuncio lleva al cliente a una conversación de WhatsApp.',
      'El agente de IA conversa, muestra catálogo y ofertas, responde objeciones y decide si el cliente está listo.',
      'El cliente calificado pasa a una persona, que lo recibe en un panel con la conversación, etiquetas y respuestas rápidas.',
    ],
    did: [
      'Producto completo, del diseño a la construcción, con LangChain y Vertex AI.',
      'Agentes que ejecutan pasos del proceso de venta, no solo respuestas de chat.',
      'Flujos con modelos de lenguaje para atención, ventas y operaciones, y un Help Desk propio.',
      'Roadmap y coordinación entre dirección, tecnología y ventas para lograr adopción.',
    ],
    deliverables: ['SaaS de ventas por WhatsApp', 'Agentes de IA y Help Desk', 'Flujos con LLMs para atención, ventas y operaciones'],
    tech: ['LangChain', 'Vertex AI', 'WhatsApp'],
    source: `${portfolio}/ventabot/`,
    cover: { file: 'ventabot-cover.jpg', alt: 'Anuncio en Facebook, conversación con el asistente de IA en WhatsApp y panel del equipo de ventas' },
    gallery: [{ file: 'ventabot-flujo.jpg', alt: 'Recorrido del cliente: del anuncio al agente de IA y del agente al equipo que cierra la venta' }],
  },
  {
    slug: 'alicorp-rag-esg',
    kind: 'ia',
    client: 'Alicorp',
    title: 'Reportes de sostenibilidad armados por agentes de IA',
    summary:
      'Prueba de concepto de RAG agéntico: los agentes ordenan los datos ESG dispersos y redactan el reporte que antes se armaba a mano.',
    role: 'Prueba de concepto desarrollada desde Ventabot',
    industry: 'Consumo masivo · Sostenibilidad',
    location: 'Lima, Perú',
    services: ['automatizacion'],
    sectors: ['Consumo masivo'],
    metrics: [
      { value: 'RAG', label: 'Arquitectura agéntica' },
      { value: 'ESG', label: 'Datos ordenados para el reporte' },
    ],
    context:
      'Preparar un reporte de sostenibilidad obligaba a reunir datos ambientales, sociales y de gobierno desde muchos documentos, y a redactarlo a mano en cada ciclo.',
    did: [
      'Arquitectura RAG agéntica que busca, extrae y estructura los datos ESG.',
      'Generación del borrador del reporte a partir de esos datos estructurados.',
    ],
    deliverables: ['Prueba de concepto de RAG agéntico', 'Borrador de reporte generado con IA'],
    tech: ['RAG agéntico', 'LLMs'],
    source: `${portfolio}/ventabot/`,
  },
  {
    slug: 'notifai',
    kind: 'ia',
    client: 'Notifai',
    title: 'Un sistema de diseño para escalar campañas con bots de IA',
    summary:
      'Investigación de usuarios, design system y un asistente de tres pasos para que crear campañas con bots sea simple.',
    role: 'Diseño de producto',
    industry: 'SaaS · IA',
    services: ['fabrica'],
    sectors: ['SaaS'],
    metrics: [
      { value: '3 pasos', label: 'Para crear una campaña' },
      { value: '1', label: 'Design system para todo el producto' },
    ],
    context:
      'Notifai envía comunicaciones automatizadas con bots de IA. Para crecer sin perder consistencia necesitaba conocer mejor a sus usuarios y un sistema de diseño común.',
    did: [
      'Entrevistas y arquetipos de usuario con objetivos, necesidades y puntos de dolor.',
      'Design system del producto.',
      'Nuevo flujo de creación de campañas en tres pasos y vista de detalle con el estado de cada contacto.',
    ],
    deliverables: ['Arquetipos de usuario', 'Design system', 'Flujo de creación de campañas', 'Seguimiento de campañas'],
    tech: ['Design system', 'Investigación de usuarios'],
    source: `${portfolio}/notifai/`,
    cover: { file: 'notifai-cover.jpg', alt: 'Asistente para crear campañas y detalle de una campaña en Notifai' },
    gallery: [
      { file: 'notifai-campana.jpg', alt: 'Campaña con sus contactos, estados y llamadas, con datos personales difuminados' },
      { file: 'notifai-wizard.jpg', alt: 'Los tres pasos para crear una campaña, con fechas y horarios' },
      { file: 'notifai-personas.jpg', alt: 'Arquetipos de usuario con objetivos, necesidades y puntos de dolor' },
    ],
  },
  {
    slug: 'caja-metropolitana',
    kind: 'producto',
    client: 'Caja Metropolitana de Lima',
    title: 'Menos llamadas al call center con un homebanking y una app rediseñados',
    summary: 'Homebanking renovado y app nativa para iOS y Android con una sola biblioteca de componentes.',
    role: 'Lead Product Designer',
    period: 'feb – sep 2021',
    industry: 'Banca',
    location: 'Lima, Perú',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [
      { value: '−25%', label: 'Consultas a atención al cliente' },
      { value: '+15%', label: 'Problemas resueltos desde la app' },
      { value: '+20%', label: 'Retención móvil' },
      { value: '5', label: 'Lanzamientos consecutivos' },
    ],
    context:
      'Muchos clientes llamaban para hacer operaciones que podían resolver solos. La caja quería que la web y el móvil fueran el primer canal.',
    did: [
      'Homebanking rediseñado: cuentas, transferencias, préstamos, servicios y cambio de dólares.',
      'Diseño de la app nativa iOS y Android, con flujos y una biblioteca de componentes compartida.',
      'Acompañamiento a desarrollo hasta producción en cinco lanzamientos seguidos.',
    ],
    deliverables: ['Auditoría UX/UI', 'Arquitectura de información', 'Flujos de usuario', 'Diseño UI multidispositivo'],
    tech: ['iOS', 'Android', 'Angular', 'Azure'],
    source: `${portfolio}/caja-metropolitana/`,
    cover: { file: 'cajametro-app.jpg', alt: 'App de Caja Metropolitana: cuentas, pago de préstamos y pago de servicios' },
    gallery: [{ file: 'cajametro-homebanking.jpg', alt: 'Homebanking web, del ingreso con código a la compra y venta de dólares' }],
  },
  {
    slug: 'redeban',
    kind: 'producto',
    client: 'Redeban',
    title: 'Un solo portal para que los comercios vendan, cobren con QR y gestionen terminales',
    summary: 'Portal para comercios de una red de pagos de Colombia: ventas, cobro con QR y terminales por sucursal.',
    role: 'Lead Product Designer',
    period: 'abr 2021 – may 2022',
    industry: 'Banca · Pagos',
    location: 'Colombia',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [
      { value: '+25%', label: 'Satisfacción del cliente' },
      { value: '+20%', label: 'Eficiencia operativa' },
      { value: '−30%', label: 'Riesgo en fases tempranas' },
      { value: '−15%', label: 'Errores de diseño en desarrollo' },
    ],
    context:
      'Los comercios de la red usaban herramientas separadas para revisar ventas, cobrar y administrar terminales y usuarios.',
    did: [
      'Portal con panel de ventas, código QR de cobro y gestión de terminales y usuarios por sucursal.',
      'Validación con Design Sprint, Lean UX y behavior research antes de construir.',
      'Procesos y buenas prácticas para el equipo de diseño y su entrega a desarrollo.',
    ],
    deliverables: ['Historias de usuario', 'Auditoría UX/UI', 'Arquitectura de información', 'Diseño UI'],
    tech: ['Angular', 'Azure'],
    source: `${portfolio}/redeban/`,
    cover: { file: 'redeban-dashboard.jpg', alt: 'Panel de Redeban con ventas totales, ingresos por día y acceso al código QR' },
    gallery: [
      { file: 'redeban-terminales.jpg', alt: 'Terminales y usuarios de una sucursal, con datos del comercio difuminados' },
      { file: 'redeban-cover.jpg', alt: 'Vistas del panel con gráficos de barras y de líneas' },
    ],
  },
  {
    slug: 'primax',
    kind: 'producto',
    client: 'Primax Solutions',
    title: 'Pedidos de combustible un 36% más rápidos con un e-commerce B2B',
    summary: 'Tienda B2B a medida para que los franquiciados pidan combustible, sigan sus pedidos y vean su crédito.',
    role: 'Product Designer',
    period: 'ene – dic 2023',
    industry: 'Energía · E-commerce B2B',
    location: 'Lima, Perú',
    services: ['producto'],
    sectors: ['Energía'],
    metrics: [{ value: '−36%', label: 'Tiempo en los pedidos recurrentes' }],
    context:
      'Las estaciones pedían combustible por canales poco ordenados y sin ver su línea de crédito en el mismo lugar.',
    did: [
      'Experiencia de usuario de la plataforma B2B, construida a medida.',
      'Módulos de clústeres de clientes, compra por agrupación y variables, y crédito para franquiciados.',
      'Depuración y migración de los módulos existentes.',
    ],
    results: ['36% menos tiempo en los pedidos más frecuentes, como el de combustible de las estaciones de cada región.'],
    deliverables: ['Experiencia de usuario', 'Clústeres de clientes', 'Crédito para franquiciados'],
    tech: ['E-commerce B2B'],
    source: `${portfolio}/primax/`,
    cover: { file: 'primax-plataforma.jpg', alt: 'Plataforma de Primax Solutions en web y móvil con pedidos en tres pasos y línea de crédito' },
    gallery: [{ file: 'primax-mobile.jpg', alt: 'Reservas, resumen de pedido y centro de ayuda en móvil' }],
  },
  {
    slug: 'niubiz',
    kind: 'producto',
    client: 'Niubiz',
    title: 'Cuatro procesos de pago y sus APIs, explicados en un solo portal',
    summary: 'Portal de integraciones diseñado en Design Sprint sobre el sistema de diseño de Niubiz.',
    role: 'Product Designer',
    period: 'jun – dic 2022',
    industry: 'Banca · Pagos',
    location: 'Lima, Perú',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [{ value: '4', label: 'Procesos de pago con sus APIs' }],
    context:
      'Equipos internos y socios necesitaban entender cómo funciona cada proceso de pago con tarjeta y qué API usar en cada paso.',
    did: [
      'Portal organizado por proceso: afiliación, autorización, compensación y liquidación.',
      'Catálogo de APIs, documentación y ayuda, sobre el sistema de diseño existente.',
      'Revisión del front-end en el ambiente de pruebas.',
    ],
    deliverables: ['Impact Mapping', 'Product Vision', 'Design Sprint', 'Diseño UI'],
    tech: ['Design Sprint', 'APIs de pago'],
    source: `${portfolio}/niubiz/`,
    cover: { file: 'niubiz-procesos.jpg', alt: 'Portal de Niubiz con afiliación, autorización, compensación y liquidación' },
    gallery: [
      { file: 'niubiz-portal.jpg', alt: 'Ayuda y documentación del portal' },
      { file: 'niubiz-login.jpg', alt: 'Procesos y acceso al portal' },
    ],
  },
  {
    slug: 'caja-cusco',
    kind: 'producto',
    client: 'Caja Cusco',
    title: 'Un back office de créditos que llegó antes a producción',
    summary: 'Módulo de créditos diseñado y maquetado sobre Angular Material, listo para conectarse al backend.',
    role: 'Product Designer',
    period: 'mar – dic 2020',
    industry: 'Banca y finanzas',
    location: 'Cusco, Perú',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [{ value: 'Diseño + código', label: 'Interfaz conectada al backend' }],
    context: 'Los analistas de crédito necesitaban un módulo nuevo, construido con las librerías que el equipo ya usaba.',
    did: [
      'Diseño del back office: ingreso, bandeja de solicitudes y detalle.',
      'Maquetación en Angular Material conectada a los endpoints del backend.',
      'Revisión del front-end en producción.',
    ],
    deliverables: ['UX Board', 'Flujos de usuario', 'Diseño UI', 'Desarrollo front-end'],
    tech: ['Angular Material'],
    source: `${portfolio}/caja-cusco/`,
    cover: { file: 'cajacusco-backoffice.jpg', alt: 'Back office de créditos de Caja Cusco' },
    gallery: [{ file: 'cajacusco-bandeja.jpg', alt: 'Bandeja de solicitudes de crédito en un portátil' }],
  },
  {
    slug: 'ripley',
    kind: 'producto',
    client: 'Banco Ripley Perú',
    title: 'El sistema de puntos rediseñado durante su paso a la nube',
    summary: 'Auditoría del sistema legado de Ripley Puntos y nuevas interfaces sobre el Design System Morita.',
    role: 'Head of UX Design',
    period: 'mar 2018 – feb 2020',
    industry: 'Banca · Retail',
    location: 'Lima, Perú',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [{ value: 'Cloud', label: 'Rediseño durante la migración' }],
    context: 'La migración del sistema de puntos a la nube abrió la oportunidad de revisar cómo lo usaban los equipos internos.',
    did: [
      'Auditoría del sistema legado junto a arquitectura y backend.',
      'Interfaces de reglas de acumulación, estado de cuenta y actualización de puntos.',
    ],
    deliverables: ['Sesión de alcance', 'Auditoría UX/UI', 'Diseño visual', 'Estructura del sitio'],
    tech: ['Design System Morita'],
    source: `${portfolio}/ripley/`,
    cover: { file: 'ripley-srp.jpg', alt: 'Ripley Puntos: reglas de acumulación y estado de cuenta' },
    gallery: [{ file: 'ripley-before-after.jpg', alt: 'Sistema de puntos antes y después del rediseño' }],
  },
]

export const getCase = (slug: string) => cases.find((c) => c.slug === slug)
export const aiCases = cases.filter((c) => c.kind === 'ia')
export const productCases = cases.filter((c) => c.kind === 'producto')
