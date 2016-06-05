const webpack = require('webpack')
const OpenPack = require('openpack')
const config = require('./webpack.base.config')

config.devtool = '#source-map'
config.watch = true
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': "'development'"
}))
config.plugins.push(new OpenPack({
  lan: true
}))
config.devServer = {
  noInfo: true,
  host: '0.0.0.0',
  contentBase: './no-this-dir'
}

module.exports = config
