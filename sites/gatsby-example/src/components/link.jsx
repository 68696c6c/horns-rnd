import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const relativeLinkRegex = /^\/(?!\/)/

export const CustomLink = ({ children, href, ...props }) => {
  const isRelativeLink = relativeLinkRegex.test(href)

  if (!isRelativeLink) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={href} {...props}>
      {children}
    </GatsbyLink>
  )
}
