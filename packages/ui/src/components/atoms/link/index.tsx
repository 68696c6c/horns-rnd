import React, { FC, useMemo } from 'react'

import {
  getLinkVariantTag,
  LinkProps as BaseLinkProps,
  LinkVariant,
  styleButton,
  styleLink,
} from '../../quarks'
import { useLink } from '../../../context/link-provider'

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

export const LinkWithContext: FC<LinkProps> = ({
  children,
  variant,
  href,
  ...others
}: LinkProps) => {
  const Tag = useLink()
  const Styled = useMemo(
    () => (variant === LinkVariant.Button ? styleButton(Tag) : styleLink(Tag)),
    [variant, Tag],
  )
  return (
    <Styled {...others} href={href}>
      {children}
    </Styled>
  )
}
