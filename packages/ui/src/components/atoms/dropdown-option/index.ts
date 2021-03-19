import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  Chromatic,
  chromatic,
  Padded,
  padded,
  Interactive,
  interactive,
  Typographic,
  typographic,
} from '../../../traits'
import { Cursor, Font, HoverState, StatusState } from '../../../config'

export interface DropdownOptionProps
  extends Chromatic,
    Padded,
    Interactive,
    Typographic {
  value?: string | number
  label?: string
}

export const DropdownOption = styled.li<DropdownOptionProps>(
  ({ theme, color, cursor, font, padding }) => [
    chromatic,
    padded({ theme, padding, paddingDefault: theme.controls.padding }),
    typographic({ theme, font, fontDefault: Font.Control }),
    interactive({
      theme,
      cursor,
      cursorDefault: Cursor.Pointer,
      hoverStyles: [chromatic({ theme, color, state: HoverState.Hover })],
      activeStyles: [chromatic({ theme, color, state: HoverState.Active })],
      inactiveStyles: [
        chromatic({ theme, color, state: StatusState.Inactive }),
      ],
    }),
    () =>
      css`
        list-style-type: none;
      `,
  ],
)
