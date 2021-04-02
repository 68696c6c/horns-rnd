import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Cursor, Font } from '../../../config'
import { ControlProps, selectStyles } from '../../quarks'

export interface SelectNativeProps extends ControlProps {
  multiple?: boolean
  children: ReactNode
}

export const SelectNative = styled.select<SelectNativeProps>(
  selectStyles,
  ({ theme, multiple, font }) => {
    if (multiple) {
      const f = theme.typography[font || Font.Control]
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
