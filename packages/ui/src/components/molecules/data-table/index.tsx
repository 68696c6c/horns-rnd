import React, { FC, useRef, useState, MouseEvent, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { Font } from '../../../config'
import { TableProps, TableRows } from '../../quarks'
import { usePagination, PaginationProps } from '../../../hooks'
import { TableResponsive, Input, T } from '../../atoms'

import { Select, SelectOption } from '../select'
import { PaginationNav } from '../pagination-nav'

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export interface FilterRowsArgs extends PaginationProps {
  // sortColumnIndex: number
  // sortDir: SortDirection
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
  perPageOptions?: SelectOption[]
}

export const filterRowsDefault: FilterRowsFunc = (
  { rowData, term },
  callback,
) => {
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
    (args: FilterRowsArgs, callback: FilterRowsCallback) => {
      filterRows(args, callback)
    },
    500,
  )

  const handleFilter = () => {
    const term = filterRef.current?.value as string
    debouncedFilterRows(
      { ...paginationProps, rowData: rowDataProp || [], term },
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
    const term = filterRef.current?.value as string
    const sortedRowData = rowDataProp as TableRows

    let i1 = -1
    let i2 = 1
    if (sortDir === SortDirection.Descending) {
      i1 = 1
      i2 = -1
    }

    sortedRowData.sort((a, b) => {
      const aValue = a[sortColumnName]
      const bValue = b[sortColumnName]
      if (aValue < bValue) {
        return i1
      }
      return aValue > bValue ? i2 : 0
    })

    debouncedFilterRows(
      { ...paginationProps, rowData: sortedRowData, term },
      setFilteredRows,
    )
  }, [sortDir, sortColumnName])

  return (
    <div>
      <header>
        <Select
          ref={perPageRef}
          name="per_page"
          onChange={handlePageSize}
          defaultValue={perPage}
          options={perPageOptions}
        />
        <Input ref={filterRef} name="term" onKeyUp={handleFilter} />
      </header>
      <TableResponsive rowData={rowData} handleSort={handleSort} />
      <footer>
        <T font={Font.Control}>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Showing {start + 1} through {end} of {totalRows} entries
        </T>
        <PaginationNav
          font={Font.Control}
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </footer>
    </div>
  )
}
