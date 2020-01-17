module.exports = {
  rules: {
    /* Errors */
    camelcase: ['error', { allow: ['^UNSAFE_'] }],
    'func-names': ['error', 'as-needed', { generators: 'as-needed' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'lines-between-class-members': ['error', 'always'],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-continue': ['error'],
    'no-lonely-if': ['error'],
    'no-multi-assign': ['error'],
    'no-new-object': ['error'],
    'no-plusplus': ['error'],
    'no-underscore-dangle': ['error', { enforceInMethodNames: true }],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': ['error'],
    /* Disabled */
    'capitalized-coments': ['off'],
    'consistent-this': ['off'],
    'func-name-matching': ['off'],
    'id-blacklist': ['off'],
    'id-length': ['off'],
    'id-match': ['off'],
    'line-comment-position': ['off'],
    'max-depth': ['off'],
    'max-lines': ['off'],
    'max-lines-per-function': ['off'],
    'max-nested-callbacks': ['off'],
    'max-params': ['off'],
    'max-statements': ['off'],
    'max-statements-per-line': ['off'],
    'multiline-comment-style': ['off'],
    'new-cap': ['off'],
    'no-inline-comments': ['off'],
    'no-negated-condition': ['off'],
    'no-nested-ternary': ['off'],
    'no-restricted-syntax': ['off'],
    'no-ternary': ['off'],
    'padding-line-between-statements': ['off'],
    'prefer-object-spread': ['off'],
    'sort-keys': ['off'],
    'sort-vars': ['off'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*', '-', '+'],
          balanced: true,
        },
      },
    ],
  },
};

/*
Controlled by Prettier:
  - array-bracket-newline
  - array-bracket-spacing
  - array-element-newline
  - block-spacing
  - brace-style
  - comma-dangle
  - comma-spacing
  - comma-style
  - computed-property-spacing
  - eol-last
  - func-call-spacing
  - function-call-argument-newline
  - function-paren-newline
  - implicit-arrow-linebreak
  - indent
  - jsx-quotes
  - key-spacing
  - keyword-spacing
  - linebreak-style
  - lines-around-comment
  - max-len
  - multiline-ternary
  - new-parens
  - newline-per-chained-call
  - no-mixed-operators
  - no-mixed-spaces-and-tabs
  - no-multiple-empty-lines
  - no-tabs
  - no-trailing-spaces
  - no-whitespace-before-property
  - nonblock-statement-body-position
  - object-curly-newline
  - object-curly-spacing
  - object-property-newline
  - one-var-declaration-per-line
  - operator-linebreak
  - padded-blocks
  - quote-props
  - quotes
  - semi
  - semi-spacing
  - semi-style
  - space-before-blocks
  - space-before-function-paren
  - space-in-parens
  - space-infix-ops
  - space-unary-ops
  - switch-colon-spacing
  - template-tag-spacing
  - unicode-bom
  - wrap-regex
*/
