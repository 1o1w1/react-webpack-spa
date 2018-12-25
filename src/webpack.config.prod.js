const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');




module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../temp/src/index.js'),
    // print: path.resolve(__dirname, '../temp/src/print.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../temp/dist')
  },
  // devtool: 'source-map',
  optimization: {
      // usedExports: true,
      splitChunks: {
        chunks: 'all'
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
  ],
};