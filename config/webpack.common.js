// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const stylesHandler = MiniCssExtractPlugin.loader;


module.exports = {
    entry: path.resolve(__dirname, '../src/main.ts'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        clean: true, // 清理 /dist 文件夹
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, '../public/logo.svg'),
            title: 'Vue3 + TypeScript + Webpack5',
            // 自动引入public下的script文件
            // inject: 'body',
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue'],

        // 配置别名
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },

    },
}
