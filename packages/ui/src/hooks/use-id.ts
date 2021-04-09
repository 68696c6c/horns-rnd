import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { DispatcherResult } from './utils'

export const useId = (initialId?: string): DispatcherResult<string> => {
  const [id, setId] = useState<string>(initialId as string)
  useEffect(() => {
    setId(initialId || uuid())
  }, [initialId])
  return [id, setId]
}
