import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { BorderStyle, Colorway, Side, Size } from '../../../config'
import { bordered, Styled } from '../../../traits'
import { NavItemLayout, NavItemProps, navItemStyles } from '../../quarks'

export const valueToNumber = (cssVal: string) =>
  Number(
    cssVal
      .replace('px', '')
      .replace('rem', '')
      .replace('em', '')
      .replace('vw', '')
      .replace('vh', '')
      .replace('cm', '')
      .replace('mm', '')
      .replace('in', '')
      .replace('pt', '')
      .replace('pc', '')
      .replace('ex', '')
      .replace('ch', '')
      .replace('vmin', '')
      .replace('vmax', '')
      .replace('%', ''),
  )

export const NavItemBorder = styled.a(
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
