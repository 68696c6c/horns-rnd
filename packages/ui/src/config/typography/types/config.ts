import {
  DirectionOption,
  FontStyle,
  HeadingLevel,
  TextAlign,
  TextJustify,
  TextTransform,
  FontKerning,
} from './types'
import { defaultDecorations, Decoration, Decorations } from './text-decoration'
import { defaultFontWeights, FontWeight, FontWeights } from './font-weight'
import { defaultFontSizes, FontSize, FontSizes } from './font-size'
import { defaultFontFamilies, FontFamilies, FontFamily } from './font-family'

export enum TextFont {
  Paragraph = 'paragraph',
  Quote = 'quote',
  Text = 'text',
  Table = 'table',
  Nav = 'nav',
  Control = 'control',
  Label = 'label',
  Message = 'message',
  Button = 'button',
  Link = 'link',
  Caption = 'caption',
  Legal = 'legal',
  Code = 'code',
  Emphasized = 'emphasized',
  Strong = 'strong',
  Variable = 'variable',
  Mistake = 'mistake',
}

export type ThemeFont = HeadingLevel | TextFont

// the comment indicates the specific css property the field controls
export interface Style {
  family: FontFamily // font-family
  style: FontStyle // font-style
  weight: FontWeight // font-weight
  size: FontSize // font-size
  align: TextAlign // text-align
  justify: TextJustify // text-justify
  transform: TextTransform // text-transform
  decoration: Decoration // text-decoration
  kerning: FontKerning // font-kerning
  indent: string // text-indent
  letting: string // line-height - overrides font-family value
  tracking: string // word-spacing - overrides font-family value
  hover: {
    decoration: Decoration
  }
  active: {
    decoration: Decoration
  }
  inactive: {
    decoration: Decoration
  }
  // TODO: implement remaining CSS typographic properties
  // stretch: string, // font-stretch
  // variant: string, // font-variant
  // spacing: string, // letter-spacing
  // quotes: string, // quotes
  // alignLast: string, // text-align-last
  // overflow: string, // text-overflow
  // shadow: string, // text-shadow
  // wordBreak: string, // word-break
  // wrap: string, // word-wrap
  // mode: string, // writing-mode
  // spacing: string, // margin; the space before and after the text
}

type ThemeFonts = {
  [key in ThemeFont]: Style
}

export interface Config {
  direction: DirectionOption
  families: FontFamilies
  decorations: Decorations
  weights: FontWeights
  sizes: FontSizes
  styles: ThemeFonts
}

export const defaultTypography: Config = {
  direction: 'ltr',
  families: defaultFontFamilies,
  decorations: defaultDecorations,
  weights: defaultFontWeights,
  sizes: defaultFontSizes,
}
