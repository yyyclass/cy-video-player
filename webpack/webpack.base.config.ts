import path from 'path';
import webpack from 'webpack';
import {CleanWebpackPlugin} from "clean-webpack-plugin"; // 每次打包之前清空目录
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'; // 打包依赖分析
import CompressionWebpackPlugin from 'compression-webpack-plugin'; // 使用compression-webpack-plugin插件对打包结果进行预压缩，可以移除服务器的压缩时间
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // 负责生成css文件,负责记录要生成的css文件的内容，同时导出开启css-module后的样式对象
import TerserPlugin from "terser-webpack-plugin"; // webpack自带压缩js
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"; // 压缩css

const webpackBaseConfig: webpack.Configuration = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[fullhash:5].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            publicPath: './src/style'
                        },
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /.svg$/,
                use:[
                    './src/loader/svg-loader.ts'
                ]
            }
        ]
    },
    plugins: [
        // 它可以为每个chunk生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:5].css"
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.json']
    }
};

export default webpackBaseConfig;