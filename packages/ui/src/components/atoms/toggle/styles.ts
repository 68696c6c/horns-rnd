import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Colorway, Cursor, ToggleType } from '../../../config'
import { ControlProps, controlStyles } from '../../quarks'

export interface ToggleProps extends ControlProps {
  selected?: boolean
  type: ToggleType
}

export const ToggleControl = styled.label<ToggleProps>(
  controlStyles,
  ({ type }) =>
    css`
      content: ' ';
      ${type === ToggleType.Radio &&
      css`
        border-radius: 50%;
      `}
    `,
)

ToggleControl.defaultProps = {
  cursor: Cursor.Pointer,
}

export const Toggle = styled.input<ToggleProps>(({ theme, color }) => {
  const c = theme.colors[color || Colorway.Background]
  return css`
    display: none;
    &:checked + ${ToggleControl} {
      background: ${c.active.base};
    }
    &:disabled + ${ToggleControl} {
      background: ${c.inactive.base};
      cursor: not-allowed;
    }
    &:disabled + ${ToggleControl} + label.toggle-label {
      cursor: not-allowed;
    }
  `
})
