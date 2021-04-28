import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { T, Heading } from '@horns/ui'

import { Layout, Link, Seo } from '../components'

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Heading>Hi from the second page</Heading>
    <T>Welcome to page 2</T>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
