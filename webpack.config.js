var webpackConfig = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "index.js"
  },
  module: {
    loaders: []
  }
};

module.exports = webpackConfig;
