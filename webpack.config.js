const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractCSS = new ExtractTextPlugin("bundle.min.css");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: "./src/content.ts",
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
      ],
   },
   resolve: {
      extensions: [".tsx", ".ts", ".js"],
   },
   output: {
      filename: "content.js",
      path: path.resolve(__dirname, "dist"),
   },
   plugins: [new MiniCssExtractPlugin()],
};
