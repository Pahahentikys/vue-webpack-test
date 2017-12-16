const path = require('path');

module.exports = {
    entry: {
      'main': './src/main.ts'
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: './[name].js'
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
          {
              test: /\.ts$/,
              use: [{loader: 'awesome-typescript-loader'}]
          },
          {
              test: /\.pug$/,
              enforce: 'pre',
              use: [{loader: "template-html-loader"}]
          },
          {
              test: /\.(png|jpg|gif)$/,
              use: [{
                  loader: 'url-loader',
                  options: {limit: 8192}
              }]
          },
          {
              test: /\.(png|jpg|gif)$/,
              use: [{loader: 'file-loader'}]
          }
      ]
    }
};