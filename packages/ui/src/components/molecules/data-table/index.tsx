import React, { FC, MouseEvent, useEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { Font, InputType, ControlOption } from '../../../config'
import { TableProps, TableRows } from '../../quarks'
import { PaginationProps, useID, usePagination } from '../../../hooks'
import { Input, Label, T, TableResponsive } from '../../atoms'

import { Select } from '../select'
import { PaginationNav } from '../pagination-nav'

import * as Styled from './styles'

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export interface FilterRowsArgs extends PaginationProps {
  sortColumnName: string
  sortDir: SortDirection
  term: string
}

type FilterRowsCallback = (args: TableRows) => void

type FilterRowsFunc = (
  args: FilterRowsArgs,
  callback: FilterRowsCallback,
) => void

export interface DataTableProps extends TableProps {
  rowData?: TableRows
  filterRows?: FilterRowsFunc
  perPage?: number
  perPageOptions?: ControlOption[]
}

export const filterRowsDefault: FilterRowsFunc = (
  { rowData, term, sortDir, sortColumnName },
  callback,
) => {
  let i1 = -1
  let i2 = 1
  if (sortDir === SortDirection.Descending) {
    i1 = 1
    i2 = -1
  }

  rowData.sort((a, b) => {
    const aValue = a[sortColumnName]
    const bValue = b[sortColumnName]
    if (aValue < bValue) {
      return i1
    }
    return aValue > bValue ? i2 : 0
  })

  const filteredRows = rowData.filter((row) => {
    if (term === '') {
      return true
    }
    let match = false
    const fields = Object.keys(row)
    for (let i = 0; i < fields.length; i += 1) {
      const fieldName = fields[i]
      if (fieldName !== '_dataset') {
        const fieldVal = row[fieldName]
        if (fieldVal.toLowerCase().includes(term)) {
          match = true
          break
        }
      }
    }
    return match
  })
  callback(filteredRows)
}

const perPageOptionsDefault = [
  {
    label: '10',
    value: 10,
  },
  {
    label: '25',
    value: 25,
  },
  {
    label: '50',
    value: 50,
  },
  {
    label: '100',
    value: 100,
  },
]

export const DataTable: FC<DataTableProps> = ({
  filterRows: filterRowsProp,
  rowData: rowDataProp,
  perPage: perPageProp,
  perPageOptions: perPageOptionsProp,
}: DataTableProps) => {
  const filterRows = filterRowsProp || filterRowsDefault
  const perPageOptions = perPageOptionsProp || perPageOptionsDefault

  const filterRef = useRef<HTMLInputElement>()
  const perPageRef = useRef<HTMLInputElement>()

  const [tableID] = useID()

  const [filteredRows, setFilteredRows] = useState<TableRows>(rowDataProp || [])
  const [sortDir, setSortDir] = useState<SortDirection>(SortDirection.Ascending)
  const [sortColumnName, setSortColumnName] = useState('')

  const paginationProps = usePagination(filteredRows, perPageProp)
  const {
    currentPage,
    perPage,
    start,
    end,
    totalPages,
    totalRows,
    rowData,
    setCurrentPage,
    setPerPage,
  } = paginationProps

  const handlePageSize = () => {
    if (perPageRef.current) {
      // Using +number instead of parseInt avoids needing to deal with NaN
      // https://stackoverflow.com/questions/14667713/how-to-convert-a-string-to-number-in-typescript
      setPerPage(+perPageRef.current.value)
    }
  }

  const debouncedFilterRows = useDebouncedCallback<FilterRowsFunc>(
    (args: FilterRowsArgs, callback: FilterRowsCallback) =>
      filterRows(args, callback),
    500,
  )

  const handleFilter = () => {
    debouncedFilterRows(
      {
        ...paginationProps,
        rowData: rowDataProp as TableRows,
        term: filterRef.current?.value as string,
        sortColumnName,
        sortDir,
      },
      setFilteredRows,
    )
  }

  const handleSort = (event: MouseEvent<HTMLTableHeaderCellElement>) => {
    const t = event.target as HTMLTableHeaderCellElement
    const newSortColumnName = t?.getAttribute('data-column-name') as string
    let newSortDir = SortDirection.Ascending
    if (newSortColumnName === sortColumnName) {
      newSortDir =
        sortDir === SortDirection.Ascending
          ? SortDirection.Descending
          : SortDirection.Ascending
    }
    setSortColumnName(newSortColumnName)
    setSortDir(newSortDir)
  }

  useEffect(() => {
    debouncedFilterRows(
      {
        ...paginationProps,
        rowData: rowDataProp as TableRows,
        term: filterRef.current?.value as string,
        sortColumnName,
        sortDir,
      },
      setFilteredRows,
    )
  }, [sortDir, sortColumnName])

  return (
    <Styled.Layout>
      <Styled.Section as="header">
        <div>
          <Label htmlFor={`${tableID}-per-page`} font={Font.Control}>
            Rows per page
          </Label>
          <Select
            ref={perPageRef}
            id={`${tableID}-per-page`}
            name="per_page"
            onChange={handlePageSize}
            defaultValue={perPage}
            options={perPageOptions}
          />
        </div>
        <div>
          <Label htmlFor={`${tableID}-filter`} font={Font.Control}>
            Search
          </Label>
          <Input
            ref={filterRef}
            type={InputType.Search}
            id={`${tableID}-filter`}
            name="term"
            onKeyUp={handleFilter}
          />
        </div>
      </Styled.Section>
      <TableResponsive rowData={rowData} handleSort={handleSort} />
      <Styled.Section as="footer">
        <T font={Font.Control}>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Showing {start + 1} through {end} of {totalRows} rows
        </T>
        <PaginationNav
          font={Font.Control}
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </Styled.Section>
    </Styled.Layout>
  )
}
