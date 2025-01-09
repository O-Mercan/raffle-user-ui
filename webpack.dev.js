const path = require("path");
const common = require("./webpack.common")
const {merge} = require("webpack-merge")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 9000,
    open: true,
    hot: true,
    compress: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
});
