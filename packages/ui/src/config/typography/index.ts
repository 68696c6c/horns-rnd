import _merge from 'lodash.merge'

import { DeepPartial, UiState } from '../utils'

import {
  defaultConfig,
  defaultDecorations,
  ConfigFontStyle,
  FontStyle,
  Config,
  FontFamily,
  BaseFontSize,
  FontStyleCss,
  FontWeight,
  TextAlign,
  TextJustify,
  ThemeFont,
  FontKerning,
  TextTransform,
  DirectionOption,
  Decorations,
  Decoration,
} from './types'

export type TypographyConfig = DeepPartial<Config>

export type TypographyStyles = {
  [fontKey in ThemeFont]: {
    [stateKey in UiState]: FontStyle
  }
}

const makeTypographyState = (
  fontState: ConfigFontStyle,
  fontBase: FontStyle,
  decorations: Decorations,
): FontStyle => {
  const fontDecoration = decorations[fontState.decoration || Decoration.Base]
  return {
    family: fontState.family || fontBase.family,
    style: fontState.style || fontBase.style,
    weight: fontState.weight || fontBase.weight,
    size: fontState.size || fontBase.size,
    align: fontState.align || fontBase.align,
    justify: fontState.justify || fontBase.justify,
    transform: fontState.transform || fontBase.transform,
    decoration: {
      line: fontDecoration.line || fontBase.decoration.line,
      style: fontDecoration.style || fontBase.decoration.style,
    },
    kerning: fontState.kerning || fontBase.kerning,
    spacing: fontState.spacing || fontBase.spacing,
    indent: fontState.indent || fontBase.indent,
    letting: fontState.letting || fontBase.letting,
    tracking: fontState.tracking || fontBase.tracking,
  }
}

const makeDefaultFontStyle = (direction: DirectionOption): FontStyle => ({
  family: FontFamily.Primary,
  style: FontStyleCss.Normal,
  weight: FontWeight.Base,
  size: BaseFontSize.Base,
  align: direction === 'ltr' ? TextAlign.Left : TextAlign.Right,
  justify: TextJustify.Auto,
  transform: TextTransform.None,
  decoration: {
    line: defaultDecorations.base.line,
    style: '',
  },
  kerning: FontKerning.Normal,
  spacing: '',
  indent: '',
  letting: '',
  tracking: '',
})

export const makeTypographyStyles = (
  input?: TypographyConfig,
): TypographyStyles => {
  const config = _merge(defaultConfig, input)
  const defaultStyle = makeDefaultFontStyle(config.direction)

  const result: Partial<TypographyStyles> = {}
  Object.values(ThemeFont).forEach((font) => {
    const { base: b, hover, active, inactive: i } = config.styles[font]
    const base = makeTypographyState(b || {}, defaultStyle, config.decorations)
    result[font] = {
      base,
      hover: makeTypographyState(hover || {}, base, config.decorations),
      active: makeTypographyState(active || {}, base, config.decorations),
      inactive: makeTypographyState(i || {}, base, config.decorations),
    }
  })
  return result as TypographyStyles
}
