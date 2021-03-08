import { css, SerializedStyles } from '@emotion/react'

import { Colorway, HoverState, UiState } from '../../config'
import { Styled } from '../styled'

export interface Chromatic {
  color?: Colorway
}

interface ChromaticArgs extends Chromatic {
  colorDefault?: Colorway
  state?: UiState
}

export const chromatic = ({
  theme,
  color,
  state,
}: Styled & ChromaticArgs): SerializedStyles => {
  const colorway = theme.colors[color || Colorway.Background]
  const c = colorway[typeof state === 'undefined' ? HoverState.Base : state]
  return css`
    border-color: ${c.border};
    background-color: ${c.base};
    color: ${c.readable};
  `
}

export const chromaticText = ({
  theme,
  color: inputColor,
  state,
}: Styled & ChromaticArgs): SerializedStyles => {
  const color = inputColor || Colorway.Background
  const colorway = theme.colors[color]
  const c = colorway[typeof state === 'undefined' ? HoverState.Base : state]
  const isBackground =
    color === Colorway.Background || color === Colorway.BackgroundAlt
  return css`
    color: ${isBackground ? c.readable : c.base};
  `
}
