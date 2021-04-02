import { css, SerializedStyles } from '@emotion/react'

import { Theme, Size } from '../../config'

export interface Gridded {
  gapped?: boolean
  gap?: Size
}

export const gridded = (
  theme: Theme,
  gapped?: boolean,
  gap?: Size,
): SerializedStyles => css`
  display: grid;
  grid-gap: ${gapped && theme.sizes[gap || theme.grid.gap]};
`
