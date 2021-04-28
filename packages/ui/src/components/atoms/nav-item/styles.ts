import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { BorderStyle, Colorway, Side, Size } from '../../../config'
import { Styled, chromatic, bordered } from '../../../traits'
import { NavItemProps, navItemStyles, NavItemLayout } from '../../quarks'
import { valueToNumber } from '../../../utils'

// TODO: find a more atomic way of doing this.
import { LinkWithContext } from '../link'

export const NavItemBackground = styled(LinkWithContext)(
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
)

export const NavItemBorder = styled(LinkWithContext)(
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
)

export const NavItemUnderline = styled(LinkWithContext)(
  navItemStyles,
  ({ current }: NavItemProps) =>
    current &&
    css`
      text-decoration: underline !important;
    `,
)
