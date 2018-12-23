const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';


module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    app: [path.resolve(__dirname, '../temp/src/index.js'),hotMiddlewareScript],
    print: [path.resolve(__dirname, '../temp/src/print.js'),hotMiddlewareScript]
    // app: path.resolve(__dirname, '../temp/src/index.js'),
    // print: path.resolve(__dirname, '../temp/src/print.js')
  },
  output: {
    // filename: '[name].[hash].js',
    filename: '[name].js',
    path: path.resolve(__dirname, '../temp/dist'),
    publicPath: '/'
  },
  // devtool: 'inline-source-map',
  // devtool: 'eval-source-map',
  devtool: '#source-map',
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
    //clean dist flod
    new CleanWebpackPlugin([path.resolve(__dirname, '../temp/dist')]),
    //auto create index.html
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    //hrm
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};