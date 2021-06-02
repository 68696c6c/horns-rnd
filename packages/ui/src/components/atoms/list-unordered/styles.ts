import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Colorway, Font, ULType } from '@horns/theme'

import { Styled, Typographic } from '../../../traits'
import {
  ListProps,
  listStyles,
  LI as BaseLI,
  LIProps as BaseLIProps,
} from '../../quarks'

export interface ULProps extends ListProps {
  listType?: ULType
}

export const UL = styled.ul<ULProps>(
  listStyles,
  ({ listType }) =>
    css`
      list-style-type: ${listType};
    `,
)

export interface LIProps extends BaseLIProps {
  hasIcon?: boolean
  listType?: ULType
}

export const LI = styled(BaseLI)<LIProps>(
  ({ theme, color, markerColor, hasIcon }) => {
    const c = theme.colors[markerColor || color || Colorway.Typography]
    // Note that in browsers that do not support the ::marker selector (e.g. Chrome), combining it
    // with any other supported selectors will cause the entire rule to fail, hence the separate
    // blocks for ::marker and .list-item-marker.
    return css`
      ${hasIcon &&
      css`
        display: grid;
        grid-template-columns: 2em auto;
        align-items: center;
        margin-left: -1em;
      `}
      &::marker {
        color: ${c.base.base};
      }
      .marker {
        color: ${c.base.base};
      }
    `
  },
)

export const Marker = styled.i(({ theme, font }: Styled & Typographic) => {
  // In order to position the marker correctly for items that have multiple lines of text, we need
  // to make the height of the marker match the line-height of the text.
  const fontStyle = theme.typography[font || Font.Text]
  return css`
    display: flex;
    justify-content: center;
    align-self: baseline;
    align-items: center;
    width: 2em;
    height: ${fontStyle.base.letting};
    font-style: unset;
  `
})
