export default {
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ]
  },
}
