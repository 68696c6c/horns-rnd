import { css, SerializedStyles } from '@emotion/react'

import {
  Colorway,
  ColorwayNotification,
  HoverState,
  UiState,
} from '../../config'

import { Styled } from '../styled'

export interface ChromaticArgs extends Styled {
  state?: UiState
}

export interface Chromatic {
  color?: Colorway
}

export const chromatic = ({
  theme,
  color,
  state,
}: Chromatic & ChromaticArgs): SerializedStyles => {
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
}: Chromatic & ChromaticArgs): SerializedStyles => {
  const color = inputColor || Colorway.Background
  const colorway = theme.colors[color]
  const c = colorway[typeof state === 'undefined' ? HoverState.Base : state]
  const isBackground =
    color === Colorway.Background || color === Colorway.BackgroundAlt
  const result = isBackground ? c.readable : c.base
  return css`
    color: ${result};
    text-decoration-color: ${result};
  `
}

export interface ChromaticNotification {
  color?: ColorwayNotification
}

export const chromaticControl = ({
  theme,
  color: inputColor,
  state: inputState,
}: ChromaticNotification & ChromaticArgs): SerializedStyles => {
  const color =
    inputColor && Object.values(ColorwayNotification).includes(inputColor)
      ? inputColor
      : ColorwayNotification.Background
  const state = typeof inputState === 'undefined' ? HoverState.Base : inputState
  const bg = theme.colors.background[state]
  const border =
    color === ColorwayNotification.Background
      ? bg.border
      : theme.colors[color].base.base
  return css`
    border-color: ${border};
    background-color: ${bg.base};
    color: ${bg.readable};
  `
}

export const chromaticNotification = ({
  theme,
  color: inputColor,
  state,
}: ChromaticNotification & ChromaticArgs): SerializedStyles => {
  const color =
    inputColor && Object.values(ColorwayNotification).includes(inputColor)
      ? inputColor
      : ColorwayNotification.Background
  const colorway = theme.colors[color]
  const c = colorway[typeof state === 'undefined' ? HoverState.Base : state]
  return css`
    border-color: ${c.border};
    background-color: ${c.base};
    color: ${c.readable};
  `
}

export const chromaticNotificationText = ({
  theme,
  color: inputColor,
  state,
}: ChromaticNotification & ChromaticArgs): SerializedStyles => {
  const color =
    inputColor && Object.values(ColorwayNotification).includes(inputColor)
      ? inputColor
      : ColorwayNotification.Background
  const colorway = theme.colors[color]
  const c = colorway[typeof state === 'undefined' ? HoverState.Base : state]
  const isBackground = color === ColorwayNotification.Background
  const result = isBackground ? c.readable : c.base
  return css`
    color: ${result};
    text-decoration-color: ${result};
  `
}
