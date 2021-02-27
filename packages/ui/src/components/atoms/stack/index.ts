import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {
  Styled,
  Component,
  gridded,
  padded,
  responsive,
  Gridded,
  Padded,
  Responsive,
} from '../../../traits'

export interface StackProps
  extends Styled,
    Component,
    Gridded,
    Padded,
    Responsive {}

export const Stack = styled.div<StackProps>(
  ({ theme, breakpoint, gapped, gap, padding }) => [
    padded(theme, padding),
    responsive(theme, breakpoint, gridded(theme, gapped, gap)),
    () => css`
      display: flex;
      grid-gap: ${theme.sizes[theme.grid.gap]};
    `,
  ],
)
