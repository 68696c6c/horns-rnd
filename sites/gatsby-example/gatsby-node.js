const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { generateTheme } = require('@horns/cli')

const baseTheme = require('./theme.config')

exports.onPreInit = () => {
  console.log('generate theme')
  generateTheme(baseTheme, './theme.js')
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const analyzerMode = process.env.INTERACTIVE_ANALYZE ? 'server' : 'json'

  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode,
          reportFileName: `./__build/bundlereport.json`,
        }),
      ],
    })
  }
}
