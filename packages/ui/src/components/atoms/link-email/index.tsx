import React, { FC } from 'react'

import { BaseLinkProps, LinkButton, Link } from '../../quarks'

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
  const Tag = variant === 'button' ? LinkButton : Link
  const href = getEmailHref(email, subject, body)
  return (
    <Tag {...others} href={href}>
      {children}
    </Tag>
  )
}
