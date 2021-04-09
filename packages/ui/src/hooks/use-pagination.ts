import { useEffect, useState } from 'react'

import { TableRows } from '../components/quarks'

export interface PaginationProps {
  currentPage: number
  perPage: number
  start: number
  end: number
  totalPages: number
  totalRows: number
  rowData: TableRows
  setCurrentPage: (a: number) => void
  setPerPage: (a: number) => void
}

export const usePagination = (
  rowDataProp?: TableRows,
  perPageProp?: number,
): PaginationProps => {
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(perPageProp || 10)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(perPage)
  const [totalPages, setTotalPages] = useState(1)
  const [totalRows, setTotalRows] = useState(0)
  const [rowData, setRowData] = useState<TableRows>(rowDataProp || [])

  useEffect(() => {
    const rowCount = rowDataProp?.length || 0
    const rowsPerPage = perPage > rowCount ? rowCount : perPage
    const newStart = (currentPage - 1) * rowsPerPage
    const newEnd = newStart + rowsPerPage
    setStart(newStart)
    setEnd(newEnd)
    setRowData((rowDataProp || []).slice(newStart, newEnd))
    setTotalRows(rowCount)
    setTotalPages(Math.ceil(rowCount / rowsPerPage))
  }, [rowDataProp, currentPage, perPage])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  return {
    currentPage,
    perPage,
    start,
    end,
    totalPages,
    totalRows,
    rowData,
    setCurrentPage,
    setPerPage,
  }
}
