import { parseEventListenerOptions, supportsPassive } from './utils'

export function on<K extends keyof ElementEventMap>(
  el: Element,
  type: K,
  listener: (this: Element, ev: ElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void

export function on(
  el: Element,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): void

export function on(el: any, type: any, listener: any, options: any) {
  options = parseEventListenerOptions(options)
  return el.addEventListener(
    type,
    listener,
    supportsPassive ? options : options.capture
  )
}

export function off<K extends keyof ElementEventMap>(
  el: Element,
  type: K,
  listener: (this: Element, ev: ElementEventMap[K]) => any,
  options?: boolean | EventListenerOptions
): void

export function off(
  el: Element,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions
): void

export function off(el: any, type: any, listener: any, options: any) {
  options = parseEventListenerOptions(options)
  return el.removeEventListener(
    type,
    listener,
    supportsPassive ? options : options.capture
  )
}
