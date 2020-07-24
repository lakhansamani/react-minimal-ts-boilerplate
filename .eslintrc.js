module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:jest/recommended',
  ],
  plugins: ['prettier', 'jest'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
