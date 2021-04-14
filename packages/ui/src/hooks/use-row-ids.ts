import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { DispatcherResult } from './utils'

export const useRowIDs = <T extends any[]>(
  rowData?: T,
): DispatcherResult<string[]> => {
  const [rowIds, setRowIds] = useState<string[]>([])
  useEffect(() => {
    if (rowData && rowData.length > 0) {
      setRowIds(rowData.map(() => uuid()))
    }
  }, [rowData])
  return [rowIds, setRowIds]
}
