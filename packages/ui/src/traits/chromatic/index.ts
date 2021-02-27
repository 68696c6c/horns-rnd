import { css, SerializedStyles } from '@emotion/react'

import { Theme, Colorway, Background } from '../../config'

export interface Chromatic {
  color?: Colorway
}

export const chromatic = (theme: Theme, color?: Colorway): SerializedStyles => {
  const { base } = theme.colors.colorways[color || Colorway.Neutral]
  return css`
    border-color: ${base.border};
    background-color: ${base.base};
    color: ${base.readable};
  `
}

export const chromaticText = (
  theme: Theme,
  color?: Colorway,
): SerializedStyles => {
  const defaultColor = theme.colors.isDarkMode ? Colorway.Light : Colorway.Dark
  const { base } = theme.colors.colorways[color || defaultColor]
  return css`
    color: ${base.base};
  `
}

export interface ChromaticSurface {
  color?: Background
}

export const chromaticSurface = (
  theme: Theme,
  color?: Background,
): SerializedStyles => {
  const { base } = theme.colors.backgrounds[color || Background.Primary]
  return css`
    border-color: ${base.border};
    background-color: ${base.base};
    color: ${base.readable};
  `
}
