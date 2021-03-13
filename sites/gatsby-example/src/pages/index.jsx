import { graphql } from 'gatsby'
import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { T, Heading } from '@horns/ui'

import { Layout, GatsbyLinkButton, Image, Seo } from '../components'

// eslint-disable-next-line react/prop-types
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Heading>Hi people</Heading>
    <T>Welcome to your new Gatsby site.</T>
    <T>Now go build something great.</T>
    {/* eslint-disable-next-line react/prop-types */}
    <Image maxWidth="300px" image={data.placeholderImage} />
    <GatsbyLinkButton to="/page-2/" color="primary">
      Go to page 2
    </GatsbyLinkButton>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
