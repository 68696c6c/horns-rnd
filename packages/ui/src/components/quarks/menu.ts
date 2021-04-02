import { css } from '@emotion/react'

import { shadowed, Shadowed, Styled } from '../../traits'

export interface MenuProps extends Shadowed {
  open?: boolean
}

export const menuStyles = () => [
  ({ theme, open, shadow }: Styled & MenuProps) => {
    if (open) {
      return shadowed({ theme, shadow })
    }
    return css`
      display: none;
    `
  },
  () => css`
    position: absolute;
    box-sizing: border-box;
    min-width: 100%;
  `,
]
