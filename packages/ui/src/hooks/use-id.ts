import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { DispatcherResult } from './utils'

export const useID = (initialId?: string): DispatcherResult<string> => {
  const [id, setId] = useState(initialId as string)
  useEffect(() => {
    setId(initialId || uuid())
  }, [initialId])
  return [id, setId]
}
