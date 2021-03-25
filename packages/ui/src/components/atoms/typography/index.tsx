import React, { FC } from 'react'

import { Font, HeadingLevel } from '../../../config'
import { Component, Chromatic, Typographic } from '../../../traits'
import { StyledLink } from '../../quarks'

import * as Styled from './styles'

export enum FontTag {
  Blockquote = 'blockquote',
  Del = 'del',
  Kbd = 'kbd',
  Pre = 'pre',
  S = 's',
  Samp = 'samp',
  Sub = 'sub',
  Sup = 'sup',
  U = 'u',
}

export interface TypographyProps extends Component, Chromatic, Typographic {
  variant?: Font | HeadingLevel | FontTag
}

export const T: FC<TypographyProps> = ({
  variant,
  ...others
}: TypographyProps) => {
  switch (variant) {
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
    case FontTag.Blockquote:
      return <Styled.Blockquote font={Font.Quote} {...others} />
    case FontTag.Del:
      return <Styled.Del font={Font.Text} {...others} />
    case FontTag.Kbd:
      return <Styled.Kbd font={Font.Code} {...others} />
    case FontTag.Pre:
      return <Styled.Pre font={Font.Code} {...others} />
    case FontTag.S:
      return <Styled.S font={Font.Text} {...others} />
    case FontTag.Samp:
      return <Styled.Samp font={Font.Text} {...others} />
    case FontTag.Sub:
      return <Styled.Sub font={Font.Text} {...others} />
    case FontTag.Sup:
      return <Styled.Sup font={Font.Text} {...others} />
    case FontTag.U:
    case Font.Mistake:
      return <Styled.U font={Font.Mistake} {...others} />
    case Font.Paragraph:
      return <Styled.P font={Font.Paragraph} {...others} />
    case Font.Quote:
      return <Styled.Q font={Font.Quote} {...others} />
    case Font.Label:
      return <Styled.Label font={Font.Label} {...others} />
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
      return <Styled.Span font={variant || Font.Text} {...others} />
  }
}

export const Heading = (props: TypographyProps) => (
  <T variant={HeadingLevel.H1} {...props} />
)

export const SubHeading = (props: TypographyProps) => (
  <T variant={HeadingLevel.H3} {...props} />
)

export interface LabelProps extends TypographyProps {
  htmlFor?: string
  required?: boolean
}

export const Label = (props: LabelProps) => (
  <T variant={Font.Label} {...props} />
)
