import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { NavItemProps, navItemStyles } from '../../quarks'

export const NavItemUnderline = styled.a(
  navItemStyles,
  ({ current }: NavItemProps) =>
    current &&
    css`
      text-decoration: underline !important;
    `,
)
