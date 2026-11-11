// Contenido de /llms.txt y /llms-full.txt (formato llmstxt.org): un resumen en Markdown
// que los asistentes de IA pueden leer y citar. Se arma con los mismos datos de la web,
// así lo que dicen los modelos coincide con lo que dice el sitio.
import { founder, homeFaqs, method, promise, site } from '@/data/site'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { cases } from '@/data/cases'

const u = (path: string) => new URL(path, site.url).toString()

export function llmsIndex() {
  return `# ${site.name}

> ${site.description}

${site.name} es una consultora de inteligencia artificial con sede en ${site.city}, ${site.countryName}, liderada por ${founder.name}. Ofrece tres servicios: Fábrica con IA (software y agentes de IA a medida), Automatización con IA (un proceso operativo a la vez) y Ciberseguridad (phishing y ataques potenciados por IA). Antes de empezar acuerda por escrito el alcance, la fecha y el precio de cada ciclo o caso. Atiende sobre todo a los sectores finanzas, automotriz y logística.

## Servicios

${services.map((s) => `- [${s.name}](${u(`/servicios/${s.slug}/`)}): ${s.short}`).join('\n')}

## Sectores

${sectors.map((s) => `- [${s.name}](${u(`/sectores/${s.slug}/`)}): ${s.summary}`).join('\n')}

## Casos

${cases.map((c) => `- [${c.client}: ${c.title}](${u(`/casos/${c.slug}/`)}): ${c.summary}`).join('\n')}

## Diagnósticos gratuitos

- [Madurez en IA](${u('/diagnosticos/madurez-ia/')}): puntaje por área (datos, procesos, equipo, gobierno) y recomendaciones.
- [Autoevaluación de ciberseguridad](${u('/diagnosticos/ciberseguridad/')}): nivel de riesgo frente a phishing, accesos e incidentes.
- [Calculadora de ahorro por automatización](${u('/diagnosticos/calculadora-ahorro/')}): ahorro estimado mensual y anual de automatizar un proceso.

## Empresa

- [Nosotros](${u('/nosotros/')}): trayectoria, liderazgo y principios.
- [Contacto](${u('/contacto/')}): respuesta en menos de ${site.responseHours} horas.

## Optional

- [Versión completa de este resumen](${u('/llms-full.txt')})
- [Política de privacidad](${u('/privacidad/')})
`
}

export function llmsFull() {
  const svc = services
    .map(
      (s) => `### ${s.name}

URL: ${u(`/servicios/${s.slug}/`)}

${s.promise} ${s.lead}

Para quién es: ${s.audience}

Problemas que resuelve:
${s.problems.map((p) => `- ${p}`).join('\n')}

Qué entregamos:
${s.deliverables.map((d) => `- ${d.title ? `${d.title}: ` : ''}${d.body}`).join('\n')}
${s.examples ? `\nEjemplos de casos:\n${s.examples.map((e) => `- ${e}`).join('\n')}\n` : ''}
Cómo trabajamos:
${s.steps.map((st, i) => `${i + 1}. ${st.title}: ${st.body}`).join('\n')}

Preguntas frecuentes:
${s.faqs.map((f) => `- ${f.q} ${f.a}`).join('\n')}`,
    )
    .join('\n\n')

  const sec = sectors
    .map(
      (s) => `### ${s.name}

URL: ${u(`/sectores/${s.slug}/`)}

${s.headline}

Retos típicos: ${s.challenges.join(' ')}

Qué hacemos: ${s.whatWeDo.join(' ')}`,
    )
    .join('\n\n')

  const cs = cases
    .map(
      (c) => `### ${c.client}: ${c.title}

URL: ${u(`/casos/${c.slug}/`)}
Rol de ${founder.name}: ${c.role}${c.period ? ` (${c.period})` : ''}. Industria: ${c.industry}.

${c.context}

${c.did.map((d) => `- ${d}`).join('\n')}

Resultados: ${c.metrics.map((m) => `${m.value} ${m.label.toLowerCase()}`).join('; ')}.`,
    )
    .join('\n\n')

  return `# ${site.name}: información completa

> ${site.description}

Última actualización: ${site.lastUpdated}. Sitio: ${site.url}

## Datos clave

- Nombre: ${site.name}
- Tipo: consultora de inteligencia artificial
- Sede: ${site.city}, ${site.countryName}
- Liderazgo: ${founder.name}, ${founder.role} (${founder.linkedin})
- Lema: ${site.tagline}
- Respaldo: más de ${site.foundingYearsExperience} años liderando soluciones tecnológicas corporativas; batch de Google for Startups (IA Generativa); trayectoria previa en Wayra (Fundación Telefónica).
- Servicios: ${services.map((s) => s.name).join(', ')}
- Sectores: ${sectors.map((s) => s.name).join(', ')}

## Propuesta: alcance, fecha y precio acordados

${promise.map((p) => `- ${p.title}: ${p.body}`).join('\n')}

Todo empieza con un diagnóstico inicial: se sale con el plan, el alcance y el precio del primer ciclo.

## Método

${method.map((m, i) => `${i + 1}. ${m.title}: ${m.body}`).join('\n')}

## Servicios

${svc}

## Sectores

${sec}

## Casos

Los casos son proyectos que lideró o diseñó ${founder.name}, fundador de ${site.name}, en el rol indicado.

${cs}

## Preguntas frecuentes

${homeFaqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}
`
}
