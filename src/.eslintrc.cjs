module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    // Sometimes we will prefer strict
    // 'plugin:astro/jsx-a11y-strict',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-unused-css-selector': 'error',
        'astro/prefer-object-class-list': 'error',
      },
    },
  ],
}
