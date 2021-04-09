import React, { FC, useEffect, useState } from 'react'

import { StyledComponent } from '@emotion/styled'
import { NavItemVariant } from '../../quarks'
import { NavItemBackground, NavItemBorder, NavItemUnderline } from '../../atoms'
import { makeIntArray } from '../../../utils'

import * as Styled from './styles'

const getNavItemTag = (variant?: NavItemVariant): StyledComponent<any> => {
  switch (variant) {
    case NavItemVariant.Background:
      return NavItemBackground
    case NavItemVariant.Underline:
      return NavItemUnderline
    default:
      return NavItemBorder
  }
}

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
  const Tag = getNavItemTag(variant)

  const [current, setCurrent] = useState(currentPage)

  useEffect(() => {
    if (typeof onChange !== 'undefined') {
      onChange(current)
    }
  }, [current])

  useEffect(() => {
    setCurrent(currentPage)
  }, [currentPage])

  return (
    <Styled.PaginationNav currentPage={current} {...others}>
      {makeIntArray(totalPages).map((page) => (
        <Tag
          key={page}
          href="#"
          font={font}
          layout={layout}
          currentColor={currentColor}
          currentWidth={currentBorderWidth}
          currentStyle={currentBorderStyle}
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
