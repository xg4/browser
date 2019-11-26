import { on, off } from '../src'

describe('event', () => {
  test('event on', () => {
    document.body.innerHTML = `<div>
      <button id="btn"></button>
    </div>`

    const handleClick = jest.fn((ev: any) => {
      if (ev.target) {
        ev.target.value = 'click btn'
      }
    })

    const btn = document.getElementById('btn') as HTMLButtonElement

    on(btn, 'click', handleClick)
    btn.click()
    expect(handleClick).toHaveBeenCalled()
    expect(btn.value).toEqual('click btn')
    // 多次点击调用
    btn.click()
    btn.click()
    expect(handleClick.mock.calls.length).toEqual(3)
  })

  test('event off', () => {
    document.body.innerHTML = `<div>
      <button id="btn"></button>
    </div>`

    const handleClick = jest.fn((ev: any) => {
      if (ev.target) {
        ev.target.value = 'click btn'
      }
    })

    const btn = document.getElementById('btn') as HTMLButtonElement

    on(btn, 'click', handleClick)
    off(btn, 'click', handleClick)
    btn.click()
    expect(handleClick).not.toHaveBeenCalled()
    expect(btn.value).toEqual('')
  })
})
