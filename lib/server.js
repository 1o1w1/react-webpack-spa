const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

require('console-stamp')(console, "HH:MM:ss.l");

const app = express();
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);

app.use(require('morgan')('short'));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

//hrm
app.use(require("webpack-hot-middleware")(compiler,{
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));


// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});