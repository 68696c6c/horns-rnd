import _merge from 'lodash.merge'

import { DeepPartial } from '../utils'
import {
  Mode,
  Config,
  defaultConfig,
  makePallet,
  Colorways,
  makeColorways,
  Backgrounds,
  makeBackgrounds,
} from './types'

export { Colorway, Background } from './types'

export type ColorsConfig = DeepPartial<Config>

export interface Colors {
  readonly isDarkMode: boolean
  readonly colorways: Colorways
  readonly backgrounds: Backgrounds
}

export const makeColors = (config?: ColorsConfig) => {
  const mergedConfig = _merge(defaultConfig, config)
  const pallet = makePallet(mergedConfig)
  return {
    isDarkMode: mergedConfig.mode === Mode.Dark,
    colorways: makeColorways(pallet, mergedConfig),
    backgrounds: makeBackgrounds(pallet, mergedConfig),
  }
}
