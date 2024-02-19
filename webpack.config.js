const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractCSS = new ExtractTextPlugin("bundle.min.css");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        content: { import: "./src/content.ts", filename: "content.js" },
        options: "./src/options.ts",
        "service-worker": "./src/serviceWorker.ts",
    },
    devtool: 'source-map', 
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                // use: extractCSS.extract({
                //    use: {
                //       loader: "css-loader",
                //       options: {
                //          minimize: true,
                //       },
                //    },
                // }),
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    //  output: {
    //      content: {
    //          filename: "content.js",
    //          path: path.resolve(__dirname, "dist"),
    //      },
    //  },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "content.css",
        }),
        new HtmlWebpackPlugin({
            template: "src/options.html",
            filename: "options.html",
            chunks: ["options"],
        }),
    ],
};
