const config = require('./main.config'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

config.module.loaders.push({
    test: /\.scss$/,
    enforce: 'pre',
    //loader: "style-loader!css-loader!resolve-url-loader!sass-loader"
    loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        loader: "style-loader!css-loader!resolve-url-loader!sass-loader"
    })
});

/*config.module.rules = [];
config.module.rules.push({
    test: /\.scss$/,
    enforce: 'pre',
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "style-loader!css-loader!resolve-url-loader!sass-loader"
    })
});*/

config.module.plugins = [
    new ExtractTextPlugin("styles.css")

];

module.exports = config;