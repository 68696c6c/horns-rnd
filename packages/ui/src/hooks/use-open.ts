import { useCallback, useEffect, useState } from 'react'

import { DispatcherResult } from './utils'

export const useOpen = (
  initialOpen: boolean,
  isTarget: (t: HTMLElement) => boolean,
): DispatcherResult<boolean> => {
  const [open, setOpen] = useState<boolean>(initialOpen)

  const handleClick = useCallback((event) => {
    if (isTarget(event.target)) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.addEventListener('click', handleClick)
    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener('click', handleClick)
    }
  })

  return [open, setOpen]
}
