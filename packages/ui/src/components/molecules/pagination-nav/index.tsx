import React, { FC, useEffect, useMemo, useState, MouseEvent } from 'react'

import { navItemFactory } from '../../atoms'
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
  const Tag = useMemo(() => navItemFactory(variant), [variant])

  const [current, setCurrent] = useState(currentPage)
  const [pages, setPages] = useState(() => makeIntArray(totalPages))

  useEffect(() => {
    if (typeof onChange !== 'undefined') {
      onChange(current)
    }
  }, [current, onChange])

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
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
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
