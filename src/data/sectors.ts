export type Sector = {
  slug: 'finanzas' | 'automotriz' | 'logistica'
  name: string
  summary: string // línea del Inicio
  title: string
  metaDescription: string
  headline: string
  challenges: string[]
  whatWeDo: string[]
  relatedCases: string[]
}

export const sectors: Sector[] = [
  {
    slug: 'finanzas',
    name: 'Finanzas',
    summary: 'Atención al cliente, cobranzas, onboarding y seguridad de la información.',
    title: 'IA para entidades financieras y fintechs',
    metaDescription:
      'Agentes conversacionales para atención y cobranzas, automatización de procesos operativos y ciberseguridad frente a ingeniería social para bancos, cajas y fintechs.',
    headline: 'IA para entidades financieras que necesitan atender mejor y proteger más.',
    challenges: [
      'Alto volumen de consultas de clientes.',
      'Procesos de cobranza y onboarding con muchos pasos manuales.',
      'Exposición a fraude y phishing.',
    ],
    whatWeDo: [
      'Agentes conversacionales para atención y cobranzas.',
      'Automatización de procesos operativos.',
      'Servicios de ciberseguridad frente a ataques de ingeniería social.',
    ],
    relatedCases: ['caja-metropolitana', 'redeban'],
  },
  {
    slug: 'automotriz',
    name: 'Automotriz',
    summary: 'Atención posventa, agendamiento, cotización y seguimiento de clientes.',
    title: 'IA para concesionarias y empresas automotrices',
    metaDescription:
      'Agentes conversacionales para atención y agendamiento de citas, integración con CRM y seguimiento automatizado de leads para concesionarias y empresas automotrices.',
    headline: 'IA para concesionarias y empresas automotrices que quieren vender y atender sin fricción.',
    challenges: [
      'Seguimiento de leads.',
      'Agendamiento de citas y posventa.',
      'Consultas repetitivas sobre unidades, precios y servicios.',
    ],
    whatWeDo: [
      'Agentes conversacionales para atención y agendamiento.',
      'Integración con CRM.',
      'Automatización del seguimiento a clientes.',
    ],
    relatedCases: ['ventabot'],
  },
  {
    slug: 'logistica',
    name: 'Logística',
    summary: 'Trazabilidad, tracking de carga y automatización de operaciones.',
    title: 'IA para logística: tracking de carga y automatización',
    metaDescription:
      'Tracking de carga por webchat alimentado con tus correos, automatización de procesos operativos e integración de datos para operadores logísticos.',
    headline: 'IA para operaciones logísticas que necesitan visibilidad y respuesta rápida.',
    challenges: [
      'Información de carga dispersa en correos y sistemas.',
      'Consultas constantes de clientes sobre el estado de sus envíos.',
      'Procesos operativos manuales.',
    ],
    whatWeDo: [
      'Tracking de carga por webchat alimentado con tus correos.',
      'Automatización de procesos operativos.',
      'Integración de datos.',
    ],
    relatedCases: ['primax'],
  },
]

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug)
