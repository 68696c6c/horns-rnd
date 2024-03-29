import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { T, Heading } from '@horns/ui'

import { Layout, CustomLink, Seo } from '../components'

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Heading>Hi from the second page</Heading>
    <T>Welcome to page 2</T>
    <CustomLink href="/">Go back to the homepage</CustomLink>
  </Layout>
)

export default SecondPage
