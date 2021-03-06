import { css, SerializedStyles } from '@emotion/react'

import { Theme, Colorway, Background, UiState, HoverState } from '../../config'
import { Styled } from '../styled'

export interface Chromatic {
  color?: Colorway
}

interface ChromaticArgs extends Styled, Chromatic {
  colorDefault?: Colorway
  state?: UiState
}

export const chromatic = ({
  theme,
  color,
  state,
}: ChromaticArgs): SerializedStyles => {
  const colorway = theme.colors.colorways[color || Colorway.Neutral]
  const s = typeof state === 'undefined' ? HoverState.Base : state
  const c = colorway[s]
  return css`
    border-color: ${c.border};
    background-color: ${c.base};
    color: ${c.readable};
  `
}

export const chromaticText = ({
  theme,
  color,
  state,
}: ChromaticArgs): SerializedStyles => {
  const defaultColor = theme.colors.isDarkMode ? Colorway.Light : Colorway.Dark
  const colorway = theme.colors.colorways[color || defaultColor]
  const s = typeof state === 'undefined' ? HoverState.Base : state
  const c = colorway[s]
  return css`
    color: ${c.base};
  `
}

export interface ChromaticSurface {
  color?: Background
}

export const chromaticSurface = ({
  theme,
  color,
}: Styled & ChromaticSurface): SerializedStyles => {
  const { base } = theme.colors.backgrounds[color || Background.Primary]
  return css`
    border-color: ${base.border};
    background-color: ${base.base};
    color: ${base.readable};
  `
}
