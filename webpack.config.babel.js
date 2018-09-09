import path from 'path';
import webpack from 'webpack';

export default function() {
    return {
        entry: {
            'synergy': './src/synergy.js',
            'synergy.min': './src/synergy.js',
        },

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            publicPath: '/',
            libraryTarget: 'commonjs2'
        },

        target: 'node',

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
            'prop-types': 'prop-types'
        },

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