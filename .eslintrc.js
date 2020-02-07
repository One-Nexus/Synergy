module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      classes: true,
      modules: true
    }
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
  }
}