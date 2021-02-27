import Color from 'color'

import { colorPallet, Config, Shaders } from './config'
import {
  BaseColorState,
  Colorway,
  BaseSwatch,
  ColorStates,
  ColorSwatches,
} from './types'

export type Pallet = {
  [key in Colorway]: PalletShades
}

export type PalletShades = {
  [key in Shade]: Color
}

export enum Shade {
  Darker = 'darker',
  Dark = 'dark',
  Base = 'base',
  Light = 'light',
  Lighter = 'lighter',
}

type BaseColorStates = {
  [stateKey in BaseColorState]: {
    [swatchKey in BaseSwatch]: Color
  }
}

const getColorValue = (c: Color): string => c.rgb().string()

const makeSwatches = (base: Color, border: Color): ColorSwatches => {
  const readable = base.isDark() ? colorPallet.white : colorPallet.black
  return {
    base: getColorValue(base),
    readable: getColorValue(readable),
    border: getColorValue(border),
  }
}

const makeColorwayStates = (baseStates: BaseColorStates): ColorStates => {
  const { base, hover, active } = baseStates
  const inactive = {
    base: base.base.mix(colorPallet.gray, 0.5),
    border: base.base.mix(colorPallet.gray, 0.7),
  }
  return {
    base: makeSwatches(base.base, base.border),
    hover: makeSwatches(hover.base, hover.border),
    active: makeSwatches(active.base, active.border),
    inactive: makeSwatches(inactive.base, inactive.border),
  }
}

export const makeColorway = (
  shades: PalletShades,
  isDark: boolean,
): ColorStates => {
  const { base, dark, darker, light, lighter } = shades
  if (isDark) {
    return makeColorwayStates({
      base: { base, border: light },
      hover: { base: light, border: base },
      active: { base: lighter, border: light },
    })
  }
  return makeColorwayStates({
    base: { base, border: dark },
    hover: { base: dark, border: base },
    active: { base: darker, border: dark },
  })
}

const makeShades = (colorValue: string, shaders: Shaders): PalletShades => {
  const {
    dark: darkShade,
    darker: darkerShade,
    light: lightShade,
    lighter: lighterShade,
  } = shaders
  const base = Color(colorValue)

  let darker = base.darken(darkShade.max)
  let dark = base.darken(darkShade.min)
  let lighter = base.lighten(lightShade.max)
  let light = base.lighten(lightShade.min)

  const luminosity = base.luminosity()
  if (luminosity > 0.8) {
    // light
    darker = base.darken(darkerShade.max)
    dark = base.darken(darkerShade.min)
  } else if (luminosity < 0.001) {
    // dark
    light = base.lighten(lighterShade.min)
    lighter = base.lighten(lighterShade.max)
  }

  return { base, dark, darker, light, lighter }
}

const makeDarkShades = (colorValue: string, shaders: Shaders): PalletShades => {
  const { lightest: lightestShade } = shaders
  const base = Color(colorValue)
  const diff = lightestShade / 4
  return {
    darker: base.lightness(0),
    dark: base.lightness(lightestShade - diff * 3),
    base: base.lightness(lightestShade - diff * 2),
    light: base.lightness(lightestShade - diff),
    lighter: base.lightness(lightestShade),
  }
}

const makeLightShades = (
  colorValue: string,
  shaders: Shaders,
): PalletShades => {
  const { darkest: darkestShade } = shaders
  const base = Color(colorValue)
  const diff = (100 - darkestShade) / 4
  return {
    darker: base.lightness(darkestShade),
    dark: base.lightness(darkestShade + diff),
    base: base.lightness(darkestShade + diff * 2),
    light: base.lightness(darkestShade + diff * 3),
    lighter: base.lightness(100),
  }
}

export const makePallet = (config: Config): Pallet => {
  const { pallet, shaders } = config
  const primary = makeShades(pallet.primary, shaders)
  const secondary = makeShades(pallet.secondary, shaders)
  const tertiary = makeShades(pallet.tertiary, shaders)
  let prominent
  switch (config.prominent as Colorway) {
    default:
      prominent = primary
      break
    case Colorway.Secondary:
      prominent = secondary
      break
    case Colorway.Tertiary:
      prominent = tertiary
      break
  }
  return {
    primary,
    secondary,
    tertiary,
    dark: makeDarkShades(pallet.dark, shaders),
    neutral: makeShades(pallet.neutral, shaders),
    light: makeLightShades(pallet.light, shaders),
    success: makeShades(pallet.success, shaders),
    info: makeShades(pallet.info, shaders),
    warning: makeShades(pallet.warning, shaders),
    danger: makeShades(pallet.danger, shaders),
    prominent,
  }
}

export const makeDarkColorway = (colorShades: PalletShades): ColorStates => {
  const { base, light, lighter } = colorShades
  return makeColorwayStates({
    base: { base, border: lighter },
    hover: { base: light, border: lighter },
    active: { base: lighter, border: light },
  })
}

export const makeLightColorway = (colorShades: PalletShades): ColorStates => {
  const { base, dark, darker } = colorShades
  return makeColorwayStates({
    base: { base, border: darker },
    hover: { base: dark, border: darker },
    active: { base: darker, border: dark },
  })
}
