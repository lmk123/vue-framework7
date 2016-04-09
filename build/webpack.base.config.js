const webpack = require( 'webpack' ),
  HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
  entry: './dev-website/index',
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'stage-3' ],
          plugins: [ 'transform-runtime' ]
        }
      },
      {
        test: /\.(woff2?|ttf|png|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader?sourceMap' )
      }
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract( 'css-loader?sourceMap' )
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin( '[name].css' )
  ]
};

