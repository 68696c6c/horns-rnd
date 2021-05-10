import React, { FC, useEffect, useState, MouseEvent } from 'react'
import _range from 'lodash.range'

import { PaginationLink } from '../../atoms'

import * as Styled from './styles'

const makePageRange = (totalPages: number) => _range(1, totalPages + 1)

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

  const [current, setCurrent] = useState(currentPage)
  const [pages, setPages] = useState(() => makePageRange(totalPages))

  useEffect(() => {
    if (typeof onChange !== 'undefined') {
      onChange(current)
    }
  }, [current, onChange])

  useEffect(() => {
    setCurrent(currentPage)
  }, [currentPage])

  useEffect(() => {
    setPages(makePageRange(totalPages))
  }, [totalPages])

  return (
    <Styled.PaginationNav currentPage={current} {...others}>
      {pages.map((page) => (
        <PaginationLink
          key={page}
          variant={variant}
          font={font}
          layout={layout}
          currentColor={currentColor}
          currentBorderWidth={currentBorderWidth}
          currentBorderStyle={currentBorderStyle}
          current={page === current}
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault()
            setCurrent(page)
          }}
        >
          {page}
        </PaginationLink>
      ))}
    </Styled.PaginationNav>
  )
}
