module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'extends': 'airbnb',
  'rules': {
    'react/jsx-filename-extension': ['error', { "extensions": [".js"] }],
    'react/no-string-refs': 'warn',
    'react/no-find-dom-node': 'warn',
    'graphql/template-strings': ['error', {
      'env': 'relay',
      'schemaJson': require('./build/schema.json'),
    }],
    // TODO: https://github.com/yannickcr/eslint-plugin-react/issues/819
    // TODO: https://github.com/yannickcr/eslint-plugin-react/issues/811
    'react/no-unused-prop-types': ['off', { skipShapeProps: true }],
    'react/forbid-prop-types': ['warn', { forbid: ['any', 'array', 'object'] }],
    'jsx-a11y/no-static-element-interactions': 'warn',
    'no-plusplus': ['error', { "allowForLoopAfterthoughts": true }],
    'compat/compat': 'error',
  },
  'env': {
    'browser': true,
  },
  'plugins': [
    'react',
    'graphql',
    'compat',
  ],
  'settings': {
    'polyfills': ['fetch']
  }
};
