export const isBrowser = typeof window !== 'undefined'

export function isObj(x: any) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

function testSupportsPassive() {
  if (!isBrowser) {
    return
  }
  let support = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        support = true
      },
    })
    window.addEventListener('testPassive', null as any, opts)
    window.removeEventListener('testPassive', null as any, opts)
  } catch (e) {
    // tslint
  }
  return support
}

export const supportsPassive = testSupportsPassive()
