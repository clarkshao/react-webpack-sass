var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //It will add a .map file for you. That file is not actually loaded into the browser until the DevTools are brought up.
    devtool: 'source-map',
    entry: {
        index: ['./src/js/index'],
        app: ["./src/js/app"],
        react: ['react'],
        jquery: ['jquery']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash:8].js',
        //chunkFilename: '[chunkhash].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['jquery','react'],
            filename: '[name].js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('style.[contenthash:9].css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            template: __dirname  + '/template/common.ejs',
            filename: 'app.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'react'],
            //chunksSortMode: function(a,b){
            //    var index = {'app':1, 'react':3,'jquery':2},
            //    aI = index[a.origins[0].name],
            //    bI = index[b.origins[0].name];
            //    return aI&&bI?bI-aI:-1;
            //},
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Hello World index',
            template: __dirname  + '/template/common.ejs',
            filename: 'index.html',
            chunks: ['index', 'react'],
            inject: 'body'
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!postcss!sass')
        }]
    },
    postcss: function () {
        return [require('autoprefixer')];
    }
};
