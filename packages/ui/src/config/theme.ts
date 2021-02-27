import _merge from 'lodash.merge'

import { ButtonsConfig, defaultButtons } from './buttons'
import { Breakpoints, BreakpointsConfig } from './breakpoints'
import { Colors, ColorsConfig } from './colors'
import { GridConfig, defaultGrid } from './grid'
import { SizesConfig, defaultSizes } from './sizes'

export interface Config {
  name?: string
  buttons?: ButtonsConfig
  breakpoints?: BreakpointsConfig
  colors?: ColorsConfig
  grid?: Partial<GridConfig>
  sizes?: SizesConfig
}

export class Theme {
  name: string

  buttons: ButtonsConfig

  breakpoints: Breakpoints

  colors: Colors

  grid: GridConfig

  sizes: SizesConfig

  constructor(themeConfig?: Partial<Config>) {
    const config = typeof themeConfig !== 'undefined' ? themeConfig : {}

    this.name = typeof config.name === 'string' ? config.name : 'horns-theme'

    this.breakpoints = new Breakpoints(config.breakpoints)
    this.colors = new Colors(config.colors)
    this.sizes = _merge(defaultSizes, config.sizes)
    this.grid = _merge(defaultGrid, config.grid)
    this.buttons = _merge(defaultButtons, config.buttons)
  }
}
