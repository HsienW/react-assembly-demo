const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    experiments: {
        asyncWebAssembly: true,
        syncWebAssembly: true
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|mp4|wmv)$/,
                loader: 'file-loader'
            },
            {

                test: /\.(ts)?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(wasm)$/,
                loader: 'wasm-loader',
                type: 'javascript/auto',
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.json',
            '.jsx'
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new CompressionPlugin(
            {
                test: /\.js(\?.*)?$/i
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'wasm',
                    to: 'wasm'
                }
            ]
        })
    ],
};
