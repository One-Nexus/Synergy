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
    plugins: [
        'react'
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
    }
}