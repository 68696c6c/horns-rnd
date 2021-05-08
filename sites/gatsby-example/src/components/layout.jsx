/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'

import {
  LinkFromContext,
  LinkProvider,
  Header,
  Main,
  Footer,
  SiteNav,
  StickyContent,
  // eslint-disable-next-line import/no-unresolved
} from '@horns/ui'

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

  const homeText = data.site?.siteMetadata?.title || 'Home'

  return (
    <LinkProvider Component={CustomLink}>
      <StickyContent>
        <SiteNav
          color="dark"
          menuColor="dark"
          links={[
            { href: '/', text: homeText },
            { href: '/page-2', text: 'Page 2' },
            { href: '/404', text: '404' },
          ]}
        />
      </StickyContent>
      <Main>{children}</Main>
      <Footer>
        <nav>
          <LinkFromContext href="/" variant="button" color="primary">
            {homeText}
          </LinkFromContext>
          <LinkFromContext href="/page-2" variant="button" color="secondary">
            Page 2
          </LinkFromContext>
          <LinkFromContext href="/404" variant="button" color="tertiary">
            404
          </LinkFromContext>
        </nav>
        © {new Date().getFullYear()}, Built with{' '}
        <LinkFromContext href="https://www.gatsbyjs.com">
          Gatsby
        </LinkFromContext>
      </Footer>
    </LinkProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
