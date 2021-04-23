import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Font, OverflowOption } from '../../config'

import { Styled, padded, typographic, Parent } from '../../traits'

export type HTMLDataset = Record<string, any>

export type TableRow = Record<string, string | HTMLDataset>

export type TableRows = TableRow[]

export interface TableProps extends Partial<Parent> {
  rowData?: TableRows
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

export interface TableData {
  rows: TableRows
  data: TableRows
}

export const getTableData = (tableRows: TableRows = []): TableData => {
  const rows = [] as TableRows
  const data = [] as TableRows
  tableRows.forEach((child, i) => {
    rows[i] = {} as TableRow
    data[i] = {} as TableRow
    Object.keys(child).forEach((field) => {
      if (field === '_dataset') {
        const rowData = child[field] as HTMLDataset
        Object.keys(rowData).forEach((dataField) => {
          data[i][dataField] = rowData[dataField]
        })
      } else {
        rows[i][field] = child[field]
      }
    })
  })
  return { rows, data }
}

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
