import styled from '@emotion/styled'

import { HoverState, StatusState } from '../../../config'
import {
  Bordered,
  bordered,
  Chromatic,
  chromatic,
  chromaticText,
  Component,
  interactive,
  Interactive,
  Padded,
  padded,
  Styled,
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
    Interactive,
    Padded,
    Typographic {}

export const buttonStyles = ({
  theme,
  border,
  color,
  cursor,
  font,
  padding,
}: ButtonProps) => {
  const { buttons } = theme
  return [
    chromatic({ theme, color }),
    bordered(theme, border, buttons.border),
    interactive({
      theme,
      cursor,
      cursorDefault: buttons.cursor,
      hoverStyles: [chromatic({ theme, color, state: HoverState.Hover })],
      activeStyles: [chromatic({ theme, color, state: HoverState.Active })],
      inactiveStyles: [
        chromatic({ theme, color, state: StatusState.Inactive }),
      ],
    }),
    padded(theme, padding, buttons.padding),
    typographic({ theme, font, fontDefault: buttons.font }),
  ]
}

export const StyledLinkButton = styled.a<ButtonProps>(buttonStyles)

export const StyledButton = styled.button<ButtonProps>(buttonStyles)

export interface LinkProps extends ButtonProps {
  variant?: LinkVariant
}

export const StyledLink = styled.a<LinkProps>(
  ({ theme, color, cursor, font }: LinkProps) => {
    const { links } = theme
    const chromaticArgs = { theme, color }
    const typographicArgs = { theme, font, fontDefault: links.font }
    return [
      chromaticText(chromaticArgs),
      typographic(typographicArgs),
      interactive({
        theme,
        cursor,
        cursorDefault: links.cursor,
        hoverStyles: [
          chromaticText({ ...chromaticArgs, state: HoverState.Hover }),
          typographic({ ...typographicArgs, state: HoverState.Hover }),
        ],
        activeStyles: [
          chromaticText({ ...chromaticArgs, state: HoverState.Active }),
          typographic({ ...typographicArgs, state: HoverState.Active }),
        ],
        inactiveStyles: [
          chromaticText({ ...chromaticArgs, state: StatusState.Inactive }),
          typographic({ ...typographicArgs, state: StatusState.Inactive }),
        ],
      }),
    ]
  },
)
