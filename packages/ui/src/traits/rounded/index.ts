import _merge from 'lodash.merge'
import { css, SerializedStyles } from '@emotion/react'

import { Size, SizeOption, CornerSizeOptions, Corner } from '../../config'
import { Styled } from '../styled'

export type Corners = {
  [key in Corner]: Size | undefined
}

export const evalCorners = (
  options: CornerSizeOptions,
): Omit<Corners, 'all'> => {
  const { all, topLeft, topRight, bottomLeft, bottomRight } = options
  return {
    topLeft: topLeft || all,
    topRight: topRight || all,
    bottomLeft: bottomLeft || all,
    bottomRight: bottomRight || all,
  }
}

export interface Rounded {
  radius?: CornerSizeOptions | SizeOption
}

export interface RoundedArgs extends Styled, Rounded {
  radiusDefault?: CornerSizeOptions
}

export const rounded = ({
  theme,
  radius,
  radiusDefault,
}: RoundedArgs): SerializedStyles => {
  if (typeof radius === 'undefined' && typeof radiusDefault === 'undefined') {
    return css``
  }
  const radiusSize = theme.sizes[radius as Size]
  if (radiusSize) {
    return css`
      border-radius: ${radiusSize};
    `
  }
  const c = evalCorners(_merge(radius || {}, radiusDefault || {}))
  return css`
    border-top-left-radius: ${c.topLeft && theme.sizes[c.topLeft]};
    border-top-right-radius: ${c.topRight && theme.sizes[c.topRight]};
    border-bottom-left-radius: ${c.bottomLeft && theme.sizes[c.bottomLeft]};
    border-bottom-right-radius: ${c.bottomRight && theme.sizes[c.bottomRight]};
  `
}
