var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var IS_PRODUCTION = process.env.NODE_ENV === 'production'

exports.absolutePath = function (prePath) {
  return path.resolve(__dirname, '..', prePath)
}

exports.cssLoaders = getCssLoaders

function getCssLoaders (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: IS_PRODUCTION,
      sourceMap: options.sourceMap
    }
  }

  /**
   * 生成 loader 配置
   * @param {string} [ext]
   * @param {object} [loaderOptions]
   * @return {Array}
   */
  function generateLoader (ext, loaderOptions) {
    // vue-loader 会自动给 .vue 文件中的 <style> 块应用 postcss-loader，
    // 但当直接在项目中引用 CSS 文件时就不会，所以
    // 这里统一加上 postcss-loader
    var loaders = [
      cssLoader,
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: options.sourceMap
        }
      }
    ]

    if (ext) {
      loaders.push({
        loader: ext + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // 生产环境时将所有 .vue 中的 CSS 合并成一个单独的 main.css
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoader(),
    less: generateLoader('less'), // 需要单独安装 less-loader
    sass: generateLoader('sass'),
    scss: generateLoader('sass'),
    stylus: generateLoader('stylus') // 需要单独安装 stylus-loader
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = getCssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.enableOffline = function (webpackConfig) {
  webpackConfig.plugins.push(new (require('offline-plugin'))({
    safeToUseOptionalCaches: true,
    caches: {
      main: IS_PRODUCTION
        ? ['./', '**/@(manifest|vendor|main).*.js', '**/@(main|vendor).*.css']
        : ['./', 'main.js'],
      // additional 里的匹配会自动去除 main 里已经匹配到的文件
      additional: ['**/*.@(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)', '**/*.js']
    },
    externals: ['./'],
    excludes: ['**/*.map'],
    ServiceWorker: {
      events: true
    },
    AppCache: false
  }))
}
