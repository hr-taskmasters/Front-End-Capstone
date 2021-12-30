module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    // Rules here will override the 'hackreactor' configuration
    // http://eslint.org/docs/rules/
    "parser": "babel-eslint"
  }
};