import { EventHandler } from 'react'
import { css, SerializedStyles } from '@emotion/react'

import { Cursor } from '../config'

import { Styled } from './styled'

export interface Interactive {
  cursor?: Cursor
  onClick?: EventHandler<any>
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
  const filterInactive = ':not(:disabled):not(.inactive)'
  return css`
    cursor: ${cursor || cursorDefault || Cursor.Pointer};
    &:disabled,
    &.inactive {
      ${inactiveStyles}
    }
    &${filterInactive}:hover, &${filterInactive}.hover {
      ${hoverStyles}
    }
    &${filterInactive}:active, &${filterInactive}.active {
      ${activeStyles}
    }
    &${filterInactive}:focus, &${filterInactive}.focus {
      outline-style: dotted;
      outline-color: inherit;
      outline-width: 1px;
      outline-offset: 1px;
    }
  `
}
