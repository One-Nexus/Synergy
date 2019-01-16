import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

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
            libraryTarget: 'umd'
        },

        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    include: /\.min\.js$/,
                    uglifyOptions: {
                        output: {
                            comments: false
                        }
                    }
                })
            ]
        },

        externals: {
            'react': 'react',
            'react-dom': 'react-dom'
        },

        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }]
        },

        node: { Buffer: false },

        stats: { colors: true },

        devtool: false
    }
};