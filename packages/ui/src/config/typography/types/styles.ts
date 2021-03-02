import { UiState } from '../../utils'

import {
  FontKerning,
  FontStyle as FontStyleCss,
  TextAlign,
  TextJustify,
  TextTransform,
} from './types'
import { FontFamily } from './font-family'
import { FontWeight } from './font-weight'
import { BaseFontSize, FontSize } from './font-size'
import { Decoration } from './text-decoration'
import { TextSpacing } from './text-spacing'

export enum ThemeFont {
  Heading = 'heading',
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

export type ThemeFontStyles = {
  [key in ThemeFont]: FontStyleStates
}

type FontStyleStates = {
  [key in UiState]?: ConfigFontStyle
}

// the comment indicates the specific css property the field controls
export interface ConfigFontStyle {
  family?: FontFamily // font-family
  style?: FontStyleCss // font-style
  weight?: FontWeight // font-weight
  size?: FontSize // font-size
  align?: TextAlign // text-align
  justify?: TextJustify // text-justify
  transform?: TextTransform // text-transform
  decoration?: Decoration // text-decoration
  kerning?: FontKerning // font-kerning
  spacing?: TextSpacing // margin; the space before and after typographic block-level elements
  indent?: string // text-indent
  letting?: string // line-height - overrides font-family value
  tracking?: string // word-spacing - overrides font-family value
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
}

export interface FontStyle {
  family: string // font-family
  style: string // font-style
  weight: string // font-weight
  size: string // font-size
  align: string // text-align
  justify: string // text-justify
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

export const defaultFontStyles: ThemeFontStyles = {
  heading: {
    base: {
      weight: FontWeight.Bold,
    },
  },
  paragraph: {
    base: {
      align: TextAlign.Justify,
      spacing: TextSpacing.Max,
    },
  },
  quote: {
    base: {
      style: FontStyleCss.Italic,
    },
  },
  text: {},
  table: {
    base: {
      letting: '0px',
    },
  },
  nav: {
    base: {
      letting: '0px',
    },
  },
  control: {
    base: {
      letting: '0px',
    },
  },
  label: {
    base: {
      weight: FontWeight.Bold,
    },
  },
  message: {
    base: {
      letting: '0px',
    },
  },
  button: {
    base: {
      weight: FontWeight.Bold,
    },
  },
  link: {
    base: {
      decoration: Decoration.Underline,
    },
    hover: {
      decoration: Decoration.UnderlineDouble,
    },
    active: {
      decoration: Decoration.UnderlineDouble,
    },
  },
  caption: {
    base: {
      weight: FontWeight.Light,
    },
  },
  legal: {
    base: {
      family: FontFamily.Secondary,
      style: FontStyleCss.Italic,
      size: BaseFontSize.Small,
    },
  },
  code: {
    base: {
      family: FontFamily.Tertiary,
    },
  },
  emphasized: {
    base: {
      style: FontStyleCss.Italic,
    },
  },
  strong: {
    base: {
      weight: FontWeight.Light,
    },
  },
  variable: {
    base: {
      family: FontFamily.Tertiary,
      style: FontStyleCss.Italic,
    },
  },
  mistake: {
    base: {
      decoration: Decoration.UnderlineDotted,
    },
  },
}
