import { readAsArrayBuffer, readAsText } from '../src'

describe('file', () => {
  const debug = 'hello world'
  const blob = new Blob([debug], {
    type: 'application/json'
  })

  test('readAsArrayBuffer', () => {
    return readAsArrayBuffer(blob).then(ab => {
      expect(ab).toBeInstanceOf(ArrayBuffer)
    })
  })

  test('readAsText', () => {
    return readAsText(blob).then(text => {
      expect(text).toBe('hello world')
    })
  })
})
