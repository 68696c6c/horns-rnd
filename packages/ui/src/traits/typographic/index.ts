import { css, SerializedStyles } from '@emotion/react'

import { Font, UiState, HoverState } from '../../config'
import { Styled } from '../styled'

export interface Typographic {
  font?: Font
}

export interface TypographicArgs extends Typographic {
  fontDefault?: Font
  state?: UiState
}

export const typographic = ({
  theme,
  font,
  fontDefault,
  state,
}: Styled & TypographicArgs): SerializedStyles => {
  const fontStyle = theme.typography[font || fontDefault || Font.Text]
  const s = typeof state === 'undefined' ? HoverState.Base : state
  const f = fontStyle[s]
  return css`
    font-family: ${f.family};
    font-kerning: ${f.kerning};
    font-size: ${f.size};
    font-style: ${f.style};
    font-weight: ${f.weight};
    line-height: ${f.letting};
    text-align: ${f.align};
    text-decoration-line: ${f.decoration.line};
    text-decoration-style: ${f.decoration.style};
    text-indent: ${f.indent};
    text-transform: ${f.transform};
    word-spacing: ${f.tracking};
    margin: ${f.spacing};
  `
}
