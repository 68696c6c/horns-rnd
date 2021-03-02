import { Direction, DirectionOption } from './types'
import { defaultDecorations, Decorations } from './text-decoration'
import { defaultFontWeights, FontWeights } from './font-weight'
import { defaultFontSizes, FontSizes } from './font-size'
import { defaultFontFamilies, FontFamilies } from './font-family'
import { defaultFontStyles, ThemeFontStyles } from './styles'

export interface Config {
  direction: DirectionOption
  families: FontFamilies
  decorations: Decorations
  weights: FontWeights
  sizes: FontSizes
  styles: ThemeFontStyles
}

export const defaultConfig: Config = {
  direction: Direction.LTR,
  families: defaultFontFamilies,
  decorations: defaultDecorations,
  weights: defaultFontWeights,
  sizes: defaultFontSizes,
  styles: defaultFontStyles,
}
