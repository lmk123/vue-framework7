const config = require('./webpack.build.config')
const webpack = require('webpack')
const version = require('../package.json').version

config.entry = './src/index'
config.output.path = './'
config.output.filename = 'f7.min.js'
config.output.library = 'F7'
config.output.libraryTarget = 'umd'
config.plugins.splice(0, 2)
config.plugins.push(new webpack.BannerPlugin('vue-framework7 v' + version + '\nhttps://github.com/lmk123/vue-framework7\nReleased under the MIT License.'))

module.exports = config
