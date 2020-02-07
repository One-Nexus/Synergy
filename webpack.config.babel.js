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
      libraryTarget: 'commonjs2'
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
      'react': 'React',
      'react-dom': 'ReactDOM'
    },

    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        // include: [path.join(__dirname, 'src/'), /node_modules/],
        // exclude: (MODULE) => {
        //   if (~MODULE.indexOf('/node_modules/') && !(~MODULE.indexOf('/@onenexus/'))) {
        //     return true;
        //   }

        //   return false;
        // },
        // exclude: [],
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