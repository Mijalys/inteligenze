// Datos de la empresa. Un campo en null no se publica: así la web nunca muestra
// datos por confirmar. Completa estos valores y vuelve a publicar.

export const site = {
  name: 'Inteligenze',
  url: 'https://inteligenze.com',
  locale: 'es-PE',
  tagline: 'IA aplicada. Resultados acordados.',
  description:
    'Inteligenze es una consultora de IA en Lima, Perú. Diseñamos agentes y software a medida, automatizamos procesos y reforzamos tu ciberseguridad, con alcance, fecha y precio acordados antes de empezar.',
  shortDescription:
    'Consultora de IA que construye, automatiza y protege con inteligencia artificial.',
  city: 'Lima',
  region: 'Lima',
  country: 'PE',
  countryName: 'Perú',
  foundingYearsExperience: 12,
  responseHours: 48,
  meetingMinutes: 30,
  // Pendientes: se muestran solo cuando tienen valor.
  email: null as string | null,
  whatsapp: null as string | null, // formato internacional sin espacios, ej. 51999999999
  calendarUrl: null as string | null,
  linkedinCompany: null as string | null,
  legalName: null as string | null,
  ruc: null as string | null,
  lastUpdated: '2026-11-11',
}

export const founder = {
  name: 'Mijalys Silva',
  role: 'CEO de Inteligenze',
  linkedin: 'https://www.linkedin.com/in/mijalysilvaux',
  portfolio: 'https://mijalys-silva.vercel.app',
}

export const nav = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Casos', href: '/casos/' },
  { label: 'Sectores', href: '/sectores/' },
  { label: 'Diagnósticos gratuitos', href: '/diagnosticos/' },
  { label: 'Nosotros', href: '/nosotros/' },
]

export const proof = [
  `Más de ${site.foundingYearsExperience} años liderando soluciones tecnológicas corporativas`,
  'Batch de Google for Startups (IA Generativa)',
  'Ex Wayra, Fundación Telefónica',
]

export const promise = [
  {
    title: 'Alcance acordado',
    body: 'Definimos contigo qué se entrega y con qué criterios de aceptación. Lo que no entre en un ciclo pasa al siguiente.',
  },
  {
    title: 'Fecha definida',
    body: 'La fecha de entrega se acuerda antes de empezar y se comunica con avances visibles durante todo el ciclo.',
  },
  {
    title: 'Precio acordado',
    body: 'Conoces el costo exacto de cada ciclo o caso antes de aprobarlo.',
  },
]

export const method = [
  {
    icon: 'search' as const,
    deliverable: 'Mapa del proyecto y prioridades',
    title: 'Diagnóstico',
    body: 'Entendemos tu negocio, tus procesos y tus riesgos, y priorizamos dónde la IA da resultados primero.',
  },
  {
    icon: 'contract' as const,
    deliverable: 'Alcance, fecha y precio por escrito',
    title: 'Acuerdo',
    body: 'Fijamos alcance, fecha y precio por escrito.',
  },
  {
    icon: 'build' as const,
    deliverable: 'Entregas que pruebas y apruebas',
    title: 'Construcción por ciclos',
    body: 'Entregamos avances que puedes ver, probar y aprobar en cada ciclo.',
  },
  {
    icon: 'chart' as const,
    deliverable: 'Resultados medidos',
    title: 'Operación y mejora',
    body: 'Acompañamos la puesta en marcha, medimos resultados y ajustamos.',
  },
]

export const homeFaqs = [
  {
    q: '¿Cuánto tarda un proyecto?',
    a: 'El plazo depende del alcance real. Primero hacemos un diagnóstico y luego acordamos la fecha de cada ciclo antes de empezar.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Cada ciclo o caso tiene un precio acordado antes de empezar, calculado en el diagnóstico. Dar una cifra antes sería una estimación sin respaldo.',
  },
  {
    q: '¿Qué es el diagnóstico inicial?',
    a: 'Es el mapa del proyecto: alcance, plan, riesgos y propuesta del primer ciclo con precio. Es tuyo aunque decidas no continuar.',
  },
  {
    q: '¿La IA reemplaza a las personas?',
    a: 'No. La IA hace lo repetitivo y verificable; las personas definen el alcance, deciden y aprueban.',
  },
  {
    q: '¿Qué involucramiento necesito de mi lado?',
    a: 'Defines qué necesitas y apruebas cada entrega. Nosotros decidimos cómo construirlo y te mostramos el avance durante todo el ciclo.',
  },
  {
    q: '¿Qué pasa si una entrega no cumple lo acordado?',
    a: 'Cada alcance tiene criterios de aceptación claros. Si una entrega no los cumple, la corregimos.',
  },
  {
    q: '¿Cómo protegen mis datos?',
    a: 'Trabajamos con acuerdos de confidencialidad y buenas prácticas de seguridad desde el diseño.',
  },
]
