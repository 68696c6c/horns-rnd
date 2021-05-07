/**
 * This file is using ComponentType instead of the recommended ElementType because ElementType
 * doesn't work with the Emotion styled function and the objective is to provide a custom component
 * that can be passed to that function.
 */
import { ComponentType } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  BorderStyle,
  Colorway,
  Cursor,
  Font,
  HoverState,
  Side,
  Size,
  StatusState,
} from '@horns/theme'

import {
  Styled,
  chromatic,
  bordered,
  Parent,
  Interactive,
  Padded,
  interactive,
  padded,
  typographic,
} from '../../../traits'
import {
  Anchor,
  BaseNavItemProps,
  NavItemLayout,
  NavItemVariant,
} from '../../quarks'
import { valueToNumber } from '../../../utils'

// TODO: the commented out getCustomVariantTag function below seems like it would be less efficient but avoids needing to import the LinkFromContext atom; investigate further
import { LinkFromContext } from '../link-from-context'

export interface NavItemProps
  extends Parent,
    Interactive,
    Padded,
    BaseNavItemProps,
    Anchor {
  current?: boolean
}

export const navItemStyles = ({
  theme,
  cursor,
  color,
  padding,
  font,
  layout: layoutProp,
}: Styled & NavItemProps) => {
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
    `,
  ]
}

// export const getCustomVariantTag = (
//   Base: ComponentType<any>,
//   variant?: NavItemVariant,
// ): StyledComponent<NavItemProps> => {
//   console.log('create component')
//   switch (variant) {
//     case NavItemVariant.Background:
//       return styled(Base)(navItemBackgroundStyles)
//     case NavItemVariant.Underline:
//       return styled(Base)(navItemUnderlineStyles)
//     default:
//       return styled(Base)(navItemBorderStyles)
//   }
// }

const navItemBackgroundStyles = [
  navItemStyles,
  ({
    theme,
    color: colorProp,
    current,
    currentColor,
  }: Styled & NavItemProps) => {
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
  }: Styled & NavItemProps) => {
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

export const NavItemBackground = styled(LinkFromContext)(
  navItemBackgroundStyles,
)
export const NavItemUnderline = styled(LinkFromContext)(navItemUnderlineStyles)
export const NavItemBorder = styled(LinkFromContext)(navItemBorderStyles)

export const getVariantTag = (
  Base: ComponentType<any>,
  variant?: NavItemVariant,
) => {
  switch (variant) {
    case NavItemVariant.Background:
      return NavItemBackground
    case NavItemVariant.Underline:
      return NavItemUnderline
    default:
      return NavItemBorder
  }
}
