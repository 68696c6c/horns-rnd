import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@horns/ui'

import theme from './src/theme'

// wrapRootElement is part of the Gatsby API, and thus cannot be the default export
/* eslint-disable import/prefer-default-export, react/jsx-filename-extension */
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
