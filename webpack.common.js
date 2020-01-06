const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        vendors: './App/vendors.js',
        main: './App/index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}