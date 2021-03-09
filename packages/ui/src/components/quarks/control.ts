// Controls are form elements.
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import MaskedInput from 'react-text-mask'

import { Cursor, Font, HoverState, StatusState } from '../../config'
import {
  Bordered,
  bordered,
  Chromatic,
  chromatic,
  interactive,
  Interactive,
  Padded,
  padded,
  Rounded,
  rounded,
  Styled,
  Typographic,
  typographic,
} from '../../traits'

export interface ControlProps
  extends Bordered,
    Chromatic,
    Interactive,
    Padded,
    Rounded,
    Typographic {}

const controlStyles = ({
  theme,
  border,
  color,
  cursor,
  font,
  padding,
  radius,
}: Styled & ControlProps) => {
  const { controls } = theme
  return [
    chromatic,
    bordered({ theme, border, borderDefault: controls.border }),
    interactive({
      theme,
      cursor,
      cursorDefault: Cursor.Text,
      hoverStyles: [chromatic({ theme, color, state: HoverState.Hover })],
      activeStyles: [chromatic({ theme, color, state: HoverState.Active })],
      inactiveStyles: [
        chromatic({ theme, color, state: StatusState.Inactive }),
      ],
    }),
    padded({ theme, padding, paddingDefault: controls.padding }),
    rounded({ theme, radius, radiusDefault: controls.radius }),
    typographic({ theme, font, fontDefault: Font.Control }),
    () => css`
      display: inline-flex;
      box-sizing: content-box;
      vertical-align: middle;
    `,
  ]
}

export const StyledInput = styled.input(controlStyles)
export const StyledInputHidden = styled.input()

export interface InputMaskedProps extends ControlProps {
  currency?: string
}

export const StyledInputMasked = styled(MaskedInput)<InputMaskedProps>(
  controlStyles,
)
