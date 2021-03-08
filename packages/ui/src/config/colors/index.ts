import _merge from 'lodash.merge'

import { DeepPartial } from '../utils'
import {
  Config,
  defaultConfig,
  makePallet,
  Colorways,
  makeColorways,
} from './types'

export { Colorway, Colorways } from './types'

export type ColorsConfig = DeepPartial<Config>

export const makeColors = (config?: ColorsConfig): Colorways => {
  const mergedConfig = _merge(defaultConfig, config)
  const pallet = makePallet(mergedConfig)
  return makeColorways(pallet, mergedConfig)
}
