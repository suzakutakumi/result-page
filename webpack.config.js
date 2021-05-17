const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {'js/app':['./src/App.jsx'],},
  output: {
    path: path.resolve(__dirname, 'docs/'),
    publicPath:'./',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/scripts/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
}