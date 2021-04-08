import { css } from '@emotion/react'
import { Font } from '../../config'

import { Styled, padded, typographic, Parent } from '../../traits'

export type TableRowData = Record<string, any>[]

export interface TableProps extends Partial<Parent> {
  rowData?: TableRowData
  height?: string
  minWidth?: string
}

export const tableStyles = ({ theme }: Styled) => [
  () => css`
    width: 100%;
    border-collapse: collapse;
    td,
    th {
      ${padded({ theme, padding: theme.tables.padding })}
    }
    th {
      ${typographic({ theme, font: Font.Label })}
    }
    td {
      ${typographic({ theme, font: Font.Table })}
    }
  `,
]
