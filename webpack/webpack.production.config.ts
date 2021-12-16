import webpack from 'webpack';
import webpackBaseConfig from "./webpack.base.config";
import {CleanWebpackPlugin} from "clean-webpack-plugin"; // 每次打包之前清空目录
import CopyPlugin from "copy-webpack-plugin"; // 复制静态资源文件
import HtmlWebpackPlugin from "html-webpack-plugin";// 生成html
const webpackProductionConfig: webpack.Configuration = {
    mode: 'production',
    plugins:[
        // 它可以为每个chunk生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息
        new webpack.BannerPlugin({
            banner: `
           chunkhash: [chunkhash]
           name:[name]
           author: yuyu
           corporation: yuyucode
           `
        }),

        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks: ['main'],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './public/assets',
                    to: './assets'
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
};

export default Object.assign(webpackBaseConfig, webpackProductionConfig);
// export default webpackProductionConfig;