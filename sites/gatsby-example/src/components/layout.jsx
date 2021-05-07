/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'

import { LinkFromContext, LinkProvider, Header, Main, Footer } from '@horns/ui'

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
            <LinkFromContext href="/">Home - LinkFromContext</LinkFromContext>
            <GatsbyLink to="/page-2">Page 2 - GatsbyLink</GatsbyLink>
            <LinkFromContext href="/page-2" variant="button" color="primary">Page 2 - LinkFromContext</LinkFromContext>
            <LinkFromContext href="https://google.com" target="_blank">External - LinkFromContext</LinkFromContext>
          </nav>
        </Header>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with{' '}
          <LinkFromContext href="https://www.gatsbyjs.com">Gatsby</LinkFromContext>
        </Footer>
      </LinkProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
