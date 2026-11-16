// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://inteligenze.com',
  trailingSlash: 'always',
  output: 'static',
  // URLs antiguas de servicios, para no perder enlaces ni posiciones en Google
  redirects: {
    '/servicios/fabrica-con-ia/': '/servicios/desarrollo-de-software/',
    '/servicios/automatizacion-con-ia/': '/servicios/automatizaciones/',
  },
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-PE' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
