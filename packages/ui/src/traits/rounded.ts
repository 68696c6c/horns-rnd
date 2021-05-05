import { css, SerializedStyles } from '@emotion/react'

import { Size, CornerSizeOptions, isSize } from '../config'

import { Styled } from './styled'

export const evalCorners = (
  c: CornerSizeOptions,
  defaults: CornerSizeOptions,
): Omit<CornerSizeOptions, 'all'> => ({
  topLeft: c.topLeft || c.all || defaults.topLeft || defaults.all,
  topRight: c.topRight || c.all || defaults.topRight || defaults.all,
  bottomLeft: c.bottomLeft || c.all || defaults.bottomLeft || defaults.all,
  bottomRight: c.bottomRight || c.all || defaults.bottomRight || defaults.all,
})

export interface Rounded {
  radius?: CornerSizeOptions | Size
}

export interface RoundedArgs extends Styled, Rounded {
  radiusDefault?: CornerSizeOptions
}

export const rounded = ({
  theme,
  radius,
  radiusDefault,
}: RoundedArgs): SerializedStyles | null => {
  if (typeof radius === 'undefined' && typeof radiusDefault === 'undefined') {
    return null
  }
  if (isSize(radius)) {
    return css`
      border-radius: ${theme.sizes[radius]};
    `
  }
  const c = evalCorners(radius || {}, radiusDefault || {})
  return css`
    border-top-left-radius: ${c.topLeft && theme.sizes[c.topLeft]};
    border-top-right-radius: ${c.topRight && theme.sizes[c.topRight]};
    border-bottom-left-radius: ${c.bottomLeft && theme.sizes[c.bottomLeft]};
    border-bottom-right-radius: ${c.bottomRight && theme.sizes[c.bottomRight]};
  `
}
