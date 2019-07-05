module.exports = {
  extends: ['prettier/react'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // React Hooks
    'react-hooks/rules-of-hooks': ['error'],
  },
};

/*
Controlled by Prettier:
  - react/jsx-child-element-spacing
  - react/jsx-closing-bracket-location
  - react/jsx-closing-tag-location
  - react/jsx-curly-newline
  - react/jsx-curly-spacing
  - react/jsx-equals-spacing
  - react/jsx-filename-extension
  - react/jsx-first-prop-new-line
  - react/jsx-indent
  - react/jsx-indent-props
  - react/jsx-max-props-per-line
  - react/jsx-no-bind
  - react/jsx-one-expression-per-line
  - react/jsx-props-no-multi-spaces
  - react/jsx-space-before-closing
  - react/jsx-tag-spacing
  - react/jsx-wrap-multilines
*/
