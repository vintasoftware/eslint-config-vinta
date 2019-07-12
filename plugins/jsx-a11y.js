module.exports = {
  plugins: ['jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /* Errors */
    'jsx-a11y/accessible-emoji': ['error'],
    'jsx-a11y/alt-text': ['error'],
    'jsx-a11y/anchor-has-content': ['error'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': ['error'],
    'jsx-a11y/aria-props': ['error'],
    'jsx-a11y/aria-proptypes': ['error'],
    'jsx-a11y/aria-role': ['error', { ignoreNonDom: false }],
    'jsx-a11y/aria-unsupported-elements': ['error'],
    'jsx-a11y/click-events-have-key-events': ['error'],
    'jsx-a11y/heading-has-content': ['error', { components: [] }],
    'jsx-a11y/html-has-lang': ['error'],
    'jsx-a11y/iframe-has-title': ['error'],
    'jsx-a11y/img-redundant-alt': ['error'],
    'jsx-a11y/interactive-supports-focus': ['error'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        depth: 25,
        assert: 'both',
      },
    ],
    'jsx-a11y/lang': ['error'],
    'jsx-a11y/media-has-caption': ['error'],
    'jsx-a11y/mouse-events-have-key-events': ['error'],
    'jsx-a11y/no-access-key': ['error'],
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
    'jsx-a11y/no-distracting-elements': ['error', { elements: ['marquee', 'blink'] }],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      { tr: ['none', 'presentation'] },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      { handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'] },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': ['error', { tags: [], roles: ['tabpanel'] }],
    'jsx-a11y/no-redundant-roles': ['error', { nav: ['navigation'] }],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      { handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'] },
    ],
    'jsx-a11y/role-has-required-aria-props': ['error'],
    'jsx-a11y/role-supports-aria-props': ['error'],
    'jsx-a11y/scope': ['error'],
    'jsx-a11y/tabindex-no-positive': ['error'],
    /* Disabled */
    'jsx-a11y/no-onchange': ['off'],
  },
};
