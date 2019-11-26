import base from './webpack.base.config';
import webpack from 'webpack';
//import merge from 'webpack-merge';
const merge = require('webpack-merge');

const config: webpack.Configuration = merge(base, {
  output: {
    filename: '[name].js'
  },
  mode: 'development'
});

export default config;