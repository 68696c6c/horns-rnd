import { useState, useRef, MutableRefObject, Ref } from 'react'
import { useScrollPosition as baseUseScrollPosition } from '@n8tb1t/use-scroll-position'

export interface UseScrollPositionResult<T> {
  scrollRef: Ref<T>
  scrolledTo: boolean
}

export const useScrollPosition = <
  T extends HTMLElement
>(): UseScrollPositionResult<T> => {
  const [scrolledTo, setScrolledTo] = useState(false)

  const scrollRef = useRef<T>(null)

  baseUseScrollPosition(
    ({ currPos }) => {
      if (!scrolledTo && currPos.y <= 0) {
        setScrolledTo(true)
      }
      if (!scrolledTo && currPos.y >= 0) {
        setScrolledTo(false)
      }
    },
    [scrolledTo],
    scrollRef as MutableRefObject<HTMLElement | undefined>,
  )

  return {
    scrollRef,
    scrolledTo,
  }
}
