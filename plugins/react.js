module.exports = {
  extends: ['prettier/react'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
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
    'react/jsx-no-script-url': ['error'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-key': ['error'],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always', allowReferrer: false }],
    'react/jsx-no-undef': ['error', { allowGlobals: false }],
    'react/jsx-no-useless-fragment': ['error'],
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
    'react/jsx-sort-default-props': ['error', { ignoreCase: false }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/no-access-state-in-setstate': ['error'],
    'react/no-adjacent-inline-elements': ['error'],
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
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
    'react/no-unused-state': ['error'],
    'react/no-will-update-set-state': ['error'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/prop-types': ['error'],
    'react/react-in-jsx-scope': ['error'],
    'react/require-render-return': ['error'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/sort-comp': [
      'error',
      {
        order: ['static-variables', 'static-methods', 'lifecycle', 'everything-else', 'render'],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
    'react/state-in-constructor': ['error', 'always'],
    'react/style-prop-object': ['error'],
    'react/void-dom-elements-no-children': ['error'],
    /* Warnings */
    'react/no-array-index-key': ['warn'],
    /* Disabled */
    'react/boolean-prop-naming': ['off'],
    'react/display-name': ['off'],
    'react/forbid-component-props': ['off'],
    'react/forbid-dom-props': ['off'],
    'react/forbid-elements': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/function-component-definition': [
      // Disabled temporarily (see 1.4.2 changelog for details)
      'off',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-did-mount-set-state': ['off'],
    'react/no-multi-comp': ['off'],
    'react/no-set-state': ['off'],
    'react/prefer-read-only-props': ['off'],
    'react/require-default-props': ['off'],
    'react/require-optimization': ['off'],
    'react/sort-prop-types': ['off'],
    'react/static-property-placement': ['off'],
    'react/jsx-handler-names': ['off'],
    'react/jsx-max-depth': ['off'],
    'react/jsx-no-literals': ['off'],
    'react/jsx-props-no-spreading': ['off'],
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
