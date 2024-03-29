import _cloneDeep from 'lodash.clonedeep'
import _merge from 'lodash.merge'

import { UiState } from '../../utils'
import { Colorway } from '../../colors'

import { Config, ConfigFontStates } from './config'
import { FontConfig } from './fonts'
import { computeFontFamily } from './families'
import { FontSize, HeadingLevel } from './sizes'

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
    color: Colorway
  } // text-decoration
  kerning: string // font-kerning
  spacing: string // margin; the space before and after typographic block-level elements
  indent: string // text-indent
  letting: string // line-height - overrides font-family value
  tracking: string // word-spacing - overrides font-family value
}

const makeFontStyle = (
  font: FontConfig,
  config: Config,
  size?: FontSize,
): FontStyle => {
  const { families, decorations, weights, spacing, sizes, letting } = config
  const fontDecoration = decorations[font.decoration]
  return {
    family: computeFontFamily(families[font.family]),
    style: font.style,
    weight: weights[font.weight],
    size: sizes[size || font.size],
    align: font.align,
    transform: font.transform,
    decoration: {
      line: fontDecoration.line,
      style: fontDecoration.style || '',
      color: fontDecoration.color || Colorway.Typography,
    },
    kerning: font.kerning,
    spacing: spacing[font.spacing],
    indent: font.indent,
    letting: letting[font.letting],
    tracking: font.tracking,
  }
}

const merge = (defaults: FontConfig, style?: Partial<FontConfig>) =>
  _merge(_cloneDeep(defaults), _cloneDeep(style))

export type FontStates = {
  [key in UiState]: FontStyle
}

export interface FontStateArgs {
  fontStyle: ConfigFontStates
  fontBase: Readonly<FontConfig>
  config: Readonly<Config>
  size?: HeadingLevel
}

export const makeFontStates = ({
  fontStyle,
  fontBase,
  config,
  size,
}: FontStateArgs): FontStates => {
  const { base: inputBase, hover, active, inactive } = fontStyle
  const base = merge(fontBase, inputBase)
  return {
    base: makeFontStyle(base, config, size),
    hover: makeFontStyle(merge(base, hover), config, size),
    active: makeFontStyle(merge(base, active), config, size),
    inactive: makeFontStyle(merge(base, inactive), config, size),
  }
}
