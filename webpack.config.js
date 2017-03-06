var webpack      = require('webpack'),
    path         = require('path'),
    NODE_MODULES = path.resolve(__dirname, 'node_modules'),
    BUILD_PATH   = path.resolve(__dirname, 'public', 'build'),
    INDEX_PATH   = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
    entry: [
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

