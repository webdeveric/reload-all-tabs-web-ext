import { join, resolve } from 'node:path';

import type { Configuration } from 'webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const isProd: boolean = process.env.NODE_ENV === 'production';

const config: Configuration = {
  mode: isProd ? 'production' : 'development',
  devtool: false,
  entry: {
    background: './src/background',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, 'src', 'manifest.json'),
          to: join(__dirname, 'dist', 'manifest.json'),
        },
        {
          from: join(__dirname, 'src', 'icons'),
          to: join(__dirname, 'dist', 'icons'),
        },
      ],
    }),
  ],
};

export default config;
