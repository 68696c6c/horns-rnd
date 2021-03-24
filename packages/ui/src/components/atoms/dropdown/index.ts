import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Size } from '../../../config'
import { Styled } from '../../../traits'
import { MenuProps, menuStyles } from '../../quarks'

export const Dropdown = styled.ul<MenuProps>(
  menuStyles,
  ({ theme }: Styled) => css`
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    top: -${theme.sizes[theme.controls.border.all?.width as Size]};
    padding: 0;
    margin: 0;
    list-style-type: none;
  `,
)
