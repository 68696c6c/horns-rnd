import React, { FC, useMemo } from 'react'

import { BaseLinkProps, getLinkVariantTag } from '../../quarks'

export interface LinkPhoneProps extends BaseLinkProps {
  number: string
}

export const LinkPhone: FC<LinkPhoneProps> = ({
  children,
  variant,
  number,
  ...others
}: LinkPhoneProps) => {
  const Tag = useMemo(() => getLinkVariantTag(variant), [variant])
  return (
    <Tag {...others} href={`tel:${number}`} role="link">
      {children}
    </Tag>
  )
}
