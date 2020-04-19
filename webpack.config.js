const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { WEBPACK_PORT, EXPRESS_PORT } = process.env;

module.exports = {
  entry: {
    main: "./src/app.tsx",
  },
  output: {
    path: path.join(__dirname, "docs"),
    filename: (chunkData) => {
      return chunkData.chunk.name === "main" ? "[name].js" : "[name]/[name].js";
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    headers: {
      "Access-Control-Allow-Origin": EXPRESS_PORT
        ? `http://localhost:${EXPRESS_PORT}`
        : "",
    },
    port: WEBPACK_PORT || 8000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
