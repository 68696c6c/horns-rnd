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

interface StackProps extends Component, Gridded, Padded, Responsive {}

export const Stack = styled.div(
  ({ theme, breakpoint, gapped, gap, padding }: Styled & StackProps) => [
    padded(theme, padding),
    responsive(theme, breakpoint, gridded(theme, gapped, gap)),
    () => css`
      display: flex;
      grid-gap: ${theme.sizes[theme.grid.gap]};
    `,
  ],
)
