const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '../temp/src/index.js'),
    // print: path.resolve(__dirname, '../temp/src/print.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../temp/dist')
  },
  // devtool: 'source-map',
  optimization: {
     // runtime信息单独打包,有利于cach
     runtimeChunk: 'single',
     //tree shaking
      usedExports: true,
      splitChunks: {
        chunks: 'async'
      }
     },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../temp/dist')], {root: path.resolve(__dirname, '../'),  verbose: true}),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // keep moduleid
    new webpack.HashedModuleIdsPlugin()
  ],
};