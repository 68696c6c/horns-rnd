import { css } from '@emotion/react'

export interface MenuProps {
  open?: boolean
}

export const menuStyles = () => [
  ({ open }: MenuProps) =>
    !open &&
    css`
      display: none;
    `,
  () => css`
    position: absolute;
    box-sizing: border-box;
    min-width: 100%;
  `,
]
