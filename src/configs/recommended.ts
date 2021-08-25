export default {
  plugins: ['sort-keys-fix'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    // eslint
    'func-style': ['error', 'expression'],
    'no-warning-comments': 'warn',
    'one-var': 'off',
    'sort-imports': 'off',
    'no-undef': 'off',
    "no-shadow": "off",
    'no-void': ['error', {"allowAsStatement": true}],

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
    "@typescript-eslint/no-shadow": "error",

    // sort-keys-fix
    'sort-keys-fix/sort-keys-fix': 'error',
  },
}
