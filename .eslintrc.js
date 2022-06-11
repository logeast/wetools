module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['simple-import-sort', 'header', 'eslint-plugin-tsdoc'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'tsdoc/syntax': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'global-require': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/vue/**/*.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
    {
      files: ['shim.d.ts', 'vite.config.ts', 'playwright.config.ts', '**/*.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
