/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Header, Link, Main, Footer } from '@horns/ui'

import { GatsbyLink } from './link'

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
      <Header>
        <nav>
          <GatsbyLink to="/">
            {data.site.siteMetadata?.title || 'Title'}
          </GatsbyLink>
          <Link href="/page-2">Not a gatsby link</Link>
        </nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()}, Built with{' '}
        <Link href="https://www.gatsbyjs.com">Gatsby</Link>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
