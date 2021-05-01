import React, { FC, useMemo } from 'react'

import { BaseLinkProps, getLinkVariantTag } from '../../quarks'

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
  const Tag = useMemo(() => getLinkVariantTag(variant), [variant])
  const href = useMemo(() => getEmailHref(email, subject, body), [
    email,
    subject,
    body,
  ])
  return (
    <Tag {...others} href={href} role="link">
      {children}
    </Tag>
  )
}
