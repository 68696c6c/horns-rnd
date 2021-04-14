import React, { FC, useEffect, useState } from 'react'

import { useNavItem } from '../../../hooks'
import { makeIntArray } from '../../../utils'

import * as Styled from './styles'

export const PaginationNav: FC<Styled.PaginationNavProps> = ({
  totalPages: totalPagesProp,
  currentPage: currentPageProp,
  variant,
  layout,
  currentColor,
  currentBorderWidth,
  currentBorderStyle,
  onChange,
  font,
  ...others
}: Styled.PaginationNavProps) => {
  const totalPages = totalPagesProp || 1
  const currentPage = currentPageProp || 1
  const Tag = useNavItem(variant)

  const [current, setCurrent] = useState(currentPage)
  const [pages, setPages] = useState(() => makeIntArray(totalPages))

  useEffect(() => {
    if (typeof onChange !== 'undefined') {
      onChange(current)
    }
  }, [current])

  useEffect(() => {
    setCurrent(currentPage)
  }, [currentPage])

  useEffect(() => {
    setPages(makeIntArray(totalPages))
  }, [totalPages])

  return (
    <Styled.PaginationNav currentPage={current} {...others}>
      {pages.map((page) => (
        <Tag
          key={page}
          href="#"
          font={font}
          layout={layout}
          currentColor={currentColor}
          currentBorderWidth={currentBorderWidth}
          currentBorderStyle={currentBorderStyle}
          current={page === current}
          onClick={(event: Event) => {
            event.preventDefault()
            setCurrent(page)
          }}
        >
          {page}
        </Tag>
      ))}
    </Styled.PaginationNav>
  )
}
