// commonjs模块化规范
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // webpack 执行环境:development | production(默认开启 tree-shaking)
    mode: 'development',

    // 入口:可配置字符串,数组,对象
    entry: {
        main: './src/index.ts'
    },

    // 出口
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    // webpack打包流程:entry(入口) -> module(模块) -> chunk(代码块) -> async chunk -> async chunk -> ... -> async chunk -> output(打包后的文件)
    module: {
        // 什么样的文件使用什么样的loader
        rules: [
            // 以css文件为例:`test`表示匹配规则是一个正则表达式,`use`表示使用哪些loader
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                ],
            },
            // js文件
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    caller: { target: 'web' }
                }
            }
        ]
    },

    // plugins 对打包的过程增强,后于loader执行.plugins使用时需要 new 关键字去调用插件中的apply方法,因此plugins中的元素都是对象.
    plugins: [
        // webpack内置的插件
        // new webpack.HotModuleReplacementPlugin()抽离css
        // 可以进行配置
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].css'
            }
        ),
        // 生成HTML文件
        new HTMLWebpackPlugin()
    ],

    // devtool: 'source-map', // source-map | eval-source-map | cheap-module-eval-source-map | cheap-module-source-map | eval-source-map | cheap-source-map | source-map
    // devtool: 'eval-source-map',
    // devtool: 'cheap-module-source-map',
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'eval-source-map',
    // devtool: 'cheap-source-map',
    devtool: false,
    // 重点看一下，有助于我们在导入包的时候省略后缀
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"],
    },
}