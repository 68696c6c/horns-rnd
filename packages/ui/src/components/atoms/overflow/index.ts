import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { OverflowOption } from '../../../config'

export interface OverflowProps {
  height: string
  x?: OverflowOption
  y?: OverflowOption
}

export const Overflow = styled.div<OverflowProps>(
  ({ height, x, y }) => css`
    width: 100%;
    height: ${height};
    overflow-x: ${x};
    overflow-y: ${y};
  `,
)
