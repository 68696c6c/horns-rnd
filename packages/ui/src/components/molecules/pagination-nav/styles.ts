import styled from '@emotion/styled'

import { NavItemProps } from '../../quarks'
import { Nav } from '../../atoms'

export interface PaginationNavProps extends NavItemProps {
  totalPages?: number
  currentPage?: number
  onChange?: (currentPage: number) => void
}

export const PaginationNav = styled(Nav)<PaginationNavProps>()
