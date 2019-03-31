const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports =  merge(common, {
  mode: 'development',
  context: process.cwd(),
  entry: {
    polyfills: [path.resolve(process.cwd(), './src/polyfill.js')],
    app: [path.resolve(process.cwd(), './src/index.js'), hotMiddlewareScript],
    
  },
  output: {
    // filename: '[name].[hash].js',
    filename: '[name].js',
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [

    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    //auto create index.html
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    //hmr
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
})