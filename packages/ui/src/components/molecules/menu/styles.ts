import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { shadowed } from '../../../traits'
import { MenuProps } from '../../quarks'

export interface MenuContainerProps extends MenuProps {
  minWidth?: number
}

export const MenuContainer = styled.div<MenuProps>(
  () =>
    css`
      position: relative;
    `,
)

export const Container = styled.div<MenuContainerProps>(
  ({ theme, open, shadow }) => open && shadowed({ theme, shadow }),
  ({ minWidth }) =>
    css`
      display: inline-flex;
      flex-direction: column;
      min-width: ${minWidth && `${minWidth}px`};
    `,
)
