# Team VALS での　共通の ESLint ルールです。

## 使用方法

インストール

```
yarn add -D eslint eslint-plugin-team-vals
```

```json
// .eslintrc
{
  "extends": [
    "plugin:team-vals/recommended",
    "plugin:team-vals/react", // For React Project
    "plugin:team-vals/react-native", // For React Native Project
    "plugin:team-vals/tailwindcss", // For Tailwindcss Project
    "plugin:team-vals/prettier"
  ],
  "parserOptions": {
    "project": "tsconfig.json",
    "tsconfigRootDir": "./"
  }
}
```
