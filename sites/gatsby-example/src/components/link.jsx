import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const relativeLinkRegex = /^\/(?!\/)/

export const CustomLink = ({ children, to, ...props }) => {
  console.log('custom link: ', to)
  const isRelativeLink = relativeLinkRegex.test(to)

  if (!isRelativeLink) {
    console.log('external link')
    return (
      <a href={to} {...props}>
        {children}
      </a>
    )
  }

  console.log('gatsby link')
  return (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  )
}
