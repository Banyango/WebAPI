const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'file-loader'
            }
        }]
    }, resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/index.html" //source html
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};