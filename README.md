# insight

> ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 修改npm镜像到淘宝
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist




## 搭建框架

``` bash
# 安装 vue-cli 到全局，已经装过的机器可忽略
npm install -g vue-cli

# 使用vue-cli初始化项目
vue init webpack projectName

# 进入到项目目录
cd projectName

# 安装依赖
npm install

# 安装scss
npm install --save-dev node-sass
npm install --save-dev sass-loader

# 安装bootstrap
npm install jquery --save 
npm install bootstrap --save
npm install style-loader --save-dev  
npm install css-loader --save-dev  
npm install file-loader --save-dev

# 复制改项目的build文件覆盖你的新项目完成配置
# 这里的配置不一一细说

# serve with hot reload at localhost:8080
npm run dev