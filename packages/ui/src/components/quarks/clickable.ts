// Clickables are interactive elements that can be clicked on, like buttons, links, and nav items.
import { ElementType } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  BorderStyle,
  Colorway as ColorwayOption,
  Cursor,
  Font,
  HoverState,
  Size,
  StatusState,
} from '../../config'
import {
  Bordered,
  bordered,
  Chromatic,
  chromatic,
  chromaticText,
  Parent,
  interactive,
  Interactive,
  Padded,
  padded,
  Rounded,
  rounded,
  Styled,
  Typographic,
  typographic,
} from '../../traits'

export enum LinkVariant {
  Link = 'link',
  Button = 'button',
}

export interface ButtonProps
  extends Parent,
    Bordered,
    Chromatic,
    Interactive,
    Padded,
    Rounded,
    Typographic {}

const buttonStyles = ({
  theme,
  border,
  color,
  cursor,
  font,
  padding,
  radius,
}: Styled & ButtonProps) => {
  const { buttons } = theme
  return [
    css`
      display: inline-block;
    `,
    chromatic,
    bordered({ theme, border, borderDefault: buttons.border }),
    interactive({
      theme,
      cursor,
      cursorDefault: Cursor.Pointer,
      hoverStyles: [chromatic({ theme, color, state: HoverState.Hover })],
      activeStyles: [chromatic({ theme, color, state: HoverState.Active })],
      inactiveStyles: [
        chromatic({ theme, color, state: StatusState.Inactive }),
      ],
    }),
    padded({ theme, padding, paddingDefault: buttons.padding }),
    rounded({ theme, radius, radiusDefault: buttons.radius }),
    typographic({ theme, font, fontDefault: Font.Button }),
  ]
}

export const StyledLinkButton = styled.a(buttonStyles)

export const StyledButton = styled.button(buttonStyles)

export interface BaseLinkProps extends ButtonProps {
  variant?: LinkVariant
}

// This interface exists so that we can enforce that both NavItem and Link have the same href prop without adding all of the other Link props to the NavItem.
export interface Anchor {
  href: string
}

export interface LinkProps extends BaseLinkProps, Anchor {}

export const linkStyles = ({
  theme,
  color,
  cursor,
  font,
}: Styled & BaseLinkProps) => {
  const chromaticArgs = { theme, color }
  const typographicArgs = { theme, font, fontDefault: Font.Link }
  return [
    chromaticText,
    typographic({ ...typographicArgs }),
    interactive({
      theme,
      cursor,
      cursorDefault: Cursor.Pointer,
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
    () => css`
      &:visited {
        ${chromaticText({ ...chromaticArgs, state: HoverState.Hover })}
        ${typographic({ ...typographicArgs, state: HoverState.Hover })}
      }
    `,
  ]
}

export const StyledLink = styled.a(linkStyles)

export const getLinkVariantTag = (variant?: LinkVariant) =>
  variant === LinkVariant.Button ? StyledLinkButton : StyledLink

export const styleLink = (CustomComponent: any) =>
  styled(CustomComponent)(linkStyles)

export const styleButton = (CustomComponent: any) =>
  styled(CustomComponent)(buttonStyles)

export const styleCustomLinkTag = (Tag: ElementType, variant?: LinkVariant) =>
  variant === LinkVariant.Button ? styleButton(Tag) : styleLink(Tag)

export enum NavItemVariant {
  Background = 'background',
  Border = 'border',
  Colorway = 'colorway',
  Underline = 'underline',
}

export enum NavItemLayout {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export interface BaseNavItemProps extends Chromatic, Typographic {
  variant?: NavItemVariant
  layout?: NavItemLayout
  currentColor?: ColorwayOption
  currentBorderWidth?: Size
  currentBorderStyle?: BorderStyle
}
