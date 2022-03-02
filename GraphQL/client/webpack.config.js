const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single'
  }
  if (isProd) { 
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

const babelOptions = (preset) => {
  const options = {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }
  if (preset) {
    options.presets.push(preset)
  }
  return options
}

const jsxLoader = (param) => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions(param)
  }]
  if (isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
}


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.png'],
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4000,
    historyApiFallback: true,
    hot: isDev
  },
  devtool: isProd ? false : 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      favicon: "./favicon.ico",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: jsxLoader('@babel/preset-react'),
      },
      {
        test: /\.ts$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript')
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ]
  }
}