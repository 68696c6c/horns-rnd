import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  Chromatic,
  chromaticText,
  Typographic,
  typographic,
} from '../../../traits'

export type TypographyProps = Chromatic & Typographic

export const P = styled.p<TypographyProps>(chromaticText, typographic)
export const Span = styled.span<TypographyProps>(chromaticText, typographic)
export const Label = styled.label<TypographyProps>(chromaticText, typographic)
export const Pre = styled.pre<TypographyProps>(chromaticText, typographic)

// Phrase elements.
export const Em = styled.em<TypographyProps>(chromaticText, typographic)
export const Strong = styled.strong<TypographyProps>(chromaticText, typographic)
export const Small = styled.small<TypographyProps>(chromaticText, typographic)
export const Code = styled.code<TypographyProps>(chromaticText, typographic)
export const Samp = styled.samp<TypographyProps>(chromaticText, typographic)
export const Kbd = styled.kbd<TypographyProps>(chromaticText, typographic)
export const Var = styled.var<TypographyProps>(chromaticText, typographic)
export const Sub = styled.sub<TypographyProps>(chromaticText, typographic)
export const Sup = styled.sup<TypographyProps>(chromaticText, typographic)
export const Del = styled.del<TypographyProps>(chromaticText, typographic)
export const S = styled.s<TypographyProps>(chromaticText, typographic)
export const U = styled.u<TypographyProps>(chromaticText, typographic)

// Quote elements.
export const Q = styled.q<TypographyProps>(chromaticText, typographic)
export const Blockquote = styled.blockquote<TypographyProps>(
  chromaticText,
  typographic,
  () => css`
    border-left: 0.25em solid;
    margin: 1em;
    padding-left: 1em;
  `,
)

// Heading elements.
export const H1 = styled.h1<TypographyProps>(chromaticText, typographic)
export const H2 = styled.h2<TypographyProps>(chromaticText, typographic)
export const H3 = styled.h3<TypographyProps>(chromaticText, typographic)
export const H4 = styled.h4<TypographyProps>(chromaticText, typographic)
export const H5 = styled.h5<TypographyProps>(chromaticText, typographic)
export const H6 = styled.h6<TypographyProps>(chromaticText, typographic)
