// commonjs模块化规范
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // webpack 执行环境:development | production(默认开启 tree-shaking)
    mode: 'development',

    // 入口:可配置字符串,数组,对象
    entry: {
        main: './src/index.js'
    },

    // 出口
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash].js'
    },

    // webpack打包流程:entry(入口) -> module(模块) -> chunk(代码块) -> async chunk -> async chunk -> ... -> async chunk -> output(打包后的文件)
    module: {
        // 什么样的文件使用什么样的loader
        rules: [
            // 以css文件为例:`test`表示匹配规则是一个正则表达式,`use`表示使用哪些loader
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    // plugins 对打包的过程增强,后于loader执行.plugins使用时需要 new 关键字去调用插件中的apply方法,因此plugins中的元素都是对象.
    plugins: [
        // webpack内置的插件
        // new webpack.HotModuleReplacementPlugin()
        new MiniCssExtractPlugin(
            // 可以进行配置
            {
                filename: 'bundle.[hash].css'
            }
        )
    ],
}