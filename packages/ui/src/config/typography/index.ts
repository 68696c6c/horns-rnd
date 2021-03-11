import _merge from 'lodash.merge'

import { DeepPartial } from '../utils'

import {
  defaultConfig,
  FontStates,
  Config,
  Font as ConfigFont,
  HeadingLevel,
  makeDefaultFontConfig,
  makeFontStates,
} from './types'

export { Font, HeadingLevel } from './types'

export type TypographyConfig = DeepPartial<Config>

export type Typography = {
  [key in ConfigFont | HeadingLevel]: Readonly<FontStates>
}

export const makeTypography = (
  input?: TypographyConfig,
): Readonly<Typography> => {
  const config = _merge(defaultConfig, input)
  const fontBase = makeDefaultFontConfig(config.direction)

  const result: Partial<Typography> = {}
  Object.values(ConfigFont).forEach((font) => {
    const fontStyle = config.styles[font]
    result[font] = makeFontStates({
      fontStyle,
      fontBase,
      config,
    })
  })
  const fontStyle = config.styles.heading
  result.h1 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H1,
  })
  result.h2 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H2,
  })
  result.h3 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H3,
  })
  result.h4 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H4,
  })
  result.h5 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H5,
  })
  result.h6 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H6,
  })

  return result as Readonly<Typography>
}
