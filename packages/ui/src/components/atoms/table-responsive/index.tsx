import React, { memo, FC } from 'react'

import { OverflowOption } from '../../../config'
import { TableRowData } from '../../quarks'
import { useId, useRowIds } from '../../../hooks'

import { Overflow } from '../overflow'

import * as Styled from './styles'

export const TableResponsive: FC<Styled.TableResponsiveProps> = memo(
  ({ height: heightProp, minWidth, rowData }: Styled.TableResponsiveProps) => {
    const height = heightProp || 'auto'
    const [tableID] = useId()
    const [rowIDs] = useRowIds<TableRowData>(rowData || [])

    if (rowData && rowData.length > 0) {
      return (
        <Overflow height={height} x={OverflowOption.Scroll}>
          <Styled.TableResponsive minWidth={minWidth}>
            <thead>
              <tr>
                {Object.keys(rowData[0]).map((colName) => (
                  <th key={`table-${tableID}-${colName}`}>{colName}</th>
                ))}
              </tr>
            </thead>
            {rowData.map((row, rowIndex) => {
              const rowKey = rowIDs.length
                ? `table-${tableID}-row-${rowIDs[rowIndex]}`
                : `table-${tableID}-row-${rowIndex}`
              return (
                <tbody key={rowKey}>
                  {Object.keys(row).map((colName) => (
                    <tr>
                      <th>{colName}</th>
                      <td>{row[colName]}</td>
                    </tr>
                  ))}
                </tbody>
              )
            })}
          </Styled.TableResponsive>
        </Overflow>
      )
    }
    return (
      <Overflow height={height} x={OverflowOption.Scroll}>
        <table>
          <thead>
            <tr>
              <td>No data.</td>
            </tr>
          </thead>
        </table>
      </Overflow>
    )
  },
)
