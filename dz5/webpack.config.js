const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public/js"), // путь, куда мы хотим положить файл с результатом сборки
    filename: "script.js", // имя файла с результатом сборки
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
};
