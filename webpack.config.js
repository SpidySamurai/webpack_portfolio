const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), //Current directory-local
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      //babel config mjs or js depends
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
