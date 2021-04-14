import styled from '@emotion/styled'

import { Chromatic, chromatic } from '../../../traits'
import { MenuProps, menuStyles } from '../../quarks'

export interface NavMenuProps extends MenuProps, Chromatic {}

export const NavMenu = styled.nav<NavMenuProps>(chromatic, menuStyles)
