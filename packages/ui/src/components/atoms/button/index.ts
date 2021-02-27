import styled from '@emotion/styled'

import { bordered, chromatic, padded } from '../../../traits'
import { ButtonProps } from '../../quarks'

export const Button = styled.button<ButtonProps>(
  ({ theme, border, color, padding }) => [
    chromatic(theme, color),
    bordered(theme, border, theme.buttons.border),
    padded(theme, padding, theme.buttons.padding),
  ],
)
