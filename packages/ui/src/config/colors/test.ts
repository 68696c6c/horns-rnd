import Color from 'color'

import { defaultConfig } from './types'
import { Colors } from '.'

describe('Colors', () => {
  it('should use default values if no config is provided', () => {
    const result = new Colors()
    expect(result.config).toEqual(defaultConfig)
  })

  it('should use default values if an empty config is provided', () => {
    const result = new Colors({})
    expect(result.config).toEqual(defaultConfig)
  })

  it('should merge provided config values with defaults', () => {
    const { config: result } = new Colors({
      mode: 'dark',
      pallet: {
        primary: 'orange',
      },
      shaders: {
        alpha: 0.6,
        darker: {
          min: 0.05,
        },
      },
    })
    expect(result.mode).toEqual('dark')
    expect(result.prominent).toEqual(defaultConfig.prominent)
    expect(result.pallet.primary).toEqual('orange')
    expect(result.pallet.secondary).toEqual(defaultConfig.pallet.secondary)
    expect(result.shaders.alpha).toEqual(0.6)
    expect(result.shaders.darkest).toEqual(defaultConfig.shaders.darkest)
    expect(result.shaders.darker.min).toEqual(0.05)
    expect(result.shaders.darker.max).toEqual(defaultConfig.shaders.darker.max)
  })

  it('should use dark background colors if mode is set to "dark"', () => {
    const config = new Colors({ mode: 'dark' })
    const result = config.backgrounds.primary.base.base
    expect(Color(result).isDark()).toBe(true)
  })

  it('should use light background colors if mode is set to "light"', () => {
    const config = new Colors({ mode: 'light' })
    const result = config.backgrounds.primary.base.base
    expect(Color(result).isDark()).toBe(false)
  })
})
