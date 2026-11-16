// Glosario de IA, automatización y ciberseguridad: definiciones cortas y en lenguaje simple.
// Cada término enlaza, cuando aplica, al servicio donde lo usamos.

export type Term = { term: string; slug: string; definition: string; link?: { label: string; href: string } }
export type TermGroup = { name: string; terms: Term[] }

export const glossary: TermGroup[] = [
  {
    name: 'Inteligencia artificial',
    terms: [
      {
        term: 'Agente de IA',
        slug: 'agente-de-ia',
        definition:
          'Programa que usa un modelo de lenguaje para conversar y, además, ejecutar acciones dentro de un proceso, como consultar un sistema o registrar un pedido, siguiendo reglas definidas.',
        link: { label: 'Agentes de IA y chatbots', href: '/servicios/desarrollo-de-software/agentes-de-ia/' },
      },
      {
        term: 'Chatbot',
        slug: 'chatbot',
        definition:
          'Programa que responde mensajes de forma automática. Los chatbots con IA entienden el lenguaje natural; los tradicionales siguen un menú de opciones fijo.',
      },
      {
        term: 'Modelo de lenguaje (LLM)',
        slug: 'llm',
        definition:
          'Modelo de IA entrenado con grandes cantidades de texto que puede entender y generar lenguaje. Es la base de asistentes como ChatGPT o Claude.',
      },
      {
        term: 'IA generativa',
        slug: 'ia-generativa',
        definition: 'Tipo de IA que crea contenido nuevo, como texto, imágenes o código, a partir de una instrucción.',
      },
      {
        term: 'Prompt',
        slug: 'prompt',
        definition: 'Instrucción que se le da a un modelo de IA. Su claridad influye directamente en la calidad de la respuesta.',
      },
      {
        term: 'Alucinación',
        slug: 'alucinacion',
        definition:
          'Respuesta de un modelo de IA que suena correcta pero es falsa o inventada. Se reduce dando al modelo información confiable y revisión humana en los casos críticos.',
      },
      {
        term: 'RAG (generación aumentada por recuperación)',
        slug: 'rag',
        definition:
          'Técnica que hace que un modelo de IA responda usando documentos de tu empresa: primero busca la información relevante y luego redacta la respuesta con ella.',
        link: { label: 'IA para documentos y correos', href: '/servicios/automatizaciones/ia-para-documentos/' },
      },
      {
        term: 'MCP (Model Context Protocol)',
        slug: 'mcp',
        definition: 'Estándar abierto para conectar modelos de IA con herramientas y datos externos de forma ordenada y segura.',
      },
    ],
  },
  {
    name: 'Automatización',
    terms: [
      {
        term: 'Automatización de procesos',
        slug: 'automatizacion-de-procesos',
        definition: 'Uso de software para ejecutar tareas repetitivas de un proceso sin intervención manual, con excepciones que pasan a una persona.',
        link: { label: 'Automatización de procesos', href: '/servicios/automatizaciones/automatizacion-de-procesos/' },
      },
      {
        term: 'RPA',
        slug: 'rpa',
        definition: 'Automatización robótica de procesos: programas que imitan los clics y la digitación de una persona en los sistemas existentes.',
      },
      {
        term: 'Integración de sistemas',
        slug: 'integracion-de-sistemas',
        definition: 'Conexión entre aplicaciones, como un CRM y un ERP, para que compartan datos sin reingresarlos a mano.',
        link: { label: 'Integración de sistemas', href: '/servicios/automatizaciones/integracion-de-sistemas/' },
      },
      {
        term: 'API',
        slug: 'api',
        definition: 'Interfaz que permite que dos sistemas se comuniquen de forma estructurada. Es la vía habitual para integrar aplicaciones.',
      },
    ],
  },
  {
    name: 'Ciberseguridad',
    terms: [
      {
        term: 'Phishing',
        slug: 'phishing',
        definition: 'Engaño por correo, mensaje o llamada para que una persona entregue datos, haga un pago o instale algo malicioso.',
        link: { label: 'Phishing as a Service', href: '/servicios/ciberseguridad/phishing-as-a-service/' },
      },
      {
        term: 'Ingeniería social',
        slug: 'ingenieria-social',
        definition: 'Manipulación de personas para obtener acceso o información. El phishing es su forma más común.',
      },
      {
        term: 'Ethical hacking',
        slug: 'ethical-hacking',
        definition: 'Búsqueda autorizada de vulnerabilidades en sistemas y aplicaciones para corregirlas antes de que alguien las explote.',
        link: { label: 'Ethical hacking', href: '/servicios/ciberseguridad/ethical-hacking/' },
      },
      {
        term: 'Prueba de penetración (pentest)',
        slug: 'pentest',
        definition: 'Simulación controlada de un ataque real para medir hasta dónde podría llegar un atacante.',
        link: { label: 'Pruebas de penetración', href: '/servicios/ciberseguridad/pentesting/' },
      },
      {
        term: 'Red Team',
        slug: 'red-team',
        definition: 'Equipo que simula a un adversario de punta a punta para poner a prueba la defensa completa de una organización, incluida su capacidad de detección.',
        link: { label: 'Red Team', href: '/servicios/ciberseguridad/red-team/' },
      },
      {
        term: 'Bug bounty',
        slug: 'bug-bounty',
        definition: 'Programa que recompensa a investigadores autorizados por reportar vulnerabilidades válidas.',
        link: { label: 'Bug Bounty', href: '/servicios/ciberseguridad/bug-bounty/' },
      },
      {
        term: 'Respuesta a incidentes',
        slug: 'respuesta-a-incidentes',
        definition: 'Conjunto de acciones para contener un ataque, entender qué pasó, recuperarse y evitar que se repita.',
        link: { label: 'Respuesta a incidentes', href: '/servicios/ciberseguridad/respuesta-a-incidentes/' },
      },
      {
        term: 'Verificación en dos pasos',
        slug: 'verificacion-en-dos-pasos',
        definition: 'Inicio de sesión que pide un segundo factor, como un código en el celular, además de la contraseña.',
      },
    ],
  },
  {
    name: 'Talento y equipos',
    terms: [
      {
        term: 'Staff augmentation',
        slug: 'staff-augmentation',
        definition: 'Modelo en que profesionales externos se suman a tu equipo y trabajan con tus procesos y herramientas.',
        link: { label: 'Staff augmentation', href: '/servicios/staffing/staff-augmentation/' },
      },
      {
        term: 'Equipo dedicado',
        slug: 'equipo-dedicado',
        definition: 'Célula completa con roles complementarios que trabaja de forma continua en un producto o proyecto.',
        link: { label: 'Equipos dedicados', href: '/servicios/staffing/equipos-dedicados/' },
      },
    ],
  },
]
