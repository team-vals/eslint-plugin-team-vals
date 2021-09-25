export default {
  extends: [
    'plugin:import/react',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'plugin:team-vals/prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // eslint
    'no-undef': 'off',
    'no-warning-comments': 'warn',
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],

    // @typescript-eslint
    '@typescript-eslint/naming-convention': 'off',

    // react
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-literals': 'off',
    'react/no-multi-comp': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
  },
}
