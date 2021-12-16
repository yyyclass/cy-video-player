import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";// 生成html
import webpackBaseConfig from "./webpack.base.config";
const webpackDevelopmentConfig: webpack.Configuration = {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        // open: true
    },
    plugins:[
        // 它可以为每个chunk生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks: ['main'],
        }),
    ],
};



export default Object.assign(webpackBaseConfig, webpackDevelopmentConfig);