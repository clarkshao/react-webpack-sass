var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var client = 'webpack-dev-server/client?http://localhost:3000';
var server = 'webpack/hot/only-dev-server';
module.exports = {
    //This can a little bit longer time to compile, then you can see the code you just worte:
    devtool: 'eval-source-map',
    entry: {
        todo: [
            //这里把clien和server一起打包进了index和app.js文件，因而导致文件过大，生产环境需去除
            client,
            server,
            './src/modules/todoList/index'
        ], universal: [
            client,
            server,
            "./src/modules/universal/index"
        ],
        react: ['react', 'react-dom','react-redux'],
        jquery: ['jquery']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['jquery', 'react'],
            filename: '[name].js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            template: __dirname  + '/template/common.ejs',
            filename: 'universal.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['universal', 'react'],
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
            filename: 'todo.html',
            chunks: ['todo', 'react'],
            inject: 'body'
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
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
