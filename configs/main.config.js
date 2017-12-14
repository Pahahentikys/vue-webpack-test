const path = require('path'),
webpack = require('webpack');

module.exports = {
entry: {
  'main': './source/main.ts'
},
output: {
  path: './build/',
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
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
  ],
  rules: [
    {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { }
    },
  ]
}
};