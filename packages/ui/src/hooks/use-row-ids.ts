import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { DispatcherResult } from './utils'

export const useRowIds = <C>(rowData: C[]): DispatcherResult<string[]> => {
  const [rowIDs, setRowIDs] = useState<string[]>([])
  useEffect(() => {
    setRowIDs(rowData.map(() => uuid()))
  }, [rowData])
  return [rowIDs, setRowIDs]
}
