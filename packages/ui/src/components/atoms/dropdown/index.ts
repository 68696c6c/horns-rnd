import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Styled } from '../../../traits'
import { MenuProps, menuStyles } from '../../quarks'

export const Dropdown = styled.ul<MenuProps>(
  menuStyles,
  ({ theme }: Styled) => css`
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    top: -${theme.controls.border.top};
    padding: 0;
  `,
)
