import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { chromatic, shadowed } from '../../../traits'
import { MenuProps } from '../../quarks'

export interface MenuContainerProps extends MenuProps {
  minWidth?: number
}

export const Container = styled.div<MenuContainerProps>(
  ({ theme, color }) => css`
    > *:first-child {
      ${chromatic({ theme, color })};
      z-index: 1;
    }
  `,
  ({ theme, open, shadow }) => open && shadowed({ theme, shadow }),
  ({ minWidth }) =>
    css`
      display: inline-flex;
      flex-direction: column;
      min-width: ${minWidth && `${minWidth}px`};
    `,
)

export const MenuContainer = styled.div<MenuProps>(
  () =>
    css`
      position: relative;
    `,
)
