const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    //para webpack config
    //mode: 'development' o mode: production
    //para el archivo npm  package.json
    //"dev": "webpack --mode development",
    //"build": "webpack --mode production"
    devServer: {
        contentBase: './dist'
        //clientLogLevel: 'silent' //para desahabilitar el log
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
    

};