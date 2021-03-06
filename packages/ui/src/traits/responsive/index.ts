import { css, SerializedStyles } from '@emotion/react'

import { Breakpoint } from '../../config'
import { Styled } from '../styled'

export interface Responsive {
  breakpoint?: Breakpoint
}

interface ResponsiveArgs extends Responsive {
  responsiveStyles?: SerializedStyles | string
}

export const responsive = ({
  theme,
  breakpoint,
  responsiveStyles,
}: Styled & ResponsiveArgs): SerializedStyles => css`
  @media (min-width: ${theme.breakpoints[breakpoint || Breakpoint.Mobile]}) {
    ${responsiveStyles}
  }
`
