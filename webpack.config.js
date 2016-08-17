var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'main.js?[hash:8]',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=25000' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })]
}
