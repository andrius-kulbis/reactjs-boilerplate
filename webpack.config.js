var webpack = require('webpack'),
    path    = require('path');

var NODE_MODULES = path.resolve(__dirname, 'node_modules');
var BUILD_PATH   = path.resolve(__dirname, 'public', 'build');
var INDEX_PATH   = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
        INDEX_PATH
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.js?/,
            loaders: ['react-hot-loader', 'babel-loader'],
            exclude: [NODE_MODULES],
        }]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    externals: {
        'cheerio': 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
    }
};

