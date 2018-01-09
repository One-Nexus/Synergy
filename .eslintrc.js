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
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
    }
}