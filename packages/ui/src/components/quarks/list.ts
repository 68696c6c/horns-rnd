import { css } from '@emotion/react'

import { Colorway } from '@horns/theme'

import styled from '@emotion/styled'
import {
  chromaticText,
  Chromatic,
  gridded,
  Gridded,
  Parent,
  Styled,
  typographic,
  Typographic,
} from '../../traits'

export interface ListMarkerProps {
  markerColor?: Colorway
}

export interface LIProps
  extends Chromatic,
    Typographic,
    Parent,
    ListMarkerProps {}

export const LI = styled.li<LIProps>(chromaticText, typographic)

export interface ListProps
  extends Chromatic,
    Gridded,
    Typographic,
    Parent,
    ListMarkerProps {}

export const listStyles = ({
  theme,
  color,
  markerColor,
}: Styled & ListProps) => [
  chromaticText,
  gridded,
  typographic,
  () => {
    const marker = theme.colors[markerColor || color || Colorway.Typography]
    // const c = getItemColors(theme, color, markerColor, false)
    // TODO: spacing
    // const spacing = theme.sizing.getPX(listDefaults.spacingLeft)
    // // padding-left: ${spacing};
    // Note that in browsers that do not support the ::marker selector (e.g. Chrome), combining it
    // with any other supported selectors will cause the entire rule to fail, hence the separate
    // blocks for ::marker and .list-item-marker.
    return css`
      margin: 0;
      grid-template-rows: auto;
      padding-left: 1em;
      li::marker {
        color: ${marker.base.base};
      }
      .marker {
        color: ${marker.base.base};
      }
    `
  },
]
