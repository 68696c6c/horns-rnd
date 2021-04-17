import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Nav, NavMenu } from '../../atoms'
import { MenuContainer, NavItemMenuContainer } from '../nav-menu/styles'

export const SiteNav = styled(Nav)(
  () => css`
    > ${NavItemMenuContainer} {
      display: inline-flex;
      flex-direction: column;
      ${MenuContainer} {
        display: block;
      }
    }
    ${NavMenu} {
      min-width: 20em;
    }
    ${MenuContainer} {
      ${MenuContainer} {
        text-indent: 1em;
        ${MenuContainer} {
          text-indent: 2em;
        }
      }
    }
  `,
)
