var path = require("path");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};
