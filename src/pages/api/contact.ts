import type { APIRoute } from 'astro'

// Recibe el formulario de contacto y los diagnósticos, y los envía por correo con Resend.
// Variables en Vercel: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (ver .env.example).
export const prerender = false

const FIELDS = ['origen', 'nombre', 'correo', 'empresa', 'cargo', 'servicio', 'reto', 'resultado'] as const
const LABELS: Record<(typeof FIELDS)[number], string> = {
  origen: 'Origen',
  nombre: 'Nombre',
  correo: 'Correo',
  empresa: 'Empresa',
  cargo: 'Cargo',
  servicio: 'Servicio de interés',
  reto: 'Reto',
  resultado: 'Resultado del diagnóstico',
}

const env = (key: string) => (import.meta.env[key] as string | undefined) ?? process.env[key]

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

function reply(request: Request, ok: boolean, status: number, message: string) {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json')
  if (wantsJson) return Response.json({ ok, message }, { status })
  const to = ok ? '/contacto/?enviado=1' : '/contacto/?error=1'
  return new Response(null, { status: 303, headers: { Location: to } })
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return reply(request, false, 400, 'Formulario no válido.')
  }

  // Campo trampa para bots: si viene lleno, respondemos como si todo saliera bien.
  if (String(form.get('sitio_web') ?? '').trim()) return reply(request, true, 200, 'ok')

  const data = Object.fromEntries(
    FIELDS.map((k) => [k, String(form.get(k) ?? '').trim().slice(0, 4000)]),
  ) as Record<(typeof FIELDS)[number], string>

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)
  if (!data.nombre || !emailOk || form.get('privacidad') !== 'acepto') {
    return reply(request, false, 422, 'Faltan datos obligatorios.')
  }

  const apiKey = env('RESEND_API_KEY')
  const to = env('CONTACT_TO_EMAIL')
  const from = env('CONTACT_FROM_EMAIL')
  if (!apiKey || !to || !from) {
    console.error('Contact form: missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL')
    return reply(request, false, 503, 'El formulario aún no está configurado.')
  }

  const rows = FIELDS.filter((k) => data[k])
    .map((k) => `<tr><td style="padding:6px 12px;color:#555;vertical-align:top">${LABELS[k]}</td><td style="padding:6px 12px;white-space:pre-wrap">${escape(data[k])}</td></tr>`)
    .join('')
  const subject =
    data.origen && data.origen !== 'contacto'
      ? `Nuevo diagnóstico (${data.origen}): ${data.empresa || data.nombre}`
      : `Nuevo contacto web: ${data.empresa || data.nombre}`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.correo,
      subject,
      html: `<table style="font-family:sans-serif;font-size:14px">${rows}</table>`,
      text: FIELDS.filter((k) => data[k]).map((k) => `${LABELS[k]}: ${data[k]}`).join('\n'),
    }),
  })

  if (!res.ok) {
    console.error('Contact form: Resend error', res.status, await res.text())
    return reply(request, false, 502, 'No pudimos enviar el mensaje.')
  }
  return reply(request, true, 200, 'Gracias. Recibimos tu mensaje y te escribiremos pronto.')
}
