import { css, SerializedStyles } from '@emotion/react'

import { Theme, Font } from '../../config'

export interface Typographic {
  font?: Font
}

export const typographic = (theme: Theme, font?: Font): SerializedStyles => {
  const { base } = theme.typography[font || Font.Text]
  return css`
    font-family: ${base.family};
    font-kerning: ${base.kerning};
    font-size: ${base.size};
    font-style: ${base.style};
    font-weight: ${base.weight};
    line-height: ${base.letting};
    text-align: ${base.align};
    text-decoration-line: ${base.decoration.line};
    text-decoration-style: ${base.decoration.style};
    text-indent: ${base.indent};
    text-transform: ${base.transform};
    word-spacing: ${base.tracking};
    margin: ${base.spacing};
  `
}
