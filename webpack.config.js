// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        // 使用缓存
        cache: true,
        sourceMap: true,
      }),
      new CssMinimizerPlugin(),
    ],
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/](******)[\\/]/,
    //       name: 'vendor',
    //       chunks: 'all',
    //     },
    //   },
    // },
    usedExports: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: { react: 'React', 'react-dom': 'ReactDOM' },
};
