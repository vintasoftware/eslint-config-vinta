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
    'react/button-has-type': ['error'],
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/forbid-foreign-prop-types': ['error'],
    'react/jsx-key': ['error'],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': ['error', { allowGlobals: false }],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/no-access-state-in-setstate': ['error'],
    'react/no-children-prop': ['error'],
    'react/no-danger-with-children': ['error'],
    'react/no-danger': ['error'],
    'react/no-deprecated': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-direct-mutation-state': ['error'],
    'react/no-find-dom-node': ['error'],
    'react/no-is-mounted': ['error'],
    'react/no-redundant-should-component-update': ['error'],
    'react/no-render-return-value': ['error'],
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],
    'react/no-this-in-sfc': ['error'],
    'react/no-typos': ['error'],
    'react/no-unescaped-entities': ['error'],
    'react/no-unknown-property': ['error'],
    'react/no-will-update-set-state': ['error'],
    'react/prop-types': ['error'],
    'react/react-in-jsx-scope': ['error'],
    'react/require-render-return': ['error'],
    /* Disabled */
    'react/boolean-prop-naming': ['off'], // TODO: Validate
    'react/display-name': ['off'],
    'react/forbid-component-props': ['off'],
    'react/forbid-dom-props': ['off'],
    'react/forbid-elements': ['off'],
    'react/forbid-prop-types': ['off'], // TODO: Validate
    'react/no-array-index-key': ['off'], // TODO: Validate
    'react/no-did-mount-set-state': ['off'],
    'react/no-multi-comp': ['off'],
    'react/no-set-state': ['off'],
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
