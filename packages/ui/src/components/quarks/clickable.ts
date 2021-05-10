// Clickables are interactive elements that can be clicked on, like buttons, links, and nav items.
/**
 * This file is using ComponentType instead of the recommended ElementType because ElementType
 * doesn't work with the Emotion styled function and the objective is to provide a custom component
 * that can be passed to that function.
 */
import { ComponentType } from 'react'
import styled, { StyledComponent } from '@emotion/styled'
import { css } from '@emotion/react'

import {
  BorderStyle,
  Colorway,
  Colorway as ColorwayOption,
  Cursor,
  Font,
  HoverState,
  Side,
  Size,
  StatusState,
} from '@horns/theme'

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
import { valueToNumber } from '../../utils'

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

export interface BaseLinkProps
  extends Parent,
    Chromatic,
    Interactive,
    Typographic {
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

export const styleCustomLinkTag = (
  Tag: ComponentType,
  variant?: LinkVariant,
): StyledComponent<any> =>
  variant === LinkVariant.Button
    ? styled(Tag)(buttonStyles)
    : styled(Tag)(linkStyles)

export enum NavItemVariant {
  Background = 'background',
  Border = 'border',
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
  current?: boolean
}

export interface CustomLink {
  /**
   * This file is using ComponentType instead of the recommended ElementType because ElementType
   * doesn't work with the Emotion styled function and the objective is to provide a custom component
   * that can be passed to that function.
   */
  LinkComponent: ComponentType<any>
}

export interface NavItemProps
  extends Parent,
    Interactive,
    Padded,
    BaseNavItemProps,
    CustomLink,
    Anchor {}

export const navItemStyles = ({
  theme,
  cursor,
  color,
  padding,
  font,
  layout: layoutProp,
}: Styled & Omit<NavItemProps, 'LinkComponent'>) => {
  const layout = layoutProp || NavItemLayout.Horizontal
  const { buttons } = theme
  return [
    chromatic,
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
    typographic({ theme, font, fontDefault: Font.Nav }),
    css`
      display: ${layout === NavItemLayout.Horizontal
        ? 'inline-block'
        : 'block'};
      &:visited {
        ${chromatic({ theme, color })}
      }
    `,
  ]
}

const navItemBackgroundStyles = [
  navItemStyles,
  ({
    theme,
    color: colorProp,
    current,
    currentColor,
  }: Styled & Omit<NavItemProps, 'LinkComponent'>) => {
    const color = current ? currentColor : colorProp
    return chromatic({ theme, color })
  },
]

const navItemBorderStyles = [
  navItemStyles,
  ({
    theme,
    current,
    layout: layoutProp,
    currentColor,
    currentBorderWidth: currentBorderWidthProp,
    currentBorderStyle,
  }: Styled & Omit<NavItemProps, 'LinkComponent'>) => {
    if (current) {
      const layout = layoutProp || NavItemLayout.Horizontal
      const currentBorderWidth = currentBorderWidthProp || Size.XSmall
      const c = theme.colors[currentColor || Colorway.Typography]
      const bColor =
        currentColor === Colorway.Background ? c.base.readable : c.base.base

      const paddingProps = theme.buttons.padding

      let side = 'left'
      let borderKey = Side.Left
      let padding = paddingProps.left || paddingProps.x || paddingProps.all
      if (layout === NavItemLayout.Horizontal) {
        side = 'bottom'
        borderKey = Side.Bottom
        padding = paddingProps.bottom || paddingProps.y || paddingProps.all
      }

      const pv = valueToNumber(theme.sizes[padding || Size.Min])
      const bv = valueToNumber(theme.sizes[currentBorderWidth])
      const paddingValue = pv - bv
      const paddingFinal = paddingValue >= 0 && `${paddingValue}px !important`

      return [
        bordered({
          theme,
          border: {
            all: {
              width: Size.Min,
            },
            [borderKey]: {
              width: currentBorderWidth,
              style: currentBorderStyle || BorderStyle.Solid,
            },
          },
        }),
        css`
          padding-${side}: ${paddingFinal};
          border-${side}-color: ${bColor} !important;
        `,
      ]
    }
    return null
  },
]

const navItemUnderlineStyles = [
  navItemStyles,
  ({ current }: NavItemProps) =>
    current &&
    css`
      text-decoration: underline !important;
    `,
]

const NavItemBackground = styled.a(navItemBackgroundStyles)
const NavItemUnderline = styled.a(navItemUnderlineStyles)
const NavItemBorder = styled.a(navItemBorderStyles)

export const getNavItemVariantTag = (
  variant?: NavItemVariant,
): StyledComponent<any> => {
  switch (variant) {
    case NavItemVariant.Background:
      return NavItemBackground
    case NavItemVariant.Underline:
      return NavItemUnderline
    default:
      return NavItemBorder
  }
}

export const styleCustomNavItemTag = (
  Base: ComponentType<any>,
  variant?: NavItemVariant,
): StyledComponent<any> => {
  switch (variant) {
    case NavItemVariant.Background:
      return styled(Base)(navItemBackgroundStyles)
    case NavItemVariant.Underline:
      return styled(Base)(navItemUnderlineStyles)
    default:
      return styled(Base)(navItemBorderStyles)
  }
}
