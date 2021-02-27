import { Config, Mode } from './config'
import { Background, Colorway, ColorStates } from './types'
import {
  Pallet,
  makeColorway,
  makeLightColorway,
  makeDarkColorway,
} from './pallet'

export type Colorways = {
  [key in Colorway]: ColorStates
}

export type Backgrounds = {
  [key in Background]: ColorStates
}

export const makeColorways = (pallet: Pallet, config: Config): Colorways => {
  const isDark = config.mode === Mode.Dark
  return {
    primary: makeColorway(pallet.primary, isDark),
    secondary: makeColorway(pallet.secondary, isDark),
    tertiary: makeColorway(pallet.tertiary, isDark),
    dark: makeDarkColorway(pallet.dark),
    neutral: makeColorway(pallet.neutral, isDark),
    light: makeLightColorway(pallet.light),
    success: makeColorway(pallet.success, isDark),
    info: makeColorway(pallet.info, isDark),
    warning: makeColorway(pallet.warning, isDark),
    danger: makeColorway(pallet.danger, isDark),
    prominent: makeColorway(pallet.prominent, isDark),
  }
}

export const makeBackgrounds = (
  pallet: Pallet,
  config: Config,
): Backgrounds => {
  const isDark = config.mode === Mode.Dark
  if (isDark) {
    return {
      primary: makeDarkColorway(pallet.dark),
      secondary: makeColorway(pallet.neutral, true),
    }
  }
  return {
    primary: makeLightColorway(pallet.light),
    secondary: makeColorway(pallet.neutral, false),
  }
}
