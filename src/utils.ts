export const inBrowser = typeof window !== 'undefined'

export function isObj<T extends object>(x: any): x is T {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

export const noop = () => {}

export const supportsPassive = (function testSupportsPassive() {
  if (!inBrowser) {
    return false
  }
  let support = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        support = true
        return false
      }
    })
    window.addEventListener('testPassive', noop, opts)
    window.removeEventListener('testPassive', noop, opts)
    // eslint-disable-next-line no-empty
  } catch {}
  return support
})()

export function parseEventListenerOptions(
  options?: boolean | AddEventListenerOptions
): AddEventListenerOptions

export function parseEventListenerOptions(
  options?: boolean | EventListenerOptions
): EventListenerOptions

export function parseEventListenerOptions(options: any) {
  return isObj(options) ? options : { capture: options }
}
