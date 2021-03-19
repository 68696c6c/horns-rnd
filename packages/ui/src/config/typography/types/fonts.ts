import {
  FontKerning,
  FontStyle as FontStyleCss,
  TextAlign,
  TextTransform,
} from './types'
import { FontFamily } from './families'
import { FontWeight } from './weights'
import { Letting } from './lettings'
import { FontSize } from './sizes'
import { Decoration } from './decorations'
import { TextSpacing } from './spacings'

export enum Font {
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

// the comment indicates the specific css property the field controls
export interface FontConfig {
  family: FontFamily // font-family
  style: FontStyleCss // font-style
  weight: FontWeight // font-weight
  size: FontSize // font-size
  align: TextAlign // text-align
  transform: TextTransform // text-transform
  decoration: Decoration // text-decoration
  kerning: FontKerning // font-kerning
  spacing: TextSpacing // margin; the space before and after typographic block-level elements
  indent: string // text-indent
  letting: Letting // line-height - overrides font-family value
  tracking: string // word-spacing - overrides font-family value
  // TODO: implement remaining CSS typographic properties
  // justify: TextJustify // text-justify
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
