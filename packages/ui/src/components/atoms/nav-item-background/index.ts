import styled from '@emotion/styled'

import { chromatic, Styled } from '../../../traits'
import { NavItemProps, navItemStyles } from '../../quarks'

export const NavItemBackground = styled.a(
  navItemStyles,
  ({
    theme,
    color: colorProp,
    current,
    currentColor,
  }: Styled & NavItemProps) => {
    const color = current ? currentColor : colorProp
    return chromatic({ theme, color })
  },
)
