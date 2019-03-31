const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

 
module.exports = {
  optimization: {
     // runtime信息单独打包,有利于cach
     runtimeChunk: 'single',
     //tree shaking
      usedExports: true,
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
      },
      { test: /\.js$/,
        //  exclude: /node_modules/,
        loader: "babel-loader" },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
  ],
};