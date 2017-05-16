process.env.NODE_ENV = 'production'

var utils = require('./utils')
var webpack = require('webpack')
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.sourceMap,
      extract: true
    })
  },
  devtool: config.build.sourceMap ? 'source-map' : false,
  output: {
    path: utils.absolutePath(config.build.assetsRoot),
    publicPath: config.build.publicPath,
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin([config.build.assetsRoot], {
      root: utils.absolutePath('')
    }),
    new webpack.HashedModuleIdsPlugin(),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      // if we use a prefix (something like `css/[name].css`) it will break all `url()` reference
      // such as `background-image` and `@font-face src` when public path is relatively
      filename: '[name].[contenthash].css',
      // 如果不加下面这一行会报错
      // https://github.com/webpack/webpack/issues/959#issuecomment-276685210
      allChunks: true
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        map: config.build.sourceMap ? { inline: false } : false
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.htmlTemplate,
      minify: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        const path = module.resource
        if (!path) return false
        // 将自定义的 framework7 的样式打包到 vendor.css 中去
        if (/\/framework7\.ios\.less$/.test(path)) return true
        // 最后默认将所有从 node_modules 内引用的 js 和 css 打包到 vendor 中去
        return /\.(js|css)$/.test(path) && path.indexOf(utils.absolutePath('node_modules')) === 0
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: utils.absolutePath(config.staticRoot),
      ignore: ['.*']
    }])
  ]
})

if (config.build.serviceWorker) {
  utils.enableOffline(webpackConfig)
}

if (config.build.analyzer) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
