module.exports = {
  staticRoot: 'static',
  htmlTemplate: 'src/index.ejs',
  // images and fonts less than 2KB will transform to Data URI by url-loader
  fileLimit: 2000,
  build: {
    assetsRoot: 'dist',
    publicPath: '',
    sourceMap: true,
    env: {
      NODE_ENV: '"production"'
    },
    analyzer: false,
    serviceWorker: true
  },
  dev: {
    port: 8080,
    proxy: {},
    sourceMap: true,
    // available values for `externally`: false, true or 'qrcode'
    externally: 'qrcode',
    env: {
      NODE_ENV: '"development"'
    }
  }
}
