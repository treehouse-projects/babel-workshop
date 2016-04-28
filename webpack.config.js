var webpackConfig = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /.js$/,
        excludes: /node_modules/
      }
    ]
  }
};

module.exports = webpackConfig;
