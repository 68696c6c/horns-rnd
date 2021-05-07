import { Config, Mode } from './config'
import { Colorway, ColorStates } from './types'
import {
  Pallet,
  makeColorway,
  makeLightColorway,
  makeDarkColorway,
  makeBackground,
  makeBackgroundAlt,
  makeTypography,
} from './pallet'

export type Colorways = {
  [key in Colorway]: ColorStates
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
    selected: makeColorway(pallet.selected, isDark),
    background: makeBackground(pallet, isDark),
    backgroundAlt: makeBackgroundAlt(pallet, isDark),
    typography: makeTypography(pallet, isDark),
  }
}
