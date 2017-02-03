var webpack = require('webpack'),
    path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        APP_DIR + '/index'
    ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js?/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader']
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        'cheerio': 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
    }
};
