import _merge from 'lodash.merge'

import { DeepPartial } from '../utils'

import {
  defaultConfig,
  FontStates,
  Config,
  Font,
  makeDefaultFontConfig,
  makeFontStates,
} from './types'

export { Font, HeadingLevel } from './types'

export type TypographyConfig = DeepPartial<Config>

export type Typography = {
  [key in Font]: FontStates
}

export const makeTypography = (input?: TypographyConfig): Typography => {
  const config = _merge(defaultConfig, input)
  const defaultStyle = makeDefaultFontConfig(config.direction)

  const result: Partial<Typography> = {}
  Object.values(Font).forEach((font) => {
    result[font] = makeFontStates(
      config.styles[font],
      { ...defaultStyle },
      config,
    )
  })

  return result as Typography
}
