import React, { FC } from 'react'

import { Font, HeadingLevel } from '../../../config'
import { Parent, Chromatic, Typographic } from '../../../traits'
import { StyledLink } from '../../quarks'

import * as Styled from './styles'

export interface TypographyProps extends Parent, Chromatic, Typographic {}

export const T: FC<TypographyProps> = ({
  font,
  ...others
}: TypographyProps) => {
  switch (font) {
    case HeadingLevel.H1:
      return <Styled.H1 font={HeadingLevel.H1} {...others} />
    case HeadingLevel.H2:
      return <Styled.H2 font={HeadingLevel.H2} {...others} />
    case HeadingLevel.H3:
      return <Styled.H3 font={HeadingLevel.H3} {...others} />
    case HeadingLevel.H4:
      return <Styled.H4 font={HeadingLevel.H4} {...others} />
    case HeadingLevel.H5:
      return <Styled.H5 font={HeadingLevel.H5} {...others} />
    case HeadingLevel.H6:
      return <Styled.H6 font={HeadingLevel.H6} {...others} />
    case Font.Blockquote:
      return <Styled.Blockquote font={Font.Quote} {...others} />
    case Font.Del:
      return <Styled.Del font={Font.Del} {...others} />
    case Font.Kbd:
      return <Styled.Kbd font={Font.Kbd} {...others} />
    case Font.Pre:
      return <Styled.Pre font={Font.Pre} {...others} />
    case Font.S:
      return <Styled.S font={Font.S} {...others} />
    case Font.Samp:
      return <Styled.Samp font={Font.Samp} {...others} />
    case Font.Sub:
      return <Styled.Sub font={Font.Sub} {...others} />
    case Font.Sup:
      return <Styled.Sup font={Font.Sup} {...others} />
    case Font.U:
      return <Styled.U font={Font.U} {...others} />
    case Font.Mistake:
      return <Styled.U font={Font.Mistake} {...others} />
    case Font.Paragraph:
      return <Styled.P font={Font.Paragraph} {...others} />
    case Font.Quote:
      return <Styled.Q font={Font.Quote} {...others} />
    case Font.Link:
      return <StyledLink font={Font.Link} {...others} />
    case Font.Message:
      return <Styled.Span font={Font.Message} {...others} />
    case Font.Caption:
      return <Styled.Span font={Font.Caption} {...others} />
    case Font.Legal:
      return <Styled.Small font={Font.Legal} {...others} />
    case Font.Code:
      return <Styled.Code font={Font.Code} {...others} />
    case Font.Emphasized:
      return <Styled.Em font={Font.Emphasized} {...others} />
    case Font.Strong:
      return <Styled.Strong font={Font.Strong} {...others} />
    case Font.Variable:
      return <Styled.Var font={Font.Variable} {...others} />
    default:
      return <Styled.Span font={font || Font.Text} {...others} />
  }
}

export const Heading = ({ children, ...others }: TypographyProps) => (
  <T {...others} font={HeadingLevel.H1}>
    {children}
  </T>
)

export const SubHeading = ({ children, ...others }: TypographyProps) => (
  <T {...others} font={HeadingLevel.H3}>
    {children}
  </T>
)
