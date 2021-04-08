import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { DispatcherResult } from './utils'

export const useId = (): DispatcherResult<string> => {
  const [id, setId] = useState<string>('')
  useEffect(() => {
    console.log('useId')
    setId(uuid())
  }, [])
  return [id, setId]
}
