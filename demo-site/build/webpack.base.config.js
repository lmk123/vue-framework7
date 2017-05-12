var utils = require('./utils')
var config = require('./config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index',
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            sourceMap: isProduction
              ? config.build.sourceMap
              : config.dev.sourceMap,
            extract: isProduction
          })
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: utils.absolutePath('src')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: config.fileLimit,
          name: 'images/[name]' + (isProduction ? '.[hash]' : '') + '.[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: config.fileLimit,
          name: 'fonts/[name]' + (isProduction ? '.[hash]' : '') + '.[ext]'
        }
      }
    ]
  }
}
