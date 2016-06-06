const config = require('./webpack.build.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

config.entry = './src/index'
config.output.path = './'
config.output.filename = 'f7.js'
config.output.library = 'F7'
config.output.libraryTarget = 'umd'
config.plugins.splice(0, 2)
config.plugins.push(new ExtractTextPlugin('f7.css'))

module.exports = config
