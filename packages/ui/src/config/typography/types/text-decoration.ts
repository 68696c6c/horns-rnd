export enum TextDecorationLine {
  None = 'none',
  Underline = 'underline',
  Overline = 'overline',
  LineThrough = 'line-through',
  Initial = 'initial',
  Inherit = 'inherit',
}

type TextDecorationLineOption = `${TextDecorationLine}`

export enum TextDecorationStyle {
  Solid = 'solid',
  Double = 'double',
  Dotted = 'dotted',
  Dashed = 'dashed',
  Wavy = 'wavy',
  Initial = 'initial',
  Inherit = 'inherit',
}

type TextDecorationStyleOption = `${TextDecorationStyle}`

export interface TextDecoration {
  line: TextDecorationLineOption
  style: TextDecorationStyleOption
}

export enum Decoration {
  Base = 'base',
  None = 'none',
  Overline = 'overline',
  Underline = 'underline',
  UnderlineDotted = 'underlineDotted',
  UnderlineDouble = 'underlineDouble',
  UnderlineWave = 'underlineWave',
  StrikeThrough = 'strikeThrough',
}

export type Decorations = {
  [key in Decoration]: TextDecoration
}

export const defaultDecorations: Decorations = {
  base: {
    line: null,
    style: null,
  },
  none: {
    line: 'none',
    style: null,
  },
  overline: {
    line: 'overline',
    style: null,
  },
  underline: {
    line: 'underline',
    style: null,
  },
  underlineDotted: {
    line: 'underline',
    style: 'dotted',
  },
  underlineDouble: {
    line: 'underline',
    style: 'double',
  },
  underlineWave: {
    line: 'underline',
    style: 'wavy',
  },
  strikeThrough: {
    line: 'line-through',
    style: null,
  },
}
