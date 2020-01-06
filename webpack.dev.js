const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require('./webpack.common');

module.exports = merge({
    mode: "development",
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    "style-loader",  //2. turns (css in js) to css and inject to style tag in HTML
                    "css-loader"     //1. turns css to valid js
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",  //3. turns (css in js) to css and inject in HTML style tag
                    "css-loader",     //2. turns css to valid js
                    "sass-loader"     //1.turns sass to css            
                ]
            },
            {
                test: /\.(svg|gif|png|jpg|jpeg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlPlugin({ 
            template: './index.html',
            favicon: './favicon.ico',
        }),
    ]
}, common);