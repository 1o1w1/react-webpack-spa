const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
  entry: {
    app: './temp/src/index.js',
    print: './temp/src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './temp/dist')
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
    new CleanWebpackPlugin(['./temp/dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
  ],
};