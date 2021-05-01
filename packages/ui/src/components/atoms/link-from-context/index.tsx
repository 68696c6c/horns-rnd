import React, { FC, useMemo } from 'react'

import { useLink } from '../../../context'
import { LinkProps, styleCustomLinkTag } from '../../quarks'

export const LinkFromContext: FC<LinkProps> = ({
  children,
  variant,
  href,
  ...others
}: LinkProps) => {
  const Base = useLink()
  const Tag = useMemo(() => styleCustomLinkTag(Base, variant), [variant, Base])
  return (
    <Tag {...others} href={href} role="link">
      {children}
    </Tag>
  )
}
