// локально собирает проект для нас
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devtool: "inline-source-map",
  devServer: { 
    static: "./dist"
   },
  performance: {
    hints: false,
    maxEntrypointsSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Development" }),
    new MiniCssExtractPlugin(),
  ],
};
