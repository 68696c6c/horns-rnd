import React, { FC, useState } from 'react'

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
  pages: pagesProp,
  currentPage: currentPageProp,
  variant,
  layout,
  currentColor,
  currentBorderWidth,
  currentBorderStyle,
  onChange,
  ...others
}: Styled.PaginationNavProps) => {
  const pages = pagesProp || 1
  const currentPage = currentPageProp || 1
  const [current, setCurrent] = useState<number>(currentPage)
  const Tag = getNavItemTag(variant)
  return (
    <Styled.PaginationNav currentPage={currentPage} {...others}>
      {makeIntArray(pages).map((page) => (
        <Tag
          href="#"
          layout={layout}
          currentColor={currentColor}
          currentWidth={currentBorderWidth}
          currentStyle={currentBorderStyle}
          current={page === current}
          key={page}
          onClick={(event: Event) => {
            event.preventDefault()
            setCurrent(page)
            if (typeof onChange !== 'undefined') {
              onChange(page)
            }
          }}
        >
          {page}
        </Tag>
      ))}
    </Styled.PaginationNav>
  )
}
