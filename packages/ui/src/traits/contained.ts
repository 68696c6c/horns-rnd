import { css, SerializedStyles } from '@emotion/react'

import { Styled } from './styled'

export interface Contained {
  fluid?: boolean
}

export const contained = ({
  theme,
  fluid,
}: Styled & Contained): SerializedStyles | null => {
  if (fluid) {
    return null
  }
  const container = theme.breakpoints.max
  const gutter = `calc(((100vw - ${container}) / 2))`
  return css`
    @media (min-width: ${container}) {
      padding-left: ${gutter};
      padding-right: ${gutter};
    }
  `
}
