const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.(scss|css)$/,

            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',

                options: {
                    sourceMap: true
                }
            }, {
                loader: 'sass-loader',

                options: {
                    sourceMap: true
                }
            }, {
                loader: 'postcss-loader'
            }]
        }]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
    plugins: [
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'demo',
            template: './templates/index.html',
            inject: 'body'
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom', 'react-router','./src/static/js/iconfont.js']
    },

    output: {
        filename: 'js/[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: "js/[name].[chunkHash].js",
    },

    mode: 'production'
}