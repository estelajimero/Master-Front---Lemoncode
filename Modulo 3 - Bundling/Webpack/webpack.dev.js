const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                 "style-loader",
                 {
                     loader: "css-loader",
                     options: {
                         modules: {
                             exportLocalsConvention: "camelCase",
                             localIdentName: "[path][name]__[local]--[hash:base64:5]",
                             localIdentContext: path.resolve(__dirname, "src"),
                         },
                     },
                 },
                 "sass-loader",
                ], 
             },
        ],
    },
    plugins: [
        new Dotenv({
            path: "./dev.env",
        }),
    ],
    devtool: "eval-source-map",
    devServer: {
        devMiddleware: {
            stats: "errors-only",
        },
    },
})