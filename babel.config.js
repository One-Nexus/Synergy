module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            '@babel/preset-env', 
            '@babel/preset-react'
        ],
        // ignore: ['node_modules'],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    };
}