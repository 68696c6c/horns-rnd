/* global window */
import { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'

import { Breakpoint } from '@horns/theme'

import { valueToNumber } from '../utils'

interface WindowDimensions {
  width?: number
  height?: number
}

export const useBreakpoint = (initialBreakpoint?: Breakpoint): boolean => {
  const breakpoint = initialBreakpoint || Breakpoint.Mobile
  const theme = useTheme()

  // Initialize state with undefined width/height so server and client renders match.
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const breakInt = valueToNumber(theme.breakpoints[breakpoint])
    if (typeof windowSize.width === 'undefined') {
      return
    }
    if (windowSize.width <= breakInt && !isMobile) {
      setIsMobile(true)
    } else if (windowSize.width > breakInt && isMobile) {
      setIsMobile(false)
    }
  }, [windowSize, breakpoint, theme.breakpoints, isMobile])

  return isMobile
}
