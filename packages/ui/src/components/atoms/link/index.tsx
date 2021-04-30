import React, { FC, useMemo } from 'react'

import { getLinkVariantTag, LinkProps } from '../../quarks'

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
