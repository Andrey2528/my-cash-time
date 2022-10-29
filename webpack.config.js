const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: process.env.NODE_ENV == "production" ? "production" : "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[fullhash].bundle.js",
        clean: true,
    },
    devServer: {
        port: process.env.PORT || 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({ filename: "[name].[fullhash].bundle.css" }),
        new ESLintPlugin({
            exclude: ["/node_modules/"],
            extensions: ["*.jsx", "*.js"],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },

            {
                test: /\.(tsx|ts)$/,
                loader: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type:
                    process.env.NODE_ENV === "production"
                        ? "asset"
                        : "asset/resource",
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        minimize: process.env.NODE_ENV == "production",
        minimizer: [new HtmlMinimizerPlugin(), new CssMinimizerPlugin()],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
};
