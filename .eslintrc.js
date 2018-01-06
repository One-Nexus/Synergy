module.exports = {
    root: true,
    //parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    //extends: 'standard',
    plugins: [
        'react'
    ],
    rules: {
    }
}