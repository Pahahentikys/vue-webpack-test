const path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    'main': './source/main.ts'
  },
  output: {
    path: __dirname + '/build/',
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
    ],
    rules: [
      {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: { }
      }
    ]
  }
};