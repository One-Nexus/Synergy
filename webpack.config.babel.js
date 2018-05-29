import path from 'path';
import webpack from 'webpack';

export default function(env) {

    const target = env.target || 'node';

    const entry = (target === 'node') ? {'synergy': './src/index.js'} : {
        'synergy.web': './src/js/synergy.js',
        'synergy.web.min': './src/js/synergy.js',
    };

    return {
        entry,

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            publicPath: '/',
            libraryTarget: (target === 'node') ? 'commonjs2' : 'var'
        },

        target,

        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true,
                output: {
                    comments: false
                }
            })
        ],

        externals: {
            'react': 'react',
            'react-dom': 'react-dom',
            'react-router': 'react-router'
        },

        node: { Buffer: (target === 'web') ? false : true },

        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            }]
        },

        stats: { colors: true },

        devtool: false
    }

};