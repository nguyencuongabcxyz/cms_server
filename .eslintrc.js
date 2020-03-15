module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "no-use-before-define": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-restricted-syntax": 0,
    "func-names": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "global-require": 0,
    "class-methods-use-this": 0,
    "no-plusplus": 0,
    "prefer-destructuring": ["error", {
      "array": false,
      "object": true
    }]
  }
};
