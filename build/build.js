const path = require('path')
const fs = require('fs-extra')

// 清空输出目录
fs.emptyDirSync(path.resolve(__dirname, '../dist'))

// 编译 js
const rollup = require('rollup')
const buble = require('rollup-plugin-buble')
const vue = require('rollup-plugin-vue')
const uglifyJS = require('uglify-js')
const pkg = require('../package.json')

const banner = [
  '/*!',
  ' * vue-framework7 v' + pkg.version,
  ' * https://github.com/lmk123/vue-framework7',
  ' * Released under the MIT License.',
  ' */'
].join('\n')

rollup.rollup({
  entry: path.resolve(__dirname, '../src/index.js'),
  plugins: [vue(), buble()],
  external: ['vue']
}).then(bundle => {
  // 输出 umd 格式
  bundle.write({
    dest: path.resolve(__dirname, '../dist/vue-framework7.js'),
    format: 'umd',
    moduleName: 'f7',
    banner,
    globals: {
      vue: 'Vue'
    }
  }).then(() => {
    // 精简文件
    fs.readFile(path.resolve(__dirname, '../dist/vue-framework7.js'), 'utf8').then(codeStr => {
      const { code } = uglifyJS.minify(codeStr, {
        output: {
          comments: /^!/
        }
      })

      fs.writeFile(path.resolve(__dirname, '../dist/vue-framework7.min.js'), code)
    })
  })

  // 输出 es 格式
  bundle.write({
    dest: path.resolve(__dirname, '../dist/vue-framework7.esm.js'),
    format: 'es',
    banner
  })

  // 输出 cjs 格式
  bundle.write({
    dest: path.resolve(__dirname, '../dist/vue-framework7.common.js'),
    format: 'cjs',
    banner
  })
})
