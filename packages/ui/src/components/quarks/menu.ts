import { css } from '@emotion/react'

import { chromatic, Chromatic, shadowed, Shadowed, Styled } from '../../traits'

export interface MenuProps extends Chromatic, Shadowed {
  open?: boolean
}

export const menuStyles = () => [
  chromatic,
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
