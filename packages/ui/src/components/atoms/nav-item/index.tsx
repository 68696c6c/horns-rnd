import React, { FC, useMemo } from 'react'

import { Font } from '@horns/theme'

import { useLink } from '../../../context'

import { NavItemProps, getVariantTag } from './styles'

export const NavItem: FC<NavItemProps> = ({
  children,
  variant,
  ...others
}: NavItemProps) => {
  const Base = useLink()
  const Tag = useMemo(() => getVariantTag(Base, variant), [variant, Base])
  return <Tag {...others}>{children}</Tag>
}

NavItem.defaultProps = {
  font: Font.Nav,
}
