import React, { FC, useMemo } from 'react'

import { NavItemProps, NavItemVariant } from '../../quarks'

import * as Styled from './styles'

const getVariantTag = (variant?: NavItemVariant) => {
  switch (variant) {
    case NavItemVariant.Background:
      return Styled.NavItemBackground
    case NavItemVariant.Underline:
      return Styled.NavItemUnderline
    default:
      return Styled.NavItemBorder
  }
}

export const NavItem: FC<NavItemProps> = ({
  variant,
  ...others
}: NavItemProps) => {
  const Tag = useMemo(() => getVariantTag(variant), [variant])
  return <Tag {...others} />
}
