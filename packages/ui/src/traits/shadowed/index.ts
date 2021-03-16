import { css, SerializedStyles } from '@emotion/react'

import { Size } from '../../config'

import { Styled } from '../styled'

export interface ShadowConfig {
  x?: Size
  y?: Size
  blur?: Size
  spread?: Size
}

export interface Shadowed {
  shadow?: ShadowConfig
}

// TODO: add a colorway swatch for transparency
export const shadowed = ({
  theme,
  shadow,
}: Styled & Shadowed): SerializedStyles => {
  const s = typeof shadow === 'undefined' ? {} : (shadow as ShadowConfig)
  const x = theme.sizes[s.x || Size.Min]
  const y = theme.sizes[s.y || Size.XXSmall]
  const blur = theme.sizes[s.blur || Size.XSmall]
  const spread = theme.sizes[s.spread || Size.Min]
  return css`
    box-shadow: ${x} ${y} ${blur} ${spread} ${theme.colors.typography.base.base};
  `
}
