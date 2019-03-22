import { isObj, supportsPassive } from './util'

export function on(
  el: Element,
  type: string,
  func: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) {
  options = (isObj(options)
    ? options
    : { capture: !!options }) as AddEventListenerOptions
  return el.addEventListener(
    type,
    func,
    supportsPassive ? options : options.capture,
  )
}

export function off(
  el: Element,
  type: string,
  func: EventListenerOrEventListenerObject,
  capture = false,
) {
  return el.removeEventListener(type, func, capture)
}
