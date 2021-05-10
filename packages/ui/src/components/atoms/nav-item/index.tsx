import React, { FC, useMemo } from 'react'

import { Font } from '@horns/theme'

import { NavItemProps, styleCustomNavItemTag } from '../../quarks'

export const NavItem: FC<NavItemProps> = ({
  LinkComponent,
  children,
  variant,
  ...others
}: NavItemProps) => {
  const Tag = useMemo(() => styleCustomNavItemTag(LinkComponent, variant), [
    variant,
    LinkComponent,
  ])
  return <Tag {...others}>{children}</Tag>
}

NavItem.defaultProps = {
  font: Font.Nav,
}
