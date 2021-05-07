import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Colorway } from '@horns/theme'

import { chromaticSurface, Styled } from '../../../traits'
import { TableProps, tableStyles } from '../../quarks'

export const Table = styled.table<TableProps>(
  tableStyles,
  ({ theme, minWidth }: Styled & TableProps) => css`
    min-width: ${minWidth && minWidth};

    tbody tr:nth-child(odd),
    tr:nth-child(odd):not(:nth-child(1)) {
      ${chromaticSurface({
        theme,
        color: Colorway.BackgroundAlt,
      })};
    }
  `,
)
