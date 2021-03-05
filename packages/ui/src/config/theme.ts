import _merge from 'lodash.merge'

import { defaultButtons, ButtonsConfig } from './buttons'
import { makeBreakpoints, Breakpoints, BreakpointsConfig } from './breakpoints'
import { makeColors, Colors, ColorsConfig } from './colors'
import { defaultGrid, GridConfig } from './grid'
import { defaultLinks, LinksConfig } from './links'
import { defaultSizes, SizesConfig } from './sizes'
import { makeTypography, TypographyConfig, Typography } from './typography'

export interface Config {
  name?: string
  buttons?: ButtonsConfig
  breakpoints?: BreakpointsConfig
  colors?: ColorsConfig
  grid?: Partial<GridConfig>
  links?: Partial<LinksConfig>
  sizes?: SizesConfig
  typography?: TypographyConfig
}

export interface Theme {
  name: string
  buttons: ButtonsConfig
  breakpoints: Breakpoints
  colors: Colors
  grid: GridConfig
  links: LinksConfig
  sizes: SizesConfig
  typography: Typography
}

export const makeTheme = (themeConfig?: Partial<Config>): Theme => {
  const config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  return {
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    buttons: _merge(defaultButtons, config.buttons),
    breakpoints: makeBreakpoints(config.breakpoints),
    colors: makeColors(config.colors),
    sizes: _merge(defaultSizes, config.sizes),
    grid: _merge(defaultGrid, config.grid),
    links: _merge(defaultLinks, config.links),
    typography: makeTypography(config.typography),
  }
}
