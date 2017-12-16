const path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
      'main': './src/main.ts'
    },
    output: {
      path: './dist/',
      filename: './[name].js'
    },

    resolve: {
      extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },

    module: {
      loaders: [
          {
              test: /\.ts$/,
              loader: 'awesome-typescript-loader'
          },
          {
              test: /\.pug$/,
              enforce: 'pre',
              loader: "template-html-loader"
          },
          {
              test: /\.(png|jpg|gif)$/,
              loader: 'url-loader',
              options: {
                  limit: 8192
              }
          },
          {
              test: /\.(png|jpg|gif)$/,
              loader: 'file-loader'
          }
      ]
    }
};