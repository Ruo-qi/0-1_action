# 从0到1搭建项目

## 初始化项目
`npm init -y` 创建一个npm包

## 依赖相关

### 项目构建的依赖
- 打包工具的选择:例如webpack、rollup、vite、EsBuild等;
  - webpack:
  - webpack-cli;
- 是否使用 TypeScript;
  - 解析ts使用 ts-loader、babel;
- eslint - 代码规范检查工具;
- husky - git钩子;

### 项目中使用的依赖

## 环境

### 一般项目分为开发环境和生产环境:

- 开发环境: 用于开发的环境`dev`;
- 生产环境: 用于生产环境`prod`|`build`;
* 在打包过程中`webpack` 只是在做代码的整合,代码的编译相关内容他不负责,由相关的loader|plugin完成.假设我们现在要将代码转换为低版本代码,就需要使用`polyfill`进行代码转换,`babel-loader`(babel和webpack的桥梁).

## 基础配置
- 首先我们考虑到我们暂时使用js,后续我们使用 Babel 进行处理.
- 样式文件的处理: 使用`style-loader`和`css-loader`进行处理,使用`css-loader`进行处理,使用`style-loader`将css文件注入到html中.使用`mini-css-extract-plugin`抽离压缩的css文件.

### js处理
- 使用`babel-loader`进行处理,使用`babel`进行代码转换;
- 需要新建文件`babel.config.js`,去配置babel.处理不同的逻辑可以使用不同的`plagin`.但是当我们需要处理的东西很多的时候,其实我们真实项目中需要转换到ES5的代码有很多,我们不可能针对每一个类型去特定的配置一些东西.所以可以借助 babel 提供我们的另一个包来处理 -- `预设(preset)`.但是preset所做的不仅只有合并 plugin,还有一些其他的优化.

### sourceMap
为了定位线上代码故障的,因为我们打完包构建的代码是混乱的,只有借助sourceMap才能定位到错误的代码.
> 线上sourceMap如何处理?
- 写一个 plugin ,将构建后的代码上传到我们的监控平台,删除sourceMap.例如:@sentry/core,@sentry/webpack-plugin
- 前端埋点 SDK,报错内容上报;
- 结合上传的sourceMap,定位到错误的代码.
- 

### ts处理
`@babel/preset-typescript`并且需要ts的配置文件`tsconfig.json`.

#### 生成ts配置文件
`tsc --init`

## React
因为typs不在React中,所以应该单独安装react-typescript.