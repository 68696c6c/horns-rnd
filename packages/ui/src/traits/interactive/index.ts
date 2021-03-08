import { css, SerializedStyles } from '@emotion/react'

import { Cursor } from '../../config'
import { Styled } from '../styled'

export interface Interactive {
  cursor?: Cursor
}

interface InteractiveArgs extends Styled, Interactive {
  cursorDefault?: Cursor
  hoverStyles?: Array<SerializedStyles | string>
  activeStyles?: Array<SerializedStyles | string>
  inactiveStyles?: Array<SerializedStyles | string>
}

export const interactive = ({
  cursor,
  cursorDefault,
  hoverStyles,
  activeStyles,
  inactiveStyles,
}: InteractiveArgs): SerializedStyles => {
  return css`
    cursor: ${cursor || cursorDefault || Cursor.Pointer};
    &:disabled,
    &.inactive {
      ${inactiveStyles}
    }
    &:not(:disabled):not(.inactive):hover {
      ${hoverStyles}
    }
    &:not(:disabled):not(.inactive):active {
      ${activeStyles}
    }
  `
}
