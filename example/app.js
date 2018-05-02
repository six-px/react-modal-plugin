var express = require('express');
var path = require('path');
var app = express();

var webpack = require('webpack');
var webpackDevConfig = require('./webpack.example.config.js');


Object.keys(webpackDevConfig.entry).forEach(function(name) {
  webpackDevConfig.entry[name] = [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?noInfo=true&reload=true',
    'webpack/hot/dev-server'
  ].concat(webpackDevConfig.entry[name]);
});

var compiler = webpack(webpackDevConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  // public path should be the same with webpack config
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: { colors: true },
}))

var hotMiddleware = require('webpack-hot-middleware')(compiler);
app.use(hotMiddleware);

app.use('*', (req, res, next) => {
  const filename = path.resolve(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

var port = '3000';
app.listen(port, function() {
  console.log('http://localhost:' + port);
});
