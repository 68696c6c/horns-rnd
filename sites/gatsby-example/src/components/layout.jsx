/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'

import { LinkWithContext, LinkProvider, Header, Main, Footer } from '@horns/ui'

import { CustomLink } from './link'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <LinkProvider Component={CustomLink}>
        <Header>
          <nav>
            <GatsbyLink to="/page-2">gatsby link</GatsbyLink>
            <LinkWithContext href="/">
              {data.site.siteMetadata?.title || 'Title'}
            </LinkWithContext>
            <LinkWithContext href="/page-2" variant="button">Page 2</LinkWithContext>
            <LinkWithContext href="https://google.com" target="_blank">Not a gatsby link</LinkWithContext>
          </nav>
        </Header>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with{' '}
          <LinkWithContext href="https://www.gatsbyjs.com">Gatsby</LinkWithContext>
        </Footer>
      </LinkProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
