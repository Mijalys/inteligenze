// JSON-LD (schema.org) para buscadores y motores de respuesta con IA.
import { founder, site } from '@/data/site'
import type { Faq, Service } from '@/data/services'
import type { Case } from '@/data/cases'

const abs = (path: string) => new URL(path, site.url).toString()

export const ORG_ID = `${site.url}/#organization`
export const PERSON_ID = `${site.url}/#founder`
export const WEBSITE_ID = `${site.url}/#website`

export function organization() {
  const sameAs = [site.linkedinCompany].filter(Boolean)
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: site.name,
    url: site.url,
    logo: abs('/icon-512.png'),
    image: abs('/og.png'),
    description: site.description,
    slogan: site.tagline,
    ...(site.legalName ? { legalName: site.legalName } : {}),
    ...(site.ruc ? { taxID: site.ruc } : {}),
    ...(site.email ? { email: site.email } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: { '@type': 'Country', name: site.countryName },
    founder: { '@id': PERSON_ID },
    knowsAbout: [
      'Inteligencia artificial generativa',
      'Agentes de IA',
      'Agentes conversacionales',
      'Diseño conversacional',
      'Automatización de procesos con IA',
      'Ciberseguridad',
      'Phishing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Inteligenze',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@id': abs('/servicios/fabrica-con-ia/#service') } },
        { '@type': 'Offer', itemOffered: { '@id': abs('/servicios/automatizacion-con-ia/#service') } },
        { '@type': 'Offer', itemOffered: { '@id': abs('/servicios/ciberseguridad/#service') } },
      ],
    },
    ...(sameAs.length ? { sameAs } : {}),
  }
}

export function person() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: founder.name,
    jobTitle: founder.role,
    worksFor: { '@id': ORG_ID },
    url: abs('/nosotros/'),
    sameAs: [founder.linkedin, founder.portfolio],
    knowsAbout: ['Agentes de IA', 'Diseño de producto', 'Diseño conversacional', 'Design systems', 'UX en banca'],
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.country },
  }
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: site.locale,
    publisher: { '@id': ORG_ID },
  }
}

export function webPage(opts: { path: string; title: string; description: string; type?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    inLanguage: site.locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    dateModified: site.lastUpdated,
  }
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  }
}

export function faqPage(faqs: Faq[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function serviceSchema(s: Service) {
  const path = `/servicios/${s.slug}/`
  return {
    '@type': 'Service',
    '@id': `${abs(path)}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.lead,
    url: abs(path),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: site.countryName },
    audience: { '@type': 'BusinessAudience', name: s.audience },
    keywords: s.keywords.join(', '),
  }
}

export function caseSchema(c: Case, image?: string) {
  const path = `/casos/${c.slug}/`
  return {
    '@type': 'CreativeWork',
    '@id': `${abs(path)}#case`,
    name: `${c.client}: ${c.title}`,
    headline: c.title,
    description: c.summary,
    url: abs(path),
    inLanguage: site.locale,
    creator: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    about: c.industry,
    isBasedOn: c.source,
    ...(image ? { image } : {}),
    keywords: [...c.tech, c.industry].join(', '),
  }
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
