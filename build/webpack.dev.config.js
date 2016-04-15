const webpack = require( 'webpack' ),
  config = require( './webpack.base.config' );

config.devtool = '#source-map';
config.watch = true;
config.plugins.push( new webpack.DefinePlugin( {
  'process.env.NODE_ENV': "'development'"
} ) );
config.devServer = {
  host: '0.0.0.0',
  contentBase: './dist'
};

module.exports = config;
