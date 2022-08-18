module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react-hooks/recommended",
    "airbnb-base",
    "airbnb-base/rules/strict",
    "airbnb/rules/react",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
}