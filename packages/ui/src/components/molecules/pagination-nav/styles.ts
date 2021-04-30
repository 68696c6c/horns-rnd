import styled from '@emotion/styled'

import { BaseNavItemProps } from '../../quarks'
import { Nav } from '../../atoms'

export interface PaginationNavProps extends BaseNavItemProps {
  totalPages?: number
  currentPage?: number
  onChange?: (currentPage: number) => void
}

export const PaginationNav = styled(Nav)<PaginationNavProps>()
