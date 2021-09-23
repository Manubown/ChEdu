const webpack = require('webpack');

module.exports = {
  entry: {
    main: './index.native.js',
  },
  rules: [
    {
      test: require.resolve('chess.js'),
      parser: {
          amd: false
      }
  }
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};