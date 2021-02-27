import { css, SerializedStyles } from '@emotion/react'

import { Theme, BordersConfig, BorderProperties } from '../../config'

export interface Bordered {
  border?: BordersConfig | BorderProperties
}

const evalBorder = (
  input: BordersConfig,
  defaults: BordersConfig,
): Required<BordersConfig> => {
  const { all, x, y, top, bottom, left, right } = input
  const {
    all: cAll,
    x: cX,
    y: cY,
    top: cTop,
    bottom: cBottom,
    left: cLeft,
    right: cRight,
  } = defaults
  return {
    all: {
      width: all && all.width ? all.width : cAll && cAll.width,
      style: all && all.style ? all.style : cAll && cAll.style,
    },
    x: {
      width: x && x.width ? x.width : cX && cX.width,
      style: x && x.style ? x.style : cX && cX.style,
    },
    y: {
      width: y && y.width ? y.width : cY && cY.width,
      style: y && y.style ? y.style : cY && cY.style,
    },
    top: {
      width: top && top.width ? top.width : cTop && cTop.width,
      style: top && top.style ? top.style : cTop && cTop.style,
    },
    bottom: {
      width: bottom && bottom.width ? bottom.width : cBottom && cBottom.width,
      style: bottom && bottom.style ? bottom.style : cBottom && cBottom.style,
    },
    left: {
      width: left && left.width ? left.width : cLeft && cLeft.width,
      style: left && left.style ? left.style : cLeft && cLeft.style,
    },
    right: {
      width: right && right.width ? right.width : cRight && cRight.width,
      style: right && right.style ? right.style : cRight && cRight.style,
    },
  }
}

export const evalBorderSides = (
  input: BordersConfig,
  defaults: BordersConfig,
): Required<Pick<BordersConfig, 'top' | 'bottom' | 'left' | 'right'>> => {
  const { all, x, y, top, bottom, left, right } = evalBorder(input, defaults)
  return {
    top: {
      width: top.width || y.width || all.width,
      style: top.style || y.style || all.style,
    },
    bottom: {
      width: bottom.width || y.width || all.width,
      style: bottom.style || y.style || all.style,
    },
    left: {
      width: left.width || x.width || all.width,
      style: left.style || x.style || all.style,
    },
    right: {
      width: right.width || x.width || all.width,
      style: right.style || x.style || all.style,
    },
  }
}

export const bordered = (
  theme: Theme,
  border?: BordersConfig | BorderProperties,
  defaults?: BordersConfig,
): SerializedStyles => {
  if (typeof border === 'undefined' && typeof defaults === 'undefined') {
    return css``
  }
  const borderProps = border as BorderProperties
  if (
    typeof borderProps !== 'undefined' &&
    typeof borderProps.width !== 'undefined'
  ) {
    return css`
      border-width: ${theme.sizes[borderProps.width]};
      border-style: ${borderProps.style};
    `
  }
  const b: BordersConfig =
    typeof border === 'undefined' ? {} : (border as BordersConfig)
  const { top, right, bottom, left } = evalBorderSides(b, defaults || {})
  return css`
    border-top-width: ${top.width && theme.sizes[top.width]};
    border-top-style: ${top.style};
    border-right-width: ${right.width && theme.sizes[right.width]};
    border-right-style: ${right.style};
    border-bottom-width: ${bottom.width && theme.sizes[bottom.width]};
    border-bottom-style: ${bottom.style};
    border-left-width: ${left.width && theme.sizes[left.width]};
    border-left-style: ${left.style};
  `
}
