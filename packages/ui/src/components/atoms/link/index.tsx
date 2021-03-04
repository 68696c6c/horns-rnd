import React, { FC } from 'react'

import {
  LinkVariant,
  LinkProps as BaseLinkProps,
  StyledLink,
  StyledLinkButton,
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
  const Tag = variant === LinkVariant.Button ? StyledLinkButton : StyledLink
  return (
    <Tag {...others} href={href}>
      {children}
    </Tag>
  )
}
