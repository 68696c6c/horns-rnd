import _merge from 'lodash.merge'

import { UiState } from '../../utils'

import { Config, ConfigFontStates } from './config'
import { FontConfig } from './fonts'
import { computeFontFamily } from './families'

interface FontStyle {
  family: string // font-family
  style: string // font-style
  weight: number // font-weight
  size: string // font-size
  align: string // text-align
  transform: string // text-transform
  decoration: {
    line: string
    style: string
  } // text-decoration
  kerning: string // font-kerning
  spacing: string // margin; the space before and after typographic block-level elements
  indent: string // text-indent
  letting: string // line-height - overrides font-family value
  tracking: string // word-spacing - overrides font-family value
}

const makeFontStyle = (font: FontConfig, config: Config): FontStyle => {
  const { families, decorations, weights, spacing, sizes } = config
  const fontDecoration = decorations[font.decoration]
  return {
    family: computeFontFamily(families[font.family]),
    style: font.style,
    weight: weights[font.weight],
    size: sizes[font.size],
    align: font.align,
    transform: font.transform,
    decoration: {
      line: fontDecoration.line,
      style: fontDecoration.style || '',
    },
    kerning: font.kerning,
    spacing: spacing[font.spacing],
    indent: font.indent,
    letting: font.letting,
    tracking: font.tracking,
  }
}

export type FontStates = {
  [key in UiState]: FontStyle
}

export const makeFontStates = (
  input: ConfigFontStates,
  fontBase: FontConfig,
  config: Config,
): FontStates => {
  const { base: b, hover, active, inactive: i } = input
  const base = _merge(fontBase, b || {})
  return {
    base: makeFontStyle(base, config),
    hover: makeFontStyle(_merge(base, hover || {}), config),
    active: makeFontStyle(_merge(base, active || {}), config),
    inactive: makeFontStyle(_merge(base, i || {}), config),
  }
}
