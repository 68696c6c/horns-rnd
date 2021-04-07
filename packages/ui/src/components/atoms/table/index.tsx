import React, { memo, FC } from 'react'

import { OverflowOption } from '../../../config'
import { useId, useRowIds } from '../../../hooks'
import { TableProps, TableRowData } from '../../quarks'

import { Overflow } from '../overflow'

import * as Styled from './styles'

export const Table: FC<TableProps> = memo(
  ({ children, height: heightProp, minWidth, rowData }: TableProps) => {
    const height = heightProp || 'auto'
    const [tableID] = useId()
    const [rowIDs] = useRowIds<TableRowData>(rowData || [])

    if (rowData && rowData.length > 0) {
      return (
        <Overflow height={height} x={OverflowOption.Scroll}>
          <Styled.Table minWidth={minWidth}>
            <thead>
              <tr>
                {Object.keys(rowData[0]).map((colName) => (
                  <th key={`table-${tableID}-${colName}`}>{colName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, rowIndex) => {
                const rowKey = rowIDs.length
                  ? `table-${tableID}-row-${rowIDs[rowIndex]}`
                  : `table-${tableID}-row-${rowIndex}`
                return (
                  <tr key={rowKey}>
                    {Object.keys(row).map((colName) => (
                      <td key={`${rowKey}-${colName}`}>{row[colName]}</td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </Styled.Table>
        </Overflow>
      )
    }
    return (
      <Overflow height={height} x={OverflowOption.Scroll}>
        <Styled.Table minWidth={minWidth}>{children}</Styled.Table>
      </Overflow>
    )
  },
)
