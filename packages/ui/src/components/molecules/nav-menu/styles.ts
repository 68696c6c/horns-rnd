import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { shadowed } from '../../../traits'
import { MenuProps, NavMenuProps, navMenuStyles } from '../../quarks'

export const NavMenu = styled.nav<NavMenuProps>(navMenuStyles)

export const NavItemMenuContainer = styled.span<MenuProps>(
  ({ theme, open, shadow }) =>
    open &&
    css`
    > * {
      ${shadowed({ theme, shadow })}
    `,
  () => css`
    ${NavMenu} {
      min-width: 20em;
    }
  `,
)
