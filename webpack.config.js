var webpack = require('webpack');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: "./game/scripts/game.js",
  output: {
    path: __dirname + "/game/dist",
    filename: "bundle.js"
  }
};