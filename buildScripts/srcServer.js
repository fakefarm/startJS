import express from 'express';
import path from 'path';
import open from 'open';

// add these two lines to use webpack with express...
import webpack from 'webpack';
import config from '../webpack.config.dev'

/* eslint-disable no-console */

const port = 3001;
const app = express();

// compiler is a way to use webpack with express
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
