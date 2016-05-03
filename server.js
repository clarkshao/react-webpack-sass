var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/tapi/*' :  {
      target: 'http://localhost:8888/',
      secure :  false ,
      bypass :  function ( req , res , proxyOptions )  {
        console.log('daili')
      }
    },
    '/get.php' :  {
      target :  'http://guanjia.qq.com/tapi/vr/',
      secure :  false ,
      bypass :  function ( req , res , proxyOptions )  {
        console.log('daili2')
      }
    }
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
