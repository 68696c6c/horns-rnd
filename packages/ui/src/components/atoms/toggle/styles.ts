import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Colorway, Cursor, StatusState, ToggleType } from '../../../config'
import { chromatic, chromaticControl } from '../../../traits'
import { ControlProps, controlStyles } from '../../quarks'

export interface ToggleProps extends ControlProps {
  checked?: boolean
  type?: ToggleType
}

export const ToggleControl = styled.label<ToggleProps>(
  controlStyles,
  () =>
    css`
      content: ' ';
    `,
  ({ type }) =>
    type === ToggleType.Radio &&
    css`
      border-radius: 50%;
    `,
)

ToggleControl.defaultProps = {
  type: ToggleType.Checkbox,
  cursor: Cursor.Pointer,
  multiline: true,
}

export const Toggle = styled.input<ToggleProps>(({ theme, color }) => {
  return css`
    display: none;
    &:checked + ${ToggleControl} {
      ${chromatic({ theme, color: Colorway.Selected })};
    }
    &:disabled + ${ToggleControl} {
      cursor: not-allowed;
      ${chromaticControl({ theme, color, state: StatusState.Inactive })};
    }
    &:disabled + ${ToggleControl} + label.toggle-label {
      cursor: not-allowed;
    }
  `
})

Toggle.defaultProps = {
  type: ToggleType.Checkbox,
}
