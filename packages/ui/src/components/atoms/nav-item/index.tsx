import React, { FC, useMemo } from 'react'

import { useLink } from '../../../context'
import { Font } from '../../../config'

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
