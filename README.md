# Team VALS での　共通の ESLint ルールです。

## 使用方法

インストール

```
yarn add -D eslint eslint-plugin-team-vals eslint-config-prettier
```

```json
// .eslintrc
{
  "extends": [
    "plugin:team-vals/recommended",
    "plugin:team-vals/react", // For React Project
    "prettier"
  ],
  "parserOptions": {
    "project": "tsconfig.json",
    "tsconfigRootDir": "./"
  }
}
```
