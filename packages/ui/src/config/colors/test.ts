import Color from 'color'

import { makeColors } from '.'

describe('Colors', () => {
  it('should use dark background colors if mode is set to "dark"', () => {
    const config = makeColors({ mode: 'dark' })
    const result = config.backgrounds.primary.base.base
    expect(Color(result).isDark()).toBe(true)
  })

  it('should use light background colors if mode is set to "light"', () => {
    const config = makeColors({ mode: 'light' })
    const result = config.backgrounds.primary.base.base
    expect(Color(result).isDark()).toBe(false)
  })
})
