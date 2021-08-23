export default {
  extends: [
    'plugin:import/react',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // eslint
    'no-undef': 'off',

    // @typescript-eslint
    '@typescript-eslint/naming-convention': 'off',

    // react
    'react/jsx-newline': 'error',
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
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-no-literals': 'off',
    'react/no-multi-comp': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-max-depth': ['warn', { max: 5 }],
    'react/require-default-props': 'off',
    'react/display-name': 'off',
  },
}
