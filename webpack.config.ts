import { join, resolve } from 'node:path';


import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// eslint-disable-next-line @typescript-eslint/naming-convention
import CopyPlugin from 'copy-webpack-plugin';

import type { Configuration } from 'webpack';

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
