import type { IconName } from '@/components/Icon.astro'

export type Faq = { q: string; a: string }

export type Service = {
  slug: 'fabrica-con-ia' | 'automatizacion-con-ia' | 'ciberseguridad'
  name: string
  icon: IconName
  short: string
  cardCta: string
  title: string // <title>
  metaDescription: string
  promise: string
  lead: string
  secondaryCta: { label: string; href: string }
  audience: string
  problems: string[]
  deliverables: { title?: string; body: string }[]
  examples?: string[]
  steps: { title: string; body: string }[]
  faqs: Faq[]
  closing: string
  relatedCase?: string
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: 'fabrica-con-ia',
    icon: 'bot',
    name: 'Fábrica con IA',
    short:
      'Software y agentes a medida, construidos con IA y entregados por ciclos con alcance, fecha y precio acordados.',
    cardCta: 'Conoce la Fábrica',
    title: 'Fábrica con IA: software y agentes de IA a medida',
    metaDescription:
      'Desarrollo de agentes conversacionales y software a medida con IA en Perú, entregado por ciclos con alcance, fecha y precio acordados antes de empezar.',
    promise: 'Software y agentes de IA a medida, con alcance, fecha y precio acordados.',
    lead: 'Diseñamos y construimos las soluciones que tu empresa necesita, desde un agente conversacional hasta un sistema completo, y las entregamos por ciclos que puedes ver, probar y aprobar.',
    secondaryCta: { label: 'Ver casos', href: '/casos/' },
    audience:
      'Para gerentes de tecnología, innovación y operaciones de empresas que necesitan desarrollar un producto o una solución con IA y no quieren depender de un solo desarrollador ni de proyectos sin fecha de cierre.',
    problems: [
      'Proyectos de software que se alargan y sobrepasan el presupuesto.',
      'Ideas de IA que no pasan de la prueba de concepto.',
      'Equipos internos sin capacidad para construir agentes o integrarlos con los sistemas actuales.',
      'Dependencia de una sola persona o proveedor para mantener la solución.',
    ],
    deliverables: [
      {
        title: 'Agentes conversacionales',
        body: 'Para atención, ventas, cobranzas o soporte interno, con diseño conversacional especializado.',
      },
      {
        title: 'Software a medida con IA integrada',
        body: 'Aplicaciones web, paneles y sistemas internos.',
      },
      {
        title: 'Integraciones con tus sistemas actuales',
        body: 'Correo, CRM, ERP y canales como WhatsApp o webchat.',
      },
      {
        title: 'Documentación y traspaso',
        body: 'Para que tu equipo pueda operar y evolucionar la solución.',
      },
    ],
    steps: [
      { title: 'Diagnóstico', body: 'Definimos el problema, el alcance y el plan del primer ciclo.' },
      { title: 'Acuerdo', body: 'Fijamos por escrito qué se entrega, cuándo y a qué precio.' },
      { title: 'Ciclos de construcción', body: 'Cada ciclo termina con una entrega verificada que apruebas.' },
      { title: 'Puesta en marcha y mejora', body: 'Acompañamos el lanzamiento y medimos resultados.' },
    ],
    faqs: [
      {
        q: '¿Puedo empezar con algo pequeño?',
        a: 'Sí. Se puede empezar con un solo ciclo y crecer a partir de sus resultados.',
      },
      {
        q: '¿La IA reemplaza a un equipo de desarrollo?',
        a: 'No. La IA acelera lo repetitivo y verificable; las personas definen el alcance, deciden y aprueban.',
      },
    ],
    closing: '¿Tienes un proyecto en mente? Cuéntanos y te proponemos el plan del primer ciclo.',
    relatedCase: 'ventabot',
    keywords: ['desarrollo de agentes de IA', 'software a medida con IA', 'agentes conversacionales', 'chatbot WhatsApp empresas'],
  },
  {
    slug: 'automatizacion-con-ia',
    icon: 'flow',
    name: 'Automatización con IA',
    short:
      'Eliminamos tareas manuales y conectamos los sistemas que hoy no se hablan, un caso operativo a la vez.',
    cardCta: 'Conoce la Automatización',
    title: 'Automatización de procesos con IA para empresas',
    metaDescription:
      'Automatizamos un proceso de tu operación con IA, a precio acordado por caso y con ahorro medido: correos, planillas, CRM, ERP y canales de atención.',
    promise: 'Elimina las tareas manuales y conecta tus sistemas, un caso operativo a la vez.',
    lead: 'Automatizamos un proceso específico de tu operación con IA, a precio acordado por caso y con resultados que puedes medir desde el primer mes.',
    secondaryCta: { label: 'Calcula tu ahorro', href: '/diagnosticos/calculadora-ahorro/' },
    audience:
      'Para gerentes de operaciones, finanzas y tecnología cuyos equipos pierden horas en tareas repetitivas o en procesos que dependen de copiar datos entre sistemas.',
    problems: [
      'Procesos con pasos manuales que generan demoras y errores.',
      'Sistemas que no se conectan entre sí y obligan a reingresar información.',
      'Equipos que dedican su tiempo a consultas repetitivas en lugar de trabajo de valor.',
      'Información atrapada en correos, planillas o documentos.',
    ],
    deliverables: [
      {
        title: 'Un caso operativo automatizado de punta a punta',
        body: 'Con alcance y criterios de aceptación definidos.',
      },
      {
        title: 'Conexión entre tus sistemas',
        body: 'Por ejemplo correo, planillas, CRM, ERP y canales de atención.',
      },
      {
        title: 'Agentes que leen, clasifican y responden',
        body: 'Información que hoy se procesa a mano, como correos, solicitudes o consultas de clientes.',
      },
      {
        title: 'Medición del ahorro',
        body: 'Horas liberadas, errores evitados y tiempos de respuesta, antes y después.',
      },
    ],
    examples: [
      'Seguimiento de carga por webchat alimentado con los correos de tu operación.',
      'Respuesta automática de consultas frecuentes de clientes por WhatsApp o web.',
      'Clasificación y derivación de solicitudes que llegan por correo.',
      'Consolidación de datos de varios sistemas en un solo panel.',
    ],
    steps: [
      { title: 'Diagnóstico', body: 'Mapeamos el proceso y elegimos el caso con mayor retorno.' },
      { title: 'Acuerdo', body: 'Definimos alcance, fecha y precio del caso.' },
      { title: 'Construcción y pruebas', body: 'Automatizamos y validamos contigo con datos reales.' },
      { title: 'Operación y medición', body: 'Ponemos en marcha y medimos el ahorro obtenido.' },
    ],
    faqs: [
      {
        q: '¿Por dónde empiezo?',
        a: 'Por un solo proceso: el que más tiempo consume o más errores genera. El diagnóstico te ayuda a elegirlo.',
      },
      {
        q: '¿Necesito cambiar mis sistemas actuales?',
        a: 'No. Nos conectamos a lo que ya usas.',
      },
      {
        q: '¿Cómo sé cuánto voy a ahorrar?',
        a: 'Antes de empezar estimamos el ahorro con tus propios datos, y al cierre lo medimos. Puedes hacer un cálculo preliminar con nuestra calculadora gratuita.',
      },
    ],
    closing: '¿Qué proceso te quita más tiempo hoy? Cuéntanoslo y lo evaluamos contigo.',
    relatedCase: 'alicorp-rag-esg',
    keywords: ['automatización de procesos con IA', 'automatización con IA Perú', 'agentes de IA para operaciones', 'RPA con IA'],
  },
  {
    slug: 'ciberseguridad',
    icon: 'shield',
    name: 'Ciberseguridad',
    short:
      'Prevenimos, detectamos y respondemos a amenazas, incluidos ataques de phishing y otros ataques potenciados por IA.',
    cardCta: 'Conoce Ciberseguridad',
    title: 'Ciberseguridad frente a phishing y ataques con IA',
    metaDescription:
      'Prevención, respuesta a incidentes, simulaciones de phishing y diagnóstico de ciberseguridad para empresas frente a ataques potenciados por IA.',
    promise: 'Protege tu empresa de las amenazas que la IA ha vuelto más rápidas y más convincentes.',
    lead: 'Prevenimos, detectamos y respondemos a incidentes como el phishing, con alcance claro y tiempos de respuesta acordados.',
    secondaryCta: { label: 'Haz la autoevaluación', href: '/diagnosticos/ciberseguridad/' },
    audience:
      'Para gerencias generales, responsables de tecnología y de seguridad de empresas que quieren reducir su riesgo, o que ya sufrieron un incidente y necesitan responder y recuperarse.',
    problems: [
      'Ataques de phishing que engañan a colaboradores y comprometen cuentas.',
      'Falta de un plan claro para actuar cuando ocurre un incidente.',
      'Equipos que no saben reconocer correos, mensajes o llamadas fraudulentas.',
      'No saber qué tan expuesta está la empresa ni por dónde empezar a protegerla.',
    ],
    deliverables: [
      {
        title: 'Respuesta a incidentes',
        body: 'Contención, análisis de lo ocurrido, recuperación y plan para evitar que se repita.',
      },
      {
        title: 'Simulaciones de phishing y capacitación',
        body: 'Campañas controladas que miden quién cae y refuerzan el aprendizaje de tus colaboradores.',
      },
      {
        title: 'Diagnóstico de ciberseguridad',
        body: 'Mapa de riesgos y plan de acciones priorizado.',
      },
      {
        title: 'Informe claro',
        body: 'Recomendaciones accionables, ordenadas por prioridad.',
      },
    ],
    steps: [
      { title: 'Evaluación inicial', body: 'Entendemos tu entorno y definimos el alcance.' },
      { title: 'Plan y acuerdo', body: 'Fijamos qué se hará, cuándo y con qué tiempos de respuesta.' },
      { title: 'Ejecución', body: 'Respondemos, evaluamos o capacitamos, según el servicio.' },
      { title: 'Informe y seguimiento', body: 'Entregamos hallazgos, recomendaciones y verificamos las correcciones.' },
    ],
    faqs: [
      {
        q: '¿Qué hago si ya sufrí un ataque?',
        a: 'Escríbenos de inmediato. Contener el incidente a tiempo reduce el daño.',
      },
      {
        q: '¿Con qué frecuencia conviene simular phishing?',
        a: 'Una práctica recomendada es repetirlo de forma periódica, por ejemplo cada seis meses, para medir la mejora.',
      },
      {
        q: '¿La IA hace más peligrosos los ataques?',
        a: 'Sí: permite crear mensajes más convincentes y a mayor escala. Por eso combinamos tecnología y capacitación de las personas.',
      },
    ],
    closing: '¿Quieres saber qué tan expuesta está tu empresa? Haz la autoevaluación gratuita o agenda un diagnóstico.',
    keywords: ['ciberseguridad para empresas', 'simulación de phishing', 'respuesta a incidentes', 'phishing con IA'],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
