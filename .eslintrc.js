module.exports = {
  extends: ['@react-native-community', 'plugin:flowtype/recommended', 'airbnb', 'prettier'],
  plugins: ['flowtype', 'lodash-fp'],
  root: true,
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
      },
    ],
    'class-methods-use-this': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'no-return-assign': ['off'],
    'import/prefer-default-export': ['off'],
    'react/forbid-prop-types': ['off'],
    'no-param-reassign': ['off'],
    'no-new': ['off'],
    'no-shadow': 'off',
    'react/jsx-curly-newline': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'eslint-disable-next-line react-hooks/exhaustive-deps': 'off',
    'no-use-before-define': 'off',
  },
};
