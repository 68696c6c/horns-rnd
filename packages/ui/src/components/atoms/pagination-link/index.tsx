import React, { FC, useMemo } from 'react'

import { Font } from '@horns/theme'

import { Interactive, Parent } from '../../../traits'
import { BaseNavItemProps, getNavItemVariantTag } from '../../quarks'

export interface PaginationLinkProps
  extends Parent,
    BaseNavItemProps,
    Interactive {}

export const PaginationLink: FC<PaginationLinkProps> = ({
  children,
  variant,
  ...others
}: PaginationLinkProps) => {
  const Tag = useMemo(() => getNavItemVariantTag(variant), [variant])
  return <Tag {...others}>{children}</Tag>
}

PaginationLink.defaultProps = {
  font: Font.Nav,
}
