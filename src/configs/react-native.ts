export default {
  extends: ['@react-native-community', 'plugin:team-vals/react'],
  rules: {
    // eslint
    'no-undef': 'off',
    'no-warning-comments': 'warn',

    // react
    'react/forbid-component-props': 'off',

    // import
    // react-native を import するときになんかエラーが出る
    'import/namespace': 'off',
  },
}
