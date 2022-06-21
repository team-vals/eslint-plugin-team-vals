export default {
  plugins: ['sort-keys-fix'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // eslint
    'func-style': ['error', 'expression'],
    'no-warning-comments': 'warn',
    'one-var': 'off',
    'sort-imports': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],

    // @typescript-eslint
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',

    // sort-keys-fix
    'sort-keys-fix/sort-keys-fix': 'error',
  },
}
