import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  Chromatic,
  chromatic,
  Padded,
  padded,
  Interactive,
  interactive,
} from '../../../traits'
import { Cursor, HoverState, StatusState } from '../../../config'

export const DropdownOption = styled.li<Chromatic & Padded & Interactive>(
  ({ theme, color, cursor, padding }) => [
    chromatic,
    padded({ theme, padding, paddingDefault: theme.controls.padding }),
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
