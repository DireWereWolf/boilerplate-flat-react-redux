const path = require('path');
const webpack = require('webpack');

// Custom app path import
const {
  src,
  build,
  styleUtils
} = require('./paths');

// Aliases
const WebpackAliases = require('./aliases');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Options
const svgoPlugins = [
  {removeTitle: true},
  {
    removeDesc: {
      removeAny: true
    }
  },
  {collapseGroups: true},
  {removeStyleElement: true}
];

module.exports = {
  entry: src,
  output: {
    path: build,
    filename: `bundle.[hash:6].js`
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
          plugins: [
            'transform-class-properties'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              camelCase: true,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              browsers: ['last 2 versions', 'ie >= 9', 'Opera >= 20'],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "utils";',
              includePaths: [
                styleUtils
              ],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: 'images/[name].[hash:6].[ext]'
          }
        }
      },
      {
        test: /\.(eot|eot\#iefix|ttf|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:6].[ext]'
          }
        }
      },
      {
        test: /icons\/[a-z0-9-_]+\.svg$/i,
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: svgoPlugins.concat({
                convertColors: {
                  currentColor: true
                }
              }, {
                cleanupIDs: {
                  remove: true,
                  minify: false
                }
              })
            }
          }
        ]
      },
      {
        test: /images\/[a-z0-9-_]+\.svg$/i,
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: svgoPlugins.concat({
                convertColors: {
                  currentColor: false
                }
              }, {
                removeUselessDefs: false
              })
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: WebpackAliases
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'App title',
        // favicon: path.join(src, 'favicon.ico'),
        template: path.join(src, 'index.html'),
        inject: 'body',
        hash: true
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    contentBase: build,
    port: 8000,
    clientLogLevel: 'none',
    compress: true,
    hot: true,
    stats: 'errors-only',
    open: false
  }
};
