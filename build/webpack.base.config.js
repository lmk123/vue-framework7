const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

require('fs-extra').removeSync('./dist')

module.exports = {
  entry: './demo-site/index',
  output: {
    path: './dist',
    filename: '[name]-[hash:10].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      }
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css-loader?sourceMap')
    }
  },
  babel: require('fs-extra').readJsonSync('./.babelrc'),
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo-site/index.html'
    }),
    new ExtractTextPlugin('[name]-[hash:10].css')
  ]
}

