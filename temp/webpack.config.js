var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    entry: {
        test01: './js/entry_test01.js',
        test02: './js/entry_test02.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]_bundle.js'
    },
    plugins: {

    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader?minimize' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    // Bowerからライブラリを引っ張ってこれるようになる
    plugins: [new BowerWebpackPlugin()]
};
