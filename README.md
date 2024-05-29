# Team VALS での　共通の ESLint ルールです。

## 使用方法

### インストール

```
pnpm add -D eslint eslint-plugin-team-vals
```

### Simple Typescript Project

```json
// .eslintrc
{
  "extends": ["plugin:team-vals/recommended", "plugin:team-vals/prettier"],
  "parserOptions": {
    "project": "tsconfig.json",
    "tsconfigRootDir": "./"
  }
}
```

### React Project

```json
// .eslintrc
{
  "extends": [
    "plugin:team-vals/recommended",
    "plugin:team-vals/react",
    "plugin:team-vals/tailwindcss", // if you need
    "plugin:team-vals/prettier"
  ],
  "parserOptions": {
    "project": "tsconfig.json",
    "tsconfigRootDir": "./"
  }
}
```

### React Native Project

```json
// .eslintrc
{
  "extends": [
    "plugin:team-vals/recommended",
    "plugin:team-vals/react-native",
    "plugin:team-vals/prettier"
  ],
  "parserOptions": {
    "project": "tsconfig.json",
    "tsconfigRootDir": "./"
  }
}
```
