import { css, SerializedStyles } from '@emotion/react'

import { Size } from '@horns/theme'

import { Styled } from './styled'

export interface Gridded {
  gapped?: boolean
  gap?: Size
}

export const gridded = ({
  theme,
  gapped,
  gap,
}: Styled & Gridded): SerializedStyles => css`
  display: grid;
  grid-gap: ${gapped && theme.sizes[gap || theme.grid.gap]};
`
