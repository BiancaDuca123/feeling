const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ["./"],
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "/404.html" }],
    },
  },
});
