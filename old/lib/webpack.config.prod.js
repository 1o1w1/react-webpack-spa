const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


//webworker
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    polyfills: path.resolve(process.cwd(), './src/polyfill.js'),
    app: path.resolve(process.cwd(), './src/index.js'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(process.cwd(), '../temp/dist')
  },
  // devtool: 'source-map',
  optimization: {

    //tree shaking
    usedExports: true,
    splitChunks: {
      chunks: 'async'
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
    new CleanWebpackPlugin([path.resolve(process.cwd(), './dist')], { root: path.resolve(process.cwd(), './'), verbose: true }),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // keep moduleid
    new webpack.HashedModuleIdsPlugin(),
    //webworker
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast 
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      importWorkboxFrom: 'local'
    })
  ],
})