module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react", "react-native"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  settings: {
    react: {
      version: "18",
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.js"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
