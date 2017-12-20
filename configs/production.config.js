const config = require('./main.config'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    CompressionPlugin = require("compression-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

config.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!resolve-url-loader!sass-loader"
    })
});

config.plugins = [
    new ExtractTextPlugin({filename: "styles.css"}),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true
    }),
    new UglifyJsPlugin(),
    new CompressionPlugin({test: /\.min.js$|\.min.css$/}),
    new CopyWebpackPlugin([
       {from: 'src/assets/images', to:'dist/'},
       {from: 'src/index.html', to:'dist/'}
    ])
];

module.exports = config;