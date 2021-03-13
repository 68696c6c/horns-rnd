import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { T, Heading } from '@horns/ui'

import { Layout, Seo } from '../components'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Heading>404: Not Found</Heading>
    <T>You just hit a route that doesn&#39;t exist.</T>
  </Layout>
)

export default NotFoundPage
