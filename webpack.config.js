const webpack = require("webpack");
const path = require("path");
const srcPath = "./src";

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      actions: path.resolve(__dirname, `${srcPath}/actions/`),
      components: path.resolve(__dirname, `${srcPath}/components/`),
      reducers: path.resolve(__dirname, `${srcPath}/reducers/`),
      containers: path.resolve(__dirname, `${srcPath}/containers/`),
      services: path.resolve(__dirname, `${srcPath}/services/`),
      config: path.resolve(__dirname, `${srcPath}/config/`),
      styles: path.resolve(__dirname, `${srcPath}/styles/`),
      library: path.resolve(__dirname, `${srcPath}/library/`),
      properties: path.resolve(__dirname, `${srcPath}/properties/`),
      validators: path.resolve(__dirname, `${srcPath}/validators/`)
    }
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true
  },
  devtool: "source-map"
};
