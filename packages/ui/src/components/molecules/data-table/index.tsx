import React, { FC, useRef, useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { TableProps, TableRowData } from '../../quarks'
import { TableResponsive, Input, T } from '../../atoms'

import { Select } from '../select'
import { PaginationNav } from '../pagination-nav'

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  totalRows: number
  perPage: number
}

export interface FilterRowsArgs extends PaginationProps {
  sortColumnIndex: number
  sortDir: SortDirection
  term: string
}

interface FilterRowsCallbackArgs {
  data: TableRowData
  pagination: PaginationProps
}

type FilterRowsCallback = (args: FilterRowsCallbackArgs) => void

type FilterRowsFunc = (
  args: FilterRowsArgs,
  callback: FilterRowsCallback,
) => void

export interface DataTableProps extends TableProps {
  rowData?: TableRowData
  filterRows?: FilterRowsFunc
  perPage?: number
}

export const filterRowsDefault = () => {}

export const DataTable: FC<DataTableProps> = ({
  filterRows: filterRowsProp,
  rowData: rowDataProp,
  perPage: perPageProp,
}: DataTableProps) => {
  const filterRows = filterRowsProp || filterRowsDefault

  const filterRef = useRef<HTMLInputElement>()
  const perPageRef = useRef<HTMLInputElement>()

  // TODO: move these into a usePagination hook or something
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(perPageProp || 10)
  const [totalPages, setTotalPages] = useState(1)
  const [totalRows, setTotalRows] = useState(1)
  const [sortColumnIndex, setSortColumnIndex] = useState(-1)
  const [sortDir, setSortDir] = useState<SortDirection>(
    SortDirection.Descending,
  )

  const [rowData, setRowData] = useState<TableRowData>(rowDataProp || [])
  const [term, setTerm] = useState('')

  const getRows: FilterRowsCallback = ({
    data,
    pagination,
  }: FilterRowsCallbackArgs) => {
    // TODO: paginate or something
    setRowData(data)
  }

  const debouncedFilterRows = useDebouncedCallback<FilterRowsFunc>(
    (args: FilterRowsArgs, callback: FilterRowsCallback) =>
      filterRows(args, callback),
    500,
  )

  const handleFilter = () => {
    debouncedFilterRows(
      {
        term: filterRef.current?.value || '',
        currentPage,
        perPage,
        totalPages,
        totalRows,
        sortColumnIndex,
        sortDir,
      },
      getRows,
    )
  }
  const handlePageSize = () => {}
  const handlePaginate = (newPage: number) => setCurrentPage(newPage)

  useEffect(() => {
    filterRows(
      {
        term,
        currentPage,
        perPage,
        totalPages,
        totalRows,
        sortColumnIndex,
        sortDir,
      },
      getRows,
    )
  }, [currentPage])

  const start = (currentPage - 1) * perPage + 1
  const end = start + perPage - 1
  return (
    <div>
      <header>
        <Select
          ref={perPageRef}
          name="per_page"
          onChange={handlePageSize}
          value={perPage}
          options={[
            {
              key: '10',
              value: 10,
            },
            {
              key: '25',
              value: 25,
            },
            {
              key: '50',
              value: 50,
            },
            {
              key: '100',
              value: 100,
            },
          ]}
        />
        <Input
          ref={filterRef}
          name="term"
          defaultValue={term}
          onKeyUp={handleFilter}
        />
      </header>
      <TableResponsive rowData={rowData} />
      <footer>
        <T>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Showing {start} through {end} of {totalRows} entries
        </T>
        <PaginationNav
          pages={totalPages}
          currentPage={currentPage}
          onChange={handlePaginate}
        />
      </footer>
    </div>
  )
}
