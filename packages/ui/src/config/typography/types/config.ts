import { UiState } from '../../utils'

import { defaultDecorations, Decorations, Decoration } from './decorations'
import { defaultFontFamilies, FontFamilies, FontFamily } from './families'
import { FontConfig, Font } from './fonts'
import { defaultFontSizes, BaseFontSize, FontSizes } from './sizes'
import { defaultTextSpacings, TextSpacing, TextSpacings } from './spacings'
import { defaultFontWeights, FontWeight, FontWeights } from './weights'
import { Direction, FontStyle as FontStyleCss, TextAlign } from './types'

export type ConfigFontStyles = {
  [key in Font]: ConfigFontStates
}

export type ConfigFontStates = {
  [key in UiState]?: Partial<FontConfig>
}

export interface Config {
  direction: Direction.LTR
  families: FontFamilies
  decorations: Decorations
  weights: FontWeights
  sizes: FontSizes
  spacing: TextSpacings
  styles: ConfigFontStyles
}

export const defaultConfig: Config = {
  direction: Direction.LTR,
  families: defaultFontFamilies,
  decorations: defaultDecorations,
  weights: defaultFontWeights,
  sizes: defaultFontSizes,
  spacing: defaultTextSpacings,
  styles: {
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
  },
}
