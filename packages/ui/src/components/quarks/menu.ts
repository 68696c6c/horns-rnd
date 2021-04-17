import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { chromatic, Chromatic, shadowed, Shadowed, Styled } from '../../traits'

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

export interface NavMenuProps extends MenuProps, Chromatic {}

export const navMenuStyles = () => [chromatic, menuStyles]

export const MenuContainer = styled.span<MenuProps>(
  () =>
    css`
      position: relative;
    `,
  ({ theme, open, shadow }) =>
    open &&
    css`
    > * {
      ${shadowed({ theme, shadow })}
    `,
)
