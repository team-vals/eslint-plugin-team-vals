export default {
  extends: [
    '@react-native-community',
    'plugin:team-vals/react',
    'plugin:team-vals/prettier',
  ],
  rules: {
    // eslint
    'no-undef': 'off',
    'no-warning-comments': 'warn',
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],

    // react
    'react/forbid-component-props': 'off',

    // import
    // react-native を import するときになんかエラーが出る
    'import/namespace': 'off',
  },
}
