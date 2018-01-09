import path from 'path';
import webpack from 'webpack';

export default function(env) {

    return {
        entry: {
            'synergy': './src/js/synergy.js',
            'synergy.min': './src/js/synergy.js',
        },

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            publicPath: '/'
        },

        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
          })
        ],

        node: { Buffer: false },

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