import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Font } from '../../../config'
import { Styled } from '../../../traits'

import { Stack, Columns, Label } from '../../atoms'

export const Message = styled(Label)`
  padding-left: 0.6em;
  padding-right: 0.6em;
`

Message.defaultProps = {
  font: Font.Control,
}

const baseStyles = ({ theme }: Styled) => css`
  padding: 0;
  margin-bottom: ${theme.sizes[theme.grid.gap]};
  grid-row-gap: 0.5em;
`

export const FormControl = styled(Stack)(baseStyles)

export const FormControlHorizontal = styled(Columns)(
  baseStyles,
  () =>
    css`
      align-items: center;
      ${Label} {
        justify-self: end;
      }
      ${Message} {
        justify-self: center;
        grid-column-end: span 2;
      }
    `,
)
