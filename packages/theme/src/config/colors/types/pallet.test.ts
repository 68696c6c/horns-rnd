import Color from 'color'

import { defaultConfig } from './config'
import { Pallet, PalletShades, makePallet } from './pallet'

const assertShadeContrast = (shades: PalletShades): void => {
  const { darker, dark, base, light, lighter } = shades
  expect(darker.contrast(dark)).toBeGreaterThan(1)
  expect(dark.contrast(base)).toBeGreaterThan(1)
  expect(base.contrast(light)).toBeGreaterThan(1)
  expect(light.contrast(lighter)).toBeGreaterThan(1)
}

const assertSameColor = (color: Color, expected: string) => {
  const colorValue = color.rgb().string()
  const expectedValue = Color(expected).rgb().string()
  expect(colorValue).toEqual(expectedValue)
}

describe('makePallet', () => {
  let result: Pallet
  beforeEach(() => {
    result = makePallet(defaultConfig)
  })

  it('should use the provided values as the base shades for colorways besides light and dark', () => {
    const { pallet } = defaultConfig
    assertSameColor(result.primary.base, pallet.primary)
    assertSameColor(result.secondary.base, pallet.secondary)
    assertSameColor(result.tertiary.base, pallet.tertiary)
    assertSameColor(result.neutral.base, pallet.neutral)
    assertSameColor(result.success.base, pallet.success)
    assertSameColor(result.info.base, pallet.info)
    assertSameColor(result.warning.base, pallet.warning)
    assertSameColor(result.danger.base, pallet.danger)
    assertSameColor(result.prominent.base, pallet.primary)
  })

  it('should return distinguishable dark shades', () => {
    assertShadeContrast(result.dark)
  })

  it('should return distinguishable light shades', () => {
    assertShadeContrast(result.light)
  })
})
