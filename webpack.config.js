var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
       test: /\.css/,
       loader: ExtractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[local]"),
       exclude: /node_modules/,
     }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  resolve: {
    extensions: ['', '.js', '.json','.css']
  }
};
