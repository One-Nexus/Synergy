import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';

export default function() {
  return {
    entry: {
      'synergy': './src/index.js',
      'synergy.min': './src/index.js',
    },

    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },

    externals: {
      'react': 'react',
      'react-dom' : 'reactDOM'
    },

    resolve: { 
      extensions: ['.js', '.jsx'] 
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

    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: (MODULE) => ~MODULE.indexOf('/node_modules/') && !(~MODULE.indexOf('/@onenexus/')),
        use: 'babel-loader'
      }]
    },

    node: {
      process: false,
      Buffer: false 
    }
  }
}