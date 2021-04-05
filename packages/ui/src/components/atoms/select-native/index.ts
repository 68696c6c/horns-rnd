import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Cursor } from '../../../config'
import { ControlProps, selectStyles } from '../../quarks'

export interface SelectNativeProps extends ControlProps {
  children: ReactNode
}

export const SelectNative = styled.select<SelectNativeProps>(
  selectStyles,
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
