var webpack = require('webpack');
var path = require('path');
var client = path.resolve(__dirname, '../');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var modalPath = path.resolve(__dirname, '../src');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var WatchMissingNodeModulesPlugin = require('./webpack.util.js');

function postcssPlugin () {
  return [
    require('postcss-smart-import')(),
    require('precss')(),
    require('autoprefixer')({
      browsers: [
        // 'Android 2.3',
        // 'Android >= 4',
        'Chrome >= 30',
        'Firefox >= 31',
        'Explorer >= 9',
        // 'iOS >= 7',
        'Opera >= 12',
        'Safari >= 7.1',
      ]
    }),
  ];
};

var devConfig = {
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-redux',
      'redux',
    ],
    index: ['./example/index.js'],
    alert: ['./example/alert.js'],
    confirm: ['./example/confirm.js'],
    customModal: ['./example/customModal.js'],
    emitModal: ['./example/emitModal.js'],
    emitList: ['./example/emitList.js'],
    replaceStyle: ['./example/replaceStyle.js'],
    customStyle: ['./example/customStyle.js'],
    animate: ['./example/animate.js'],
    complex: ['./example/complex.js'],
    dialog: ['./example/dialog.js'],
    closeDelay: ['./example/closeDelay.js'],
    onAfterClose: ['./example/onAfterClose.js']
  },
  output: {
    filename: 'javascripts/[name].[hash:5].js',
    path: path.resolve(__dirname, '../demo'),
    publicPath: process.env.DEV ? '/' : './'
  },
  target: 'web',
  /** @link http://webpack.github.io/docs/configuration.html#devtool
   */
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      // js lint
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          formatter: require("eslint-friendly-formatter"),
        },
      },
      // js loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: client,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      // modal css
      {
        test: /\.(css|scss)/,
        include: modalPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: postcssPlugin,
              }
            },
            'sass-loader']
        })
      },
      // example css
      {
        test: /\.(css|scss)$/,
        exclude: modalPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
            {
              loader: 'postcss-loader',
              options: {
                plugins: postcssPlugin,
              }
            },
            'sass-loader']
        })
      },
      // file loader
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'assets/[name].[hash:5].[ext]',
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // extract css file
    new ExtractTextPlugin({
      filename:  (getPath) => {
        return getPath('css/[name].[contenthash:5].css');
      },
      allChunks: true
    }),
    // create web page
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'index'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'index']
    }),
    new HtmlWebpackPlugin({
      filename: 'alert.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'alert'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'alert']
    }),
    new HtmlWebpackPlugin({
      filename: 'confirm.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'confirm'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'confirm']
    }),
    new HtmlWebpackPlugin({
      filename: 'customModal.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'customModal'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'customModal']
    }),
    new HtmlWebpackPlugin({
      filename: 'emitModal.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'emitModal'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'emitModal']
    }),
    new HtmlWebpackPlugin({
      filename: 'emitList.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'emitList'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'emitList']
    }),
    new HtmlWebpackPlugin({
      filename: 'replaceStyle.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'replaceStyle'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'replaceStyle']
    }),
    new HtmlWebpackPlugin({
      filename: 'customStyle.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'customStyle'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'customStyle']
    }),
    new HtmlWebpackPlugin({
      filename: 'animate.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'animate'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'animate']
    }),
    new HtmlWebpackPlugin({
      filename: 'complex.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'complex'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'complex']
    }),
    new HtmlWebpackPlugin({
      filename: 'dialog.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'dialog'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'dialog']
    }),
    new HtmlWebpackPlugin({
      filename: 'closeDelay.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'closeDelay'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'closeDelay']
    }),
    new HtmlWebpackPlugin({
      filename: 'onAfterClose.html',
      template: './example/index.html',
      chunksSortMode: function (a, b) {
        var o = ['vendor', 'onAfterClose'];
        var a = o.indexOf(a.names[0]);
        var b = o.indexOf(b.names[0]);
        return a-b;
      },
      chunks: ['vendor', 'onAfterClose']
    }),
    // css scss lint
    new StyleLintPlugin({
      files: ['./src/**/*.s?(a|c)ss'],
      failOnError: false,
    }),

    // See https://github.com/facebookincubator/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),

    // See https://github.com/facebookincubator/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, '../node_modules'))
  ]
};

module.exports = devConfig;
