const webpack = require( 'webpack' ),
  HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

require( 'fs-extra' ).removeSync('./dist');

module.exports = {
  entry: './dev-website/index',
  output: {
    path: './dist',
    filename: '[name]-[hash:10].js'
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
          name: '[name]-[hash:10].[ext]'
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
    new HtmlWebpackPlugin( {
      template: './dev-website/index.html'
    } ),
    new ExtractTextPlugin( '[name]-[hash:10].css' )
  ]
};

