// Muestra el formulario de captación y, al enviarlo, revela el resultado completo.
// El resultado se muestra aunque el envío falle: la persona no pierde su diagnóstico.
export function openGate(root: ParentNode, summary: string, onUnlock: () => void) {
  const gate = root.querySelector<HTMLFormElement>('[data-gate]')
  const next = root.querySelector<HTMLElement>('[data-next]')
  const host = root as HTMLElement
  // Ya dejó sus datos: recalcular muestra el detalle de inmediato.
  if (!gate || host.dataset.unlocked === 'true') return onUnlock()
  const field = gate.querySelector<HTMLInputElement>('[data-result-field]')
  if (field) field.value = summary
  gate.classList.remove('hidden')
  gate.classList.add('grid')
  gate.onsubmit = async (e) => {
    e.preventDefault()
    const button = gate.querySelector<HTMLButtonElement>('button[type="submit"]')
    if (button) button.disabled = true
    try {
      await fetch(gate.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(gate) })
    } catch {
      // sin conexión: seguimos y mostramos el resultado
    }
    host.dataset.unlocked = 'true'
    gate.classList.add('hidden')
    gate.classList.remove('grid')
    onUnlock()
    next?.classList.remove('hidden')
    next?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
  gate.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
