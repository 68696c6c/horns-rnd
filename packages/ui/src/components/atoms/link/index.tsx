import React, { FC, useMemo } from 'react'

import { LinkProps as BaseLinkProps, getLinkVariantTag } from '../../quarks'

export interface LinkProps extends BaseLinkProps {
  href: string
}

export const Link: FC<LinkProps> = ({
  children,
  variant,
  href,
  ...others
}: LinkProps) => {
  const Tag = useMemo(() => getLinkVariantTag(variant), [variant])
  return (
    <Tag {...others} href={href}>
      {children}
    </Tag>
  )
}
