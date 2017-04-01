const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const IS_PRODUCTION = !!process.env.PRODUCTION

// https://github.com/kangax/html-minifier#options-quick-reference
const htmlMinifierOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  // vue-html-loader 默认设为了 true。设为 false 是为了让 html-minifier 不要在元素之间保留一个空格
  conservativeCollapse: false,
  removeAttributeQuotes: true,
  removeScriptTypeAttributes: true,
  removeStyleTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true
}

const config = {
  entry: './demo-site/index',
  output: {
    path: path.resolve(__dirname, '../site'),
    filename: IS_PRODUCTION ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: IS_PRODUCTION ? '[name].[chunkhash].js' : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../demo-site')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['site'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './demo-site/index.html',
      chunksSortMode: 'dependency',
      minify: IS_PRODUCTION ? htmlMinifierOptions : false
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: !IS_PRODUCTION,
      allChunks: true // 不设成 true 的话会报错
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: IS_PRODUCTION ? '"production"' : '"development"'
      }
    })
  ],
  devtool: 'source-map'
}

if (IS_PRODUCTION) {
  config.plugins.push(
    new webpack.HashedModuleIdsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.(js|css)$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      minChunks: 2
    })
  )
}

module.exports = config
