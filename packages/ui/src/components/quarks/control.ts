// Controls are form elements.
import { EventHandler } from 'react'
import { css } from '@emotion/react'

import {
  ControlOption,
  Cursor,
  Font,
  HoverState,
  StatusState,
} from '@horns/theme'

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

export interface ControlOptionProps {
  options?: ControlOption[]
}

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
  autoComplete?: string
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
