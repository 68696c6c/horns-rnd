import { css, SerializedStyles } from '@emotion/react'

import { Font } from '../../config'

import { Styled } from '../styled'
import { Typographic } from '../typographic'

export interface Inline extends Typographic {
  multiline?: boolean
  multiple?: boolean
}

export const inline = ({
  theme,
  multiline,
  multiple,
  font,
}: Styled & Inline): SerializedStyles => {
  // Force the element height to match the line-height to ensure that inputs that have controls
  // inside them (e.g. input type="datetime-local") don't end up a different size than standard inputs.
  const f = theme.typography[font || Font.Text].base
  if (multiple) {
    return css`
      min-height: ${f.letting};
    `
  }
  return multiline
    ? css``
    : css`
        height: ${f.letting};
        min-width: ${f.letting};
      `
}
