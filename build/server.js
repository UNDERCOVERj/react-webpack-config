const config = require('./webpack.dev.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(config);
const express = require('express');
const app = express();

app.use(webpackHotMiddleware(compiler, {
	log: false,
    path: "/__what",
    heartbeat: 2000
}));

app.use(webpackDevMiddleware(compiler, {
  // webpack-dev-middleware options
  // index: 'index.html'
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))