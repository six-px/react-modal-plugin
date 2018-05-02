/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const utilities = require('postcss-utilities')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const autoprefixer = require('autoprefixer')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

function postcssPlugin() {
  return [
    utilities({}),
    postcssFlexbugsFixes,
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
        'iOS >= 8',
      ],
      flexbox: 'no-2009',
    }),
  ]
}

module.exports = {
  entry: {
    modal: ['./src/modal.js'],
  },
  output: {
    path: resolve('lib'),
    filename: '[name].js',
    publicPath: '/',
    library: 'react-modal-plugin',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
    },
  },
  resolve: {
    mainFiles: ['index.web', 'index'],
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.web.js', '.js', '.json'],
  },
  module: {
    rules: [
      // js 验证
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: require.resolve('eslint-loader'),
        options: {
          formatter: eslintFriendlyFormatter,
          eslintPath: require.resolve('eslint'),
          baseConfig: {
            extends: [require.resolve('eslint-config-react-app')],
          },
          ignore: false,
          useEslintrc: false,
        },
      },
      // js 加载解析
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      },
      // css加载
      {
        test: /\.(css|scss)$/,
        include: [resolve('src')],
        use: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: [{
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: postcssPlugin,
              sourceMap: true,
            },
          },
          require.resolve('resolve-url-loader'),
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true,
            },
          }],
        }),
      },
      // 文件加载
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [resolve('src')],
        loader: require.resolve('url-loader'),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['lib']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        comparisons: false,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: true,
    }),
    // 生成CSS文件
    // 生成CSS文件
    new ExtractTextPlugin({
      filename: getPath => getPath('[name].css'),
      allChunks: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}
