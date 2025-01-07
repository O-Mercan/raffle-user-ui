const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript dosyalarını işle
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/, // CSS dosyalarını işle
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/, // SCSS dosyalarını işle
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Resim ve SVG dosyalarını işle
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 9000,
    open: true,
    hot: true,
    compress: true,
  },
};
