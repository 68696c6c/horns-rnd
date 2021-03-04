import styled from '@emotion/styled'

import { Font } from '../../../config'
import {
  Styled,
  Component,
  Bordered,
  bordered,
  Chromatic,
  chromatic,
  chromaticText,
  Padded,
  padded,
  Typographic,
  typographic,
} from '../../../traits'

export enum LinkVariant {
  Link = 'link',
  Button = 'button',
}

export interface ButtonProps
  extends Styled,
    Component,
    Bordered,
    Chromatic,
    Padded,
    Typographic {}

export const buttonStyles = ({
  theme,
  border,
  color,
  font,
  padding,
}: ButtonProps) => [
  chromatic(theme, color),
  bordered(theme, border, theme.buttons.border),
  padded(theme, padding, theme.buttons.padding),
  typographic(theme, font || Font.Button),
]

export const StyledLinkButton = styled.a<ButtonProps>(buttonStyles)

export const StyledButton = styled.button<ButtonProps>(buttonStyles)

export interface LinkProps extends ButtonProps {
  variant?: LinkVariant
}

export const StyledLink = styled.a<LinkProps>(({ theme, color }: LinkProps) => [
  chromaticText(theme, color),
])
