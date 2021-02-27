const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

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
