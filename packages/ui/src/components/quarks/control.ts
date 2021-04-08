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
    Interactive,
    Padded,
    Rounded,
    Typographic {
  id?: string
  name?: string
  value?: string | number
  defaultValue?: string | number
  onKeyUp?: EventHandler<any>
  onChange?: EventHandler<any>
  required?: boolean
  multiline?: boolean
  multiple?: boolean
}

export const controlStyles = ({
  theme,
  border,
  color,
  cursor,
  padding,
  radius,
}: Styled & ControlProps) => {
  const { controls } = theme
  return [
    chromaticControl,
    bordered({ theme, border, borderDefault: controls.border }),
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
    typographic({ theme, font: Font.Control }),
    ({ multiple, multiline }: ControlProps) => {
      // Force the element height to match the line-height to ensure that inputs that have controls
      // inside them (e.g. input type="datetime-local") don't end up a different size than standard inputs.
      const f = theme.typography.control.base
      if (multiple) {
        return css`
          min-height: ${f.letting};
        `
      }
      return multiline
        ? css``
        : css`
            height: ${f.letting};
            min-width: ${f.letting};
          `
    },
    () => css`
      display: inline-flex;
      box-sizing: content-box;
      vertical-align: middle;
    `,
  ]
}

export const StyledInput = styled.input(controlStyles)

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
