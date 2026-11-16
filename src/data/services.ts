// Catálogo de servicios: 4 familias, cada una con sus servicios específicos.
// Textos escaneables: frases cortas, una idea por línea, sin promesas que no podamos cumplir.
import type { IconName } from '@/components/Icon.astro'

export type Faq = { q: string; a: string }
export type Step = { title: string; body: string }

/** Un servicio específico dentro de una familia (página /servicios/<familia>/<servicio>/) */
export type SubService = {
  slug: string
  name: string
  icon: IconName
  short: string
  title: string
  metaDescription: string
  promise: string
  /** "En 30 segundos": tres líneas que resumen el servicio */
  summary: [string, string, string]
  audience: string
  problems: string[]
  includes: string[]
  deliverables: string[]
  faqs: Faq[]
  keywords: string[]
  relatedCase?: string
}

/** Una familia de servicios (página /servicios/<familia>/) */
export type Service = {
  slug: 'desarrollo-de-software' | 'automatizaciones' | 'ciberseguridad' | 'staffing'
  name: string
  icon: IconName
  short: string
  cardCta: string
  title: string
  metaDescription: string
  promise: string
  lead: string
  secondaryCta: { label: string; href: string }
  audience: string
  problems: string[]
  deliverables: { title?: string; body: string }[]
  examples?: string[]
  steps: Step[]
  faqs: Faq[]
  closing: string
  relatedCase?: string
  keywords: string[]
  items: SubService[]
}

const buildSteps: Step[] = [
  { title: 'Diagnóstico', body: 'Definimos el problema, el alcance y el plan del primer ciclo.' },
  { title: 'Acuerdo', body: 'Fijamos por escrito qué se entrega, cuándo y a qué precio.' },
  { title: 'Ciclos de construcción', body: 'Cada ciclo termina con una entrega que pruebas y apruebas.' },
  { title: 'Puesta en marcha', body: 'Acompañamos el lanzamiento y medimos resultados.' },
]
const automationSteps: Step[] = [
  { title: 'Diagnóstico', body: 'Mapeamos el proceso y elegimos el caso con mayor retorno.' },
  { title: 'Acuerdo', body: 'Definimos alcance, fecha y precio del caso.' },
  { title: 'Construcción y pruebas', body: 'Automatizamos y validamos contigo con datos reales.' },
  { title: 'Operación y medición', body: 'Ponemos en marcha y medimos el ahorro.' },
]
const securitySteps: Step[] = [
  { title: 'Alcance', body: 'Acordamos qué se evalúa, cuándo y con qué reglas.' },
  { title: 'Ejecución', body: 'Probamos, simulamos o respondemos según el servicio.' },
  { title: 'Informe', body: 'Hallazgos ordenados por riesgo, con pasos para corregirlos.' },
  { title: 'Verificación', body: 'Revisamos que las correcciones funcionen.' },
]
const staffingSteps: Step[] = [
  { title: 'Perfil', body: 'Definimos contigo el rol, el nivel y la duración.' },
  { title: 'Selección', body: 'Te presentamos candidatos evaluados para que elijas.' },
  { title: 'Integración', body: 'La persona se suma a tu equipo y a tus rituales de trabajo.' },
  { title: 'Seguimiento', body: 'Revisamos el desempeño contigo de forma periódica.' },
]

export const services: Service[] = [
  // ───────────────────────── Desarrollo de Software
  {
    slug: 'desarrollo-de-software',
    name: 'Desarrollo de Software',
    icon: 'code',
    short: 'Agentes de IA, software a medida y diseño de producto, entregados por ciclos con alcance, fecha y precio acordados.',
    cardCta: 'Ver Desarrollo de Software',
    title: 'Desarrollo de software y agentes de IA a medida',
    metaDescription:
      'Agentes de IA, software a medida y diseño de producto digital en Perú, entregados por ciclos con alcance, fecha y precio acordados.',
    promise: 'Software y agentes de IA a medida, con alcance, fecha y precio acordados.',
    lead: 'Diseñamos y construimos desde un agente conversacional hasta un sistema completo. Lo entregamos por ciclos que puedes ver, probar y aprobar.',
    secondaryCta: { label: 'Ver casos', href: '/casos/' },
    audience:
      'Gerencias de tecnología, innovación y operaciones que necesitan un producto con IA y no quieren proyectos sin fecha de cierre.',
    problems: [
      'Proyectos que se alargan y sobrepasan el presupuesto.',
      'Ideas de IA que no pasan de la prueba de concepto.',
      'Equipos sin capacidad para construir o integrar agentes.',
      'Dependencia de una sola persona para mantener la solución.',
    ],
    deliverables: [
      { title: 'Agentes de IA', body: 'Para atención, ventas, cobranzas o soporte interno.' },
      { title: 'Software a medida', body: 'Aplicaciones web, paneles y sistemas internos.' },
      { title: 'Diseño de producto', body: 'Experiencia de usuario, interfaces y design system.' },
      { title: 'Documentación y traspaso', body: 'Para que tu equipo opere y evolucione la solución.' },
    ],
    steps: buildSteps,
    faqs: [
      { q: '¿Puedo empezar con algo pequeño?', a: 'Sí. Se empieza con un solo ciclo y se crece según sus resultados.' },
      { q: '¿La IA reemplaza a un equipo de desarrollo?', a: 'No. La IA acelera lo repetitivo; las personas definen, deciden y aprueban.' },
    ],
    closing: '¿Tienes un proyecto en mente? Te proponemos el plan del primer ciclo.',
    relatedCase: 'ventabot',
    keywords: ['desarrollo de software con IA', 'agentes de IA', 'software a medida Perú'],
    items: [
      {
        slug: 'agentes-de-ia',
        name: 'Agentes de IA y chatbots',
        icon: 'bot',
        short: 'Agentes que atienden, venden y resuelven por WhatsApp o web, y pasan a una persona cuando hace falta.',
        title: 'Agentes de IA y chatbots para WhatsApp y web',
        metaDescription:
          'Agentes de IA para WhatsApp y web que atienden, venden y califican clientes, integrados a tus sistemas y con traspaso a una persona.',
        promise: 'Agentes de IA que atienden a tus clientes y te pasan los que están listos.',
        summary: [
          'Atienden por WhatsApp, webchat u otros canales.',
          'Responden, califican y ejecutan pasos del proceso.',
          'Escalan a una persona con todo el contexto.',
        ],
        audience: 'Áreas de ventas, atención al cliente y cobranzas con alto volumen de consultas.',
        problems: [
          'Clientes que esperan horas por una respuesta.',
          'Equipos saturados con preguntas repetidas.',
          'Leads que se enfrían antes de que alguien los atienda.',
        ],
        includes: [
          'Diseño conversacional: qué dice el agente y cuándo escala.',
          'Conexión a tu catálogo, CRM o base de conocimiento.',
          'Panel para que tu equipo vea y tome las conversaciones.',
          'Reglas claras de lo que el agente puede y no puede hacer.',
        ],
        deliverables: ['Agente en producción en el canal acordado', 'Panel de conversaciones', 'Registro de lo que hizo el agente'],
        faqs: [
          { q: '¿En qué canales funciona?', a: 'WhatsApp, webchat de tu sitio y otros canales que acordemos en el diagnóstico.' },
          { q: '¿Qué pasa si el agente no sabe responder?', a: 'Escala la conversación a una persona de tu equipo, con el historial completo.' },
        ],
        keywords: ['chatbot WhatsApp para empresas', 'agente de IA', 'asistente virtual'],
        relatedCase: 'ventabot',
      },
      {
        slug: 'software-a-medida',
        name: 'Software a medida con IA',
        icon: 'code',
        short: 'Aplicaciones web, paneles y sistemas internos con IA integrada, construidos por ciclos.',
        title: 'Desarrollo de software a medida con IA',
        metaDescription:
          'Aplicaciones web, paneles y sistemas internos con IA integrada, desarrollados por ciclos con alcance, fecha y precio acordados.',
        promise: 'El sistema que tu operación necesita, con la IA donde aporta.',
        summary: ['Aplicaciones web, paneles y sistemas internos.', 'IA integrada donde ahorra tiempo o mejora decisiones.', 'Código y documentación que quedan en tu empresa.'],
        audience: 'Empresas que necesitan una herramienta propia y no encuentran una que se adapte a su proceso.',
        problems: ['Procesos que viven en planillas que nadie controla.', 'Sistemas antiguos difíciles de cambiar.', 'Proveedores que entregan tarde y sin documentación.'],
        includes: ['Definición de alcance y criterios de aceptación.', 'Diseño de la experiencia de usuario.', 'Desarrollo por ciclos con entregas verificables.', 'Documentación y traspaso a tu equipo.'],
        deliverables: ['Aplicación en producción', 'Código fuente y documentación', 'Plan de evolución'],
        faqs: [
          { q: '¿De quién es el código?', a: 'Lo definimos por escrito en el acuerdo, antes de empezar.' },
          { q: '¿Cuánto tarda?', a: 'Depende del alcance. Cada ciclo tiene fecha acordada desde el inicio.' },
        ],
        keywords: ['software a medida', 'desarrollo web Perú', 'sistemas internos con IA'],
      },
      {
        slug: 'diseno-de-producto',
        name: 'Diseño de producto digital',
        icon: 'pen',
        short: 'Experiencia de usuario, interfaces y design systems para productos financieros y de IA.',
        title: 'Diseño de producto digital, UX/UI y design systems',
        metaDescription:
          'Diseño de experiencia de usuario, interfaces y design systems para banca, pagos y productos con IA, del descubrimiento a producción.',
        promise: 'Productos que la gente entiende y usa, del descubrimiento a producción.',
        summary: ['Investigación de usuarios y flujos.', 'Interfaces y design systems.', 'Acompañamiento hasta producción.'],
        audience: 'Equipos de producto en banca, pagos y empresas que lanzan productos digitales o con IA.',
        problems: ['Usuarios que llaman porque no entienden la app.', 'Pantallas inconsistentes entre equipos.', 'Diseños que no llegan igual a producción.'],
        includes: ['Investigación y arquetipos de usuario.', 'Arquitectura de información y flujos.', 'Diseño de interfaces multidispositivo.', 'Design system con componentes y reglas.'],
        deliverables: ['Flujos y prototipos navegables', 'Interfaces listas para desarrollo', 'Design system documentado'],
        faqs: [
          { q: '¿Trabajan con nuestro equipo de desarrollo?', a: 'Sí. Acompañamos la implementación para que el diseño llegue igual a producción.' },
          { q: '¿Tienen experiencia en sectores regulados?', a: 'Sí, en banca y pagos. Puedes ver los casos en nuestra trayectoria.' },
        ],
        keywords: ['diseño UX UI', 'design system', 'diseño de producto fintech'],
        relatedCase: 'caja-metropolitana',
      },
    ],
  },

  // ───────────────────────── Automatizaciones
  {
    slug: 'automatizaciones',
    name: 'Automatizaciones',
    icon: 'flow',
    short: 'Eliminamos tareas manuales y conectamos los sistemas que hoy no se hablan, un caso operativo a la vez.',
    cardCta: 'Ver Automatizaciones',
    title: 'Automatización de procesos con IA para empresas',
    metaDescription:
      'Automatización de procesos con IA, integración de sistemas y lectura de documentos y correos, a precio acordado por caso y con ahorro medido.',
    promise: 'Elimina las tareas manuales y conecta tus sistemas, un caso a la vez.',
    lead: 'Automatizamos un proceso específico de tu operación, a precio acordado por caso y con resultados que mides desde el primer mes.',
    secondaryCta: { label: 'Calcula tu ahorro', href: '/diagnosticos/calculadora-ahorro/' },
    audience: 'Gerencias de operaciones, finanzas y tecnología con equipos que pierden horas en tareas repetitivas.',
    problems: [
      'Pasos manuales que generan demoras y errores.',
      'Sistemas que obligan a reingresar información.',
      'Equipos ocupados en consultas repetitivas.',
      'Información atrapada en correos, planillas o documentos.',
    ],
    deliverables: [
      { title: 'Un caso automatizado de punta a punta', body: 'Con alcance y criterios de aceptación.' },
      { title: 'Sistemas conectados', body: 'Correo, planillas, CRM, ERP y canales de atención.' },
      { title: 'Agentes que leen y clasifican', body: 'Correos, solicitudes y documentos.' },
      { title: 'Ahorro medido', body: 'Horas liberadas y errores evitados, antes y después.' },
    ],
    examples: [
      'Seguimiento de carga por webchat alimentado con tus correos.',
      'Respuesta automática a consultas frecuentes por WhatsApp o web.',
      'Clasificación y derivación de solicitudes que llegan por correo.',
      'Datos de varios sistemas en un solo panel.',
    ],
    steps: automationSteps,
    faqs: [
      { q: '¿Por dónde empiezo?', a: 'Por el proceso que más tiempo consume o más errores genera. El diagnóstico te ayuda a elegirlo.' },
      { q: '¿Tengo que cambiar mis sistemas?', a: 'No. Nos conectamos a lo que ya usas.' },
      { q: '¿Cómo sé cuánto voy a ahorrar?', a: 'Lo estimamos con tus datos antes de empezar y lo medimos al cerrar el caso.' },
    ],
    closing: '¿Qué proceso te quita más tiempo hoy? Lo evaluamos contigo.',
    relatedCase: 'alicorp-rag-esg',
    keywords: ['automatización de procesos con IA', 'automatización Perú', 'integración de sistemas'],
    items: [
      {
        slug: 'automatizacion-de-procesos',
        name: 'Automatización de procesos',
        icon: 'flow',
        short: 'Un proceso operativo automatizado de punta a punta, con precio por caso y ahorro medido.',
        title: 'Automatización de procesos con IA',
        metaDescription:
          'Automatizamos un proceso operativo de punta a punta con IA, con precio acordado por caso y ahorro medido en horas y errores.',
        promise: 'Un proceso menos que hacer a mano, con el ahorro medido.',
        summary: ['Elegimos el proceso con mayor retorno.', 'Lo automatizamos de punta a punta.', 'Medimos horas y errores, antes y después.'],
        audience: 'Operaciones, finanzas y backoffice con tareas repetitivas y de alto volumen.',
        problems: ['Personas copiando datos entre sistemas.', 'Aprobaciones que se traban en bandejas de correo.', 'Errores de digitación que cuestan dinero.'],
        includes: ['Mapa del proceso actual y sus cuellos de botella.', 'Diseño del flujo automatizado con sus excepciones.', 'Construcción y pruebas con datos reales.', 'Medición del ahorro al cierre.'],
        deliverables: ['Proceso automatizado en producción', 'Manual de operación', 'Informe de ahorro'],
        faqs: [
          { q: '¿Qué pasa con los casos raros?', a: 'Se definen como excepciones y pasan a una persona.' },
          { q: '¿Con qué herramientas trabajan?', a: 'Elegimos la herramienta según tu proceso y tus sistemas, no al revés.' },
        ],
        keywords: ['automatización de procesos', 'RPA con IA', 'automatizar tareas repetitivas'],
      },
      {
        slug: 'integracion-de-sistemas',
        name: 'Integración de sistemas',
        icon: 'plug',
        short: 'Conectamos correo, planillas, CRM, ERP y canales para que la información fluya sola.',
        title: 'Integración de sistemas: CRM, ERP, correo y planillas',
        metaDescription:
          'Conectamos tu CRM, ERP, correo, planillas y canales de atención para eliminar el reingreso de datos y tener la información en un solo lugar.',
        promise: 'Tus sistemas conectados y la información en un solo lugar.',
        summary: ['Conectamos los sistemas que ya usas.', 'Eliminamos el reingreso de datos.', 'Un solo panel para ver la operación.'],
        audience: 'Empresas con varios sistemas que no se comunican entre sí.',
        problems: ['La misma información en tres sistemas distintos.', 'Reportes armados a mano cada semana.', 'Datos desactualizados al momento de decidir.'],
        includes: ['Inventario de sistemas y datos.', 'Conexiones entre sistemas con sus reglas.', 'Panel consolidado.', 'Alertas cuando algo falla.'],
        deliverables: ['Integraciones en producción', 'Panel consolidado', 'Documentación de cada conexión'],
        faqs: [
          { q: '¿Funciona con sistemas antiguos?', a: 'En la mayoría de casos sí. Lo confirmamos en el diagnóstico.' },
          { q: '¿Qué pasa si un sistema cambia?', a: 'Las alertas avisan del fallo y el ajuste se acuerda como un nuevo caso.' },
        ],
        keywords: ['integración de sistemas', 'integrar CRM y ERP', 'conectar sistemas'],
      },
      {
        slug: 'ia-para-documentos',
        name: 'IA para documentos y correos',
        icon: 'doc',
        short: 'Agentes que leen, clasifican y responden correos, solicitudes y documentos.',
        title: 'IA para leer y clasificar documentos y correos',
        metaDescription:
          'Agentes de IA que leen, clasifican y responden correos, solicitudes y documentos, y búsqueda inteligente sobre tu información interna.',
        promise: 'Que la IA lea lo que hoy tu equipo procesa a mano.',
        summary: ['Lee y clasifica correos y documentos.', 'Extrae los datos y los lleva a tus sistemas.', 'Responde preguntas sobre tu información interna.'],
        audience: 'Equipos que procesan muchos documentos, correos o solicitudes cada día.',
        problems: ['Bandejas de correo que nadie alcanza a leer.', 'Datos que se copian a mano desde PDFs.', 'Información interna difícil de encontrar.'],
        includes: ['Clasificación y derivación automática.', 'Extracción de datos de documentos.', 'Búsqueda y respuestas sobre tu información (RAG).', 'Revisión humana en los casos dudosos.'],
        deliverables: ['Agente en producción', 'Reglas de clasificación y revisión', 'Registro de lo procesado'],
        faqs: [
          { q: '¿Qué tan confiable es?', a: 'Definimos un umbral: lo que el agente no resuelve con seguridad pasa a una persona.' },
          { q: '¿Mis documentos salen de mi empresa?', a: 'Acordamos qué datos se usan y en qué servicios antes de empezar.' },
        ],
        keywords: ['IA para documentos', 'RAG', 'clasificación de correos con IA'],
        relatedCase: 'alicorp-rag-esg',
      },
    ],
  },

  // ───────────────────────── Ciberseguridad
  {
    slug: 'ciberseguridad',
    name: 'Ciberseguridad',
    icon: 'shield',
    short: 'Ethical hacking, pentesting, simulaciones de phishing, red team, bug bounty y respuesta a incidentes.',
    cardCta: 'Ver Ciberseguridad',
    title: 'Ciberseguridad: pentesting, phishing y respuesta a incidentes',
    metaDescription:
      'Ethical hacking, pruebas de penetración, simulaciones de phishing, red team, bug bounty y respuesta a incidentes para empresas.',
    promise: 'Encuentra tus vulnerabilidades antes que los atacantes.',
    lead: 'Evaluamos tus aplicaciones, tu red y a tus personas con las mismas técnicas de un atacante, y te ayudamos a responder si ya ocurrió un incidente.',
    secondaryCta: { label: 'Haz la autoevaluación', href: '/diagnosticos/ciberseguridad/' },
    audience: 'Gerencias generales, de tecnología y de seguridad que quieren reducir su riesgo o responder a un incidente.',
    problems: [
      'No saber qué tan expuesta está la empresa.',
      'Ataques de phishing cada vez más convincentes por la IA.',
      'Aplicaciones y APIs que nunca se probaron a fondo.',
      'Falta de un plan claro cuando ocurre un incidente.',
    ],
    deliverables: [
      { title: 'Informe de hallazgos', body: 'Ordenados por riesgo, con evidencia.' },
      { title: 'Plan de corrección', body: 'Qué arreglar primero y cómo.' },
      { title: 'Verificación', body: 'Comprobamos que las correcciones funcionen.' },
      { title: 'Resumen ejecutivo', body: 'Para la gerencia, en lenguaje claro.' },
    ],
    steps: securitySteps,
    faqs: [
      { q: '¿Qué hago si ya sufrí un ataque?', a: 'Escríbenos de inmediato: contener a tiempo reduce el daño.' },
      { q: '¿Las pruebas afectan mi operación?', a: 'Se acuerdan reglas, horarios y alcance por escrito para evitarlo.' },
      { q: '¿Cómo manejan lo que encuentran?', a: 'Con acuerdos de confidencialidad firmados antes de empezar.' },
    ],
    closing: '¿Quieres saber qué tan expuesta está tu empresa? Empieza con la autoevaluación gratuita.',
    keywords: ['ciberseguridad para empresas', 'pentesting Perú', 'ethical hacking'],
    items: [
      {
        slug: 'ethical-hacking',
        name: 'Ethical hacking',
        icon: 'bug',
        short: 'Identificamos y te ayudamos a corregir vulnerabilidades en aplicaciones críticas, APIs, apps móviles y sitios web.',
        title: 'Ethical hacking de aplicaciones, APIs y sitios web',
        metaDescription:
          'Servicio de ethical hacking para identificar y corregir vulnerabilidades en aplicaciones de misión crítica, APIs, apps móviles y sitios web.',
        promise: 'Descubre las fallas de tus aplicaciones antes que un atacante.',
        summary: ['Aplicaciones web, APIs y apps móviles.', 'Vulnerabilidades ordenadas por riesgo.', 'Acompañamiento para corregirlas.'],
        audience: 'Empresas con aplicaciones, APIs o sitios que manejan datos o dinero de clientes.',
        problems: ['Aplicaciones lanzadas sin pruebas de seguridad.', 'APIs expuestas a internet sin revisión.', 'Requisitos de auditoría o de clientes.'],
        includes: ['Definición del alcance y reglas de la prueba.', 'Pruebas manuales y automatizadas.', 'Informe técnico con evidencia.', 'Resumen ejecutivo para la gerencia.'],
        deliverables: ['Informe de vulnerabilidades', 'Recomendaciones de corrección', 'Re-test de lo corregido'],
        faqs: [
          { q: '¿En qué se diferencia de un pentest?', a: 'El ethical hacking se enfoca en encontrar fallas en aplicaciones; el pentest simula un ataque real a un objetivo.' },
          { q: '¿Cada cuánto conviene hacerlo?', a: 'Antes de cada lanzamiento importante y al menos una vez al año.' },
        ],
        keywords: ['ethical hacking', 'seguridad de aplicaciones', 'pruebas de seguridad API'],
      },
      {
        slug: 'pentesting',
        name: 'Pruebas de penetración',
        icon: 'mask',
        short: 'Usamos las herramientas y técnicas de un atacante real para medir cuánto podría avanzar dentro de tu empresa.',
        title: 'Pruebas de penetración (pentesting) para empresas',
        metaDescription:
          'Pruebas de penetración que replican un ataque real con las técnicas de los ciber adversarios, con informe de hallazgos y plan de corrección.',
        promise: 'Mide tu seguridad con un ataque real, controlado.',
        summary: ['Replica las condiciones de un ataque genuino.', 'Red interna, externa o aplicaciones.', 'Hallazgos con su ruta de ataque.'],
        audience: 'Empresas que necesitan saber hasta dónde llegaría un atacante.',
        problems: ['Controles que nunca se pusieron a prueba.', 'Auditorías que exigen un pentest vigente.', 'Cambios recientes en la infraestructura.'],
        includes: ['Alcance, reglas y ventanas de prueba acordadas.', 'Reconocimiento, explotación y movimiento lateral.', 'Informe con rutas de ataque y evidencia.', 'Sesión de cierre con tu equipo.'],
        deliverables: ['Informe técnico y ejecutivo', 'Plan de corrección priorizado', 'Re-test'],
        faqs: [
          { q: '¿Puede afectar mis sistemas?', a: 'Las pruebas se hacen en ventanas y con reglas acordadas para minimizar el riesgo.' },
          { q: '¿Caja negra, gris o blanca?', a: 'Lo definimos en el alcance según lo que quieras medir.' },
        ],
        keywords: ['pentesting', 'pruebas de penetración', 'pentest Perú'],
      },
      {
        slug: 'phishing-as-a-service',
        name: 'Phishing as a Service',
        icon: 'mail',
        short: 'Campañas de phishing simulado, como las de un ataque real, para medir y entrenar a tus colaboradores.',
        title: 'Phishing as a Service: simulaciones de phishing',
        metaDescription:
          'Programa de campañas de phishing simulado en un entorno seguro y controlado para medir y reducir el riesgo de tus colaboradores.',
        promise: 'Mide quién cae en el phishing y entrena a tu equipo para que no pase.',
        summary: ['Campañas simuladas en un entorno controlado.', 'Medición por área y por campaña.', 'Capacitación para quien cae.'],
        audience: 'Empresas cuyos colaboradores reciben correos, mensajes o llamadas de terceros.',
        problems: ['Correos fraudulentos cada vez más convincentes.', 'Cuentas comprometidas por un solo clic.', 'No saber qué áreas son más vulnerables.'],
        includes: ['Campañas por correo y otros canales acordados.', 'Escenarios realistas, incluidos los creados con IA.', 'Panel de resultados por área.', 'Microcapacitación inmediata.'],
        deliverables: ['Resultados por campaña y área', 'Plan de capacitación', 'Comparativo entre campañas'],
        faqs: [
          { q: '¿Cada cuánto conviene?', a: 'De forma periódica, por ejemplo cada seis meses, para medir la mejora.' },
          { q: '¿Se expone a los colaboradores?', a: 'No. Los resultados sirven para capacitar, no para sancionar.' },
        ],
        keywords: ['simulación de phishing', 'phishing as a service', 'concientización en ciberseguridad'],
      },
      {
        slug: 'red-team',
        name: 'Red Team',
        icon: 'target',
        short: 'Evaluaciones especializadas que buscan comprometer tus activos críticos como lo haría un adversario.',
        title: 'Servicios de Red Team para empresas',
        metaDescription:
          'Evaluaciones de Red Team que buscan comprometer los activos de datos críticos de tu red, con el alcance amplio de un adversario real.',
        promise: 'Pon a prueba toda tu defensa, no solo un sistema.',
        summary: ['Objetivo: tus activos más críticos.', 'Técnicas digitales, físicas y de ingeniería social.', 'Mide también tu capacidad de detección.'],
        audience: 'Organizaciones con un área de seguridad que quiere medir su detección y respuesta.',
        problems: ['Controles probados por separado, nunca en conjunto.', 'Dudas sobre si el equipo detectaría un ataque real.', 'Exigencias de reguladores o del directorio.'],
        includes: ['Objetivos y reglas acordadas con la dirección.', 'Simulación de un adversario de punta a punta.', 'Medición de detección y respuesta.', 'Informe y sesión de lecciones aprendidas.'],
        deliverables: ['Informe de la operación', 'Brechas de detección', 'Plan de mejora'],
        faqs: [
          { q: '¿En qué se diferencia de un pentest?', a: 'El Red Team mide la defensa completa, incluida la detección; el pentest se centra en encontrar vulnerabilidades.' },
          { q: '¿Quién se entera?', a: 'Solo un grupo reducido que se acuerda con la dirección.' },
        ],
        keywords: ['red team', 'simulación de adversario', 'evaluación de seguridad'],
      },
      {
        slug: 'bug-bounty',
        name: 'Bug Bounty',
        icon: 'scope',
        short: 'Programas privados donde investigadores de seguridad autorizados buscan vulnerabilidades en tus sistemas.',
        title: 'Programas de Bug Bounty privados',
        metaDescription:
          'Programas privados de bug bounty donde investigadores de seguridad autorizados buscan vulnerabilidades para ampliar tu capacidad de detección.',
        promise: 'Más ojos expertos buscando fallas, con reglas claras.',
        summary: ['Programa privado con reglas definidas.', 'Investigadores autorizados buscan fallas.', 'Pagas por hallazgos válidos.'],
        audience: 'Empresas con productos digitales en producción que quieren pruebas continuas.',
        problems: ['Pruebas de seguridad solo una vez al año.', 'Nuevas funciones que salen sin revisión.', 'Capacidad interna limitada para buscar fallas.'],
        includes: ['Diseño del programa, alcance y recompensas.', 'Gestión de los reportes recibidos.', 'Validación y priorización de hallazgos.', 'Seguimiento de las correcciones.'],
        deliverables: ['Programa activo', 'Hallazgos validados', 'Reportes periódicos'],
        faqs: [
          { q: '¿Es público?', a: 'No. Es un programa privado con participantes autorizados.' },
          { q: '¿Cómo se controla el costo?', a: 'Con un presupuesto y una tabla de recompensas acordados antes de empezar.' },
        ],
        keywords: ['bug bounty', 'programa de recompensas por vulnerabilidades', 'pruebas continuas de seguridad'],
      },
      {
        slug: 'respuesta-a-incidentes',
        name: 'Respuesta a incidentes',
        icon: 'alert',
        short: 'Te ayudamos a contener un ciberataque, recuperarte y mejorar tu gestión de incidentes.',
        title: 'Respuesta a incidentes de ciberseguridad',
        metaDescription:
          'Apoyo para responder rápido a ciberataques: contención, análisis, recuperación y mejora de tus procesos de gestión de incidentes.',
        promise: 'Contén el incidente, recupérate y evita que se repita.',
        summary: ['Contención del ataque.', 'Análisis de lo ocurrido.', 'Recuperación y plan para que no se repita.'],
        audience: 'Empresas que sufren o sospechan un incidente, o que quieren prepararse para uno.',
        problems: ['Cuentas o sistemas comprometidos.', 'No saber qué datos se vieron afectados.', 'Ausencia de un plan de respuesta.'],
        includes: ['Contención y priorización inmediata.', 'Análisis de causa y alcance.', 'Acompañamiento en la recuperación.', 'Plan y procesos de gestión de incidentes.'],
        deliverables: ['Informe del incidente', 'Acciones de recuperación', 'Plan de respuesta para el futuro'],
        faqs: [
          { q: '¿Qué hago primero?', a: 'No apagues ni borres nada, y escríbenos de inmediato.' },
          { q: '¿Pueden ayudarnos a prepararnos antes?', a: 'Sí. Diseñamos el plan y los procesos para responder mejor.' },
        ],
        keywords: ['respuesta a incidentes', 'ciberataque qué hacer', 'gestión de incidentes'],
      },
    ],
  },

  // ───────────────────────── Staffing
  {
    slug: 'staffing',
    name: 'Staffing',
    icon: 'users',
    short: 'Profesionales de tecnología e IA que se suman a tu equipo, por persona o como célula completa.',
    cardCta: 'Ver Staffing',
    title: 'Staffing de tecnología e IA: profesionales y equipos',
    metaDescription:
      'Staff augmentation y equipos dedicados de tecnología e IA que se integran a tu empresa: desarrollo, datos, diseño, QA y ciberseguridad.',
    promise: 'El talento de tecnología que te falta, sumado a tu equipo.',
    lead: 'Incorporamos profesionales o equipos completos que trabajan con tus procesos y tus herramientas, con seguimiento continuo.',
    secondaryCta: { label: 'Cuéntanos qué perfil buscas', href: '/contacto/' },
    audience: 'Gerencias de tecnología que necesitan crecer su equipo rápido o cubrir perfiles especializados.',
    problems: [
      'Procesos de selección largos para perfiles escasos.',
      'Proyectos detenidos por falta de personas.',
      'Necesidad de perfiles de IA que no hay en el equipo.',
    ],
    deliverables: [
      { title: 'Perfiles evaluados', body: 'Candidatos que tú eliges.' },
      { title: 'Integración', body: 'Se suman a tus rituales y herramientas.' },
      { title: 'Seguimiento', body: 'Revisión periódica del desempeño.' },
      { title: 'Flexibilidad', body: 'El equipo crece o se ajusta según el proyecto.' },
    ],
    steps: staffingSteps,
    faqs: [
      { q: '¿Qué perfiles cubren?', a: 'Desarrollo, datos e IA, diseño UX/UI, QA y ciberseguridad. Lo confirmamos según tu necesidad.' },
      { q: '¿Las personas trabajan remoto?', a: 'Se acuerda según tu equipo: remoto, híbrido o presencial.' },
    ],
    closing: '¿Qué perfil necesitas sumar? Cuéntanos y te presentamos candidatos.',
    keywords: ['staff augmentation Perú', 'outsourcing de TI', 'equipos de desarrollo dedicados'],
    items: [
      {
        slug: 'staff-augmentation',
        name: 'Staff augmentation',
        icon: 'users',
        short: 'Profesionales que se suman a tu equipo y trabajan con tus procesos y herramientas.',
        title: 'Staff augmentation de tecnología e IA',
        metaDescription:
          'Profesionales de desarrollo, datos e IA, diseño, QA y ciberseguridad que se integran a tu equipo con seguimiento continuo.',
        promise: 'Suma la persona que te falta, sin un proceso de selección eterno.',
        summary: ['Perfiles evaluados por especialistas.', 'Se integran a tu equipo y tus rituales.', 'Seguimiento continuo del desempeño.'],
        audience: 'Equipos de tecnología que necesitan cubrir un rol específico por un periodo.',
        problems: ['Vacantes que tardan meses en cubrirse.', 'Picos de trabajo temporales.', 'Perfiles de IA difíciles de encontrar.'],
        includes: ['Definición del perfil contigo.', 'Evaluación técnica de candidatos.', 'Incorporación al equipo.', 'Seguimiento periódico.'],
        deliverables: ['Candidatos evaluados', 'Profesional integrado', 'Reportes de seguimiento'],
        faqs: [
          { q: '¿Quién dirige el trabajo?', a: 'Tu equipo. La persona se suma a tus prioridades y procesos.' },
          { q: '¿Qué pasa si no encaja?', a: 'Lo revisamos contigo y buscamos un reemplazo.' },
        ],
        keywords: ['staff augmentation', 'contratar desarrolladores', 'talento TI'],
      },
      {
        slug: 'equipos-dedicados',
        name: 'Equipos dedicados',
        icon: 'team',
        short: 'Células completas, con roles complementarios, enfocadas en tu producto o proyecto.',
        title: 'Equipos dedicados de desarrollo e IA',
        metaDescription:
          'Células ágiles dedicadas con desarrollo, diseño, QA y datos e IA, enfocadas en tu producto, con una forma de trabajo acordada.',
        promise: 'Un equipo completo trabajando en tu producto.',
        summary: ['Célula con roles complementarios.', 'Enfocada en tu producto o proyecto.', 'Forma de trabajo y entregas acordadas.'],
        audience: 'Empresas que quieren lanzar o acelerar un producto sin armar el equipo desde cero.',
        problems: ['Productos que no avanzan por falta de equipo.', 'Coordinar a muchos proveedores distintos.', 'Necesidad de arrancar rápido.'],
        includes: ['Composición del equipo según el objetivo.', 'Forma de trabajo y ceremonias acordadas.', 'Entregas periódicas visibles.', 'Ajuste del equipo según la etapa.'],
        deliverables: ['Equipo operando', 'Entregas por iteración', 'Reportes de avance'],
        faqs: [
          { q: '¿En qué se diferencia de un proyecto cerrado?', a: 'El equipo trabaja de forma continua sobre tus prioridades, que pueden cambiar.' },
          { q: '¿Se puede escalar el equipo?', a: 'Sí, crece o se ajusta según la etapa del producto.' },
        ],
        keywords: ['equipos dedicados', 'células ágiles', 'outsourcing de desarrollo'],
      },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const allSubServices = services.flatMap((f) => f.items.map((it) => ({ family: f, item: it })))
