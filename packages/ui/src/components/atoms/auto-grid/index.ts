import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Styled } from '../../../traits'
import { GridProps, gridStyles } from '../../quarks'

export interface AutoGridProps extends GridProps {}

export const AutoGrid = styled.div(({ theme }: Styled & AutoGridProps) => [
  gridStyles,
  () => css`
    grid-template-columns: repeat(
      auto-fit,
      minmax(${theme.grid.columnMin}, 1fr)
    );
  `,
])
