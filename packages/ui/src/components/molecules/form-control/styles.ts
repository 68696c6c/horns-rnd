import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Styled } from '../../../traits'
import { Stack, MessageLabel, Columns, StyledLabel } from '../../atoms'

const baseStyles = ({ theme }: Styled) => {
  const c = theme.colors.danger
  return css`
    padding: 0;
    margin-bottom: 1em;
    grid-row-gap: 0.5em;
    .error {
      color: ${c.base.base};
      border-color: ${c.base.base};
      &::placeholder {
        color: ${c.base.base};
      }
    }
  `
}

export const FormControl = styled(Stack)(baseStyles)

export const FormControlHorizontal = styled(Columns)(
  baseStyles,
  () =>
    css`
      align-items: center;
      ${StyledLabel} {
        justify-self: end;
      }
      ${MessageLabel} {
        justify-self: center;
        grid-column-end: span 2;
      }
    `,
)
