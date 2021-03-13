import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { T, Heading } from '@horns/ui'

import { Layout, GatsbyLink, Seo } from '../components'

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Heading>Hi from the second page</Heading>
    <T>Welcome to page 2</T>
    <GatsbyLink to="/">Go back to the homepage</GatsbyLink>
  </Layout>
)

export default SecondPage
