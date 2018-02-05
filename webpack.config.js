const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const clientDir = path.join(__dirname, 'client')

module.exports = {
  context: clientDir,

  entry: {
    main: './index.js'
  },

  output: {
    path: path.join(__dirname, 'server', 'public'),
    publicPath: '/',
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(clientDir, 'index.html')
    })
  ]
}
