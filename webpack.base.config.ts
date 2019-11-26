import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";

export const noModules: RegExp = /node_modules/;
const basePath: string = __dirname;

const config: webpack.Configuration = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: ['./rootApp.tsx', './master.scss'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: noModules,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelCore: '@babel/core'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}

export default config;