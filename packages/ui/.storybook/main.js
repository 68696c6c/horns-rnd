const fs = require('fs')
const path = require('path')

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      )
    }
    currDir = dir
  }
}

module.exports = {
  stories: ['../src/**/stories.tsx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  // After adding @emotion/babel-plugin to use component selectors, Storybook started throwing
  // "Can't resolve '@emotion/styled/base'" errors.  Adding this webpackFinal seems to fix the
  // problem. https://github.com/storybookjs/storybook/issues/13277#issuecomment-751733550
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/styled': getPackageDir('@emotion/styled'),
          '@emotion/core': getPackageDir('@emotion/react'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    }
  },
}
