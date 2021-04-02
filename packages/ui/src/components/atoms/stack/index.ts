import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { GridProps, gridStyles } from '../../quarks'

export interface StackProps extends GridProps {}

export const Stack = styled.div(() => [
  gridStyles,
  () => css`
    display: flex;
  `,
])
