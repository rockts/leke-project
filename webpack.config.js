module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'react-hot-loader!babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
};
