// Casos tomados del portafolio de Mijalys Silva (https://mijalys-silva.vercel.app).
// Son proyectos que el fundador de Inteligenze lideró o diseñó, en su rol de cada
// momento. La web lo dice así en cada caso: no se presentan como clientes de Inteligenze.

export type Metric = { value: string; label: string }

export type Case = {
  slug: string
  client: string
  title: string
  summary: string
  role: string
  period?: string
  industry: string
  location?: string
  services: ('fabrica' | 'automatizacion' | 'producto')[]
  sectors: string[]
  featured?: boolean
  metrics: Metric[]
  context: string
  did: string[]
  results?: string[]
  howItWorks?: string[]
  deliverables: string[]
  tech: string[]
  source: string
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
    client: 'Ventabot',
    title: 'Agentes de IA que venden por WhatsApp',
    summary:
      'Un SaaS donde los agentes de IA no solo responden: entienden el contexto, resuelven objeciones y guían al cliente hasta la compra.',
    role: 'Co-Founder y CPO',
    period: 'ene 2024 – dic 2025',
    industry: 'SaaS · IA conversacional',
    location: 'Lima, Perú',
    services: ['fabrica'],
    sectors: ['Ventas', 'SaaS'],
    featured: true,
    metrics: [
      { value: 'Tier 2', label: 'Google for Startups Program' },
      { value: 'WhatsApp', label: 'Canal de venta y atención' },
      { value: '3 pasos', label: 'Del anuncio a la venta cerrada' },
    ],
    context:
      'Ventabot nació para que las empresas vendan por WhatsApp con un asistente de IA que atiende a cada cliente que llega desde la publicidad digital, y que solo pasa al equipo humano los clientes listos para comprar.',
    did: [
      'Diseño y construcción del SaaS con LangChain y Vertex AI. Los agentes ejecutan acciones dentro del proceso de venta, no solo conversan.',
      'Workflows con LLMs para atención al cliente, ventas y operaciones, además del software de Help Desk.',
      'Roadmap del producto y coordinación de CEO, CTO y ventas para escalar y lograr adopción.',
      'Ingreso al Google for Startups Program, en el Tier 2.',
    ],
    howItWorks: [
      'El cliente ve el anuncio y abre la conversación en WhatsApp.',
      'El agente de IA vende y califica: entiende el contexto, muestra el catálogo, resuelve objeciones y transfiere al cliente calificado.',
      'El equipo cierra la venta desde un panel con conversaciones asignadas, etiquetas y respuestas predeterminadas, con una persona supervisando.',
    ],
    deliverables: ['SaaS de ventas por WhatsApp', 'Agentes de IA y software de Help Desk', 'Workflows con LLMs para atención, ventas y operaciones'],
    tech: ['LangChain', 'Vertex AI', 'WhatsApp'],
    source: `${portfolio}/ventabot/`,
  },
  {
    slug: 'alicorp-rag-esg',
    client: 'Alicorp',
    title: 'RAG agéntico para reportes de sostenibilidad',
    summary:
      'Una prueba de concepto que estructura datos ESG y genera reportes de sostenibilidad, reemplazando un proceso manual.',
    role: 'Prueba de concepto desarrollada desde Ventabot',
    industry: 'Consumo masivo · Sostenibilidad',
    location: 'Lima, Perú',
    services: ['automatizacion'],
    sectors: ['Consumo masivo'],
    featured: true,
    metrics: [
      { value: 'RAG', label: 'Arquitectura agéntica' },
      { value: 'ESG', label: 'Datos estructurados para el reporte' },
    ],
    context:
      'Los reportes de sostenibilidad se armaban a mano, juntando datos ESG dispersos en distintos documentos y fuentes.',
    did: [
      'Arquitectura RAG agéntica que estructura los datos ESG.',
      'Generación de reportes de sostenibilidad a partir de esos datos, en lugar del proceso manual.',
    ],
    deliverables: ['Prueba de concepto de RAG agéntico', 'Reporte de sostenibilidad generado con IA'],
    tech: ['RAG agéntico', 'LLMs'],
    source: `${portfolio}/ventabot/`,
  },
  {
    slug: 'notifai',
    client: 'Notifai',
    title: 'Design system para comunicaciones con bots de IA',
    summary:
      'Un SaaS que automatiza las comunicaciones outbound con bots de IA necesitaba escalar con un design system e investigación de sus usuarios.',
    role: 'Diseño de producto',
    industry: 'SaaS · IA',
    services: ['fabrica'],
    sectors: ['SaaS'],
    metrics: [
      { value: '3 pasos', label: 'Asistente para crear campañas' },
      { value: '1', label: 'Design system para escalar el producto' },
    ],
    context:
      'Notifai automatiza las comunicaciones outbound con bots de inteligencia artificial. Para escalar, necesitaba un design system y entender mejor a sus usuarios actuales.',
    did: [
      'Investigación de los usuarios actuales, resumida en arquetipos con sus objetivos, necesidades y puntos de dolor.',
      'Design system del producto.',
      'Rediseño de la creación de campañas en un asistente de tres pasos y del detalle de cada campaña, con el estado de cada contacto.',
    ],
    deliverables: ['Arquetipos de usuario', 'Design system', 'Flujo de creación de campañas', 'Detalle y seguimiento de campañas'],
    tech: ['Design system', 'Investigación de usuarios'],
    source: `${portfolio}/notifai/`,
  },
  {
    slug: 'caja-metropolitana',
    client: 'Caja Metropolitana de Lima',
    title: 'Homebanking y app nativa para una caja municipal',
    summary:
      'Rediseño del homebanking y liderazgo de la app nativa iOS y Android, con sus flujos y su biblioteca de componentes.',
    role: 'Lead Product Designer',
    period: 'feb – sep 2021',
    industry: 'Banca',
    location: 'Lima, Perú',
    services: ['producto'],
    sectors: ['Finanzas'],
    featured: true,
    metrics: [
      { value: '−25%', label: 'Consultas a atención al cliente' },
      { value: '+15%', label: 'Problemas resueltos desde la app' },
      { value: '+20%', label: 'Retención móvil' },
      { value: '5', label: 'Lanzamientos consecutivos' },
    ],
    context:
      'Caja Metropolitana de Lima necesitaba que sus clientes resolvieran más cosas por su cuenta, desde la web y desde el móvil, sin tener que llamar a atención al cliente.',
    did: [
      'Rediseño del homebanking: consulta de cuentas, transferencias, pagos de préstamos y servicios, y compra y venta de dólares.',
      'Liderazgo del diseño de la app nativa para iOS y Android: wireframes, flujos y la biblioteca de componentes que compartieron ambas plataformas.',
      'Acompañamiento al equipo de desarrollo hasta producción, con cinco lanzamientos seguidos.',
    ],
    deliverables: ['Auditoría UX/UI', 'Arquitectura de información', 'Flujograma de usuario', 'Wireframes y diseño UI multidispositivo'],
    tech: ['iOS nativo', 'Android nativo', 'Angular', 'Azure'],
    source: `${portfolio}/caja-metropolitana/`,
  },
  {
    slug: 'redeban',
    client: 'Redeban',
    title: 'Portal de ventas y pagos QR para comercios',
    summary: 'Panel de ventas, cobro con código QR y gestión de terminales para una red de pagos de Colombia.',
    role: 'Lead Product Designer',
    period: 'abr 2021 – may 2022',
    industry: 'Banca · Pagos',
    location: 'Colombia',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [
      { value: '+20%', label: 'Eficiencia operativa' },
      { value: '−30%', label: 'Riesgo del proyecto en fases tempranas' },
      { value: '−15%', label: 'Errores de diseño en desarrollo' },
      { value: '+25%', label: 'Satisfacción del cliente' },
    ],
    context:
      'Redeban es una de las redes de pagos de Colombia. Sus comercios necesitaban un solo lugar para ver lo que venden, cobrar con QR y administrar sus terminales y usuarios.',
    did: [
      'Diseño del portal para comercios: panel de ventas, código QR para cobrar y gestión de terminales y usuarios por sucursal.',
      'Procesos internos, herramientas y buenas prácticas para el equipo de diseño y su entrega a desarrollo.',
      'Design Sprint, Lean UX y behavior research para validar antes de construir.',
    ],
    deliverables: ['Historias de usuario', 'Auditoría UX/UI', 'Arquitectura de información', 'Wireframes y diseño UI'],
    tech: ['Angular', 'Azure'],
    source: `${portfolio}/redeban/`,
  },
  {
    slug: 'primax',
    client: 'Primax Solutions',
    title: 'E-commerce B2B con línea de crédito',
    summary:
      'Una tienda virtual a medida para que los franquiciados pidan combustible, sigan sus pedidos y consulten su línea de crédito.',
    role: 'Product Designer',
    period: 'ene – dic 2023',
    industry: 'Energía · E-commerce B2B',
    location: 'Lima, Perú',
    services: ['producto'],
    sectors: ['Energía'],
    metrics: [{ value: '−36%', label: 'Tiempo en los procesos más recurrentes' }],
    context:
      'Primax Solutions necesitaba una tienda virtual amigable y accesible para todos sus stakeholders, empezando por la solicitud de combustibles de sus estaciones en todo el país.',
    did: [
      'Experiencia de usuario de la plataforma de e-commerce B2B, construida a medida.',
      'Módulos de clústeres de clientes, compras por agrupación y variables, y customer credit para los franquiciados.',
      'Depuración y migración de los módulos que ya existían.',
    ],
    results: ['36% menos tiempo en los procesos más recurrentes, como la solicitud de combustibles de las estaciones a nivel regional.'],
    deliverables: ['Experiencia de usuario de la plataforma', 'Clústeres de clientes', 'Customer credit para franquiciados'],
    tech: ['E-commerce B2B'],
    source: `${portfolio}/primax/`,
  },
  {
    slug: 'niubiz',
    client: 'Niubiz',
    title: 'Portal de procesos e integraciones de pago',
    summary:
      'Afiliación, autorización, compensación y liquidación, con su catálogo de APIs, diseñados en Design Sprint sobre el sistema de diseño de Niubiz.',
    role: 'Product Designer',
    period: 'jun – dic 2022',
    industry: 'Banca · Pagos',
    location: 'Lima, Perú',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [{ value: '4', label: 'Procesos de pago documentados con sus APIs' }],
    context:
      'Niubiz procesa pagos con tarjeta en Perú. Su módulo de integraciones tenía que explicar a equipos internos y a socios cómo funciona cada proceso de pago y qué APIs lo resuelven.',
    did: [
      'Diseño del módulo de integraciones en modalidad Design Sprint, sobre el sistema de diseño de Niubiz.',
      'Portal ordenado por procesos: afiliación, autorización de transacción, compensación y liquidación, cada uno con su descripción y sus APIs.',
      'Revisión del código front-end en el ambiente de pruebas.',
    ],
    deliverables: ['Impact Mapping', 'Product Vision', 'Design Sprint', 'Wireframes y diseño UI'],
    tech: ['Design Sprint', 'APIs de pago'],
    source: `${portfolio}/niubiz/`,
  },
  {
    slug: 'caja-cusco',
    client: 'Caja Cusco',
    title: 'Módulo de créditos y back office',
    summary:
      'Diseño del módulo de créditos sobre Angular Material, con la maquetación lista para los endpoints del backend para llegar antes a producción.',
    role: 'Product Designer',
    period: 'mar – dic 2020',
    industry: 'Banca y finanzas',
    location: 'Cusco, Perú',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [{ value: 'Diseño + código', label: 'Del diseño a la interfaz conectada al backend' }],
    context:
      'Caja Cusco necesitaba un módulo de créditos para sus analistas, construido con las librerías de Angular Material que su equipo ya usaba.',
    did: [
      'Diseño del módulo de créditos y su back office: ingreso, bandeja de entrada y detalle de cada solicitud.',
      'Maquetación sobre Angular Material conectada a los endpoints del backend, lo que aceleró el despliegue a producción.',
      'Revisión del código front-end en producción.',
    ],
    deliverables: ['UX Board', 'User flow', 'Wireframes', 'Diseño UI y desarrollo front-end'],
    tech: ['Angular Material'],
    source: `${portfolio}/caja-cusco/`,
  },
  {
    slug: 'ripley',
    client: 'Banco Ripley Perú',
    title: 'Sistema de fidelización Ripley Puntos',
    summary:
      'Auditoría de un sistema legado y rediseño del sistema de fidelización durante su migración a la nube, sobre el Design System Morita.',
    role: 'Head of UX Design',
    period: 'mar 2018 – feb 2020',
    industry: 'Banca · Retail',
    location: 'Lima, Perú',
    services: ['producto'],
    sectors: ['Finanzas'],
    metrics: [{ value: 'Cloud', label: 'Rediseño durante la migración a la nube' }],
    context:
      'El sistema de puntos de Banco Ripley era una aplicación legada que se estaba migrando a la nube. Era el momento de revisar cómo lo usaban los equipos internos.',
    did: [
      'Auditoría del sistema legado y rediseño del sistema de fidelización, junto a los equipos de arquitectura y backend.',
      'Interfaces sobre el Design System Morita: reglas de acumulación, estado de cuenta y actualización de puntos.',
    ],
    deliverables: ['Sesión de alcance', 'Auditoría UX/UI', 'Diseño visual', 'Estructura del sitio'],
    tech: ['Design System Morita'],
    source: `${portfolio}/ripley/`,
  },
]

export const getCase = (slug: string) => cases.find((c) => c.slug === slug)
export const featuredCases = cases.filter((c) => c.featured)
