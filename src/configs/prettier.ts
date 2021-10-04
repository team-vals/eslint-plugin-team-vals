export default {
  extends: ['prettier'],
  rules: {},
  overrides: [
    {
      "files": ["**/*.tsx", "**/*.jsx"],
      "rules": {
        // react
        'react/jsx-newline': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-depth': ['warn', { max: 5 }],
      }
    }
  ]
}
