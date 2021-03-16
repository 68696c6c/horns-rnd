import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { MenuProps } from '../../quarks'

// import { shadowed } from '../../../traits'

export interface MenuContainerProps extends MenuProps {
  minWidth?: number
}

// TODO: add 'shadowed' trait
export const Container = styled.div<MenuContainerProps>(
  // ({ theme, open }) => open && shadowed.styles({ theme }),
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
  // ({ theme, open }) =>
  //   open &&
  //   css`
  //   > * {
  //     ${shadowed.styles({ theme })}
  //   `
)
