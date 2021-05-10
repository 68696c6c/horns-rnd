import React, { FC, useMemo } from 'react'

import { CustomLink, LinkProps, styleCustomLinkTag } from '../../quarks'

export interface LinkFromContextProps extends LinkProps, CustomLink {}

export const LinkFromContext: FC<LinkFromContextProps> = ({
  LinkComponent,
  children,
  variant,
  href,
  ...others
}: LinkFromContextProps) => {
  const Tag = useMemo(() => styleCustomLinkTag(LinkComponent, variant), [
    variant,
    LinkComponent,
  ])
  return (
    <Tag {...others} href={href} role="link">
      {children}
    </Tag>
  )
}
