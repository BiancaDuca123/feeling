export default [
  {
    files: ['*/.js', '*/.mjs'],
    ignores: ['dist/*', 'node_modules/*'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
      },
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': ['warn'],
      'no-redeclare': ['error'],
      'camelcase': ['error', { properties: 'never' }],
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-const': 'error',
      'consistent-return': 'error',
      'indent': ['error', 2, { SwitchCase: 1 }],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
    },
  },
];
