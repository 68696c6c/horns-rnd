import React, { memo, FC, useEffect, useState } from 'react'

import { OverflowOption } from '../../../config'
import { HTMLDataset, TableRows, TableData, getTableData } from '../../quarks'
import { useId, useRowIds } from '../../../hooks'

import { Overflow } from '../overflow'

import * as Styled from './styles'

const snakeToTitle = (input: string): string =>
  input
    .split('_')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ')

export const TableResponsive: FC<Styled.TableResponsiveProps> = memo(
  ({ height: heightProp, minWidth, rowData }: Styled.TableResponsiveProps) => {
    const height = heightProp || 'auto'

    const [tableId] = useId()
    const [rowIds] = useRowIds<TableRows>(rowData)

    const [rowsResult, setRowsResult] = useState<TableData>({
      rows: [],
      data: [],
    })

    useEffect(() => {
      setRowsResult(getTableData(rowData))
    }, [rowData])

    const { rows, data } = rowsResult
    if (rows.length > 0) {
      return (
        <Overflow height={height} x={OverflowOption.Scroll}>
          <Styled.TableResponsive minWidth={minWidth}>
            <thead>
              <tr>
                {Object.keys(rows[0]).map((colName) => (
                  <th key={`table-${tableId}-${colName}`}>
                    {snakeToTitle(colName)}
                  </th>
                ))}
              </tr>
            </thead>
            {rows.map((row, index) => {
              const dataset = {} as HTMLDataset
              const rowDataset = data[index]
              if (Object.keys(rowDataset).length > 0) {
                Object.keys(rowDataset).forEach((dataField) => {
                  dataset[`data-${dataField}`] = rowDataset[dataField]
                })
              }
              const rowBodyKey = rowIds.length
                ? `table-${tableId}-row-${rowIds[index]}`
                : `table-${tableId}-row-${index}`
              return (
                <tbody key={rowBodyKey} {...dataset}>
                  {Object.keys(row).map((colName) => {
                    const rowKey = rowIds.length
                      ? `table-${tableId}-row-${rowIds[index]}-${colName}`
                      : `table-${tableId}-row-${index}-${colName}`
                    return (
                      <tr key={rowKey}>
                        <th>{colName}</th>
                        <td>{row[colName]}</td>
                      </tr>
                    )
                  })}
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
