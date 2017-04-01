const config = require('./webpack.site')
const OpenPack = require('openpack')

config.watch = true
config.plugins.push(new OpenPack())
config.devServer = {
  noInfo: true,
  host: '0.0.0.0',
  port: '13456',
  contentBase: false
}

module.exports = config
