module.exports = {
  extends: ['prettier/react'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /* Errors */
    'react/jsx-key': ['error'],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': ['error', { allowGlobals: false }],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/no-children-prop': ['error'],
    'react/no-danger-with-children': ['error'],
    /* Disabled */
    'react/display-name': ['off'],
    /* React Hooks */
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
