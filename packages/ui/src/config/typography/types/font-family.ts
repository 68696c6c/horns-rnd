import { MinMaxBase } from './types'

export enum FontFamilyFallback {
  Serif = 'serif',
  SansSerif = 'sans-serif',
  Monospace = 'monospace',
  Cursive = 'cursive',
  Fantasy = 'fantasy',
  SystemUi = 'system-ui',
  UiSerif = 'ui-serif',
  UiSansSerif = 'ui-sans-serif',
  UiMonospace = 'ui-monospace',
  UiRounded = 'ui-rounded',
  Emoji = 'emoji',
  Math = 'math',
  Fangsong = 'fangsong',
}

type FontFamilyFallbackOption = `${FontFamilyFallback}`

export interface FontFamilyStyle {
  base: string
  fallback: FontFamilyFallbackOption
  // these are set here because they will be specific to the font
  letting: string // i.e. line-height
  tracking: string // i.e. word-spacing
}

export enum FontFamily {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export type FontFamilies = {
  [key in FontFamily]: FontFamilyStyle
}

export const defaultFontFamilies: FontFamilies = {
  primary: {
    base: 'Helvetica',
    fallback: 'sans-serif',
    letting: '',
    tracking: '',
  },
  secondary: {
    base: 'Times New Roman',
    fallback: 'serif',
    letting: '',
    tracking: '',
  },
  tertiary: {
    base: 'Monaco',
    fallback: 'monospace',
    letting: '',
    tracking: '',
  },
}
