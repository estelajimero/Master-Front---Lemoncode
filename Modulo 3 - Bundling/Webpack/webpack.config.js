const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


module.exports = {
    context: path.resolve(__dirname, "src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    entry: {
      app: "./index.tsx",
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    module : {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
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
                            localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            localIdentContext: path.resolve(__dirname, "src"),
                        },
                    },
                },
                "sass-loader",
               ], 
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new CleanWebpackPlugin(),
    ],
    devtool: "eval-source-map",
    devServer: {
        devMiddleware: {
            stats: "errors-only",
        },
    },
};