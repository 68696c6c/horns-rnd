import React, { FC } from 'react'

import {
  LinkVariant,
  LinkProps as BaseLinkProps,
  StyledLink,
  StyledLinkButton,
} from '../../quarks'

const getEmailHref = (email: string, subject: string, body: string): string => {
  let href = `mailto:${email}?`
  href += subject ? `subject=${subject}&` : ''
  href += body ? `body=${body}` : ''
  return href
}

export interface LinkEmailProps extends BaseLinkProps {
  email: string
  subject: string
  body: string
}

export const LinkEmail: FC<LinkEmailProps> = ({
  children,
  variant,
  email,
  subject,
  body,
  ...others
}: LinkEmailProps) => {
  const Tag = variant === LinkVariant.Button ? StyledLinkButton : StyledLink
  const href = getEmailHref(email, subject, body)
  return (
    <Tag {...others} href={href}>
      {children}
    </Tag>
  )
}
