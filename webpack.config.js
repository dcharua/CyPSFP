// /**
//  * @author: tipe.io
//  */
//
// /**
//  * Look in ./config folder for webpack.dev.js
//  */
// switch (process.env.NODE_ENV) {
//   case 'prod':
//   case 'production':
//     module.exports = require('./config/webpack.prod')({env: 'production'});
//     break;
//   case 'test':
//   case 'testing':
//     module.exports = require('./config/webpack.test')({env: 'test'});
//     break;
//   case 'dev':
//   case 'development':
//   default:
//     module.exports = require('./config/webpack.dev')({env: 'development'});
// }

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      // global app config object
      config: JSON.stringify({
        apiUrl: 'http://localhost:3000'
      })
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true
  },
  devServer: {
    historyApiFallback: true
  }
};
