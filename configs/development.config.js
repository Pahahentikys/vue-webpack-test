const config = require('./main.config');

config.module.loaders.push({
    test: /\.scss$/, 
    enforce: 'pre',
    loader: "style-loader!css-loader!resolve-url-loader!sass-loader" 
});

module.exports = config;