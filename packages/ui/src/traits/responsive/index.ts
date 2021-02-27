import { css, SerializedStyles } from '@emotion/react'

import { Theme, Breakpoint } from '../../config'

export interface Responsive {
  breakpoint?: Breakpoint
}

export const responsive = (
  theme: Theme,
  breakpoint?: Breakpoint,
  responsiveStyles?: SerializedStyles | string,
): SerializedStyles => css`
  @media (min-width: ${theme.breakpoints[breakpoint || Breakpoint.Mobile]}) {
    ${responsiveStyles}
  }
`
