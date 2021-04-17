import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { MenuContainer } from '../../quarks'
import { Nav } from '../../atoms'
import { NavItemMenuContainer } from '../../molecules'

export const SiteNav = styled(Nav)(
  () => css`
    > ${NavItemMenuContainer} {
      display: inline-flex;
      flex-direction: column;
      ${MenuContainer} {
        display: block;
      }
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
