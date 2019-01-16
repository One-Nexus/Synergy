module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            '@babel/preset-env', 
            '@babel/preset-react'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import'
        ]
    };
}