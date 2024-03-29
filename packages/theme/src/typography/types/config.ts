import { UiState } from '../../utils'

import { defaultDecorations, Decoration, Decorations } from './decorations'
import { defaultFontFamilies, FontFamilies, FontFamily } from './families'
import { Font, FontConfig } from './fonts'
import { defaultLettings, Letting, Lettings } from './lettings'
import { defaultFontSizes, BaseFontSize, FontSizes } from './sizes'
import { defaultTextSpacings, TextSpacing, TextSpacings } from './spacings'
import { defaultFontWeights, FontWeight, FontWeights } from './weights'
import {
  Direction,
  FontKerning,
  FontStyle as FontStyleCss,
  FontStyle,
  TextAlign,
  TextTransform,
} from './types'

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
  letting: Lettings
  styles: ConfigFontStyles
}

export const makeDefaultFontConfig = (config: Config): FontConfig => ({
  family: FontFamily.Primary,
  style: FontStyleCss.Normal,
  weight: FontWeight.Base,
  size: BaseFontSize.Base,
  align: config.direction === 'ltr' ? TextAlign.Left : TextAlign.Right,
  transform: TextTransform.None,
  decoration: Decoration.Base,
  kerning: FontKerning.Normal,
  spacing: TextSpacing.Base,
  indent: '',
  letting: Letting.Base,
  tracking: '',
})

export const defaultConfig: Config = {
  direction: Direction.LTR,
  families: defaultFontFamilies,
  decorations: defaultDecorations,
  weights: defaultFontWeights,
  sizes: defaultFontSizes,
  spacing: defaultTextSpacings,
  letting: defaultLettings,
  styles: {
    del: {
      base: {
        decoration: Decoration.StrikeThrough,
      },
    },
    heading: {
      base: {
        weight: FontWeight.Bold,
        spacing: TextSpacing.Max,
      },
    },
    kbd: {
      base: {
        family: FontFamily.Tertiary,
      },
    },
    pre: {
      base: {
        family: FontFamily.Tertiary,
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
        style: FontStyle.Italic,
      },
    },
    blockquote: {
      base: {
        style: FontStyle.Italic,
      },
    },
    text: {},
    s: {},
    samp: {},
    sub: {},
    sup: {},
    table: {
      base: {
        letting: Letting.Min,
      },
    },
    nav: {
      base: {
        letting: Letting.Min,
      },
    },
    control: {
      base: {
        letting: Letting.Min,
      },
    },
    label: {
      base: {
        weight: FontWeight.Bold,
        letting: Letting.Min,
      },
    },
    message: {
      base: {
        letting: Letting.Min,
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
        style: FontStyle.Italic,
        decoration: Decoration.Underline,
      },
      active: {
        style: FontStyle.Italic,
        decoration: Decoration.UnderlineDouble,
      },
      inactive: {
        decoration: Decoration.Underline,
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
        style: FontStyle.Italic,
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
        style: FontStyle.Italic,
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
        style: FontStyle.Italic,
      },
    },
    mistake: {
      base: {
        decoration: Decoration.Mistake,
      },
    },
    u: {
      base: {
        decoration: Decoration.Mistake,
      },
    },
  },
}
