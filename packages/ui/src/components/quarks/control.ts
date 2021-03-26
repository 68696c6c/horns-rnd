// Controls are form elements.
import { EventHandler } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import MaskedInput from 'react-text-mask'

import { Cursor, Font, HoverState, StatusState } from '../../config'
import {
  Bordered,
  bordered,
  chromaticControl,
  ChromaticNotification,
  Inline,
  inline,
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
    ChromaticNotification,
    Inline,
    Interactive,
    Padded,
    Rounded,
    Typographic {
  id?: string
  name?: string
  value?: string | number
  onKeyUp?: EventHandler<any>
  required?: boolean
}

export const controlStyles = ({
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
    chromaticControl,
    bordered({ theme, border, borderDefault: controls.border }),
    inline,
    interactive({
      theme,
      cursor,
      cursorDefault: Cursor.Text,
      hoverStyles: [
        chromaticControl({ theme, color, state: HoverState.Hover }),
      ],
      activeStyles: [
        chromaticControl({ theme, color, state: HoverState.Active }),
      ],
      inactiveStyles: [
        chromaticControl({ theme, color, state: StatusState.Inactive }),
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

StyledInput.defaultProps = {
  font: Font.Control,
}

export const StyledInputHidden = styled.input()

// Instead of exporting a styled.select and using withComponent to change the tag e.g. a div in the
// Select molecule, it is preferable to just export the styles according to this thread:
// https://github.com/emotion-js/emotion/issues/2012
export const selectStyles = () => [
  controlStyles,
  () => css`
    appearance: none;
    &::-ms-expand {
      display: none;
    }
  `,
]

export interface InputMaskedProps extends ControlProps {
  currency?: string
}

export const StyledInputMasked = styled(MaskedInput)<InputMaskedProps>(
  controlStyles,
)
