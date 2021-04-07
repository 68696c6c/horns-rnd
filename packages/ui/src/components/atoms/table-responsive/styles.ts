import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Colorway } from '../../../config'
import {
  chromaticSurface,
  responsive,
  Responsive,
  Styled,
} from '../../../traits'
import { TableProps, tableStyles } from '../../quarks'

export interface TableResponsiveProps
  extends Responsive,
    Omit<TableProps, 'children'> {}

export const TableResponsive = styled.table<TableResponsiveProps>(
  tableStyles,
  ({ theme, breakpoint, minWidth }: Styled & TableResponsiveProps) => [
    () => css`
      thead {
        display: none;
      }
      tbody:nth-child(odd) {
        ${chromaticSurface({
          theme,
          color: Colorway.BackgroundAlt,
        })};
      }
    `,
    () =>
      responsive({
        theme,
        breakpoint,
        responsiveStyles: css`
          min-width: ${minWidth && minWidth};
          thead {
            display: table-header-group;
          }
          tbody {
            display: table-row;
            tr {
              display: table-cell;
              th {
                display: none;
              }
              td {
                display: block;
              }
            }
          }
        `,
      }),
  ],
)
