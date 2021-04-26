import React, { FC, useEffect, useState, useRef } from 'react'
import { Global, css } from '@emotion/react'

import { Parent } from '../../../traits'
import { useScrollPosition } from '../../../hooks/use-scroll-position'

import * as Styled from './styles'

export interface StickyContentProps extends Parent {}

export const StickyContent: FC<StickyContentProps> = ({
  children,
  ...others
}: StickyContentProps) => {
  const { scrollRef, scrolledTo } = useScrollPosition<HTMLDivElement>()

  const stickyBarRef = useRef<HTMLDivElement>(null)
  const [stickyBarHeight, setStickyBarHeight] = useState(64)

  useEffect(() => {
    const newHeight = stickyBarRef.current?.clientHeight
    if (typeof newHeight !== 'undefined') {
      setStickyBarHeight(newHeight)
    }
  }, [stickyBarRef])

  return (
    <>
      <Global
        styles={css`
          body {
            margin-bottom: ${stickyBarHeight}px;
          }
        `}
      />
      {!scrolledTo && children}
      <div ref={scrollRef} />
      <Styled.StickyBar {...others} ref={stickyBarRef} isVisible={scrolledTo}>
        {children}
      </Styled.StickyBar>
    </>
  )
}
