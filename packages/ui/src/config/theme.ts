import _merge from 'lodash.merge'

import { defaultButtons, ButtonsConfig } from './buttons'
import { Breakpoints, BreakpointsConfig } from './breakpoints'
import { Colors, ColorsConfig } from './colors'
import { defaultGrid, GridConfig } from './grid'
import { defaultLinks, LinksConfig } from './links'
import { defaultSizes, SizesConfig } from './sizes'
import { TypographyConfig, Typography, makeTypography } from './typography'

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

export class Theme {
  name: string

  buttons: ButtonsConfig

  breakpoints: Breakpoints

  colors: Colors

  grid: GridConfig

  links: LinksConfig

  sizes: SizesConfig

  typography: Typography

  constructor(themeConfig?: Partial<Config>) {
    const config = typeof themeConfig !== 'undefined' ? themeConfig : {}

    this.name = typeof config.name === 'string' ? config.name : 'horns-theme'

    this.buttons = _merge(defaultButtons, config.buttons)
    this.breakpoints = new Breakpoints(config.breakpoints)
    this.colors = new Colors(config.colors)
    this.sizes = _merge(defaultSizes, config.sizes)
    this.grid = _merge(defaultGrid, config.grid)
    this.links = _merge(defaultLinks, config.links)
    this.typography = makeTypography(config.typography)
  }
}
