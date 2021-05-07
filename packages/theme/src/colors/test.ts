import Color from 'color'

import { Mode, makeColors } from '.'

describe('Colors', () => {
  it('should use dark background colors if mode is set to "dark"', () => {
    const config = makeColors({ mode: Mode.Dark })
    const result = config.background.base.base
    expect(Color(result).isDark()).toBe(true)
  })

  it('should use light background colors if mode is set to "light"', () => {
    const config = makeColors({ mode: Mode.Light })
    const result = config.background.base.base
    expect(Color(result).isDark()).toBe(false)
  })
})
