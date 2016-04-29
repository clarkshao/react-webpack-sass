var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var client = 'webpack-dev-server/client?http://localhost:3000';
var server = 'webpack/hot/only-dev-server';
module.exports = {
  devtool: 'eval',
  entry: {'index':[
    client,
    server,
    './src/js/index'
  ],'app':[
    client,
    server,
    "./src/js/app"
  ]},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!postcss!sass')
    }]
  },
  postcss: function () {
    return [require('autoprefixer')];
  }
};
