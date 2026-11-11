// Falla el build si alguna página publicada contiene un dato por confirmar del
// documento de copy, como [confirmar ...], [Nº] o [correo].
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = ['dist/client', 'dist'].find((d) => {
  try {
    return statSync(d).isDirectory()
  } catch {
    return false
  }
})
if (!root) {
  console.error('check-placeholders: no dist folder, run the build first')
  process.exit(1)
}

const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.(html|txt)$/.test(name)) files.push(p)
  }
}
walk(root)

const pattern =
  /\[(?:confirmar|pendiente|decidir|revisar|N[ºo°]\]|n[uú]mero|correo|enlace|foto|logos?|cliente|problema|m[eé]trica|caso |raz[oó]n social|\d+\])[^\]]*\]?/gi

let found = 0
for (const file of files) {
  const text = readFileSync(file, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
  const hits = text.match(pattern)
  if (hits) {
    found += hits.length
    console.error(`${file}: ${[...new Set(hits)].join(', ')}`)
  }
}

if (found) {
  console.error(`check-placeholders: ${found} dato(s) por confirmar en ${root}`)
  process.exit(1)
}
console.log(`check-placeholders: ${files.length} archivos sin datos por confirmar`)
