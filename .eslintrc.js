module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'airbnb-typescript', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    '@typescript-eslint/no-inferrable-types': 0,
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        singleQuote: true,
        semi: false,
        tabWidth: 2,
      },
    ],
    'import/prefer-default-export': 'off', // We export everything through barrel files and rarely ever use default exports.
    'react/jsx-props-no-spreading': 'off', // We are making a component library so we actually do want to spread all user-provided props on to our components.
  },
  overrides: [
    {
      // This rule is disabled for these files to prevent eslint from complaining about storybook and jest being devDependencies.
      // TODO: it would be better to ignore this rule for specific imports instead of ignoring it per file but that doesn't seem possible.
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
      files: [
        '**/*.stories.tsx',
        '**/stories.tsx',
        '**/*.test.tsx',
        '**/test.tsx',
        '**/gatsby-browser.js',
        '**/gatsby-node.js',
        '**/gatsby-ssr.js',
        'jest.setup.ts',
        'rollup.config.js',
      ],
    },
  ],
}
