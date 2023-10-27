const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
    entry: "./src/index.js",
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "index.html", to: "" },
          { from: "manifest.json", to: ""}
        ],
      }),
    ],
    // resolve: {
    //   extensions: [".js"],
    // },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    devtool: "source-map",
    mode: "development",
  };
  