import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {
  Styled,
  Parent,
  gridded,
  padded,
  responsive,
  Gridded,
  Padded,
  Responsive,
} from '../../../traits'

export interface StackProps extends Parent, Gridded, Padded, Responsive {}

export const Stack = styled.div(
  ({ theme, breakpoint, gapped, gap }: Styled & StackProps) => [
    padded,
    responsive({
      theme,
      breakpoint,
      responsiveStyles: gridded(theme, gapped, gap),
    }),
    () => css`
      display: flex;
      grid-gap: ${gapped && theme.sizes[theme.grid.gap]};
    `,
  ],
)
