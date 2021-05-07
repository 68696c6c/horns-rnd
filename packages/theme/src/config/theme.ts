import _merge from 'lodash.merge'

import { defaultButtons, defaultControls, ControlsConfig } from './controls'
import { makeBreakpoints, Breakpoints, BreakpointsConfig } from './breakpoints'
import { makeColors, ColorsConfig, Colorways } from './colors'
import { defaultGrid, GridConfig } from './grid'
import { defaultSizes, SizesConfig } from './sizes'
import { defaultTables, TablesConfig } from './tables'
import { makeTypography, TypographyConfig, Typography } from './typography'

export interface Config {
  name?: string
  buttons?: ControlsConfig
  breakpoints?: BreakpointsConfig
  colors?: ColorsConfig
  controls?: ControlsConfig
  grid?: Partial<GridConfig>
  sizes?: SizesConfig
  tables?: TablesConfig
  typography?: TypographyConfig
}

export interface Theme {
  name: string
  buttons: ControlsConfig
  breakpoints: Breakpoints
  colors: Colorways
  controls: ControlsConfig
  grid: GridConfig
  sizes: SizesConfig
  tables: TablesConfig
  typography: Typography
}

export const makeTheme = (themeConfig?: Partial<Config>): Theme => {
  const config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  return {
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    buttons: _merge(defaultButtons, config.buttons),
    breakpoints: makeBreakpoints(config.breakpoints),
    colors: makeColors(config.colors),
    controls: _merge(defaultControls, config.controls),
    sizes: _merge(defaultSizes, config.sizes),
    grid: _merge(defaultGrid, config.grid),
    tables: _merge(defaultTables, config.tables),
    typography: makeTypography(config.typography),
  }
}
