import type { ImageMetadata } from 'astro'

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/cases/*.jpg', { eager: true })

/** Devuelve la imagen importada de src/assets/cases/ a partir de su nombre de archivo */
export function caseImage(file: string): ImageMetadata {
  const img = files[`/src/assets/cases/${file}`]
  if (!img) throw new Error(`Falta la imagen del caso: src/assets/cases/${file}`)
  return img.default
}
