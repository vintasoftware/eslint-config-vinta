module.exports = {
  rules: {
    /* Errors */
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': ['error'],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
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
    ],
    'consistent-return': ['error'],
    'default-case': ['error'],
    'default-param-last': ['error'],
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always'],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': ['error'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-constructor-return': ['error'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': ['error'],
    'no-empty-pattern': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-fallthrough': ['error'],
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['error'],
    'no-iterator': ['error'],
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-proto': ['error'],
    'no-redeclare': ['error'],
    'no-return-assign': ['error', 'always'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-assign': ['error', { props: false }],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    'no-unused-labels': ['error'],
    'no-useless-call': ['error'],
    'no-useless-catch': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-return': ['error'],
    'no-void': ['error'],
    'no-with': ['error'],
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': ['error'],
    radix: ['error', 'always'],
    'vars-on-top': ['error'],
    yoda: ['error'],
    /* Disabled */
    'accessor-pairs': ['off'],
    complexity: ['off'],
    'max-classes-per-file': ['off'],
    'no-div-regex': ['off'],
    'no-implicit-coercion': ['off'],
    'no-implicit-globals': ['off'],
    'no-magic-numbers': ['off'],
    'no-param-reassign': ['off'],
    'no-restricted-properties': ['off'],
    'no-unmodified-loop-condition': ['off'],
    'no-warning-comments': ['off'],
    'prefer-named-capture-group': ['off'],
    'require-await': ['off'],
    'require-unicode-regexp': ['off'],
  },
};

/*
Controlled by Prettier:
  - curly
  - dot-location
  - no-floating-decimal
  - no-multi-spaces
  - wrap-iife
*/
