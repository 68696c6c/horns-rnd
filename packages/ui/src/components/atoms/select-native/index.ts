import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Cursor } from '@horns/theme'

import { Parent } from '../../../traits'
import { ControlProps, controlStyles } from '../../quarks'

export interface SelectNativeProps extends ControlProps, Parent {}

export const SelectNative = styled.select<SelectNativeProps>(
  controlStyles,
  () => css`
    appearance: none;
    &::-ms-expand {
      display: none;
    }
  `,
  ({ theme, multiple }) => {
    if (multiple) {
      const f = theme.typography.control
      return css`
        min-height: ${f.base.letting};
      `
    }
    return null
  },
)

SelectNative.defaultProps = {
  cursor: Cursor.Pointer,
}
