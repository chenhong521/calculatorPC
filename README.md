# 海华金融工具PC站

> A Vue.js project

## Build Setup

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
cnpm run dev

# build for production with minification
cnpm run build


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#src目录结构
src
|-- assets------------静态资源文件夹
|-- router------------路由文件夹
|-- components------------非路由组件文件夹
      |-- MyHeader---------------底部组件文件夹
      |-- myHeader.vue--------底部组件 vue
      |-- MyFooter---------------底部组件文件夹
      |-- myFooter.vue--------底部组件 vue
|-- pages-----------------路由组件文件夹
      |-- Home---------------首页组件文件夹
|-- App.vue---------------应用根组件 vue
|-- main.js---------------应用入口 js