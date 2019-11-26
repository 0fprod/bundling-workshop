import { noModules } from './webpack.base.config';

import base from './webpack.base.config';
import webpack from 'webpack';
//import merge from 'webpack-merge';
const merge = require('webpack-merge');


let config: webpack.Configuration = {
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: noModules,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              },
              localsConvention: 'camelCase'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  }
};

config = merge(base, config);

export default config;