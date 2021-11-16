const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: "production",
    stats: "verbose",
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                 MiniCssExtractPlugin.loader,
                 {
                     loader: "css-loader",
                     options: {
                         modules: {
                             exportLocalsConvention: "camelCase",
                         },
                     },
                 },
                 "sass-loader",
                ], 
             },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
        }),
        new Dotenv({
            path: "./prod.env",
        })
    ],
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: "all",
              name: "vendor",
              test: /[\\/]node_modules[\\/]/,
              enforce: true,
            },
          },
        },
    },
});