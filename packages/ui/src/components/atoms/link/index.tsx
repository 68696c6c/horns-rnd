import React, { FC } from 'react'

import {
  BaseLinkProps,
  Link as StyledLink,
  LinkButton,
  LinkVariant,
} from '../../quarks'

export interface LinkProps extends BaseLinkProps {
  href: string
}

export const Link: FC<LinkProps> = ({
  children,
  variant,
  href,
  ...others
}: LinkProps) => {
  const Tag = variant === LinkVariant.Button ? LinkButton : StyledLink
  return (
    <Tag {...others} href={href}>
      {children}
    </Tag>
  )
}
