import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { shadowed } from '../../../traits'
import { MenuProps } from '../../quarks'
import { NavMenu } from '../../atoms'

export const NavItemMenuContainer = styled.span<MenuProps>(
  ({ theme, open, shadow }) =>
    open &&
    css`
    > * {
      ${shadowed({ theme, shadow })}
    `,
)

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

export const MobileMenu = styled(NavMenu)(
  () => css`
    min-width: 20em;
    ${MenuContainer} {
      display: block;
      text-indent: 1em;
      ${MenuContainer} {
        text-indent: 2em;
        ${MenuContainer} {
          text-indent: 3em;
        }
      }
    }
  `,
)
