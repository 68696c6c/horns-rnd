import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ maxWidth, image }) => {
  if (!image?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div style={{ maxWidth }}>
      <Img fluid={image.childImageSharp.fluid} />
    </div>
  )
}

Image.propTypes = {
  maxWidth: PropTypes.string.isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Image
