module.exports = {
  extends: ['eslint:recommended',],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ['svelte3'],
  ignorePatterns: ["public/build/"],
  overrides: [
    {
      "files": ["**/*.svelte"],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    semi: [2, 'always']
  },
  settings: {
    "svelte3/ignore-styles": attributes =>
      attributes.lang && attributes.lang.includes("scss")
  }
};
