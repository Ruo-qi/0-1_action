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