import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
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
      libraryTarget: 'umd'
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          SYNERGY: true
        }
      })
    ],

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
        resolve: { 
          extensions: ['.js', '.jsx'] 
        },
        use: {
          loader: 'babel-loader'
        }
      }]
    },

    node: { Buffer: false },

    stats: { colors: true },

    devtool: false
  }
}