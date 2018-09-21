const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    splash: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'src/splash/index.js')
    ],
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'src/app/index.js')
    ]
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: '[name].bundle.js',
    path: __dirname,
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}
