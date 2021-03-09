import _merge from 'lodash.merge'
import { css, SerializedStyles } from '@emotion/react'

import { Size, SideSizeOptions, Side } from '../../config'
import { Styled } from '../styled'

export type Sides = {
  [key in Side]: Size | undefined
}

export const evalSides = (
  options: Partial<SideSizeOptions>,
): Omit<Sides, 'all' | 'x' | 'y'> => {
  const { all, x, y, top, bottom, left, right } = options
  return {
    top: top || y || all,
    right: right || x || all,
    bottom: bottom || y || all,
    left: left || x || all,
  }
}

export interface Padded {
  padding?: SideSizeOptions | Size
}

export interface PaddedArgs extends Styled, Padded {
  paddingDefault?: SideSizeOptions
}

export const padded = ({
  theme,
  padding,
  paddingDefault,
}: PaddedArgs): SerializedStyles => {
  if (typeof padding === 'undefined' && typeof paddingDefault === 'undefined') {
    return css``
  }
  const paddingSize = theme.sizes[padding as Size]
  if (paddingSize) {
    return css`
      padding: ${paddingSize};
    `
  }
  const sides = evalSides(_merge(padding || {}, paddingDefault || {}))
  return css`
    padding-top: ${sides.top && theme.sizes[sides.top]};
    padding-right: ${sides.right && theme.sizes[sides.right]};
    padding-bottom: ${sides.bottom && theme.sizes[sides.bottom]};
    padding-left: ${sides.left && theme.sizes[sides.left]};
  `
}
