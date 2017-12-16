const config = require('./main.config');

config.devServer = {
    port: 3000,
    host: "localhost",
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000},
    contentBase: './dist/',
    open: true,
    openPage: ''
};

config.module.loaders.push({
    test: /\.scss$/, 
    enforce: 'pre',
    loader: "style-loader!css-loader!resolve-url-loader!sass-loader"
});

module.exports = config;