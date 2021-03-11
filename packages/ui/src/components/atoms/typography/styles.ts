import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  Styled,
  Chromatic,
  chromatic,
  Typographic,
  typographic,
} from '../../../traits'

export type TypographyProps = Chromatic & Typographic

export const P = styled.p<TypographyProps>(chromatic, typographic)
export const Span = styled.span<TypographyProps>(chromatic, typographic)
export const Label = styled.label<TypographyProps>(chromatic, typographic)
export const Pre = styled.pre<TypographyProps>(chromatic, typographic)

// Phrase elements.
export const Em = styled.em<TypographyProps>(chromatic, typographic)
export const Strong = styled.strong<TypographyProps>(chromatic, typographic)
export const Small = styled.small<TypographyProps>(chromatic, typographic)
export const Code = styled.code<TypographyProps>(chromatic, typographic)
export const Samp = styled.samp<TypographyProps>(chromatic, typographic)
export const Kbd = styled.kbd<TypographyProps>(chromatic, typographic)
export const Var = styled.var<TypographyProps>(chromatic, typographic)
export const Sub = styled.sub<TypographyProps>(chromatic, typographic)
export const Sup = styled.sup<TypographyProps>(chromatic, typographic)
export const Del = styled.del<TypographyProps>(chromatic, typographic)
export const S = styled.s<TypographyProps>(chromatic, typographic)
export const U = styled.u<TypographyProps>(
  chromatic,
  typographic,
  ({ theme }: Styled) => css`
    text-decoration-color: ${theme.colors.danger.base.base};
  `,
)

// Quote elements.
export const Q = styled.q<TypographyProps>(chromatic, typographic)
export const Blockquote = styled.blockquote<TypographyProps>(
  chromatic,
  typographic,
  () => css`
    border-left: 0.25em solid;
    margin: 1em;
    padding-left: 1em;
  `,
)

// Heading elements.
export const H1 = styled.h1<TypographyProps>(chromatic, typographic)
export const H2 = styled.h2<TypographyProps>(chromatic, typographic)
export const H3 = styled.h3<TypographyProps>(chromatic, typographic)
export const H4 = styled.h4<TypographyProps>(chromatic, typographic)
export const H5 = styled.h5<TypographyProps>(chromatic, typographic)
export const H6 = styled.h6<TypographyProps>(chromatic, typographic)
