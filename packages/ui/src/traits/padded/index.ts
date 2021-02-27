import _merge from 'lodash.merge'
import { css, SerializedStyles } from '@emotion/react'

import { Theme, Size, SizeOption, SideSizeOptions, Side } from '../../config'

export type Sides = {
  [key in Side]: Size | undefined
}

export const evalSides = (options: Partial<SideSizeOptions>): Sides => {
  const { all, x, y, top, bottom, left, right } = options
  return {
    top: top || y || all,
    right: right || x || all,
    bottom: bottom || y || all,
    left: left || x || all,
  }
}

export interface Padded {
  padding?: SideSizeOptions | SizeOption
}

export const padded = (
  theme: Theme,
  padding?: SideSizeOptions | SizeOption,
  defaults?: SideSizeOptions,
): SerializedStyles => {
  if (typeof padding === 'undefined' && typeof defaults === 'undefined') {
    return css``
  }
  const paddingSize = theme.sizes[padding as Size]
  if (paddingSize) {
    return css`
      padding: ${paddingSize};
    `
  }
  const sides = evalSides(_merge(padding || {}, defaults || {}))
  return css`
    padding-top: ${sides.top && theme.sizes[sides.top]};
    padding-right: ${sides.right && theme.sizes[sides.right]};
    padding-bottom: ${sides.bottom && theme.sizes[sides.bottom]};
    padding-left: ${sides.left && theme.sizes[sides.left]};
  `
}
