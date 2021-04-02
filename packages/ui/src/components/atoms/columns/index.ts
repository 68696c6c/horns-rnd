import React from 'react'
import { isFragment } from 'react-is'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { GridProps, gridStyles } from '../../quarks'

export interface ColumnsProps extends GridProps {
  columns?: number
}

export const Columns = styled.div(({ columns, children }: ColumnsProps) => [
  gridStyles,
  () => {
    const childArray = React.Children.toArray(children)
    const length = isFragment(childArray[0])
      ? childArray[0].props.children.length
      : childArray.length
    const cols = columns ? `repeat(${columns}, 1fr)` : `repeat(${length}, 1fr)`
    return css`
      grid-template-columns: ${cols};
    `
  },
])
